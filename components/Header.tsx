"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/course", label: "Platz" },
  { href: "/gastronomie", label: "Gastronomie" },
  { href: "/golfschule", label: "Golfschule" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-gc-gold/30 bg-gc-dark-green/98 backdrop-blur-md shadow-lg shadow-black/10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo-Platzhalter */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gc-gold/20 text-gc-gold">
            <span className="text-lg font-bold">GW</span>
          </div>
          <span className="hidden font-semibold text-white sm:inline">
            Golfclub Waldegg-Wiggensbach
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-gc-gold/20 hover:text-gc-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Platz-Status-Ampel (Grün) */}
        <div className="flex items-center gap-2 rounded-full border border-gc-gold/30 bg-gc-dark-green px-3 py-1.5">
          <span
            className="h-2.5 w-2.5 rounded-full bg-gc-status-green shadow-[0_0_8px_rgba(34,197,94,0.6)]"
            title="Platz frei bespielbar"
            aria-label="Platzstatus: Grün"
          />
          <span className="hidden text-xs font-medium text-white/90 sm:inline">
            Platz frei
          </span>
        </div>
      </div>
    </header>
  );
}
