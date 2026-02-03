import Image from "next/image";

// Preise (leicht editierbar)
const prices = {
  "18-loch": {
    weekday: 80,
    weekend: 90,
    youthDiscount: 0.5, // 50% Rabatt
  },
  "9-loch": {
    weekday: 48,
    weekend: 55,
  },
  sunset: {
    weekday: 60,
    weekend: 68,
  },
};

// Verleih & Carts
const rentals = [
  { name: "E-Cart (18 Loch)", price: "40,- €", icon: "🚗" },
  { name: "E-Cart (9 Loch)", price: "25,- €", icon: "🚗" },
  { name: "E-Trolley", price: "18,- €", icon: "🛒" },
  { name: "Zieh-Trolley", price: "6,- €", icon: "🛒" },
  { name: "Leihschläger", price: "Auf Anfrage", icon: "🏌️" },
];

// Gut zu wissen
const faqItems = [
  { question: "HCP", answer: "Stammvorgabe -54 erforderlich" },
  { question: "Hunde", answer: "An der Leine herzlich willkommen" },
  { question: "Startzeiten", answer: "Reservierung empfohlen" },
  { question: "Dresscode", answer: "Sportlich elegant, Softspikes" },
];

export default function GuestsPage() {
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
          <h2 className="mb-12 text-center text-3xl font-bold text-gc-dark-green sm:text-4xl">
            Greenfee-Preise
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Karte 1: 9-Loch */}
            <div className="rounded-2xl border-2 border-gc-gold/30 bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-gc-dark-green">Die Schnelle Runde</h3>
              <p className="mb-6 text-gc-dark-green/70">9 Löcher</p>
              <div className="space-y-3 border-t border-gc-gold/20 pt-6">
                <div className="flex justify-between">
                  <span className="text-gc-dark-green/80">Mo - Fr</span>
                  <span className="text-xl font-bold text-gc-dark-green">{prices["9-loch"].weekday},- €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gc-dark-green/80">Sa / So / Feiertag</span>
                  <span className="text-xl font-bold text-gc-dark-green">{prices["9-loch"].weekend},- €</span>
                </div>
              </div>
            </div>

            {/* Karte 2: 18-Loch (Hervorgehoben) */}
            <div className="relative rounded-2xl border-2 border-gc-gold bg-white p-8 shadow-xl ring-2 ring-gc-gold/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gc-gold px-4 py-1 text-sm font-semibold text-gc-dark-green">
                Empfohlen
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gc-dark-green">Das Volle Erlebnis</h3>
              <p className="mb-6 text-gc-dark-green/70">18 Löcher</p>
              <div className="space-y-3 border-t border-gc-gold/20 pt-6">
                <div className="flex justify-between">
                  <span className="text-gc-dark-green/80">Mo - Fr</span>
                  <span className="text-xl font-bold text-gc-dark-green">{prices["18-loch"].weekday},- €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gc-dark-green/80">Sa / So / Feiertag</span>
                  <span className="text-xl font-bold text-gc-dark-green">{prices["18-loch"].weekend},- €</span>
                </div>
                <div className="mt-4 rounded-lg bg-gc-gold/10 p-3">
                  <p className="text-sm text-gc-dark-green/80">
                    Jugendliche/Studenten: {Math.round(prices["18-loch"].weekday * prices["18-loch"].youthDiscount)},- €
                  </p>
                </div>
              </div>
            </div>

            {/* Karte 3: Sunset */}
            <div className="rounded-2xl border-2 border-gc-gold/30 bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-gc-dark-green">Feierabend-Runde</h3>
              <p className="mb-6 text-gc-dark-green/70">Sunset / Twilight (ab 16 Uhr)</p>
              <div className="space-y-3 border-t border-gc-gold/20 pt-6">
                <div className="flex justify-between">
                  <span className="text-gc-dark-green/80">Mo - Fr</span>
                  <span className="text-xl font-bold text-gc-dark-green">{prices.sunset.weekday},- €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gc-dark-green/80">Wochenende</span>
                  <span className="text-xl font-bold text-gc-dark-green">{prices.sunset.weekend},- €</span>
                </div>
                <p className="mt-4 text-sm text-gc-dark-green/60">Ideal für den Sommer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verleih & Carts */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gc-dark-green sm:text-4xl">
            Verleih & Carts
          </h2>
          <p className="mb-8 text-center text-gc-dark-green/80">
            Wichtig für das hügelige Gelände
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rentals.map((rental, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-gc-gold/30 bg-white p-6 shadow-sm"
              >
                <span className="text-3xl">{rental.icon}</span>
                <div className="flex-1">
                  <p className="font-semibold text-gc-dark-green">{rental.name}</p>
                  <p className="text-lg font-bold text-gc-gold">{rental.price}</p>
                </div>
              </div>
            ))}
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
                className="rounded-xl border border-gc-gold/30 bg-gc-dark-green/5 p-6"
              >
                <h3 className="mb-2 text-lg font-bold text-gc-dark-green">{item.question}</h3>
                <p className="text-gc-dark-green/80">{item.answer}</p>
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
