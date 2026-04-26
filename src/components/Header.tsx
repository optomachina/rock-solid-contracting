import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-basalt/95 backdrop-blur">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-shadow md:text-[13px]">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>
              <span className="text-iron">●</span> TUC + PHX
            </span>
            <span>LIC #ROC-XXXXXX</span>
            <span>EST. 2008</span>
          </div>
          <div>Stone, timber, time</div>
        </div>
        <div className="flex items-center justify-between py-5">
          <Link href="#top" className="flex flex-col leading-none text-sand">
            <span className="font-display text-[30px] font-bold uppercase tracking-normal [font-variation-settings:'opsz'_60,'wght'_700,'SOFT'_30]">
              Rock Solid
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-shadow">
              Contractors
            </span>
        </Link>
          <nav className="hidden items-center gap-7 font-mono text-[13px] uppercase tracking-[0.1em] text-sand md:flex">
            <a href="#services" className="transition hover:text-iron">Services</a>
            <a href="#work" className="transition hover:text-iron">Our Work</a>
            <a href="#about" className="transition hover:text-iron">About</a>
            <a href="#estimate" className="btn-primary !px-4 !py-2">
              Free Estimate →
            </a>
          </nav>
          <a href="#estimate" className="btn-primary !px-3 !py-2 md:hidden">
            Estimate →
          </a>
        </div>
      </div>
    </header>
  );
}
