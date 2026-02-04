export interface GolfProfessional {
  id: string;
  name: string;
  qualification: string;
  price30min: number;
  price60min: number;
  speciality: string;
  imageSrc?: string; // Optional: später für echte Bilder
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  priceDisplay?: string; // Optional: für Preis mit Sternchen (z.B. "Ab 129,- € *")
  originalPrice?: number; // Optional: für durchgestrichenen Preis
  duration: string; // Dauer des Kurses
  features: string[];
  details: string; // Detaillierte Beschreibung für das Modal (HTML-formatierter Text)
  badge?: string; // Optional: "Bestseller", "Nur 99,- €", etc.
  buttonText: string;
  buttonLink: string;
  highlight?: boolean; // Für besondere Hervorhebung
}

export const pros: GolfProfessional[] = [
  {
    id: "ralf-schwarz",
    name: "Ralf Schwarz",
    qualification: "Fully Qualified PGA Professional, A-Lizenz",
    price30min: 40,
    price60min: 80,
    speciality: "Videoanalyse & BGV-Stützpunkttrainer",
  },
  {
    id: "pravesh-mewa",
    name: "Pravesh Mewa",
    qualification: "C-Lizenz Trainer",
    price30min: 25,
    price60min: 50,
    speciality: "Ideal für Einsteiger & Fortgeschrittene",
  },
];

export const courses: Course[] = [
  {
    id: "schnupperkurs",
    title: "Schnupperkurs (Wochenende)",
    description: "Das intensive Wochenende für den perfekten Start.",
    price: 79,
    duration: "Samstag & Sonntag (ganzes Wochenende)",
    features: ["Inkl. Ausrüstung & Bälle", "Keine Vorkenntnisse nötig"],
    details:
      "**Zeitraum:**\nSamstag & Sonntag (ganzes Wochenende)\n\n**Uhrzeiten:**\n• Samstag: 11:00 – 12:30 Uhr und 14:00 – 15:30 Uhr\n• Sonntag: 11:00 – 12:30 Uhr und 14:00 – 15:30 Uhr\n\n**Beschreibung:**\nLernen Sie an zwei Tagen intensiv alle Grundlagen des Golfsports. Schläger und Bälle inklusive.",
    buttonText: "Jetzt anfragen",
    buttonLink: "mailto:info@golf-wiggensbach.de?subject=Anfrage Schnupperkurs (Wochenende)",
  },
  {
    id: "platzreife",
    title: "DGV Platzreifekurs",
    description: "Der offizielle Weg zur Platzreife inkl. Prüfung.",
    price: 129,
    priceDisplay: "Ab 129,- € *",
    duration: "Samstag & Sonntag",
    features: ["2 Tage Intensiv-Kurs", "Inkl. Prüfung & Urkunde", "Leihschläger inklusive"],
    details:
      "**Zeitraum:**\nSamstag & Sonntag\n\n**Uhrzeiten:**\n• Samstag: 09:00 – 11:00 Uhr und 15:30 – 17:30 Uhr\n• Sonntag: 10:00 – 11:00 Uhr und 15:00 – 18:00 Uhr\n\n**Preismodell:**\nMit Abschluss einer zutreffenden Mitgliedschaft: 129,00 €\nBuchung ohne Abschluss einer Mitgliedschaft: 229,00 €\n\n**Inklusive:**\nTraining, Prüfung, Leihschläger, Bälle.",
    buttonText: "Jetzt anfragen",
    buttonLink: "mailto:info@golf-wiggensbach.de?subject=Anfrage DGV Platzreifekurs",
  },
];
