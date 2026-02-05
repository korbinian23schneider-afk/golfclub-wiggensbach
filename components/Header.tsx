"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useContact } from "@/app/context/contact-context";
import { GolfCartIcon } from "@/components/icons/GolfCartIcon";

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
    label: "Der Club",
    href: null,
    children: [
      { href: "/news", label: "Aktuelles", icon: null },
      { href: "/turniere", label: "Turniere", icon: null },
      { href: "/membership", label: "Mitgliedschaft", icon: "idCard" },
      { href: "/team", label: "Unser Team", icon: null },
      { href: "/partners", label: "Partner & Sponsoren", icon: "handshake" },
      { href: "/webcam", label: "Webcam & Wetter", icon: "camera" },
    ],
  },
  {
    label: "Gäste & Preise",
    href: null,
    children: [
      { href: "/gaeste", label: "Greenfee & Preise", icon: null },
      { href: "/hotels", label: "Partnerhotels", icon: null },
      { href: "/plus-golf", label: "Oberstaufen PLUS Golf", icon: null },
    ],
  },
  {
    label: "Golfschule",
    href: "/academy",
    children: null,
  },
  {
    label: "Gastronomie",
    href: "/gastronomie",
    children: null,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const { openContact } = useContact();

  return (
    <header className="sticky top-0 z-50 w-full shadow-[0_4px_20px_-2px_rgba(0,0,0,0.15)]">
      {/* Top-Bar: Dunkelgrün, schmal, rechtsbündig */}
      <div className="bg-[#1b3b2a]">
        <div className="mx-auto flex max-w-full items-center justify-end gap-4 px-4 py-2 sm:px-6 lg:px-12">
          {/* Cart-Status-Anzeige für die drei Kurse */}
          <div className="flex items-center gap-2 sm:gap-4">
            {cartStatus.map(({ course, status }) => (
              <div
                key={course}
                className="flex items-center gap-1.5 text-xs text-white/90"
                title={`Kurs ${course}: Carts ${status === "green" ? "erlaubt" : "nicht erlaubt"}`}
              >
                <GolfCartIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-semibold">{course}</span>
                <span className="hidden sm:inline">Kurs</span>
                {/* Status-Punkt */}
                <span
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    status === "green"
                      ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.9)] animate-pulse"
                      : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"
                  }`}
                  aria-label={`Status: ${status === "green" ? "Grün" : "Rot"}`}
                />
              </div>
            ))}
          </div>
          {/* Platz-Status-Ampel (Grün) */}
          <div className="flex items-center gap-2 rounded-full border border-gc-gold/30 bg-gc-dark-green px-2 py-1 sm:px-3 transition-all duration-300 hover:border-gc-gold/50 hover:shadow-[0_0_10px_rgba(197,160,89,0.3)]">
            <span
              className="h-2 w-2 rounded-full bg-gc-status-green shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"
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
      <div className="bg-[#faf9f6] border-b border-gc-gold/20 shadow-sm">
        <div className="mx-auto flex max-w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Golfclub Waldegg-Wiggensbach Logo"
              width={80}
              height={80}
              className="h-16 w-auto sm:h-20 transition-transform duration-300"
              priority
            />
            <span className="hidden text-lg font-semibold text-gc-dark-green sm:inline transition-colors duration-300 hover:text-gc-gold">
              Golfclub Waldegg-Wiggensbach
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || (item.children && item.children.some((child) => pathname === child.href));
              if (item.href) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "text-gc-gold font-semibold"
                        : "text-gc-dark-green hover:text-gc-gold"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gc-gold rounded-full" />
                    )}
                  </Link>
                );
              }
              return (
                <div key={item.label} className="relative group">
                  <button
                    type="button"
                    className={`relative text-base font-medium transition-all duration-300 flex items-center gap-1 ${
                      isActive
                        ? "text-gc-gold font-semibold"
                        : "text-gc-dark-green hover:text-gc-gold"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gc-gold rounded-full" />
                    )}
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full mt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-gc-gold/20 overflow-hidden backdrop-blur-sm">
                    {item.children?.map((child) => {
                      const childIsActive = pathname === child.href;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex items-center px-4 py-3 text-sm transition-all duration-300 ${
                            childIsActive
                              ? "bg-gc-gold/10 text-gc-gold font-semibold"
                              : "text-gc-dark-green hover:bg-gc-gold/10 hover:text-gc-gold hover:translate-x-1"
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            {/* Kontakt Button */}
            <button
              type="button"
              onClick={openContact}
              className="rounded-lg bg-gradient-to-r from-gc-gold to-gc-gold-light px-5 py-2.5 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_-10px_rgba(197,160,89,0.5)] active:scale-95 shadow-md"
            >
              Kontakt
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gc-dark-green transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Menü öffnen"
          >
            <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              {navigationItems.map((item) => {
                const isActive = pathname === item.href || (item.children && item.children.some((child) => pathname === child.href));
                const isDropdownOpen = mobileDropdownOpen === item.label;
                
                if (item.href) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition ${
                        isActive
                          ? "bg-gc-gold/20 text-gc-gold font-semibold"
                          : "text-gc-dark-green hover:bg-gc-gold/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }
                
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setMobileDropdownOpen(isDropdownOpen ? null : item.label)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition ${
                        isActive
                          ? "bg-gc-gold/20 text-gc-gold font-semibold"
                          : "text-gc-dark-green hover:bg-gc-gold/10"
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div className="pl-6 space-y-1 mt-1">
                        {item.children?.map((child) => {
                          const childIsActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileDropdownOpen(null);
                              }}
                              className={`flex items-center px-4 py-2 text-sm rounded-lg transition ${
                                childIsActive
                                  ? "bg-gc-gold/20 text-gc-gold font-semibold"
                                  : "text-gc-dark-green/80 hover:bg-gc-gold/10 hover:text-gc-gold"
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openContact();
                }}
                className="block w-full mt-4 px-4 py-3 text-center rounded-lg bg-gradient-to-r from-gc-gold to-gc-gold-light text-base font-medium text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
              >
                Kontakt
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
