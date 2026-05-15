const services = [
  [
    "Outdoor Living",
    "Pergolas, ramadas, outdoor kitchens, fireplaces, pavers, and stonework. Our specialty.",
    "Pergolas & ramadas|Outdoor kitchens & BBQs|Pavers & stonework|Fire features",
  ],
  [
    "Kitchen Remodeling",
    "Full tear-outs to refreshes. Cabinets, countertops, tile, appliances, lighting.",
    "Custom cabinetry|Granite & quartz tops|Backsplash & tile|Layout redesign",
  ],
  [
    "Bathroom Remodeling",
    "Walk-in showers, soaking tubs, vanities, and tilework that holds up.",
    "Walk-in showers|Tub & shower tile|Vanities & countertops|Fixtures & lighting",
  ],
  [
    "Flooring",
    "Tile, LVP, hardwood, and refinishing across the whole house.",
    "Tile & stone|LVP & engineered wood|Hardwood refinishing|Subfloor repair",
  ],
  [
    "Whole-Home Renovation",
    "Gut rehabs, additions, and full remodels managed end-to-end.",
    "Additions|Open-concept conversions|Structural work|Permitting",
  ],
  [
    "General Contracting",
    "Sheds, concrete, site work, and custom builds. If you can dream it up, ask.",
    "Sheds & structures|Concrete & stamping|Site prep|Custom projects",
  ],
] as const;

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-red)]">
            What we do
          </p>
          <h2 className="mt-2 text-3xl font-bold text-stone-900 md:text-4xl">
            Full-service remodeling across southern Arizona
          </h2>
          <p className="mt-4 text-stone-600">
            One crew, one contract. We handle the whole project so you aren&apos;t
            chasing five different tradesmen.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, description, features]) => (
            <div
              key={title}
              className="rounded-lg border border-stone-200 bg-stone-50 p-6 transition hover:border-[var(--brand-red)] hover:shadow-md"
            >
              <h3 className="text-xl font-bold text-stone-900">{title}</h3>
              <p className="mt-2 text-stone-600">{description}</p>
              <ul className="mt-4 space-y-1 text-sm text-stone-700">
                {features.split("|").map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" />{" "}
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
