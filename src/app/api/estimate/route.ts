import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 30;

const MAX_FILES = 10;
const MAX_FILE_MB = 25;

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

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
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
    name,
    email,
    phone,
    address,
    service,
    description,
    preferredDate,
    preferredTime,
    files: files.map((f) => ({ name: f.name, size: f.size, type: f.type })),
  };

  // TODO: wire Resend for email delivery to contact@azrocksolid.com and Vercel Blob for file storage.
  console.log("[estimate-request]", JSON.stringify(submission));

  return NextResponse.json({ ok: true });
}
