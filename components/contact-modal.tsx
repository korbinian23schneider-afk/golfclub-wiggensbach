"use client";

import { useEffect, useState } from "react";
import { useContact } from "@/app/context/contact-context";

export default function ContactModal() {
  const { isOpen, closeContact } = useContact();
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const phoneNumber = "+49837093073";
  const phoneDisplay = "08370 / 93073";
  const emailAddress = "info@golf-wiggensbach.de";

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContact();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      // Verhindere Body-Scroll wenn Modal offen ist
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeContact]);

  const copyToClipboard = async (text: string, type: "phone" | "email") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "phone") {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
      onClick={closeContact}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border-4 border-gc-dark-green bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Schließen-Button */}
        <button
          type="button"
          onClick={closeContact}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
          aria-label="Modal schließen"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="border-b border-gc-gold/20 bg-gradient-to-br from-gc-dark-green to-[#0f2418] p-10 text-center">
          <h2 id="contact-modal-title" className="text-3xl font-bold text-gc-gold sm:text-4xl lg:text-5xl tracking-tight">
            Wir sind für Sie da.
          </h2>
        </div>

        {/* Inhalt */}
        <div className="overflow-y-auto p-12 bg-white">
          {/* Vertikales Layout: E-Mail über Telefon */}
          <div className="space-y-8">
            {/* E-Mail */}
            <div className="group rounded-xl border-2 border-gc-gold/20 bg-stone-50 p-8 transition-all duration-300 hover:border-gc-gold/40 hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="flex-shrink-0 rounded-lg bg-gc-gold/10 p-3 text-gc-gold">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gc-dark-green/70 mb-3">
                      E-Mail
                    </h3>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-lg font-bold text-gc-dark-green hover:text-gc-gold transition-colors duration-300 break-all block"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(emailAddress, "email")}
                  className="flex-shrink-0 rounded-lg border border-gc-gold/30 bg-white p-2.5 text-gc-gold transition-all duration-300 hover:border-gc-gold hover:bg-gc-gold/10 hover:scale-110"
                  aria-label="E-Mail-Adresse kopieren"
                  title="E-Mail-Adresse kopieren"
                >
                  {copiedEmail ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {copiedEmail && (
                <p className="mt-3 text-sm font-medium text-gc-gold">Kopiert!</p>
              )}
            </div>

            {/* Telefon */}
            <div className="group rounded-xl border-2 border-gc-gold/20 bg-stone-50 p-8 transition-all duration-300 hover:border-gc-gold/40 hover:shadow-md">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="flex-shrink-0 rounded-lg bg-gc-gold/10 p-3 text-gc-gold">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gc-dark-green/70 mb-3">
                      Telefon
                    </h3>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-2xl font-bold text-gc-dark-green hover:text-gc-gold transition-colors duration-300 whitespace-nowrap block"
                    >
                      {phoneDisplay}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(phoneNumber, "phone")}
                  className="flex-shrink-0 rounded-lg border border-gc-gold/30 bg-white p-2.5 text-gc-gold transition-all duration-300 hover:border-gc-gold hover:bg-gc-gold/10 hover:scale-110"
                  aria-label="Telefonnummer kopieren"
                  title="Telefonnummer kopieren"
                >
                  {copiedPhone ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {copiedPhone && (
                <p className="mt-3 text-sm font-medium text-gc-gold">Kopiert!</p>
              )}
            </div>
          </div>

          {/* Öffnungszeiten Box */}
          <div className="mt-10 rounded-xl border-2 border-gc-gold/20 bg-stone-50 p-8">
            <h3 className="text-lg font-bold text-gc-dark-green mb-3">
              Öffnungszeiten Sekretariat
            </h3>
            <p className="text-gc-dark-green/90 font-medium">
              Täglich 09:00 – 17:00 Uhr (Saison)
            </p>
            <p className="mt-3 text-sm text-gc-dark-green/70">
              Winterzeiten können abweichen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
