"use client";

import { useState } from "react";
import Image from "next/image";

// Turnier-Daten (leicht editierbar)
const tournaments = [
  {
    id: 1,
    title: "Frühlings-Cup",
    date: "15.04.2025",
    time: "09:00 Uhr",
    course: "Kurs A+B",
    status: "open", // 'open', 'closed', 'finished'
    description: "Beginnen Sie die Saison mit unserem traditionellen Frühlings-Cup. 18 Löcher auf Panorama und Illertal.",
  },
  {
    id: 2,
    title: "Damen-Turnier",
    date: "22.04.2025",
    time: "14:00 Uhr",
    course: "Kurs A",
    status: "open",
    description: "Ein Turnier speziell für unsere Damen. 9 Löcher auf dem Panorama-Kurs.",
  },
  {
    id: 3,
    title: "Herren-Meisterschaft",
    date: "05.05.2025",
    time: "08:00 Uhr",
    course: "Kurs A+B+C",
    status: "open",
    description: "Die große Herren-Meisterschaft über 27 Löcher. Zeigen Sie Ihr Können auf allen drei Kursen.",
  },
  {
    id: 4,
    title: "Jugend-Turnier",
    date: "12.05.2025",
    time: "10:00 Uhr",
    course: "Kurs B",
    status: "closed",
    description: "Anmeldung geschlossen. Turnier für unsere Nachwuchsgolfer.",
  },
  {
    id: 5,
    title: "Sommer-Open",
    date: "20.06.2025",
    time: "09:00 Uhr",
    course: "Kurs A+B",
    status: "finished",
    description: "Turnier abgeschlossen. Ergebnisse auf Anfrage erhältlich.",
  },
];

const emailAddress = "info@golf-wiggensbach.de";

export default function TournamentsPage() {
  const [filter, setFilter] = useState<"all" | "open" | "closed" | "finished">("all");

  const filteredTournaments =
    filter === "all"
      ? tournaments
      : tournaments.filter((t) => t.status === filter);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return (
          <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
            Anmeldung offen
          </span>
        );
      case "closed":
        return (
          <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white">
            Anmeldung geschlossen
          </span>
        );
      case "finished":
        return (
          <span className="rounded-full bg-stone-500 px-3 py-1 text-xs font-medium text-white">
            Abgeschlossen
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Hero-Sektion */}
      <section className="relative h-[50vh] w-full overflow-hidden">
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
            Turniere & Events
          </h1>
          <p className="mt-4 text-xl text-white/90 sm:text-2xl">
            Melden Sie sich für unsere Turniere an
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                filter === "all"
                  ? "bg-gc-dark-green text-white"
                  : "bg-stone-100 text-gc-dark-green hover:bg-stone-200"
              }`}
            >
              Alle
            </button>
            <button
              type="button"
              onClick={() => setFilter("open")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                filter === "open"
                  ? "bg-gc-dark-green text-white"
                  : "bg-stone-100 text-gc-dark-green hover:bg-stone-200"
              }`}
            >
              Anmeldung offen
            </button>
            <button
              type="button"
              onClick={() => setFilter("closed")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                filter === "closed"
                  ? "bg-gc-dark-green text-white"
                  : "bg-stone-100 text-gc-dark-green hover:bg-stone-200"
              }`}
            >
              Geschlossen
            </button>
            <button
              type="button"
              onClick={() => setFilter("finished")}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                filter === "finished"
                  ? "bg-gc-dark-green text-white"
                  : "bg-stone-100 text-gc-dark-green hover:bg-stone-200"
              }`}
            >
              Abgeschlossen
            </button>
          </div>
        </div>
      </section>

      {/* Turnier-Liste */}
      <section className="bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredTournaments.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gc-dark-green/60">Keine Turniere gefunden.</p>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-2">
              {filteredTournaments.map((tournament) => (
                <div
                  key={tournament.id}
                  className="overflow-hidden rounded-2xl border-2 border-gc-gold/40 bg-white shadow-lg"
                >
                  <div className="p-8">
                    <div className="mb-4 flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gc-dark-green">
                          {tournament.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gc-dark-green/70">
                          <span>📅 {tournament.date}</span>
                          <span>🕐 {tournament.time}</span>
                          <span>⛳ {tournament.course}</span>
                        </div>
                      </div>
                      {getStatusBadge(tournament.status)}
                    </div>

                    <p className="mb-6 text-gc-dark-green/80">{tournament.description}</p>

                    {/* Anmelde-Button / Status */}
                    <div className="border-t border-gc-gold/20 pt-6">
                      {tournament.status === "open" ? (
                        <>
                          <a
                            href={`mailto:${emailAddress}?subject=Anmeldung: ${encodeURIComponent(tournament.title)}`}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gc-gold px-6 py-3 font-semibold text-gc-dark-green transition hover:bg-gc-gold-light"
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
                            Per E-Mail anmelden
                          </a>
                          <p className="mt-3 text-center text-xs text-stone-500">
                            Alternativ: Liste im Clubhaus oder{" "}
                            <a
                              href="tel:+49837093073"
                              className="text-gc-gold hover:underline"
                            >
                              Telefon
                            </a>
                          </p>
                        </>
                      ) : tournament.status === "closed" ? (
                        <div className="rounded-lg bg-stone-100 px-6 py-3 text-center text-gc-dark-green/60">
                          Anmeldung geschlossen
                        </div>
                      ) : (
                        <a
                          href={`mailto:${emailAddress}?subject=Ergebnisse anfragen: ${encodeURIComponent(tournament.title)}`}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-stone-200 px-6 py-3 font-semibold text-gc-dark-green transition hover:bg-stone-300"
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
                          Ergebnisse anfragen
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
