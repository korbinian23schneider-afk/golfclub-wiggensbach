"use client";

import { useState } from "react";
import Image from "next/image";

// Preise 2025
const pricingData = {
  weekday: {
    label: "Montag - Freitag",
    rows: [
      { category: "Erwachsene (DGV)", hole9: "48,00 €", hole18: "80,00 €", hole27: "105,00 €" },
      { category: "Gäste in Begleitung (von Mitgliedern)", hole9: "36,00 €", hole18: "60,00 €", hole27: "79,00 €" },
      { category: "Jugendliche / Studenten", hole9: "24,00 €", hole18: "40,00 €", hole27: "52,50 €" },
      { category: "Jugend in Begleitung", hole9: "18,00 €", hole18: "30,00 €", hole27: "39,50 €" },
      { category: "Gäste ohne Mitgliedschaft (VCG)", hole9: "63,00 €", hole18: "95,00 €", hole27: "120,00 €" },
      { category: "Twilight (ab 16:00 Uhr)", hole9: "-", hole18: "60,00 €", hole27: "-" },
    ]
  },
  weekend: {
    label: "Samstag, Sonntag & Feiertage",
    rows: [
      { category: "Erwachsene (DGV)", hole9: "55,00 €", hole18: "90,00 €", hole27: "120,00 €" },
      { category: "Gäste in Begleitung (von Mitgliedern)", hole9: "41,50 €", hole18: "68,00 €", hole27: "90,00 €" },
      { category: "Jugendliche / Studenten", hole9: "27,50 €", hole18: "45,00 €", hole27: "60,00 €" },
      { category: "Jugend in Begleitung", hole9: "22,00 €", hole18: "34,00 €", hole27: "45,00 €" },
      { category: "Gäste ohne Mitgliedschaft (VCG)", hole9: "70,00 €", hole18: "105,00 €", hole27: "135,00 €" },
      { category: "Twilight (ab 16:00 Uhr)", hole9: "-", hole18: "68,00 €", hole27: "-" },
    ]
  }
};

// Verleih & Carts
const rentals = [
  { name: "E-Cart (18 Loch)", price: "40,00 €" },
  { name: "E-Cart (9 Loch)", price: "25,00 €" },
  { name: "E-Trolley (Elektro)", price: "18,00 €" },
  { name: "Zieh-Trolley", price: "6,00 €" },
  { name: "Leihschläger-Satz", price: "Auf Anfrage" },
];

// Gut zu wissen
const faqItems = [
  { question: "HCP", answer: "Stammvorgabe -54 erforderlich" },
  { question: "Hunde", answer: "An der Leine herzlich willkommen" },
  { question: "Startzeiten", answer: "Reservierung empfohlen" },
  { question: "Dresscode", answer: "Sportlich elegant, Softspikes" },
];

export default function GuestsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<"weekday" | "weekend">("weekday");
  const currentData = pricingData[selectedPeriod];

  return (
    <div>
      {/* Hero-Sektion */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/platz-teaser.jpg"
          alt="Golfplatz Panorama"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Gastfreundschaft erleben
          </h1>
          <p className="mt-4 text-xl text-white/90 sm:text-2xl">
            Greenfee & Angebote
          </p>
        </div>
      </section>

      {/* Preise */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-gc-dark-green sm:text-4xl">
            Greenfee-Preise 2025
          </h2>

          {/* Umschalter */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-lg border-2 border-gc-gold/30 bg-white p-1 shadow-sm">
              <button
                type="button"
                onClick={() => setSelectedPeriod("weekday")}
                className={`rounded-md px-6 py-2 text-sm font-semibold transition-all ${
                  selectedPeriod === "weekday"
                    ? "bg-gc-dark-green text-white shadow-md"
                    : "text-gc-dark-green hover:bg-gc-dark-green/10"
                }`}
              >
                {pricingData.weekday.label}
              </button>
              <button
                type="button"
                onClick={() => setSelectedPeriod("weekend")}
                className={`rounded-md px-6 py-2 text-sm font-semibold transition-all ${
                  selectedPeriod === "weekend"
                    ? "bg-gc-dark-green text-white shadow-md"
                    : "text-gc-dark-green hover:bg-gc-dark-green/10"
                }`}
              >
                {pricingData.weekend.label}
              </button>
            </div>
          </div>

          {/* Preistabelle */}
          <div className="overflow-hidden rounded-xl border border-[#1b3b2a]/20 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gc-gold/40 bg-gc-dark-green/10">
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide text-gc-dark-green">
                      Kategorie
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-gc-dark-green">
                      9 Löcher
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-gc-dark-green">
                      18 Löcher
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-gc-dark-green">
                      27 Löcher
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gc-gold/20">
                  {currentData.rows.map((row, index) => (
                    <tr
                      key={index}
                      className="transition-colors hover:bg-gc-gold/5"
                    >
                      <td className="px-6 py-4 text-gc-dark-green">
                        <span className="font-medium">{row.category}</span>
                      </td>
                      <td className="px-6 py-4 text-center text-gc-dark-green">
                        <span className={`font-semibold whitespace-nowrap ${row.hole9 === "-" ? "text-gc-dark-green/40" : ""}`}>
                          {row.hole9}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-gc-dark-green">
                        <span className={`font-semibold whitespace-nowrap ${row.hole18 === "-" ? "text-gc-dark-green/40" : ""}`}>
                          {row.hole18}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-gc-dark-green">
                        <span className={`font-semibold whitespace-nowrap ${row.hole27 === "-" ? "text-gc-dark-green/40" : ""}`}>
                          {row.hole27}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Ausstattung & Verleih */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-gc-dark-green sm:text-4xl">
            Ausstattung & Verleih
          </h2>
          <p className="mb-8 text-center text-gc-dark-green/80">
            Wichtig für das hügelige Gelände
          </p>

          {/* Verleih-Tabelle */}
          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-[#1b3b2a]/20 bg-white shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gc-gold/30 bg-gc-dark-green/5">
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wide text-gc-dark-green">
                    Ausstattung
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-bold uppercase tracking-wide text-gc-dark-green">
                    Preis
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gc-gold/20">
                {rentals.map((rental, index) => (
                  <tr
                    key={index}
                    className={`transition-colors hover:bg-gc-gold/5 ${index % 2 === 1 ? "bg-stone-50" : ""}`}
                  >
                    <td className="px-6 py-4 text-gc-dark-green">
                      <span className="font-medium">{rental.name}</span>
                    </td>
                    <td className="px-6 py-4 text-right text-gc-dark-green">
                      <span className={`font-bold whitespace-nowrap ${rental.price === "Auf Anfrage" ? "text-gc-gold" : "text-gc-gold"}`}>
                        {rental.price}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Gut zu wissen */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gc-dark-green sm:text-4xl">
            Gut zu wissen
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border-2 border-gc-gold/40 bg-stone-50 p-6 shadow-sm"
              >
                <h3 className="mb-2 text-lg font-bold text-gc-dark-green">{item.question}</h3>
                <p className="text-gc-dark-green/90">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-gc-dark-green py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Bereit für Ihre Runde?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Reservieren Sie Ihre Startzeit persönlich bei uns
          </p>
          <a
            href="tel:+49837093073"
            className="inline-flex items-center rounded-full bg-gc-gold px-8 py-4 text-lg font-semibold text-gc-dark-green shadow-lg transition hover:bg-gc-gold-light hover:shadow-xl"
          >
            Startzeit buchen
          </a>
        </div>
      </section>
    </div>
  );
}
