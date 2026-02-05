"use client";

export default function MembershipPage() {
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
              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
            />
          </svg>
        </div>
        {/* Dunkles Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Zentrierte Überschrift */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Heimat im Allgäu
          </h1>
        </div>
      </section>

      {/* Mitgliedschafts-Tabelle */}
      <section className="bg-stone-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-12 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#1b3b2a]">
                    <th className="border border-[#1b3b2a]/50 px-6 py-4 text-left text-sm font-bold uppercase tracking-wide text-white">
                      Mitgliedschafts-Modell
                    </th>
                    <th className="border border-[#1b3b2a]/50 px-6 py-4 text-left text-sm font-bold uppercase tracking-wide text-white">
                      Zielgruppe & Details
                    </th>
                    <th className="border border-[#1b3b2a]/50 px-6 py-4 text-right text-sm font-bold uppercase tracking-wide text-white">
                      Beitrag (Jahr)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1b3b2a]/20">
                  {/* Zeile 1: Schnuppermitgliedschaft */}
                  <tr className="bg-white transition-colors hover:bg-stone-50">
                    <td className="border border-[#1b3b2a]/30 px-6 py-4">
                      <span className="font-bold text-gc-dark-green">Schnuppermitgliedschaft</span>
                    </td>
                    <td className="border border-[#1b3b2a]/30 px-6 py-4 text-gc-dark-green/80">
                      <p>Ideal für Einsteiger & Unentschlossene. Ein Jahr volles Spielrecht zum Testen ohne langfristige Bindung.</p>
                    </td>
                    <td className="border border-[#1b3b2a]/30 px-6 py-4 text-right">
                      <span className="font-bold text-gc-dark-green whitespace-nowrap">1.285,- €</span>
                    </td>
                  </tr>

                  {/* Zeile 2: Aktive Vollmitgliedschaft */}
                  <tr className="bg-stone-50 transition-colors hover:bg-stone-100">
                    <td className="border border-[#1b3b2a]/30 px-6 py-4">
                      <span className="font-bold text-gc-dark-green">Aktive Vollmitgliedschaft</span>
                    </td>
                    <td className="border border-[#1b3b2a]/30 px-6 py-4 text-gc-dark-green/80">
                      <p>Für Vielgolfer & Einheimische. Grenzenloses Golfen auf allen Kursen. Inkl. DGV-Ausweis & Stimmrecht. (Ehepartner: <span className="whitespace-nowrap">1.285,- €</span>)</p>
                    </td>
                    <td className="border border-[#1b3b2a]/30 px-6 py-4 text-right">
                      <span className="font-bold text-gc-dark-green whitespace-nowrap">1.580,- €</span>
                    </td>
                  </tr>

                  {/* Zeile 3: Fernmitgliedschaft */}
                  <tr className="bg-white transition-colors hover:bg-stone-50">
                    <td className="border border-[#1b3b2a]/30 px-6 py-4">
                      <span className="font-bold text-gc-dark-green">Fernmitgliedschaft</span>
                    </td>
                    <td className="border border-[#1b3b2a]/30 px-6 py-4 text-gc-dark-green/80">
                      <p className="mb-2">Für Gäste ab 50km Entfernung.</p>
                      <ul className="space-y-1 text-sm">
                        <li>• Modell I (50-100km): <span className="whitespace-nowrap">1.285,- €</span></li>
                        <li>• Modell II (100-150km): <span className="whitespace-nowrap">850,- €</span></li>
                        <li>• Modell III (&gt;150km): <span className="whitespace-nowrap">425,- €</span></li>
                      </ul>
                    </td>
                    <td className="border border-[#1b3b2a]/30 px-6 py-4 text-right">
                      <span className="font-bold text-gc-dark-green whitespace-nowrap">ab 425,- €</span>
                    </td>
                  </tr>

                  {/* Zeile 4: Young Generation */}
                  <tr className="bg-stone-50 transition-colors hover:bg-stone-100">
                    <td className="border border-[#1b3b2a]/30 px-6 py-4">
                      <span className="font-bold text-gc-dark-green">Young Generation (U30)</span>
                    </td>
                    <td className="border border-[#1b3b2a]/30 px-6 py-4 text-gc-dark-green/80">
                      <ul className="space-y-1 text-sm">
                        <li>• Jugendliche (bis 18J): <span className="whitespace-nowrap">170,- €</span></li>
                        <li>• Ausbildung/Studium (bis 27J): <span className="whitespace-nowrap">425,- €</span></li>
                        <li>• Young Professionals (bis 30J): <span className="whitespace-nowrap">850,- €</span></li>
                      </ul>
                    </td>
                    <td className="border border-[#1b3b2a]/30 px-6 py-4 text-right">
                      <span className="font-bold text-gc-dark-green whitespace-nowrap">ab 170,- €</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Zusatz-Optionen */}
          <div className="mt-12 rounded-xl border border-[#1b3b2a]/20 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-xl font-bold text-gc-dark-green">Weitere Optionen</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between border-b border-gc-gold/20 pb-3">
                <span className="text-gc-dark-green">Zweitmitgliedschaft</span>
                <span className="font-bold text-gc-dark-green whitespace-nowrap">850,- €</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gc-dark-green">Schränke (Caddybox)</span>
                <span className="font-bold text-gc-dark-green whitespace-nowrap">Auf Anfrage</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Prominenter CTA-Bereich */}
      <section className="bg-[#1b3b2a] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Bereit für den ersten Abschlag?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Laden Sie den Antrag bequem herunter oder lassen Sie sich von uns beraten. Wir freuen uns auf Sie.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* Button 1: Mitgliedsantrag herunterladen */}
            <a
              href="/aufnahmeantrag.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-lg bg-[#d4af37] px-8 py-4 font-semibold text-gc-dark-green transition-all hover:bg-[#c5a059] hover:shadow-lg"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Mitgliedsantrag herunterladen (PDF)
            </a>
            {/* Button 2: Fragen stellen */}
            <a
              href="mailto:info@golf-wiggensbach.de?subject=Fragen zur Mitgliedschaft"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Fragen stellen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
