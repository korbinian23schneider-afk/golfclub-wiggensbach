"use client";

import { useState } from "react";
import { pros, courses, type Course } from "@/lib/academyData";
import CourseModal from "@/components/CourseModal";

export default function AcademyPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  return (
    <div>
      {/* Hero-Sektion */}
      <section className="relative h-screen w-full bg-gradient-to-br from-gc-dark-green via-[#1b3b2a] to-[#0f2418]">
        {/* Platzhalter-Bild mit Golf-Icon */}
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        {/* Dunkles Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Zentrierte Überschrift */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Ihr Schwung. Unser Fokus.
          </h1>
          <p className="mt-4 text-lg text-white/90 sm:text-xl lg:text-2xl">
            Die Golfacademy Wiggensbach – Training auf höchstem Niveau im Allgäu.
          </p>
        </div>
      </section>

      {/* Highlight-Sektion "Der Einstieg" */}
      <section className="bg-stone-100 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gc-dark-green sm:text-4xl tracking-tight mb-16">
            Golf lernen im Allgäu
          </h2>
          <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
            {courses.map((course) => (
              <button
                key={course.id}
                type="button"
                onClick={() => setSelectedCourse(course)}
                className="group relative overflow-hidden rounded-2xl border-2 border-[#1b3b2a]/20 bg-white p-8 lg:p-10 text-left shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-gc-gold/50 hover:shadow-[0_20px_50px_-12px_rgba(27,59,42,0.3)] cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-gc-dark-green transition-colors duration-300 group-hover:text-gc-gold">{course.title}</h3>
                <p className="mt-3 text-gc-dark-green/80 leading-relaxed">{course.description}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  {course.originalPrice && (
                    <span className="text-lg text-gc-dark-green/50 line-through">
                      {course.originalPrice},- €
                    </span>
                  )}
                  <span className="text-3xl font-bold text-gc-dark-green">
                    {course.priceDisplay || `${course.price},- €`}
                  </span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gc-dark-green/80">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gc-gold transition-transform duration-300 group-hover:scale-110"
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center justify-between text-gc-gold group-hover:text-gc-dark-green transition-all duration-300">
                  <span className="font-semibold">Details anzeigen</span>
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sektion "Individuelles Training" */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gc-dark-green sm:text-4xl tracking-tight mb-16">
            Ihr Pro-Team
          </h2>
          <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
            {pros.map((pro) => (
              <div
                key={pro.id}
                className="overflow-hidden rounded-2xl border-2 border-stone-200 bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(27,59,42,0.25)] hover:-translate-y-2 hover:border-gc-gold/30"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Platzhalter für Bild */}
                  <div className="h-64 w-full bg-stone-200 sm:h-auto sm:w-48">
                    <div className="flex h-full w-full items-center justify-center text-stone-400">
                      <svg
                        className="h-24 w-24"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 p-6 lg:p-8">
                    <h3 className="text-2xl font-bold text-gc-dark-green transition-colors duration-300 hover:text-gc-gold">{pro.name}</h3>
                    <p className="mt-2 text-gc-dark-green/70 leading-relaxed">{pro.qualification}</p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <div className="transition-transform duration-300 hover:scale-105">
                        <span className="text-sm text-gc-dark-green/60">30 Min:</span>
                        <span className="ml-2 text-lg font-semibold text-gc-dark-green">
                          {pro.price30min},- €
                        </span>
                      </div>
                      <div className="transition-transform duration-300 hover:scale-105">
                        <span className="text-sm text-gc-dark-green/60">60 Min:</span>
                        <span className="ml-2 text-lg font-semibold text-gc-dark-green">
                          {pro.price60min},- €
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gc-dark-green/80 leading-relaxed">{pro.speciality}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sektion "Jugend & Förderung" */}
      <section className="bg-gradient-to-br from-gc-dark-green to-[#0f2418] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl tracking-tight drop-shadow-lg">
            Partnerclub Jugend des BGV
          </h2>
          <p className="mt-4 text-lg text-white/95 leading-relaxed max-w-3xl mx-auto">
            Wiggensbach ist stolzer Stützpunkt für den Nachwuchs. Wir fördern Kinder und
            Jugendliche aktiv im Sport.
          </p>
          <a
            href="mailto:info@golf-wiggensbach.de?subject=Anfrage Trainingszeiten Jugend"
            className="mt-8 inline-block rounded-lg bg-gradient-to-r from-gc-gold to-gc-gold-light px-8 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(197,160,89,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_-10px_rgba(197,160,89,0.6)] active:scale-95"
          >
            Trainingszeiten anfragen
          </a>
        </div>
      </section>

      {/* Call-to-Action Leiste (Sticky/Unten) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-stone-200 bg-white/95 backdrop-blur-md shadow-[0_-4px_20px_-2px_rgba(0,0,0,0.15)]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-gc-dark-green sm:text-left font-medium">
              Noch Fragen zum Training?
            </p>
            <a
              href="tel:+49837093073"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-gc-dark-green to-[#0f2418] px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(27,59,42,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_-10px_rgba(27,59,42,0.6)] active:scale-95"
            >
              <svg
                className="h-5 w-5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              08370 / 93073 anrufen
            </a>
          </div>
        </div>
      </div>

      {/* Spacer für sticky CTA */}
      <div className="h-24" />

      {/* Course Modal */}
      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </div>
  );
}
