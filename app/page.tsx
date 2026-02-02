import Link from "next/link";

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

      {/* Persönliche Startzeiten-Anfrage */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-gc-gold/40 bg-white p-8 shadow-xl sm:p-12">
          <h2 className="text-2xl font-bold text-gc-dark-green sm:text-3xl">
            Persönliche Startzeiten-Anfrage
          </h2>
          <p className="mt-4 text-lg text-gc-dark-green/85">
            Statt Online-Buchung nehmen wir uns Zeit für Sie: Rufen Sie uns an –
            wir reservieren Ihre Startzeit persönlich und beantworten Ihre Fragen.
          </p>
          <a
            href="tel:+49837093073"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gc-dark-green px-6 py-3 font-semibold text-white transition hover:bg-gc-dark-green/90"
          >
            <span className="text-gc-gold">📞</span>
            +49 8370 93073
          </a>
        </div>
      </section>
    </div>
  );
}
