export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-basalt text-sand">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-[30px] font-bold uppercase tracking-normal text-sand [font-variation-settings:'opsz'_60,'wght'_700,'SOFT'_30]">
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
          <div>
            <h3 className="font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-shadow">
              Services
            </h3>
            <ul className="mt-5 space-y-2 text-[19px] leading-[1.5]">
              <li>Outdoor Living</li>
              <li>Kitchens</li>
              <li>Bathrooms</li>
              <li>Flooring</li>
              <li>Whole-Home</li>
              <li>General Contracting</li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-shadow">
              Service Area
            </h3>
            <ul className="mt-5 space-y-2 text-[19px] leading-[1.5]">
              <li>Tucson</li>
              <li>Phoenix</li>
              <li>Marana, Oro Valley</li>
              <li>Vail, Sahuarita</li>
              <li>Casa Grande</li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-shadow">
              Contact
            </h3>
            <ul className="mt-5 space-y-2 text-[19px] leading-[1.5]">
              <li>
                <a href="mailto:contact@azrocksolid.com" className="transition hover:text-iron">
                  contact@azrocksolid.com
                </a>
              </li>
              <li>
                <a href="tel:+15209108898" className="transition hover:text-iron">
                  (520) 910-8898
                </a>
              </li>
              <li className="text-shadow">LIC #ROC-XXXXXX</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-[var(--line)] pt-8 font-mono text-[13px] uppercase tracking-[0.14em] text-shadow">
          <span>© {new Date().getFullYear()} Rock Solid Contractors · All rights reserved</span>
          <span>Set in Fraunces · Newsreader · JetBrains Mono</span>
        </div>
      </div>
    </footer>
  );
}
