import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Golfclub Waldegg-Wiggensbach",
  description: "Impressum und rechtliche Angaben des Golfclub Waldegg-Wiggensbach",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h1 className="text-4xl font-bold text-gc-dark-green mb-8 tracking-tight">
        Impressum
      </h1>

      <div className="prose prose-lg max-w-none text-gc-dark-green space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gc-dark-green mb-4">Angaben gemäß § 5 TMG</h2>
          <div className="space-y-2 text-gc-dark-green/90">
            <p>
              <strong>Golfclub Waldegg-Wiggensbach e.V.</strong>
            </p>
            <p>
              Waldegg 1<br />
              87487 Wiggensbach
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gc-dark-green mb-4">Kontakt</h2>
          <div className="space-y-2 text-gc-dark-green/90">
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
            <p>
              <strong>Internet:</strong>{" "}
              <a href="https://www.golf-wiggensbach.de" className="text-gc-gold hover:underline">
                www.golf-wiggensbach.de
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gc-dark-green mb-4">Vertreten durch</h2>
          <div className="space-y-2 text-gc-dark-green/90">
            <p>Ositha Geiger (Präsidentin)</p>
            <p>Herbert Tschinkl (Geschäftsführer)</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gc-dark-green mb-4">Registereintrag</h2>
          <div className="space-y-2 text-gc-dark-green/90">
            <p>
              <strong>Eintragung im Registergericht:</strong> Amtsgericht Kempten<br />
              <strong>Registernummer:</strong> VR 12345
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gc-dark-green mb-4">Umsatzsteuer-ID</h2>
          <div className="space-y-2 text-gc-dark-green/90">
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gc-dark-green mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <div className="space-y-2 text-gc-dark-green/90">
            <p>
              Ositha Geiger<br />
              Waldegg 1<br />
              87487 Wiggensbach
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gc-dark-green mb-4">Haftungsausschluss</h2>
          
          <h3 className="text-xl font-semibold text-gc-dark-green mt-6 mb-3">Haftung für Inhalte</h3>
          <p className="text-gc-dark-green/90">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>

          <h3 className="text-xl font-semibold text-gc-dark-green mt-6 mb-3">Haftung für Links</h3>
          <p className="text-gc-dark-green/90">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h3 className="text-xl font-semibold text-gc-dark-green mt-6 mb-3">Urheberrecht</h3>
          <p className="text-gc-dark-green/90">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </div>
  );
}
