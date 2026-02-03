"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Cart-Status für die drei Kurse
const cartStatus = [
  { course: "A", status: "green" },
  { course: "B", status: "green" },
  { course: "C", status: "red" },
];

const navigationItems = [
  {
    label: "Der Platz",
    href: "/course",
    children: null,
  },
  {
    label: "Spielbetrieb",
    href: null,
    children: [
      { href: "/gaeste", label: "Gäste & Greenfee" },
      { href: "/turniere", label: "Turnierkalender" },
    ],
  },
  {
    label: "Golfschule",
    href: null,
    children: [
      { href: "/golfschule", label: "Unser Team" },
      { href: "/kurse", label: "Kursangebot" },
    ],
  },
  {
    label: "Der Club",
    href: null,
    children: [
      { href: "/aktuelles", label: "Aktuelles" },
      { href: "/club", label: "Clubinfos" },
      { href: "/gastronomie", label: "Gastronomie" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top-Bar: Dunkelgrün, schmal, rechtsbündig */}
      <div className="bg-[#1b3b2a]">
        <div className="mx-auto flex max-w-full items-center justify-end gap-4 px-4 py-2 sm:px-6 lg:px-12">
          {/* Cart-Status-Anzeige für die drei Kurse */}
          <div className="flex items-center gap-3 sm:gap-4">
            {cartStatus.map(({ course, status }) => (
              <div
                key={course}
                className="flex items-center gap-1.5 text-xs text-white/90"
                title={`Kurs ${course}: Carts ${status === "green" ? "erlaubt" : "nicht erlaubt"}`}
              >
                {/* Golf-Cart Icon */}
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {/* Körper (Chassis) */}
                  <rect x="4" y="10" width="16" height="5" rx="0.5" strokeWidth="1.5" />
                  {/* Windschutzscheibe */}
                  <path d="M6 10 L6 7 L18 7 L18 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Dachrahmen */}
                  <path d="M6 7 L12 4 L18 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Vorderrad */}
                  <circle cx="8" cy="17" r="2.5" strokeWidth="1.5" />
                  <circle cx="8" cy="17" r="1" fill="currentColor" />
                  {/* Hinterrad */}
                  <circle cx="16" cy="17" r="2.5" strokeWidth="1.5" />
                  <circle cx="16" cy="17" r="1" fill="currentColor" />
                  {/* Lenkrad */}
                  <circle cx="16" cy="12" r="1.5" strokeWidth="1.2" />
                  {/* Sitz */}
                  <rect x="6" y="11" width="6" height="3" rx="0.3" strokeWidth="1" />
                </svg>
                <span className="hidden sm:inline">Kurs {course}</span>
                {/* Status-Punkt */}
                <span
                  className={`h-2 w-2 rounded-full ${
                    status === "green"
                      ? "bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.8)]"
                      : "bg-red-500"
                  }`}
                  aria-label={`Status: ${status === "green" ? "Grün" : "Rot"}`}
                />
              </div>
            ))}
          </div>
          {/* Platz-Status-Ampel (Grün) */}
          <div className="flex items-center gap-2 rounded-full border border-gc-gold/30 bg-gc-dark-green px-2 py-1 sm:px-3">
            <span
              className="h-2 w-2 rounded-full bg-gc-status-green shadow-[0_0_6px_rgba(34,197,94,0.6)]"
              title="Platz frei bespielbar"
              aria-label="Platzstatus: Grün"
            />
            <span className="hidden text-xs font-medium text-white/90 sm:inline">
              Platz frei
            </span>
          </div>
        </div>
      </div>

      {/* Main-Navigation: Weiß/Creme, Logo links, Navigation rechts */}
      <div className="bg-[#faf9f6] border-b border-gc-gold/20">
        <div className="mx-auto flex max-w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Golfclub Waldegg-Wiggensbach Logo"
              width={80}
              height={80}
              className="h-16 w-auto sm:h-20"
              priority
            />
            <span className="hidden text-lg font-semibold text-gc-dark-green sm:inline">
              Golfclub Waldegg-Wiggensbach
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-base font-medium text-gc-dark-green transition hover:text-gc-gold"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      className="text-base font-medium text-gc-dark-green transition hover:text-gc-gold flex items-center gap-1"
                    >
                      {item.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-lg shadow-xl border border-gc-gold/20 overflow-hidden">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-gc-dark-green hover:bg-gc-gold/10 hover:text-gc-gold transition"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
            {/* Kontakt Button */}
            <Link
              href="/kontakt"
              className="rounded-lg bg-gc-gold px-5 py-2.5 text-base font-medium text-white transition hover:bg-gc-gold-light shadow-md"
            >
              Kontakt
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gc-dark-green"
            aria-label="Menü öffnen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gc-gold/20 bg-white">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-gc-dark-green rounded-lg hover:bg-gc-gold/10 transition"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div>
                      <div className="px-4 py-3 text-base font-medium text-gc-dark-green">
                        {item.label}
                      </div>
                      <div className="pl-6 space-y-1">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-gc-dark-green/80 rounded-lg hover:bg-gc-gold/10 hover:text-gc-gold transition"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-4 px-4 py-3 text-center rounded-lg bg-gc-gold text-base font-medium text-white transition hover:bg-gc-gold-light"
              >
                Kontakt
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
