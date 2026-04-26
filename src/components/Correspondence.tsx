import Image from "next/image";

type CorrespondenceProps = {
  fileNumber?: string;
  project?: string;
  address?: string;
  buildDates?: string;
  budget?: string;
  leadTime?: string;
  crew?: string;
};

export default function Correspondence({
  fileNumber = "042",
  project = "Foothills Patio Rebuild",
  address = "Tucson, AZ 85718",
  buildDates = "2025-09-12 → 2025-11-04",
  budget = "$58,400 — $62,800",
  leadTime = "3 weeks",
  crew = "4 + 2 subs",
}: CorrespondenceProps) {
  const details = [
    ["Project", project],
    ["Address", address],
    ["Build dates", buildDates],
    ["Budget", budget],
    ["Lead time", leadTime],
    ["Crew", crew],
  ];

  return (
    <section className="border-t border-[var(--on-paper-line)] bg-caliche py-24 text-[var(--on-paper-text)]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 md:grid-cols-[38fr_62fr] md:gap-16 md:px-8">
        <div className="font-mono text-[13px] uppercase tracking-[0.12em] text-[var(--on-paper-muted)]">
          <span className="mb-2 block">Correspondence</span>
          <strong className="fv-display block font-display text-[64px] font-bold leading-none tracking-normal text-iron">
            FILE №{fileNumber}
          </strong>
          <dl className="mt-7 grid grid-cols-[max-content_1fr] gap-x-5 gap-y-3 text-[14px] text-[var(--on-paper-text)]">
            {details.map(([term, value]) => (
              <div key={term} className="contents">
                <dt className="text-[var(--on-paper-muted)]">{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <figure className="relative mt-7 h-60 overflow-hidden bg-basalt">
            <Image
              src="/gallery/gallery-05.png"
              alt="Pergola build in progress with stone columns"
              fill
              loading="eager"
              sizes="(max-width: 900px) 100vw, 38vw"
              className="object-cover object-[54%_44%] contrast-110 saturate-[0.86] sepia-[0.12]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-basalt/80 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-4 bottom-3 font-mono text-[11px] uppercase tracking-[0.16em] text-sand">
              <span className="mr-2 text-iron">FIG. 02</span>
              After, Foothills project — 14′×22′ pergola, engineered stone
              columns, mesquite-stained beam frame
            </figcaption>
          </figure>
        </div>
        <div className="text-[23px] leading-[1.55] text-[var(--on-paper-text)]">
          <p className="mb-6 max-w-[52ch]">
            The patio cover blew off in the August monsoon. We had a wedding in
            the yard six weeks later. I called four contractors. Three said it
            couldn&apos;t be done. Rock Solid showed up the next morning with a
            tape measure and a sketchbook.
          </p>
          <blockquote className="fv-italic my-9 max-w-[42ch] border-l-2 border-iron pl-7 font-display text-[34px] italic leading-[1.3] text-iron">
            “They re-poured the footings until they were happy. We weren&apos;t
            even watching by then. They just knew.”
          </blockquote>
          <p className="mb-6 max-w-[52ch]">
            The new pergola is 14&apos;×22&apos; with engineered stone columns and a
            mesquite-stained beam frame. The wedding photos look like a
            magazine shoot. Two monsoon seasons later, nothing has moved.
          </p>
          <div className="fv-italic mt-11 font-display text-[32px] italic">
            — Patricia &amp; Daniel Reyes
          </div>
          <div className="mt-2 font-mono text-[13px] uppercase tracking-[0.1em] text-[var(--on-paper-muted)]">
            Client · Tucson Foothills · 2025
          </div>
        </div>
      </div>
    </section>
  );
}
