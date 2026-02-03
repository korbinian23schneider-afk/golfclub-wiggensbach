"use client";

import { useState } from "react";
import Image from "next/image";

// Team-Daten (leicht editierbar)
const teams = {
  sekretariat: {
    name: "Sekretariat",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    members: [
      { name: "Teamleitung", position: "Sekretariat", image: "/images/team-placeholder.jpg" },
      { name: "Sekretariat", position: "Sekretariat", image: "/images/team-placeholder.jpg" },
    ],
  },
  greenkeeping: {
    name: "Greenkeeping",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    members: [
      { name: "Markus Rudolph", position: "Head-Greenkeeper", image: "/images/team-placeholder.jpg" },
      { name: "Wilfried Brauner", position: "Greenkeeper", image: "/images/team-placeholder.jpg" },
      { name: "Colin Manthey", position: "Greenkeeper", image: "/images/team-placeholder.jpg" },
      { name: "Dieter Baur", position: "Greenkeeper", image: "/images/team-placeholder.jpg" },
      { name: "Joachim Kilgus", position: "Greenkeeper", image: "/images/team-placeholder.jpg" },
      { name: "Bernd Rausch", position: "Greenkeeper", image: "/images/team-placeholder.jpg" },
    ],
  },
  gastronomie: {
    name: "Gastronomie",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    members: [
      { name: "Küchenchef", position: "Gastronomie", image: "/images/team-placeholder.jpg" },
      { name: "Serviceleitung", position: "Gastronomie", image: "/images/team-placeholder.jpg" },
    ],
  },
  vorstand: {
    name: "Vorstand",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    members: [
      { name: "Ositha Geiger", position: "Präsidentin", image: "/images/team-placeholder.jpg" },
      { name: "Herbert Tschinkl", position: "Geschäftsführer", image: "/images/team-placeholder.jpg" },
      { name: "Michael Zöllner", position: "Vize / Spielführer", image: "/images/team-placeholder.jpg" },
    ],
  },
  trainer: {
    name: "Trainer",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    members: [
      { name: "Ralf Schwarz", position: "Head-Pro", image: "/images/team-placeholder.jpg" },
      { name: "Andy Riss", position: "Pro", image: "/images/team-placeholder.jpg" },
      { name: "Pravesh Mewa", position: "Pro", image: "/images/team-placeholder.jpg" },
    ],
  },
};

type TeamKey = keyof typeof teams;

export default function TeamPage() {
  const [activeTeam, setActiveTeam] = useState<TeamKey>("sekretariat");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTeamChange = (teamKey: TeamKey) => {
    if (teamKey === activeTeam) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTeam(teamKey);
      setIsTransitioning(false);
    }, 150);
  };

  const activeTeamData = teams[activeTeam];

  return (
    <div>
      {/* Hero-Sektion */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-gc-dark-green">
        <div className="absolute inset-0 bg-gradient-to-b from-gc-dark-green/60 via-gc-dark-green/40 to-gc-dark-green/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Unser Team
          </h1>
          <p className="mt-4 text-xl text-white/90 sm:text-2xl">
            Die Menschen hinter dem Golfclub
          </p>
        </div>
      </section>

      {/* Abteilungs-Auswahl */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {(Object.keys(teams) as TeamKey[]).map((teamKey) => {
              const team = teams[teamKey];
              const isActive = activeTeam === teamKey;
              return (
                <button
                  key={teamKey}
                  type="button"
                  onClick={() => handleTeamChange(teamKey)}
                  className={`
                    flex flex-col items-center gap-3 rounded-2xl px-6 py-5 transition-all duration-300
                    ${isActive
                      ? "bg-[#1b3b2a] text-gc-gold shadow-lg scale-105"
                      : "bg-white text-gc-dark-green/70 hover:bg-stone-50 border-2 border-stone-200"
                    }
                  `}
                >
                  <div className={isActive ? "text-gc-gold" : "text-gc-dark-green/50"}>
                    {team.icon}
                  </div>
                  <span className={`text-sm font-medium ${isActive ? "text-gc-gold" : "text-gc-dark-green/70"}`}>
                    {team.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team-Mitglieder */}
      <section className="bg-stone-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gc-dark-green sm:text-4xl">
            {activeTeamData.name}
          </h2>

          <div
            className={`grid gap-8 transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            } grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}
          >
            {activeTeamData.members.map((member, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border-2 border-gc-gold/30 bg-white shadow-lg transition hover:shadow-xl"
              >
                {/* Bild */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={(e) => {
                      // Fallback zu einem Platzhalter, falls Bild fehlt
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='600'%3E%3Crect fill='%23f3f4f6' width='400' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%239ca3af'%3EKein Bild%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                {/* Info-Box */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif font-bold text-gc-dark-green">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-[#d4af37]">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
