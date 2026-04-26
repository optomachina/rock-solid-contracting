import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="bg-basalt">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-8 border-t border-[var(--line)] py-16 md:grid-cols-[38fr_62fr] md:gap-12 md:py-24">
          <div className="flex flex-col">
            <div className="mb-9 flex flex-wrap gap-x-7 gap-y-3 border-b border-[var(--line)] pb-5 text-meta tracking-[0.1em] text-shadow">
              <span className="text-iron">Project №247</span>
              <span>Foothills · Tucson</span>
              <span>Stone + Timber</span>
            </div>
            <h1 className="fv-display text-balance font-display text-[clamp(56px,7.4vw,108px)] font-bold leading-none tracking-normal text-sand">
              Remodels built to last. <em className="fv-italic font-display italic text-iron">Outdoor living</em> done right.
            </h1>
            <p className="fv-italic -mt-2 mb-7 mt-7 max-w-[36ch] font-display text-[21px] italic leading-snug text-shadow">
              Stone, timber, time.
            </p>
            <p className="max-w-[34ch] text-[22px] leading-[1.55] text-sand">
            Kitchens, bathrooms, flooring, and the pergolas, outdoor kitchens,
            and stonework that make an Arizona backyard actually livable.
          </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="#estimate" className="btn-primary px-7 py-4 text-[15px]">
                Request a Free Estimate →
              </a>
              <a href="#work" className="btn-ghost">
                See Our Work <span className="text-iron">↘</span>
              </a>
            </div>
          </div>
          <figure className="relative min-h-[460px] overflow-hidden bg-surface md:min-h-[560px]">
            <Image
              src="/gallery/gallery-02.png"
              alt="Covered outdoor living space with stone columns and timber beams"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 62vw"
              className="object-cover object-[58%_42%] contrast-110 saturate-[0.86] sepia-[0.12]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-basalt/70 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 font-mono text-[11px] uppercase tracking-[0.18em] text-sand">
              <span className="mr-3 text-iron">FIG. 01</span>
              Stone pillar, Foothills project — detail of timber beam joinery,
              shot March 2026
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
