import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const maxDuration = 30;

const MAX_FILES = 10;
const MAX_FILE_MB = 25;

const TO_EMAIL = process.env.ESTIMATE_TO_EMAIL ?? "contact@azrocksolid.com";
const FROM_EMAIL = process.env.ESTIMATE_FROM_EMAIL ?? "Rock Solid Estimates <onboarding@resend.dev>";

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const address = String(form.get("address") ?? "").trim();
  const service = String(form.get("service") ?? "").trim();
  const description = String(form.get("description") ?? "").trim();
  const preferredDate = String(form.get("preferredDate") ?? "").trim();
  const preferredTime = String(form.get("preferredTime") ?? "").trim();

  if (!name || !email || !phone || !service || !description || !preferredDate || !preferredTime) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
  }

  const files = form.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > MAX_FILES) {
    return NextResponse.json({ error: `Too many files (max ${MAX_FILES}).` }, { status: 400 });
  }
  for (const f of files) {
    if (f.size > MAX_FILE_MB * 1024 * 1024) {
      return NextResponse.json({ error: `"${f.name}" exceeds ${MAX_FILE_MB} MB.` }, { status: 400 });
    }
  }

  const submission = {
    receivedAt: new Date().toISOString(),
    name, email, phone, address, service, description, preferredDate, preferredTime,
    files: files.map((f) => ({ name: f.name, size: f.size, type: f.type })),
  };
  console.log("[estimate-request]", JSON.stringify(submission));

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[estimate-request] RESEND_API_KEY not set — skipping email send.");
    return NextResponse.json({ ok: true, emailed: false });
  }

  const resend = new Resend(apiKey);

  const attachments = await Promise.all(
    files.map(async (f) => ({
      filename: f.name,
      content: Buffer.from(await f.arrayBuffer()),
    })),
  );

  const subject = `New estimate request — ${name} (${service})`;
  const text = [
    `New estimate request from azrocksolid.com`,
    ``,
    `Name:        ${name}`,
    `Email:       ${email}`,
    `Phone:       ${phone}`,
    `Address:     ${address || "(not provided)"}`,
    `Service:     ${service}`,
    `Preferred:   ${preferredDate} — ${preferredTime}`,
    ``,
    `Description:`,
    description,
    ``,
    `Attachments: ${files.length ? files.map((f) => f.name).join(", ") : "none"}`,
  ].join("\n");

  const html = `
    <h2>New estimate request</h2>
    <table style="border-collapse:collapse;font-family:system-ui,sans-serif">
      <tr><td style="padding:4px 12px"><b>Name</b></td><td style="padding:4px 12px">${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px"><b>Email</b></td><td style="padding:4px 12px"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding:4px 12px"><b>Phone</b></td><td style="padding:4px 12px"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
      <tr><td style="padding:4px 12px"><b>Address</b></td><td style="padding:4px 12px">${escapeHtml(address) || "<i>(not provided)</i>"}</td></tr>
      <tr><td style="padding:4px 12px"><b>Service</b></td><td style="padding:4px 12px">${escapeHtml(service)}</td></tr>
      <tr><td style="padding:4px 12px"><b>Preferred</b></td><td style="padding:4px 12px">${escapeHtml(preferredDate)} — ${escapeHtml(preferredTime)}</td></tr>
    </table>
    <h3 style="font-family:system-ui,sans-serif;margin-top:20px">Project description</h3>
    <p style="font-family:system-ui,sans-serif;white-space:pre-wrap">${escapeHtml(description)}</p>
    <p style="font-family:system-ui,sans-serif;color:#666;font-size:12px">
      ${files.length ? `${files.length} attachment(s) included.` : "No attachments."}
    </p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      text,
      html,
      attachments: attachments.length ? attachments : undefined,
    });
    if (error) {
      console.error("[estimate-request] Resend error:", error);
      return NextResponse.json({ error: "Could not send email. Please call us directly." }, { status: 502 });
    }
  } catch (err) {
    console.error("[estimate-request] Resend threw:", err);
    return NextResponse.json({ error: "Could not send email. Please call us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, emailed: true });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
