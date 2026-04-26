import Image from "next/image";

const services = [
  {
    title: "Outdoor Living",
    description:
      "Pergolas, ramadas, outdoor kitchens, fireplaces, pavers, and stonework. Our specialty.",
    features: ["Pergolas & ramadas", "Outdoor kitchens & BBQs", "Pavers & stonework", "Fire features"],
    image: "/gallery/gallery-05.png",
    position: "object-[55%_45%]",
  },
  {
    title: "Kitchens",
    description:
      "Full tear-outs to refreshes. Cabinets, countertops, tile, appliances, lighting.",
    features: ["Custom cabinetry", "Granite & quartz tops", "Backsplash & tile", "Layout redesign"],
    image: "/gallery/gallery-04.png",
    position: "object-[50%_50%]",
  },
  {
    title: "Bathrooms",
    description:
      "Walk-in showers, soaking tubs, vanities, and tilework that holds up.",
    features: ["Walk-in showers", "Tub & shower tile", "Vanities & countertops", "Fixtures & lighting"],
    image: "/gallery/gallery-03.png",
    position: "object-[52%_45%]",
  },
  {
    title: "Flooring",
    description:
      "Tile, LVP, hardwood, and refinishing across the whole house.",
    features: ["Tile & stone", "LVP & engineered wood", "Hardwood refinishing", "Subfloor repair"],
    image: "/gallery/gallery-07.png",
    position: "object-[48%_54%]",
  },
  {
    title: "Whole-Home",
    description:
      "Gut rehabs, additions, and full remodels managed end-to-end.",
    features: ["Additions", "Open-concept conversions", "Structural work", "Permitting"],
    image: "/gallery/gallery-08.png",
    position: "object-[50%_50%]",
  },
  {
    title: "General Contracting",
    description:
      "Sheds, concrete, site work, and custom builds. If you can dream it up, ask.",
    features: ["Sheds & structures", "Concrete & stamping", "Site prep", "Custom projects"],
    image: "/gallery/gallery-09.png",
    position: "object-[50%_50%]",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-[var(--line)] bg-basalt py-24">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 md:grid-cols-[38fr_62fr] md:px-8">
        <div className="font-mono text-[13px] uppercase tracking-[0.18em] text-shadow">
          <span className="text-iron">§04</span> &nbsp; Capabilities
        </div>
        <div>
          <h2 className="font-display text-[clamp(40px,5.2vw,76px)] font-bold leading-[1.02] text-sand [font-variation-settings:'opsz'_144,'wght'_700,'SOFT'_30]">
            What we build.
          </h2>
          <p className="mt-5 max-w-[56ch] text-[20px] leading-[1.6] text-sand">
            Six lines of work, ordered by frequency. One crew, one contract,
            and the finish discipline to make exterior and interior work hold.
          </p>
        </div>
        <div className="col-span-full mt-4 border-t border-[var(--line)]">
          {services.map((s, index) => (
            <div
              key={s.title}
              className="group grid grid-cols-[50px_1fr] items-center gap-5 border-b border-[var(--line)] py-7 transition hover:bg-iron/5 md:grid-cols-[60px_1fr_auto_200px] md:gap-8"
            >
              <span className="font-mono text-[13px] tracking-[0.08em] text-iron">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.02] text-sand [font-variation-settings:'opsz'_144,'wght'_700,'SOFT'_30]">
                {s.title}
              </h3>
              <p className="hidden max-w-[36ch] text-[19px] italic leading-[1.55] text-shadow md:block">
                {s.description}
              </p>
              <div className="relative hidden h-16 w-[200px] overflow-hidden opacity-0 transition duration-300 group-hover:opacity-100 md:block">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="200px"
                  className={`object-cover ${s.position} contrast-110 saturate-[0.86] sepia-[0.12]`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
