import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Image
        src="/gallery/gallery-02.png"
        alt="Covered outdoor living space with stone columns and pool"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-stone-900/60 to-stone-900/30" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-300">
            Tucson • Phoenix • Southern Arizona
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Remodels built to last. Outdoor living done right.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-stone-200">
            Kitchens, bathrooms, flooring, and the pergolas, outdoor kitchens,
            and stonework that make an Arizona backyard actually livable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#estimate" className="btn-primary">
              Request a Free Estimate
            </a>
            <a href="#work" className="btn-secondary">
              See Our Work
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-stone-200">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              Licensed & insured
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              Free on-site estimates
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              Local, family-owned
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
