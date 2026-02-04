import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Golfclub Waldegg-Wiggensbach",
  description: "Datenschutzerklärung des Golfclub Waldegg-Wiggensbach",
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h1 className="text-4xl font-bold text-gc-dark-green mb-8 tracking-tight">
        Datenschutzerklärung
      </h1>

      <div className="prose prose-lg max-w-none text-gc-dark-green space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gc-dark-green mb-4">1. Datenschutz auf einen Blick</h2>
          
          <h3 className="text-xl font-semibold text-gc-dark-green mt-6 mb-3">Allgemeine Hinweise</h3>
          <p className="text-gc-dark-green/90">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3 className="text-xl font-semibold text-gc-dark-green mt-6 mb-3">Datenerfassung auf dieser Website</h3>
          <p className="text-gc-dark-green/90">
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
          </p>
          <p className="text-gc-dark-green/90 mt-4">
            <strong>Wie erfassen wir Ihre Daten?</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p className="text-gc-dark-green/90 mt-4">
            <strong>Wofür nutzen wir Ihre Daten?</strong><br />
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gc-dark-green mb-4">2. Hosting</h2>
          <p className="text-gc-dark-green/90">
            Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gc-dark-green mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          
          <h3 className="text-xl font-semibold text-gc-dark-green mt-6 mb-3">Datenschutz</h3>
          <p className="text-gc-dark-green/90">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-semibold text-gc-dark-green mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
          <div className="space-y-2 text-gc-dark-green/90">
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              <strong>Golfclub Waldegg-Wiggensbach e.V.</strong><br />
              Waldegg 1<br />
              87487 Wiggensbach
            </p>
            <p>
              <strong>Telefon:</strong>{" "}
              <a href="tel:+49837093073" className="text-gc-gold hover:underline">
                +49 8370 93073
              </a>
            </p>
            <p>
              <strong>E-Mail:</strong>{" "}
              <a href="mailto:info@golf-wiggensbach.de" className="text-gc-gold hover:underline">
                info@golf-wiggensbach.de
              </a>
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gc-dark-green mt-6 mb-3">Speicherdauer</h3>
          <p className="text-gc-dark-green/90">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
          </p>

          <h3 className="text-xl font-semibold text-gc-dark-green mt-6 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p className="text-gc-dark-green/90">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3 className="text-xl font-semibold text-gc-dark-green mt-6 mb-3">Widerspruchsrecht gegen die Datenerfassung in besonderen Fällen</h3>
          <p className="text-gc-dark-green/90">
            WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gc-dark-green mb-4">4. Datenerfassung auf dieser Website</h2>
          
          <h3 className="text-xl font-semibold text-gc-dark-green mt-6 mb-3">Kontaktformular</h3>
          <p className="text-gc-dark-green/90">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h3 className="text-xl font-semibold text-gc-dark-green mt-6 mb-3">Telefonische Kontaktaufnahme</h3>
          <p className="text-gc-dark-green/90">
            Wenn Sie uns telefonisch kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gc-dark-green mb-4">5. Ihre Rechte</h2>
          <p className="text-gc-dark-green/90">
            Sie haben folgende Rechte:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gc-dark-green/90 ml-4">
            <li>Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
            <li>Recht auf Berichtigung unrichtiger Daten</li>
            <li>Recht auf Löschung Ihrer bei uns gespeicherten Daten</li>
            <li>Recht auf Einschränkung der Datenverarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten</li>
          </ul>
          <p className="text-gc-dark-green/90 mt-4">
            Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten können Sie sich jederzeit an uns wenden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gc-dark-green mb-4">6. Änderungen dieser Datenschutzerklärung</h2>
          <p className="text-gc-dark-green/90">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
          </p>
        </section>
      </div>
    </div>
  );
}
