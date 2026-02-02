"use client";

import { useState } from "react";
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
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gc-dark-green">Der Platz</h1>
      <p className="mt-2 text-gc-dark-green/80">
        27 Löcher in drei Runden: Panorama, Illertal und Zugspitz.
      </p>

      {/* Tab-Navigation: Kurs A, B, C – zentriert, Pills */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {courseKeys.map(({ key, label, subtitle }) => {
          const isActive = activeCourse === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveCourse(key)}
              className={`
                rounded-2xl bg-[#1b3b2a] px-6 py-3.5 text-sm font-medium text-white
                transition-all duration-300
                ${isActive
                  ? "scale-105 shadow-lg ring-2 ring-gc-gold/60 ring-offset-2 ring-offset-[var(--background)]"
                  : "scale-100 opacity-80 hover:opacity-100"
                }
              `}
            >
              <span className="block">{label}</span>
              <span className="block text-xs font-normal text-white/85">{subtitle}</span>
            </button>
          );
        })}
      </div>

      {/* Loch-Bereich: grün hinterlegt = ausgewählter Kurs */}
      <section
        className="mt-8 rounded-2xl bg-gc-dark-green/15 px-4 py-6 sm:px-6 sm:py-8"
        aria-label={`Löcher Kurs ${activeCourse} – ${course.name}`}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {course.holes.map((hole) => (
            <button
              key={hole.id}
              type="button"
              onClick={() => setModalHole(hole)}
              className="group flex flex-col overflow-hidden rounded-xl border border-gc-gold/30 bg-white text-left shadow-sm transition hover:border-gc-gold hover:shadow-md"
            >
              <div className="flex items-center justify-between bg-gc-dark-green/5 px-4 py-3">
                <span className="font-bold text-gc-dark-green">Loch {hole.nummer}</span>
                <span className="text-sm text-gc-dark-green/70">Par {hole.par} · HCP {hole.hcp}</span>
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
  );
}
