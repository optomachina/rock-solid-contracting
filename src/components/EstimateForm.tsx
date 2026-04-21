"use client";

import { useState, type FormEvent } from "react";

const SERVICE_OPTIONS = [
  "Outdoor Living (pergola, kitchen, stonework)",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Flooring",
  "Whole-Home Renovation",
  "Other / General Contracting",
];

const MAX_FILES = 10;
const MAX_FILE_MB = 25;

type Status = "idle" | "submitting" | "success" | "error";

export default function EstimateForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const today = new Date().toISOString().split("T")[0];

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? []);
    const tooBig = selected.find((f) => f.size > MAX_FILE_MB * 1024 * 1024);
    if (tooBig) {
      setErrorMsg(`"${tooBig.name}" exceeds ${MAX_FILE_MB} MB. Please compress or remove it.`);
      e.target.value = "";
      return;
    }
    if (selected.length > MAX_FILES) {
      setErrorMsg(`Please select up to ${MAX_FILES} files.`);
      e.target.value = "";
      return;
    }
    setErrorMsg("");
    setFiles(selected);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.delete("files");
    files.forEach((f) => fd.append("files", f));

    try {
      const res = await fetch("/api/estimate", { method: "POST", body: fd });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setStatus("success");
      form.reset();
      setFiles([]);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-8 text-center">
        <h3 className="text-2xl font-bold text-emerald-900">Thanks — we got it.</h3>
        <p className="mt-3 text-emerald-800">
          We&apos;ll reach out within one business day to confirm your estimate
          appointment. Keep an eye on your email.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 btn-secondary"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" encType="multipart/form-data">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input"
          />
        </Field>
        <Field label="Phone" htmlFor="phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(520) 555-0100"
            className="input"
          />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input"
          />
        </Field>
        <Field label="Project address or city" htmlFor="address">
          <input
            id="address"
            name="address"
            type="text"
            autoComplete="street-address"
            placeholder="Tucson, AZ"
            className="input"
          />
        </Field>
      </div>

      <Field label="Service needed" htmlFor="service" required>
        <select id="service" name="service" required className="input">
          <option value="">Select a service…</option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </Field>

      <Field label="Tell us about the project" htmlFor="description" required>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="Scope, rough size, materials you're considering, anything we should know…"
          className="input"
        />
      </Field>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Preferred date" htmlFor="preferredDate" required>
          <input
            id="preferredDate"
            name="preferredDate"
            type="date"
            min={today}
            required
            className="input"
          />
        </Field>
        <Field label="Preferred time" htmlFor="preferredTime" required>
          <select id="preferredTime" name="preferredTime" required className="input">
            <option value="">Select a window…</option>
            <option>Morning (8 AM – 11 AM)</option>
            <option>Midday (11 AM – 2 PM)</option>
            <option>Afternoon (2 PM – 5 PM)</option>
          </select>
        </Field>
      </div>

      <Field label="Photos or video of the project area" htmlFor="files">
        <input
          id="files"
          name="files"
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={onFileChange}
          className="block w-full text-sm text-stone-600 file:mr-4 file:rounded-md file:border-0 file:bg-[var(--brand-red)] file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-[var(--brand-red-dark)]"
        />
        <p className="mt-1 text-xs text-stone-500">
          Up to {MAX_FILES} files, {MAX_FILE_MB} MB each. Helpful but optional.
        </p>
        {files.length > 0 && (
          <ul className="mt-2 text-xs text-stone-600">
            {files.map((f) => (
              <li key={f.name}>
                • {f.name} ({(f.size / 1024 / 1024).toFixed(1)} MB)
              </li>
            ))}
          </ul>
        )}
      </Field>

      {errorMsg && (
        <p className="rounded-md bg-red-50 p-3 text-sm text-red-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full md:w-auto disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request Estimate"}
      </button>
      <p className="text-xs text-stone-500">
        We&apos;ll respond within one business day. No spam — ever.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1 block text-sm font-medium text-stone-800">
        {label}
        {required && <span className="ml-0.5 text-[var(--brand-red)]">*</span>}
      </span>
      {children}
    </label>
  );
}
