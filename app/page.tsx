import Link from "next/link";
import Image from "next/image";

// Öffnungszeiten des Sekretariats (editierbar)
const openingHours = "Täglich geöffnet von 09:00 bis 17:00 Uhr";

export default function Home() {
  return (
    <div>
      {/* Hero – emotional, Alpine Luxury */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-gc-dark-green px-4 text-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c5a059\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-gc-dark-green/40 via-transparent to-gc-dark-green/60" aria-hidden />
        <div className="relative z-10 max-w-3xl">
          <p className="text-gc-gold text-sm font-medium uppercase tracking-[0.2em] sm:text-base">
            Allgäu · 27 Löcher
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Golf auf höchstem Niveau
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
            Panorama, Illertal und Zugspitz – 27 Löcher in den Allgäuer Alpen.
            Natur, Ruhe und sportliche Herausforderung mit Blick auf die Berge.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/course"
              className="inline-flex items-center rounded-lg bg-gc-gold px-8 py-3.5 font-semibold text-gc-dark-green shadow-lg transition hover:bg-gc-gold-light hover:shadow-xl"
            >
              Zum Platz
            </Link>
            <a
              href="tel:+49837093073"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-gc-gold/80 bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-gc-gold/20"
            >
              Startzeit anfragen
            </a>
          </div>
        </div>
      </section>

      {/* Highlights für Gäste */}
      <section className="bg-stone-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gc-dark-green sm:text-4xl lg:text-5xl mb-16">
            Ihr Golferlebnis im Allgäu
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Karte 1: Der Platz */}
            <Link
              href="/course"
              className="group overflow-hidden rounded-3xl border border-[#1b3b2a] bg-white shadow-xl shadow-emerald-900/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop&q=80"
                  alt="Spectacular golf course panorama in the alps"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-[#1b3b2a]">
                  Einzigartiges Panorama-Golf
                </h3>
                <p className="leading-relaxed text-stone-600">
                  Unendliche Ausblicke auf 27 Bahnen. Von malerisch hügelig bis sportlich anspruchsvoll – ein Naturerlebnis vor der Alpenkulisse.
                </p>
              </div>
            </Link>

            {/* Karte 2: Die Golfschule */}
            <Link
              href="/golfschule"
              className="group overflow-hidden rounded-3xl border border-[#1b3b2a] bg-white shadow-xl shadow-emerald-900/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1587174486073-ae5e5ceff06c?w=800&h=600&fit=crop&q=80"
                  alt="Golf professional teaching a student swing analysis"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-[#1b3b2a]">
                  Ihr Schwung im Fokus
                </h3>
                <p className="leading-relaxed text-stone-600">
                  Vom ersten Schnupperkurs bis zum individuellen Pro-Training. Unsere Akademie bringt Ihr Spiel mit modernsten Methoden auf das nächste Level.
                </p>
              </div>
            </Link>

            {/* Karte 3: Gastronomie */}
            <Link
              href="/gastronomie"
              className="group overflow-hidden rounded-3xl border border-[#1b3b2a] bg-white shadow-xl shadow-emerald-900/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80"
                  alt="Restaurant terrace with alpine view"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-[#1b3b2a]">
                  Kulinarik mit Weitblick
                </h3>
                <p className="leading-relaxed text-stone-600">
                  Genießen Sie regionale Spezialitäten und erlesene Weine auf unserer traumhaften Panoramaterrasse. Der perfekte Abschluss.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Persönliche Startzeiten-Anfrage */}
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-24 sm:px-6 lg:px-8 lg:pt-16 lg:pb-32">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#c5a059]/50 bg-white/30 p-10 text-center backdrop-blur-sm sm:p-12">
          {/* Telefon-Icon */}
          <svg
            className="mx-auto h-12 w-12 text-[#c5a059]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>

          {/* Überschrift */}
          <h2 className="mt-4 text-3xl font-bold text-[#1b3b2a] sm:text-4xl">
            Persönlich für Sie da
          </h2>

          {/* Fließtext */}
          <p className="mx-auto mt-4 max-w-2xl text-stone-600 sm:text-lg">
            Wir glauben an den persönlichen Kontakt, statt an anonyme Buchungssysteme. Rufen Sie uns an – wir finden die perfekte Startzeit.
          </p>

          {/* Telefonnummer-Button */}
          <a
            href="tel:+49837093073"
            className="mt-8 inline-flex items-center rounded-full bg-[#1b3b2a] px-8 py-3 text-lg font-semibold text-white transition hover:scale-105 hover:bg-[#1b3b2a]/90"
          >
            +49 8370 93073
          </a>

          {/* Öffnungszeiten */}
          <p className="mt-6 text-sm text-stone-500">
            {openingHours}
          </p>
        </div>
      </section>
    </div>
  );
}
