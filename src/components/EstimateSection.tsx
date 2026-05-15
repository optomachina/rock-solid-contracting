import EstimateForm from "./EstimateForm";

export default function EstimateSection() {
  return (
    <section id="estimate" className="bg-stone-900 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
            Free, no-pressure estimates
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            Schedule your estimate
          </h2>
          <p className="mt-4 text-stone-300">
            Tell us about the project, pick a time that works, and upload
            photos if you have them. We&apos;ll confirm within one business day.
          </p>
        </div>
        <div className="mt-10 rounded-xl bg-white p-6 shadow-lg md:p-10">
          <EstimateForm />
        </div>
      </div>
    </section>
  );
}
