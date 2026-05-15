import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const legalLinkClassName =
  "text-[var(--brand-red)] underline underline-offset-4 hover:text-[var(--brand-red-dark)]";

export function LegalPage({
  eyebrow,
  title,
  effectiveDate,
  children,
}: Readonly<{
  eyebrow: string;
  title: string;
  effectiveDate: string;
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-red)]">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-stone-900 md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-stone-500">
          Effective date: {effectiveDate}
        </p>
        {children}
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: Readonly<{
  title: string;
  children: ReactNode;
}>) {
  return (
    <section className="mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-stone-900">{title}</h2>
      {children}
    </section>
  );
}

export function LegalParagraph({ children }: Readonly<{ children: ReactNode }>) {
  return <p className="leading-7 text-stone-700">{children}</p>;
}

export function LegalList({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ul className="list-disc space-y-3 pl-6 leading-7 text-stone-700">
      {children}
    </ul>
  );
}
