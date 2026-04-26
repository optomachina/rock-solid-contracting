export default function About() {
  const stats = [
    ["License", "ROC-XXXXXX (insured)"],
    ["Estimates", "Free, on-site"],
    ["Crew", "One, start to finish"],
    ["Based in", "Tucson + Phoenix, AZ"],
  ];

  return (
    <section id="about" className="border-t border-[var(--on-paper-line)] bg-caliche py-24 text-[var(--on-paper-text)]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[38fr_62fr]">
          <div>
            <p className="font-mono text-[13px] uppercase tracking-[0.18em] text-[var(--on-paper-muted)]">
              <span className="text-iron">§</span> About Rock Solid
            </p>
            <h2 className="fv-display mt-2 font-display text-[clamp(40px,5.2vw,76px)] font-bold leading-[1.02] text-[var(--on-paper-text)]">
              Local contractors who show up, follow through, and finish clean.
            </h2>
          </div>
          <div>
            <p className="text-[22px] leading-[1.6] text-[var(--on-paper-text)]">
              Rock Solid Contractors is a full-service home remodeling outfit
              based in southern Arizona. We serve Tucson, Phoenix, and the
              communities in between — bringing the same crew from first
              walk-through to final walk-through.
            </p>
            <p className="mt-5 text-[22px] leading-[1.6] text-[var(--on-paper-text)]">
              We built our name on outdoor living — pergolas, outdoor kitchens,
              stonework, pavers — and we bring that same detail-first approach
              inside, to kitchens, baths, and flooring.
            </p>
          </div>
        </div>
        <dl className="mt-16 border-t border-[var(--on-paper-line)]">
          {stats.map(([term, value]) => (
            <div
              key={term}
              className="grid gap-2 border-b border-[var(--on-paper-line)] py-5 md:grid-cols-[240px_1fr]"
            >
              <dt className="font-mono text-[13px] uppercase tracking-[0.14em] text-[var(--on-paper-muted)]">
                {term}
              </dt>
              <dd className="text-[22px] leading-[1.5] text-[var(--on-paper-text)]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        </div>
    </section>
  );
}
