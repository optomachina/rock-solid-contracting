import Image from "next/image";
import SectionLabel from "./SectionLabel";
import services from "@/data/services.json";

export default function Services() {
  return (
    <section id="services" className="border-t border-[var(--line)] bg-basalt py-24">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 md:grid-cols-[38fr_62fr] md:px-8">
        <SectionLabel marker="§04">Capabilities</SectionLabel>
        <div>
          <h2 className="fv-display font-display text-[clamp(40px,5.2vw,76px)] font-bold leading-[1.02] text-sand">
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
              <h3 className="fv-display font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.02] text-sand">
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
