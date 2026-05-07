import Link from "next/link";
import SectionLabel from "./SectionLabel";

export default function EstimateSection() {
  return (
    <section id="estimate" className="border-t border-[var(--line)] bg-basalt py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[38fr_62fr]">
          <div>
            <SectionLabel marker="§05">Estimate</SectionLabel>
            <h2 className="fv-display mt-2 font-display text-[clamp(56px,7.4vw,110px)] font-bold leading-[1.02] text-sand">
              Tell us what you&apos;re <em className="fv-italic italic text-iron">building.</em>
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-[52ch] text-[22px] leading-[1.6] text-sand">
              A short form — name, project, photos if you have them, a time
              that works for a free on-site visit. We&apos;ll confirm within one
              business day.
            </p>
            <p className="mt-4 max-w-[52ch] text-[19px] leading-[1.6] text-shadow">
              Prefer to type fewer fields? Use the chat in the corner of this
              page to get a same-day reply during business hours.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="/estimate" className="btn-primary px-7 py-4 text-[15px]">
                Request a Free Estimate →
              </Link>
              <a href="tel:+15209108898" className="btn-ghost">
                Or call (520) 910-8898 <span className="text-iron">↘</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
