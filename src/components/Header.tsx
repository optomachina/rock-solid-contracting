import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Rock Solid Contractors logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
            priority
          />
          <div className="leading-tight">
            <div className="font-bold text-stone-900">Rock Solid</div>
            <div className="text-xs uppercase tracking-wider text-stone-500">
              Contractors
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-stone-700 md:flex">
          <Link href="/#services" className="hover:text-[var(--brand-red)]">Services</Link>
          <Link href="/#work" className="hover:text-[var(--brand-red)]">Our Work</Link>
          <Link href="/#about" className="hover:text-[var(--brand-red)]">About</Link>
          <Link href="/estimate" className="btn-primary !px-4 !py-2 text-sm">
            Free Estimate
          </Link>
        </nav>
        <Link href="/estimate" className="btn-primary !px-3 !py-2 text-sm md:hidden">
          Estimate
        </Link>
      </div>
    </header>
  );
}
