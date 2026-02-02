export interface Distanzen {
  gelb: number;
  blau: number;
  rot: number;
  orange: number;
}

export interface Hole {
  id: string;
  nummer: number;
  par: number;
  hcp: number;
  distanzen: Distanzen;
  proTipp: string;
  imageSrc: string;
}

export type CourseKey = "A" | "B" | "C";

export interface Course {
  key: CourseKey;
  name: string;
  holes: Hole[];
}

function createHoles(courseKey: "a" | "b" | "c"): Hole[] {
  const coursePrefix = courseKey.toUpperCase();
  const pars = [4, 4, 3, 5, 4, 4, 3, 4, 5]; // typische Loch-Pars für 9 Löcher
  const hcps = [7, 3, 15, 1, 11, 5, 17, 9, 13]; // HCP-Verteilung
  const proTipps = [
    "Fairway Mitte anpeilen – Bunker links meiden.",
    "Zweiter Schlag: Grün leicht erhöht, genug Länge mitbringen.",
    "Kurzes Par 3 – Eisen wählen und Grün zentrieren.",
    "Langes Par 5 – Risiko/Reward am zweiten Schlag.",
    "Dogleg – Position vom Abschlag entscheidend.",
    "Wasser rechts – sichere Linie links halten.",
    "Kurzes Par 3 – Wind beachten.",
    "Schmales Fairway – Disziplin belohnt.",
    "Abschluss-Loch – Grün gut verteidigt, präziser Annäherungsschlag.",
  ];

  return Array.from({ length: 9 }, (_, i) => {
    const nummer = i + 1;
    const baseGelb = 320 + nummer * 18 + (i % 3) * 10;
    return {
      id: `${coursePrefix}-${nummer}`,
      nummer,
      par: pars[i],
      hcp: hcps[i],
      distanzen: {
        gelb: Math.round(baseGelb),
        blau: Math.round(baseGelb - 25),
        rot: Math.round(baseGelb - 55),
        orange: Math.round(baseGelb - 85),
      },
      proTipp: proTipps[i],
      imageSrc: `/images/course/course-${courseKey}-hole-${nummer}.jpg`,
    };
  });
}

export const courses: Course[] = [
  {
    key: "A",
    name: "Panorama",
    holes: createHoles("a"),
  },
  {
    key: "B",
    name: "Illertal",
    holes: createHoles("b"),
  },
  {
    key: "C",
    name: "Zugspitz",
    holes: createHoles("c"),
  },
];

export function getHoleById(courseKey: CourseKey, holeNummer: number): Hole | undefined {
  const course = courses.find((c) => c.key === courseKey);
  return course?.holes.find((h) => h.nummer === holeNummer);
}

export function getNextHole(courseKey: CourseKey, currentNummer: number): Hole | undefined {
  const course = courses.find((c) => c.key === courseKey);
  if (!course) return undefined;
  return course.holes.find((h) => h.nummer === currentNummer + 1);
}

export function getPrevHole(courseKey: CourseKey, currentNummer: number): Hole | undefined {
  const course = courses.find((c) => c.key === courseKey);
  if (!course) return undefined;
  return course.holes.find((h) => h.nummer === currentNummer - 1);
}
