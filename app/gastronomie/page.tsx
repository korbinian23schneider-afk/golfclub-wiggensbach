"use client";

import Image from "next/image";
import { useContact } from "@/app/context/contact-context";

const steps = [
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Wählen",
    description: "Frische Snacks, Kuchen und warme Gerichte stehen für Sie bereit.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Genießen",
    description: "Nehmen Sie Platz auf unserer Panorama-Terrasse oder in der gemütlichen Stube.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Vertrauen",
    description: "Zahlen Sie unkompliziert an unserer Kasse des Vertrauens. Wir setzen auf die Ehrlichkeit unserer Mitglieder und Gäste.",
  },
];

const menuCards = [
  {
    image: "/images/gastro-warm.jpg",
    alt: "Frische warme Gerichte",
    title: "Herzhaft & Warm",
    description: "Täglich wechselnde Tagesgerichte, Leberkäse oder heiße Würstchen aus dem Topf.",
  },
  {
    image: "/images/gastro-salad.jpg",
    alt: "Frischer Salat",
    title: "Vital & Knackig",
    description: "Frische Salate und leichte Snacks für die gesunde Stärkung nach der Runde.",
  },
  {
    image: "/images/gastro-cake.jpg",
    alt: "Hausgemachter Kuchen",
    title: "Süß & Hausgemacht",
    description: "Wechselnde Kuchenauswahl zum Kaffee. Wie bei Oma gebacken.",
  },
];

export default function GastronomiePage() {
  const { openContact } = useContact();

  return (
    <div>
      {/* Hero-Sektion */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/images/gastro-teaser.jpg"
          alt="Gemütlicher Bereich im Clubhaus"
          fill
          priority
          className="object-cover object-center transition-transform duration-[20s] ease-out hover:scale-110"
        />
        {/* Warme, gemütliche Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-gc-dark-green/20 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-gc-gold/10 via-transparent to-gc-gold/10" />
        {/* Zentrierte Überschrift */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl drop-shadow-2xl tracking-tight animate-fade-in-up">
            Ihre Players Lounge
          </h1>
          <p className="mt-4 text-lg text-white/95 sm:text-xl lg:text-2xl drop-shadow-lg leading-relaxed max-w-2xl">
            Genuss im eigenen Rhythmus – flexibel & vertraut.
          </p>
        </div>
      </section>

      {/* Das "Honesty"-Konzept: 3 Schritte */}
      <section className="bg-gradient-to-br from-stone-50 to-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gc-dark-green sm:text-4xl tracking-tight mb-4">
            So funktioniert's
          </h2>
          <p className="text-center text-lg text-gc-dark-green/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-gc-dark-green">Club-Bistro, Bedienen Sie sich wie bei Freunden,</strong> wählen Sie aus täglich wechselnden, frisch zubereiteten Gerichten. Genießen Sie Ihr Essen ohne lange Wartezeiten direkt auf der schönsten Terrasse des Allgäus.
          </p>
          <p className="text-center text-lg text-gc-dark-green/80 mb-16 max-w-2xl mx-auto">
            Einfach, unkompliziert und auf Vertrauensbasis
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center rounded-2xl border-2 border-gc-gold/20 bg-white p-8 lg:p-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 hover:border-gc-gold/40 hover:shadow-[0_20px_50px_-12px_rgba(27,59,42,0.15)]"
              >
                {/* Schritt-Nummer */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gc-gold to-gc-gold-light text-gc-dark-green font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex justify-center mb-6 mt-4 text-gc-gold">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gc-dark-green mb-3">
                  {step.title}
                </h3>
                <p className="text-gc-dark-green/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Das Angebot - Genuss-Galerie */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gc-dark-green sm:text-4xl tracking-tight mb-4">
            Für den Hunger zwischendurch
          </h2>
          <p className="text-center text-lg text-gc-dark-green/80 mb-16 max-w-2xl mx-auto">
            Unser Angebot variiert täglich und bietet Stärkung für jede Tageszeit.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {menuCards.map((card, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Bildbereich */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Platzhalter-Icon - wird nur sichtbar wenn Bild nicht existiert */}
                  <div className="absolute inset-0 flex items-center justify-center bg-stone-200 pointer-events-none">
                    <svg
                      className="h-16 w-16 text-stone-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Textbereich */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gc-dark-green mb-3 transition-colors duration-300 group-hover:text-gc-gold">
                    {card.title}
                  </h3>
                  <p className="text-gc-dark-green/80 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Der "Warum"-Bereich */}
      <section className="bg-gradient-to-br from-gc-dark-green/5 via-stone-50 to-gc-gold/5 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-gc-gold/20 bg-white/80 backdrop-blur-sm p-10 sm:p-12 shadow-lg">
            <div className="flex justify-center mb-6">
              <svg className="h-12 w-12 text-gc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-center text-2xl font-bold text-gc-dark-green mb-6">
              Warum dieses Konzept?
            </h2>
            <p className="text-center text-lg text-gc-dark-green/90 leading-relaxed">
              Weil Sie nach der Runde nicht warten wollen. Weil Sie Teil der Wiggensbach-Familie sind. Und weil{" "}
              <strong className="text-gc-dark-green">Vertrauen die schönste Währung ist</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Info-Box: Öffnungszeiten & Events */}
      <section className="bg-gradient-to-br from-gc-dark-green to-[#0f2418] py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-gc-gold/40 bg-white/10 backdrop-blur-md p-10 sm:p-12 text-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)]">
            <h2 className="text-3xl font-bold text-white sm:text-4xl tracking-tight mb-8">
              Öffnungszeiten & Event anfragen
            </h2>
            
            <div className="space-y-6 text-white/95">
              <div>
                <p className="text-lg font-semibold text-gc-gold mb-2">
                  Geöffnet analog zum Spielbetrieb
                </p>
                <p className="text-white/90">
                  Die Players Lounge ist während der Platzöffnungszeiten für Sie da.
                </p>
                <p className="text-white/90 mt-2">
                  Es gibt warmes Essen, solange der Vorrat reicht.
                </p>
              </div>

              <div className="pt-6 border-t border-white/20">
                <p className="mb-6 text-white/90">
                  Für größere Gruppen oder Events organisieren wir gerne ein Catering auf Anfrage.
                </p>
                <button
                  onClick={openContact}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gc-gold to-gc-gold-light px-8 py-3.5 font-semibold text-gc-dark-green shadow-[0_10px_30px_-10px_rgba(197,160,89,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_-10px_rgba(197,160,89,0.6)] active:scale-95"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Event anfragen
                </button>
              </div>

              <div className="pt-6 border-t border-white/20">
                <p className="text-sm text-white/70">
                  Fragen? Rufen Sie uns an:{" "}
                  <a
                    href="tel:+49837093073"
                    className="text-gc-gold hover:underline font-semibold"
                  >
                    +49 8370 93073
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
