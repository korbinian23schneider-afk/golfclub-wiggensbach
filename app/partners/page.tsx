"use client";

export default function PartnersPage() {
  // Platzhalter für Sponsoren-Logos
  const sponsors = [
    { name: "Sponsor 1", id: 1 },
    { name: "Sponsor 2", id: 2 },
    { name: "Sponsor 3", id: 3 },
    { name: "Sponsor 4", id: 4 },
    { name: "Sponsor 5", id: 5 },
    { name: "Sponsor 6", id: 6 },
  ];


  return (
    <div>
      {/* Hero-Sektion */}
      <section className="relative h-screen w-full bg-gradient-to-br from-gc-dark-green via-[#1b3b2a] to-[#0f2418]">
        {/* Platzhalter-Bild mit Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <svg
            className="h-96 w-96 text-white/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </div>
        {/* Dunkles Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Zentrierte Überschrift */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Unser Netzwerk
          </h1>
        </div>
      </section>

      {/* Sponsoren-Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gc-dark-green sm:text-4xl mb-12">
            Unsere Sponsoren & Partner
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="flex h-48 items-center justify-center rounded-xl border-2 border-stone-200 bg-stone-50 transition-shadow hover:shadow-lg"
              >
                <p className="text-center text-sm font-medium text-stone-400">
                  Logo {sponsor.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
