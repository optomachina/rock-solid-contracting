import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionLabel from "@/components/SectionLabel";

type LegalLayoutProps = Readonly<{
  eyebrow: string;
  title: React.ReactNode;
  effectiveDate: string;
  children: React.ReactNode;
}>;

export function LegalLayout({ eyebrow, title, effectiveDate, children }: LegalLayoutProps) {
  return (
    <>
      <Header />
      <main>
        <article className="border-t border-[var(--on-paper-line)] bg-caliche py-24 text-[var(--on-paper-text)]">
          <div className="mx-auto max-w-[860px] px-4 md:px-8">
            <SectionLabel tone="paper" marker="§">{eyebrow}</SectionLabel>
            <h1 className="fv-display mt-2 font-display text-[clamp(40px,5.2vw,76px)] font-bold leading-[1.04] text-[var(--on-paper-text)]">
              {title}
            </h1>
            <p className="mt-4 font-mono text-[13px] uppercase tracking-[0.14em] text-[var(--on-paper-muted)]">
              Effective {effectiveDate}
            </p>
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <section className="mt-12 border-t border-[var(--on-paper-line)] pt-10">
      <h2 className="fv-display-sm font-display text-[28px] font-bold leading-[1.15] text-[var(--on-paper-text)] md:text-[34px]">
        {title}
      </h2>
      <div className="mt-5 space-y-5 text-[19px] leading-[1.65] text-[var(--on-paper-text)]">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ul className="ml-5 list-disc space-y-2 marker:text-iron">{children}</ul>
  );
}

export function LegalLink({
  href,
  children,
}: Readonly<{ href: string; children: React.ReactNode }>) {
  return (
    <a
      href={href}
      className="underline decoration-iron underline-offset-4 transition hover:text-iron"
    >
      {children}
    </a>
  );
}
