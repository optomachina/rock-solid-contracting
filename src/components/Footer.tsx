type Item = { key: string; node: React.ReactNode };
type Column = {
  heading: string;
  items: Item[];
};

const text = (s: string): Item => ({ key: s, node: s });

const columns: Column[] = [
  {
    heading: "Services",
    items: [
      "Outdoor Living",
      "Kitchens",
      "Bathrooms",
      "Flooring",
      "Whole-Home",
      "General Contracting",
    ].map(text),
  },
  {
    heading: "Service Area",
    items: ["Tucson", "Phoenix", "Marana, Oro Valley", "Vail, Sahuarita", "Casa Grande"].map(text),
  },
  {
    heading: "Contact",
    items: [
      {
        key: "email",
        node: (
          <a href="mailto:contact@azrocksolid.com" className="transition hover:text-iron">
            contact@azrocksolid.com
          </a>
        ),
      },
      {
        key: "phone",
        node: (
          <a href="tel:+15209108898" className="transition hover:text-iron">
            (520) 910-8898
          </a>
        ),
      },
      { key: "lic", node: <span className="text-shadow">LIC #ROC-XXXXXX</span> },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-basalt text-sand">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex flex-col leading-none">
              <span className="fv-display-wordmark font-display text-[30px] font-bold uppercase tracking-normal text-sand">
                Rock Solid
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-shadow">
                Contractors · TUC + PHX
              </span>
            </div>
            <p className="mt-4 max-w-[28ch] text-[19px] leading-[1.5] text-shadow">
              Licensed and insured general contractor. Building in southern
              Arizona since 2008.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-meta font-semibold tracking-[0.14em] text-shadow">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-2 text-[19px] leading-[1.5]">
                {col.items.map((item) => (
                  <li key={item.key}>{item.node}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-meta mt-12 flex flex-wrap justify-between gap-4 border-t border-[var(--line)] pt-8 tracking-[0.14em] text-shadow">
          <span>© {new Date().getFullYear()} Rock Solid Contractors · All rights reserved</span>
          <span>Set in Fraunces · Newsreader · JetBrains Mono</span>
        </div>
      </div>
    </footer>
  );
}
