export default function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-red)]">
              About Rock Solid
            </p>
            <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
              Local contractors who show up, follow through, and finish clean.
            </h2>
            <p className="mt-5 text-stone-600">
              Rock Solid Contractors is a full-service home remodeling outfit
              based in southern Arizona. We serve Tucson, Phoenix, and the
              communities in between — bringing the same crew from first walk-
              through to final walk-through.
            </p>
            <p className="mt-4 text-stone-600">
              We built our name on outdoor living — pergolas, outdoor kitchens,
              stonework, pavers — and we bring that same detail-first approach
              inside, to kitchens, baths, and flooring.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Stat number="100%" label="Licensed & insured" />
            <Stat number="Free" label="On-site estimates" />
            <Stat number="1" label="Crew, start to finish" />
            <Stat number="AZ" label="Locally owned" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
      <div className="text-3xl font-extrabold text-[var(--brand-red)]">
        {number}
      </div>
      <div className="mt-1 text-sm text-stone-600">{label}</div>
    </div>
  );
}
