import EstimateForm from "./EstimateForm";
import SectionLabel from "./SectionLabel";

export default function EstimateSection() {
  return (
    <section id="estimate" className="border-t border-[var(--line)] bg-basalt py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div>
          <SectionLabel marker="§05">Estimate</SectionLabel>
          <h2 className="fv-display mt-2 max-w-[18ch] font-display text-[clamp(56px,7.4vw,110px)] font-bold leading-[1.02] text-sand">
            Tell us what you&apos;re <em className="fv-italic italic text-iron">building.</em>
          </h2>
          <p className="mt-6 max-w-[56ch] text-[19px] leading-[1.6] text-sand">
            Tell us about the project, pick a time that works, and upload
            photos if you have them. We&apos;ll confirm within one business day.
          </p>
        </div>
        <div className="mt-10 max-w-3xl">
          <EstimateForm />
        </div>
      </div>
    </section>
  );
}
