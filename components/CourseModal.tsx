"use client";

import { useEffect } from "react";
import type { Course } from "@/lib/academyData";

interface CourseModalProps {
  course: Course;
  onClose: () => void;
}

export default function CourseModal({ course, onClose }: CourseModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Formatierung der Details mit Unterstützung für Bullet-Points
  const formatDetails = (text: string) => {
    const lines = text.split("\n");
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];

    lines.forEach((line, idx) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        // Liste abschließen falls vorhanden
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${idx}`} className="mt-3 space-y-2">
              {listItems.map((item, i) => (
                <li key={i} className="ml-6 text-gc-dark-green/90">
                  {item}
                </li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        // Fett formatierte Überschrift
        elements.push(
          <h3 key={idx} className="mt-6 mb-3 text-lg font-bold text-gc-dark-green first:mt-0">
            {trimmed.replace(/\*\*/g, "")}
          </h3>
        );
      } else if (trimmed.startsWith("•")) {
        // Bullet-Point
        if (!inList) {
          inList = true;
        }
        listItems.push(trimmed.substring(1).trim());
      } else if (trimmed === "") {
        // Leere Zeile
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${idx}`} className="mt-3 space-y-2">
              {listItems.map((item, i) => (
                <li key={i} className="ml-6 text-gc-dark-green/90">
                  {item}
                </li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(<br key={`br-${idx}`} />);
      } else {
        // Liste abschließen falls vorhanden
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${idx}`} className="mt-3 space-y-2">
              {listItems.map((item, i) => (
                <li key={i} className="ml-6 text-gc-dark-green/90">
                  {item}
                </li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <p key={idx} className="text-gc-dark-green/90">
            {line}
          </p>
        );
      }
    });

    // Restliche Liste abschließen
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key="list-final" className="mt-3 space-y-2">
          {listItems.map((item, i) => (
            <li key={i} className="ml-6 text-gc-dark-green/90">
              {item}
            </li>
          ))}
        </ul>
      );
    }

    return elements;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
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

        {/* Inhalt */}
        <div className="overflow-y-auto p-8">
          <h2 id="course-modal-title" className="pr-8 text-3xl font-bold text-gc-dark-green">
            {course.title}
          </h2>

          {/* Preis und Dauer */}
          <div className="mt-4 flex flex-wrap items-baseline gap-4">
            <div className="flex items-baseline gap-2">
              {course.originalPrice && (
                <span className="text-lg text-gc-dark-green/50 line-through">
                  {course.originalPrice},- €
                </span>
              )}
              <span className="text-3xl font-bold text-gc-dark-green">
                {course.priceDisplay || `${course.price},- €`}
              </span>
            </div>
          </div>
          <p className="mt-2 text-sm text-gc-dark-green/70">{course.duration}</p>

          {/* Features */}
          <ul className="mt-6 space-y-2">
            {course.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gc-dark-green/80">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gc-gold"
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

          {/* Details */}
          <div className="mt-8 rounded-lg border border-gc-gold/30 bg-gc-gold/5 p-6">
            <div className="prose prose-sm max-w-none text-gc-dark-green">
              {formatDetails(course.details)}
            </div>
          </div>

          {/* Buchen-Button */}
          <a
            href={course.buttonLink}
            className="mt-8 block w-full rounded-lg bg-gc-dark-green px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-gc-dark-green/90"
          >
            {course.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
