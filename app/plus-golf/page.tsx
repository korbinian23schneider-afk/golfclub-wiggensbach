"use client";

import Image from "next/image";

const golfCourses = [
  { name: "Golfclub Waldegg-Wiggensbach", isCurrent: true },
  { name: "Golfclub Oberstaufen-Steibis", isCurrent: false },
  { name: "Golfpark Bregenzerwald", isCurrent: false },
  { name: "Golfpark Schlossgut Lenzfried", isCurrent: false },
  { name: "Golfclub Memmingen Gut Westerhart", isCurrent: false },
];

const advantages = [
  "Täglich 1 Greenfee gratis",
  "Freie Fahrt mit den Bergbahnen (Hochgrat, Imberg, Hündle)",
  "Gratis Eintritt ins Erlebnisbad Aquaria",
];

export default function PlusGolfPage() {
  return (
    <div>
      {/* Hero-Sektion */}
      <section className="relative h-screen w-full">
        <Image
          src="/images/platz-teaser.jpg"
          alt="Oberstaufen PLUS Golf - Ihr Ticket ins Golfparadies"
          fill
          priority
          className="object-cover"
        />
        {/* Dunkles Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Zentrierte Überschrift */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Ihr Ticket ins Golfparadies
          </h1>
          <p className="mt-4 text-lg text-white/90 sm:text-xl lg:text-2xl">
            Greenfee-frei golfen im Allgäu
          </p>
        </div>
      </section>

      {/* Erklärung */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-[#1b3b2a]/20 bg-white p-8 shadow-sm">
            <p className="text-lg leading-relaxed text-gc-dark-green">
              Als Gast bei einem der teilnehmenden{" "}
              <span className="font-semibold">Oberstaufen-PLUS-GOLF</span> Gastgeber spielen Sie
              auf 5 Plätzen der Region <span className="font-bold text-gc-gold">gratis Greenfee</span>.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gc-dark-green">
              Einfach Gästekarte vorzeigen und abschlagen.
            </p>
          </div>
        </div>
      </section>

      {/* Die Plätze */}
      <section className="bg-stone-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gc-dark-green sm:text-4xl">
            Die teilnehmenden Plätze
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {golfCourses.map((course, index) => (
              <div
                key={index}
                className={`rounded-xl border border-[#1b3b2a]/20 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
                  course.isCurrent ? "ring-2 ring-gc-gold" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gc-dark-green/10">
                    <svg
                      className="h-6 w-6 text-gc-dark-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gc-dark-green">{course.name}</h3>
                    {course.isCurrent && (
                      <p className="mt-1 text-xs text-gc-gold font-semibold">Ihr Club</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile-Box */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-gc-gold/30 bg-gc-gold/5 p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-bold text-gc-dark-green sm:text-3xl">
              Ihre Vorteile mit Oberstaufen PLUS Golf
            </h2>
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-gc-gold mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg text-gc-dark-green">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-gc-dark-green py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Bereit für Ihr Golf-Abenteuer?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Finden Sie jetzt Ihren perfekten Gastgeber in Oberstaufen
          </p>
          <a
            href="https://oberstaufen.de/plus-golf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gc-gold px-8 py-4 text-lg font-semibold text-gc-dark-green shadow-lg transition hover:bg-gc-gold-light hover:shadow-xl"
          >
            Jetzt Gastgeber in Oberstaufen finden
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
