import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Rock Solid Contractors logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="leading-tight">
                <div className="font-bold text-white">Rock Solid</div>
                <div className="text-xs uppercase tracking-wider text-stone-400">
                  Contractors
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-stone-400">
              Full-service home remodeling across southern Arizona.
            </p>
            <p className="mt-4 text-sm leading-6 text-stone-400">
              3808 E 32nd St
              <br />
              Tucson, AZ 85713
              <br />
              LIC #ROC-XXXXXX
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="mailto:contact@azrocksolid.com" className="hover:text-white">
                  contact@azrocksolid.com
                </a>
              </li>
              <li>
                <a href="tel:+15205579161" className="hover:text-white">
                  (520) 557-9161
                </a>
              </li>
              <li className="text-stone-400">
                Tucson, AZ — serving southern Arizona
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Service Area
            </h3>
            <ul className="mt-4 space-y-1 text-sm text-stone-400">
              <li>Tucson & Oro Valley</li>
              <li>Phoenix & Scottsdale</li>
              <li>Marana, Vail, Sahuarita</li>
              <li>And the rest of southern Arizona</li>
            </ul>
            <div className="mt-5 flex gap-4 text-sm">
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-stone-800 pt-6 text-xs text-stone-500">
          © {new Date().getFullYear()} Rock Solid Contractors. All rights
          reserved. — azrocksolid.com
        </div>
      </div>
    </footer>
  );
}
