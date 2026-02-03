export interface Hole {
  id: string;
  nummer: number;
  name?: string; // Optional: spezifischer Name (z.B. "Höchster Abschlag")
  par: number;
  hcp: number;
  yellow: number; // Gelb (Herren)
  blue: number; // Blau (Herren/Damen)
  red: number; // Rot (Damen)
  orange: number; // Orange (Jugend/Einsteiger)
  proTipp: string;
  imageSrc: string;
}

export type CourseKey = "A" | "B" | "C";

export interface Course {
  key: CourseKey;
  name: string;
  holes: Hole[];
  cartStatus: boolean; // true = erlaubt (Grün), false = verboten (Rot)
  condition: string; // Bespielbarkeit (z.B. "Sommergrüns", "Wegen Frost gesperrt")
}

// Pro-Tipps für die Löcher (von den Bahntafeln)
const proTippsA = [
  "Durch den Anstieg und die Schräglagen empfiehlt sich eine defensive Spielweise. Halten Sie sich eher links, um rechts dem Wald mit Penalty-Area und Ausgrenze fern zu bleiben.",
  "Ein relativ kurzes Par 4, das jedoch Vorsicht beim Abschlag erfordert, da die Spielbahn nach 170 Meter schmal wird. Das Plateau, ca. 140 Meter vom Abschlag entfernt, ist der beste Platz für einen erfolgreichen zweiten Schlag.",
  "Ein leicht rechts plazierter Abschlag auf dem breiten Fairway erleichtert die Sicht auf das Grün. Achtung beim Anspielen des Grüns, wählen Sie lieber einen Schläger weniger, um nicht im Gebüsch dahinter zu landen.",
  "Longhitter können dieses Grün mit dem Drive erreichen. Die breite Bahn verzeiht Fehler sehr großzügig.",
  "Genießen Sie die Aussicht vom höchsten Abschlag Deutschlands. Wegen der großen Höhendifferenz spielt sich dieses Loch ca. 20 Meter kürzer.",
  "Ein leichter Draw erleichtert das Spiel auf dieser Bahn und hält Sie fern von dem Gefälle auf der rechten Seite. Visieren Sie den Richtungspfahl an und es folgt ein leichter Schlag zum Grün.",
  "Ein Abschlag, der rechts von dem schmalen Grün landet, erleichtert die Annäherung auf das ondulierte Grün. Vorsicht vor den auf den ersten Blick unscheinbaren Breaks.",
  "An diesem Abschlag ist mehr Präzision als Länge gefordert. Beachten Sie zudem, dass Ihre Abschläge durch den Höhenunterschied etwa 10 Meter länger werden. Wenn Sie den kreuzenden Weg einmal passiert haben, dann zielen Sie wegen der Schräglage rechts auf das Grün.",
  "Ein sehr langes Par 3, das einen präzisen Schlag mit einem langen Eisen oder einem kleinen Holz erfordert. Halten Sie sich mit dem Abschlag rechts, die Hanglage wird Ihnen helfen.",
];

const proTippsB = [
  "Das längste und eines der schwersten Löcher auf dem Platz. Der Tobel und das Aus erfordern einen langen und geraden Abschlag. Nach der Hütte halten Sie sich links, dort ist mehr Platz, zudem bläst der Wind oft aus dieser Richtung.",
  "Bleiben Sie auf dieser Bahn immer etwas links, rechts lauert ein steiler Abhang.",
  "Beachten Sie den Wind, denn die richtige Länge ist hier entscheidend. Pitches und Chips um das kleine Grün, können durch die Hanglagen zur Herausforderung werden.",
  "Ein langer Abschlag ist hier zum Erreichen des breiten Fairways erforderlich. Zielen Sie danach immer etwas rechts, da Ihre Bälle durch die Hanglage nach links abdriften. Die Bahn biegt am Ende scharf nach rechts ab und daher ist das Grün erst ab etwa 100 Meter Entfernung einsehbar.",
  "Auf Grund des Gefälles sollten Sie vom Abschlag auf die rechte Seite des Fairways zielen. Der Höhenunterschied beim Schlag ins Grün erfordert mindestens ein bis zwei Schläger mehr. Achten Sie bei diesem langen Grün zusätzlich auf die Fahnenposition.",
  "Für Longhitter ein leichtes Par 5, welches mit zwei Schlägen zu erreichen ist. Ansonsten empfiehlt es sich vor der Penalty-Area abzulegen, da der meist vorhandene Westwind viele Bälle vor dem Grün im Wasser landen lässt.",
  "Auch hier spielt der Wind bei der Schlägerwahl eine wichtige Rolle. Achten Sie auf dem Grün auf die Schräglage, Breaks sind oft stärker als man vermutet.",
  "Der Hang links hält verzogene Bälle auf dieser schmalen Bahn gut im Spiel. Wählen Sie beim Schlag bergauf zum gut verteidigten Grün einen Schläger mehr. Ein Putt von unten nach oben auf dem abschüssigen Grün verhindert böse Überraschungen.",
  "Der Höhenunterschied und das schmale Grün machen dieses Par 3 zu einem schwierigen Schlussloch. Mit zwei Eisen mehr sollten Sie Ihr Ziel und das Grün erreichen.",
];

const proTippsC = [
  "Die linke Spielbahnhälfte steht weit offen um gut ins Spiel zu kommen. Bälle, die den Hang links treffen, rollen immer in Richtung Spielbahn zurück. Achten Sie bei dem leicht modellierten Grün auf versteckte Breaks bzw. Bergauf- und Bergab-Putts.",
  "Beachten Sie bei der Schlägerwahl den Höhenunterschied von 29 Metern.",
  "Das längste Par 4 auf der Anlage wird, besonders durch den oft herrschenden Gegenwind, für viele zum Par 5. Achtung Longhitter: Das kleine Biotop rechts liegt mit dem Drive in Reichweite und macht das Fairway an dieser Stelle extrem schmal. Mit dem Erreichen des schmalen und schrägen Grüns ist das Loch noch nicht bezwungen.",
  "Das schmale Grün erfordert einen präzisen Abschlag. Falls Sie das Grün verfehlen, spielen Sie defensiv, auch ein Bogey ist hier ein gutes Ergebnis.",
  "Ein bergab verlaufendes Par 5, das für Longhitter leicht mit dem zweiten Schlag zu erreichen ist. Ansonsten achten Sie darauf, den Grünbunkern fern zu bleiben, damit können Sie hier den einen oder anderen Schlag im Gesamtscore gut machen.",
  "Eines der schönsten, aber auch ein anspruchsvolles Loch. Selbst nach einem präzisen Abschlag auf das schmale Fairway bleibt ein langer Schlag in das stark modellierte Grün. Wählen Sie hierfür immer ein bis zwei Schläger mehr, die Bahn verläuft zum Grün unauffällig stark bergauf. Spielen Sie dieses Loch gedanklich als Par 5, um inneren Stress zu vermeiden.",
  "Die Bahn verläuft bergauf und spielt sich dadurch deutlich länger. Gehen Sie am Abschlag kein Risiko ein, das Fairway wird zwischen 180m und 220m sehr schmal. Beim Anspielen des Grüns brauchen Sie durch den Höhenunterschied mindestens einen Schläger mehr.",
  "Ein kurzes, bergauf verlaufendes Dogleg. Das nicht einsehbare Grün anzugreifen, lohnt nicht. Ein sicherer Abschlag auf das Plateau ermöglicht mit einem präzisen Pitch ein Par oder gar ein Birdie. Achtung beim Anspielen des Grüns: links lauert in unmittelbarer Nähe der Wald.",
  "Ein kurzes, aber schmales Schlussloch. Ein Abschlag in Richtung des hervorstehenden Laubbaumes am Ende des Fairways hält Sie der Penalty-Area rechts fern und bringt Sie in eine gute Ausgangsposition. Zu kurz gespielte Bälle erreichen beim Anspielen des Grüns dank des Gefälles leicht das Ziel.",
];

function createHole(courseKey: "A" | "B" | "C", nummer: number, data: {
  name?: string;
  par: number;
  hcp: number;
  yellow: number;
  blue: number;
  red: number;
  orange: number;
  proTipp: string;
}): Hole {
  return {
    id: `${courseKey}-${nummer}`,
    nummer,
    name: data.name,
    par: data.par,
    hcp: data.hcp,
    yellow: data.yellow,
    blue: data.blue,
    red: data.red,
    orange: data.orange,
    proTipp: data.proTipp,
    imageSrc: `/images/course/course-${courseKey.toLowerCase()}-hole-${nummer}.jpg`,
  };
}

export const courses: Course[] = [
  {
    key: "A",
    name: "Kurs A (Panorama)",
    cartStatus: true,
    condition: "Sommergrüns",
    holes: [
      createHole("A", 1, { name: "Waldegg", par: 5, hcp: 1, yellow: 512, blue: 438, red: 438, orange: 375, proTipp: proTippsA[0] }),
      createHole("A", 2, { name: "Stefanshütte", par: 4, hcp: 13, yellow: 254, blue: 254, red: 226, orange: 226, proTipp: proTippsA[1] }),
      createHole("A", 3, { name: "Hirschbrunnen", par: 4, hcp: 15, yellow: 276, blue: 276, red: 251, orange: 205, proTipp: proTippsA[2] }),
      createHole("A", 4, { name: "Dachsberg", par: 4, hcp: 17, yellow: 275, blue: 245, red: 245, orange: 225, proTipp: proTippsA[3] }),
      createHole("A", 5, { name: "Burgstall", par: 3, hcp: 11, yellow: 170, blue: 170, red: 170, orange: 170, proTipp: proTippsA[4] }),
      createHole("A", 6, { name: "Drexlermoos", par: 4, hcp: 5, yellow: 333, blue: 333, red: 303, orange: 303, proTipp: proTippsA[5] }),
      createHole("A", 7, { name: "Adelegg", par: 3, hcp: 9, yellow: 180, blue: 180, red: 139, orange: 139, proTipp: proTippsA[6] }),
      createHole("A", 8, { name: "Schmetterlingswiese", par: 4, hcp: 3, yellow: 274, blue: 274, red: 262, orange: 262, proTipp: proTippsA[7] }),
      createHole("A", 9, { name: "Parkwald", par: 3, hcp: 7, yellow: 203, blue: 164, red: 164, orange: 103, proTipp: proTippsA[8] }),
    ],
  },
  {
    key: "B",
    name: "Kurs B (Illertal)",
    cartStatus: true,
    condition: "Top Zustand",
    holes: [
      createHole("B", 1, { name: "Kraxeltobel", par: 5, hcp: 2, yellow: 574, blue: 522, red: 522, orange: 460, proTipp: proTippsB[0] }),
      createHole("B", 2, { name: "Röcks Tannen", par: 4, hcp: 14, yellow: 278, blue: 278, red: 253, orange: 253, proTipp: proTippsB[1] }),
      createHole("B", 3, { name: "Mahlertobel", par: 3, hcp: 16, yellow: 114, blue: 114, red: 92, orange: 92, proTipp: proTippsB[2] }),
      createHole("B", 4, { name: "Sonnenbühl", par: 5, hcp: 4, yellow: 513, blue: 467, red: 467, orange: 358, proTipp: proTippsB[3] }),
      createHole("B", 5, { name: "Bienenhaus", par: 4, hcp: 8, yellow: 324, blue: 301, red: 301, orange: 277, proTipp: proTippsB[4] }),
      createHole("B", 6, { name: "Schafhalde", par: 5, hcp: 10, yellow: 440, blue: 440, red: 408, orange: 408, proTipp: proTippsB[5] }),
      createHole("B", 7, { name: "Neuburg", par: 3, hcp: 18, yellow: 157, blue: 157, red: 130, orange: 130, proTipp: proTippsB[6] }),
      createHole("B", 8, { name: "Bachtal", par: 4, hcp: 6, yellow: 336, blue: 298, red: 298, orange: 273, proTipp: proTippsB[7] }),
      createHole("B", 9, { name: "Fichtenschlag", par: 3, hcp: 12, yellow: 161, blue: 161, red: 134, orange: 134, proTipp: proTippsB[8] }),
    ],
  },
  {
    key: "C",
    name: "Kurs C (Zugspitz)",
    cartStatus: false,
    condition: "Auf Anfrage",
    holes: [
      createHole("C", 1, { name: "Zugspitz-Blick", par: 4, hcp: 5, yellow: 386, blue: 386, red: 346, orange: 346, proTipp: proTippsC[0] }),
      createHole("C", 2, { name: "Schlossbühl", par: 3, hcp: 17, yellow: 158, blue: 148, red: 138, orange: 128, proTipp: proTippsC[1] }),
      createHole("C", 3, { name: "Römerschatz", par: 4, hcp: 1, yellow: 417, blue: 417, red: 375, orange: 375, proTipp: proTippsC[2] }),
      createHole("C", 4, { name: "Sonnenhang", par: 3, hcp: 11, yellow: 181, blue: 181, red: 148, orange: 148, proTipp: proTippsC[3] }),
      createHole("C", 5, { name: "Brennerwiese", par: 5, hcp: 13, yellow: 463, blue: 463, red: 399, orange: 399, proTipp: proTippsC[4] }),
      createHole("C", 6, { name: "Staubers Bach", par: 4, hcp: 3, yellow: 386, blue: 338, red: 338, orange: 258, proTipp: proTippsC[5] }),
      createHole("C", 7, { name: "Kuttenbrühl", par: 5, hcp: 9, yellow: 473, blue: 473, red: 412, orange: 412, proTipp: proTippsC[6] }),
      createHole("C", 8, { name: "Kopfhalde", par: 4, hcp: 15, yellow: 279, blue: 279, red: 251, orange: 251, proTipp: proTippsC[7] }),
      createHole("C", 9, { name: "Fliehburg", par: 4, hcp: 7, yellow: 332, blue: 332, red: 304, orange: 304, proTipp: proTippsC[8] }),
    ],
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
