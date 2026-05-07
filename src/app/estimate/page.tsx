import type { Metadata } from "next";
import EstimateForm from "@/components/EstimateForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Request a Free Estimate — Rock Solid Contractors",
  description:
    "Tell us about your remodel or outdoor living project. We'll confirm within one business day.",
};

export default function EstimatePage() {
  return (
    <>
      <Header />
      <main>
        <section className="border-t border-[var(--line)] bg-basalt py-24">
          <div className="mx-auto max-w-[1440px] px-4 md:px-8">
            <div>
              <SectionLabel marker="§05">Estimate</SectionLabel>
              <h1 className="fv-display mt-2 max-w-[18ch] font-display text-[clamp(56px,7.4vw,110px)] font-bold leading-[1.02] text-sand">
                Tell us what you&apos;re <em className="fv-italic italic text-iron">building.</em>
              </h1>
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
      </main>
      <Footer />
    </>
  );
}
