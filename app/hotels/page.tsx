"use client";

import Image from "next/image";

const partnerHotels = [
  {
    name: "Allgäu Residenz Natur & Spa",
    location: "Wiggensbach",
    label: "Premium Partner",
    description: "Direkt am Ort, ideal für kurze Wege.",
    website: "https://www.allgaeuresidenz.de",
    email: "info@allgaeuresidenz.de",
  },
  {
    name: "Hotel Hanusel Hof",
    location: "Hellengerst",
    label: "Wellness & Golf",
    description: "Wellness & Golf.",
    website: "https://www.hanuselhof.de",
    email: "info@hanuselhof.de",
  },
  {
    name: "Parkhotel Maximilian",
    location: "Ottobeuren",
    label: "Exklusiv & City",
    description: "Exklusiv & City.",
    website: "https://www.parkhotel-maximilian.de",
    email: "info@parkhotel-maximilian.de",
  },
  {
    name: "Dein Engel",
    location: "Oberstaufen",
    label: "Wellness-Resort",
    description: "Wellness-Resort.",
    website: "https://www.dein-engel.de",
    email: "info@dein-engel.de",
  },
  {
    name: "Ellgass Allgäu Hotel",
    location: "Eglofs",
    label: "Modern & Tradition",
    description: "Modern & Tradition.",
    website: "https://www.ellgass-allgaeu.de",
    email: "info@ellgass-allgaeu.de",
  },
];

export default function HotelsPage() {
  return (
    <div>
      {/* Hero-Sektion */}
      <section className="relative h-screen w-full bg-gradient-to-br from-gc-dark-green via-[#1b3b2a] to-[#0f2418]">
        {/* Platzhalter-Bild */}
        <div className="absolute inset-0">
          <Image
            src="/images/gastro-teaser.jpg"
            alt="Golf & Schlaf - Premium Partnerhotels"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        {/* Dunkles Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Zentrierte Überschrift */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Golf & Schlaf
          </h1>
          <p className="mt-4 text-lg text-white/90 sm:text-xl lg:text-2xl">
            Unsere Premium-Partner für Ihren Urlaub
          </p>
        </div>
      </section>

      {/* Hotel-Grid */}
      <section className="bg-stone-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partnerHotels.map((hotel, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-[#1b3b2a]/20 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                {/* Bild-Platzhalter */}
                <div className="relative h-48 w-full bg-gradient-to-br from-gc-dark-green to-[#0f2418]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="h-24 w-24 text-white/30"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  {/* Label */}
                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-gc-gold px-3 py-1 text-xs font-semibold text-gc-dark-green">
                      {hotel.label}
                    </span>
                  </div>
                </div>

                {/* Inhalt */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gc-dark-green">{hotel.name}</h3>
                  <p className="mt-1 text-sm text-gc-dark-green/70">{hotel.location}</p>
                  <p className="mt-3 text-sm text-gc-dark-green/80">{hotel.description}</p>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-col gap-2">
                    <a
                      href={hotel.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-gc-dark-green bg-white px-4 py-2 text-center text-sm font-semibold text-gc-dark-green transition-colors hover:bg-gc-dark-green hover:text-white"
                    >
                      Zur Hotel-Website
                    </a>
                    <a
                      href={`mailto:${hotel.email}?subject=Golf-Arrangement Anfrage&body=Guten Tag,%0D%0A%0D%0AIch interessiere mich für ein Golf-Arrangement.`}
                      className="rounded-lg bg-gc-dark-green px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-gc-dark-green/90"
                    >
                      Arrangement anfragen
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
