"use client";

export default function WebcamPage() {
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
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        {/* Dunkles Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Zentrierte Überschrift */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Live vom Platz
          </h1>
        </div>
      </section>

      {/* Webcam & Wetter Sektion */}
      <section className="bg-stone-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Webcam-Bereich */}
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-2xl font-bold text-gc-dark-green">Live-Bild Waldegg</h2>
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-stone-200 bg-stone-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-24 w-24 text-stone-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="mt-4 text-sm font-medium text-stone-500">
                      Live-Bild wird geladen...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wetter-Widget */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gc-dark-green">Aktuelles Wetter</h2>
              <div className="rounded-xl border-2 border-stone-200 bg-white p-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="h-12 w-12 text-yellow-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-3xl font-bold text-gc-dark-green">18°C</p>
                        <p className="text-sm text-gc-dark-green/70">Sonnig</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-2 border-t border-stone-200 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gc-dark-green/70">Wind</span>
                    <span className="font-medium text-gc-dark-green">5 km/h</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gc-dark-green/70">Luftfeuchtigkeit</span>
                    <span className="font-medium text-gc-dark-green">65%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gc-dark-green/70">Platzstatus</span>
                    <span className="font-medium text-gc-status-green">Bespielbar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
