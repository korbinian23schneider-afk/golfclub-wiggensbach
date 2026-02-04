"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Hole } from "@/lib/courseData";
import {
  getNextHole,
  getPrevHole,
  type CourseKey,
} from "@/lib/courseData";

interface HoleModalProps {
  hole: Hole;
  courseKey: CourseKey;
  onClose: () => void;
  onNavigate: (hole: Hole) => void;
}

export default function HoleModal({
  hole,
  courseKey,
  onClose,
  onNavigate,
}: HoleModalProps) {
  const nextHole = getNextHole(courseKey, hole.nummer);
  const prevHole = getPrevHole(courseKey, hole.nummer);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [hole.id]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hole-modal-title"
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Schließen-Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
          aria-label="Modal schließen"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Bild-Container: Festhöhe mit Zoom-Effekt */}
        <div className="relative h-[500px] w-full overflow-hidden rounded-l-3xl bg-gc-dark-green/10 sm:h-[60vh] sm:w-[42%]">
          {imageError ? (
            <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gc-gold/40 bg-gc-dark-green/5 p-6 text-center">
              <span className="text-4xl text-gc-gold/60">⛳</span>
              <p className="mt-2 text-sm font-medium text-gc-dark-green/70">Loch {hole.nummer}</p>
              <p className="mt-1 text-xs text-gc-dark-green/50">Grafik in /public/images/course/ hinterlegen</p>
            </div>
          ) : (
            <Image
              src={hole.imageSrc}
              alt={`Loch ${hole.nummer} – Kurs ${courseKey}`}
              fill
              className="object-cover object-center"
              onError={() => setImageError(true)}
              sizes="(max-width: 640px) 100vw, 42vw"
            />
          )}
        </div>

        {/* Infos */}
        <div className="flex min-w-0 flex-1 flex-col gap-6 overflow-y-auto p-6 sm:w-[58%]">
          <h2 id="hole-modal-title" className="text-2xl font-bold text-gc-dark-green">
            Loch {hole.nummer}
            {hole.name && hole.name !== `Loch ${hole.nummer}` && (
              <span className="ml-2 text-lg font-normal text-gc-dark-green/70">({hole.name})</span>
            )}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gc-dark-green/15 p-3 border border-gc-dark-green/20">
              <span className="text-sm text-gc-dark-green/80 font-medium">Par</span>
              <p className="text-xl font-bold text-gc-dark-green">{hole.par}</p>
            </div>
            <div className="rounded-lg bg-gc-dark-green/15 p-3 border border-gc-dark-green/20">
              <span className="text-sm text-gc-dark-green/80 font-medium">HCP</span>
              <p className="text-xl font-bold text-gc-dark-green">{hole.hcp}</p>
            </div>
          </div>

          {/* Entfernungs-Tabelle */}
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gc-dark-green/70">
              Entfernungen (m)
            </h3>
            <div className="overflow-hidden rounded-lg border border-gc-gold/40">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gc-gold/20">
                    <th className="px-3 py-2 font-medium text-gc-dark-green">Abschlag</th>
                    <th className="px-3 py-2 font-medium text-gc-dark-green">Meter</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gc-gold/20">
                  <tr>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span>Gelb</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 font-medium">{hole.yellow}m</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-blue-600" />
                        <span>Blau</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 font-medium">{hole.blue}m</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-600" />
                        <span>Rot</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 font-medium">{hole.red}m</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-orange-500" />
                        <span>Orange</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 font-medium">{hole.orange}m</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pro-Tipp */}
          <div className="rounded-lg border-2 border-gc-gold/40 bg-gc-gold/20 p-4">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gc-gold">
              Pro-Tipp
            </h3>
            <p className="text-gc-dark-green">{hole.proTipp}</p>
          </div>

          {/* Navigation Vorheriges/Nächstes Loch */}
          <div className="flex gap-3 border-t border-gc-gold/20 pt-4">
            {prevHole ? (
              <button
                type="button"
                onClick={() => onNavigate(prevHole)}
                className="flex-1 rounded-lg border border-gc-gold bg-white py-2.5 font-medium text-gc-dark-green transition hover:bg-gc-gold/20"
              >
                ← Loch {prevHole.nummer}
              </button>
            ) : (
              <div className="flex-1" />
            )}
            {nextHole ? (
              <button
                type="button"
                onClick={() => onNavigate(nextHole)}
                className="flex-1 rounded-lg bg-gc-gold py-2.5 font-medium text-gc-dark-green transition hover:bg-gc-gold-light"
              >
                Loch {nextHole.nummer} →
              </button>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
