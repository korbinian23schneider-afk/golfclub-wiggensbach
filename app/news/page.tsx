import Image from "next/image";

// News-Daten (leicht editierbar)
const newsItems = [
  {
    id: 1,
    title: "Rückblick auf das Eröffnungsturnier",
    date: "15.05.2025",
    image: "/images/platz-teaser.jpg",
    excerpt: "Ein erfolgreicher Start in die Saison! Über 80 Teilnehmer haben am traditionellen Eröffnungsturnier teilgenommen. Die Stimmung war großartig und das Wetter spielte perfekt mit.",
  },
  {
    id: 2,
    title: "Neue Carts eingetroffen",
    date: "10.05.2025",
    image: "/images/platz-teaser.jpg",
    excerpt: "Wir freuen uns, Ihnen mitteilen zu können, dass unsere neue Flotte von E-Carts eingetroffen ist. Die modernen Fahrzeuge sind jetzt verfügbar und können im Sekretariat gebucht werden.",
  },
  {
    id: 3,
    title: "Platzpflege-Info: Sommergrüns aktiv",
    date: "05.05.2025",
    image: "/images/platz-teaser.jpg",
    excerpt: "Die Platzpflege läuft auf Hochtouren. Alle drei Kurse sind jetzt mit Sommergrüns bespielt. Unser Greenkeeping-Team sorgt täglich für optimale Bedingungen.",
  },
];

export default function NewsPage() {
  return (
    <div>
      {/* Hero-Sektion */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-gc-dark-green">
        <div className="absolute inset-0 bg-gradient-to-b from-gc-dark-green/60 via-gc-dark-green/40 to-gc-dark-green/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Neuigkeiten aus dem Club
          </h1>
          <p className="mt-4 text-xl text-white/90 sm:text-2xl">
            Aktuelles und Wissenswertes
          </p>
        </div>
      </section>

      {/* News-Liste */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {newsItems.map((news) => (
              <article
                key={news.id}
                className="group overflow-hidden rounded-2xl border-2 border-gc-gold/30 bg-white shadow-lg transition hover:shadow-xl"
              >
                {/* Bild */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <time className="text-sm text-gc-dark-green/60">{news.date}</time>
                  <h2 className="mt-2 text-2xl font-bold text-gc-dark-green">
                    {news.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-gc-dark-green/80">
                    {news.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
