"use client";

import { useState } from "react";
import Image from "next/image";
import { courses, type CourseKey, type Hole } from "@/lib/courseData";
import HoleModal from "@/components/HoleModal";

const courseKeys: { key: CourseKey; label: string; subtitle: string }[] = [
  { key: "A", label: "Kurs A", subtitle: "Panorama" },
  { key: "B", label: "Kurs B", subtitle: "Illertal" },
  { key: "C", label: "Kurs C", subtitle: "Zugspitz" },
];

export default function CoursePage() {
  const [activeCourse, setActiveCourse] = useState<CourseKey>("A");
  const [modalHole, setModalHole] = useState<Hole | null>(null);

  const course = courses.find((c) => c.key === activeCourse)!;

  return (
    <div>
      {/* Hero-Bereich: Volle Bildschirmhöhe mit Hintergrundbild */}
      <section className="relative h-screen w-full">
        <Image
          src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop"
          alt="Golfplatz Panorama in den Alpen"
          fill
          priority
          className="object-cover"
        />
        {/* Dunkles Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Zentrierte Überschrift */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-center text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Golfen auf höchstem Niveau
          </h1>
        </div>
      </section>

      {/* Bestehender Inhalt */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gc-dark-green">Der Platz</h2>
        <p className="mt-2 text-gc-dark-green/80">
          27 Löcher in drei Runden: Panorama, Illertal und Zugspitz.
        </p>

      {/* Tab-Navigation: Reiter-Optik */}
      <div className="mt-8 flex items-end justify-center gap-0">
        {courseKeys.map(({ key, label, subtitle }) => {
          const isActive = activeCourse === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveCourse(key)}
              className={`
                relative px-12 py-4 text-xl font-medium transition-all duration-300
                ${isActive
                  ? "z-10 -translate-y-1 scale-110 rounded-t-2xl bg-[#1b3b2a] font-bold text-white shadow-lg"
                  : "z-0 rounded-t-xl bg-stone-200 text-gc-dark-green hover:bg-stone-300"
                }
              `}
            >
              <span className="block">{label}</span>
              <span className={`block text-sm ${isActive ? "text-white/85" : "text-gc-dark-green/70"}`}>
                {subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Loch-Bereich: grün hinterlegt = ausgewählter Kurs */}
      <section
        className="rounded-b-2xl rounded-tr-2xl bg-[#1b3b2a] p-6 sm:p-8"
        aria-label={`Löcher Kurs ${activeCourse} – ${course.name}`}
      >
        {/* Status-Sektion: Cart-Status und Bespielbarkeit */}
        <div className="mb-6 flex flex-col gap-4 border-b border-white/20 pb-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Element A: Cart-Ampel */}
          <div className="flex items-center gap-3">
            {/* Golf-Cart Icon */}
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {/* Wagen-Körper */}
              <rect x="4" y="10" width="16" height="5" rx="0.5" strokeWidth="1.5" />
              {/* Windschutzscheibe */}
              <path d="M6 10 L6 7 L18 7 L18 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              {/* Dachrahmen */}
              <path d="M6 7 L12 4 L18 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              {/* Vorderrad */}
              <circle cx="8" cy="17" r="2.5" strokeWidth="1.5" />
              <circle cx="8" cy="17" r="1" fill="currentColor" />
              {/* Hinterrad */}
              <circle cx="16" cy="17" r="2.5" strokeWidth="1.5" />
              <circle cx="16" cy="17" r="1" fill="currentColor" />
              {/* Lenkrad */}
              <circle cx="16" cy="12" r="1.5" strokeWidth="1.2" />
              {/* Sitz */}
              <rect x="6" y="11" width="6" height="3" rx="0.3" strokeWidth="1" />
            </svg>
            {/* Status-Punkt und Text */}
            <div className="flex items-center gap-2">
              <span
                className={`h-3 w-3 rounded-full ${
                  course.cartStatus
                    ? "bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]"
                    : "bg-red-500"
                }`}
                aria-label={course.cartStatus ? "Carts erlaubt" : "Keine Carts"}
              />
              <span className="text-white">
                {course.cartStatus ? "Carts erlaubt" : "Keine Carts"}
              </span>
            </div>
          </div>

          {/* Element B: Bespielbarkeit */}
          <div className="flex items-center gap-2">
            {/* Info-Icon */}
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-bold text-white">{course.condition}</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {course.holes.map((hole) => (
            <button
              key={hole.id}
              type="button"
              onClick={() => setModalHole(hole)}
              className="group flex flex-col overflow-hidden rounded-xl border border-gc-gold/40 bg-white text-left shadow-lg transition hover:border-gc-gold hover:shadow-xl"
            >
              <div className="flex items-center justify-between bg-gc-dark-green/10 px-4 py-3">
                <div>
                  <span className="font-bold text-gc-dark-green">Loch {hole.nummer}</span>
                  {hole.name && hole.name !== `Loch ${hole.nummer}` && (
                    <span className="ml-2 text-xs text-gc-dark-green/60">({hole.name})</span>
                  )}
                </div>
                <span className="text-sm text-gc-dark-green/70">Par {hole.par} · HCP {hole.hcp}</span>
              </div>
              {/* Distanzen mit farbigen Punkten */}
              <div className="bg-[#1b3b2a] px-4 py-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="text-sm font-medium text-white">{hole.yellow}m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-blue-600" />
                    <span className="text-sm font-medium text-white">{hole.blue}m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-600" />
                    <span className="text-sm font-medium text-white">{hole.red}m</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-orange-500" />
                    <span className="text-sm font-medium text-white">{hole.orange}m</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-4">
                <p className="line-clamp-2 text-sm text-gc-dark-green/80">{hole.proTipp}</p>
                <p className="mt-2 text-xs text-gc-gold group-hover:underline">
                  Details anzeigen →
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {modalHole && (
        <HoleModal
          hole={modalHole}
          courseKey={activeCourse}
          onClose={() => setModalHole(null)}
          onNavigate={setModalHole}
        />
      )}
      </div>
    </div>
  );
}
