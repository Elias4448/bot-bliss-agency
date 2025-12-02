import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundBlobs } from "@/components/BackgroundBlobs";
import { DotGrid } from "@/components/DotGrid";

const Datenschutz = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <DotGrid />
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Datenschutzerklärung</h1>
          <p className="text-muted-foreground mb-8">Kubrix (Elias Baumgartner)</p>
          
          <div className="glass border border-white/10 rounded-2xl p-8 md:p-12 space-y-10">
            {/* 1. Datenschutz auf einen Blick */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="font-medium mb-2 text-foreground">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die folgenden Hinweise geben einen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ausführliche Informationen findest du in den nachstehenden Abschnitten dieser Datenschutzerklärung.
              </p>
            </section>

            {/* 2. Verantwortliche Stelle */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">2. Verantwortliche Stelle</h2>
              <div className="space-y-1 text-muted-foreground mb-6">
                <p className="font-medium text-foreground">Kubrix – Elias Baumgartner</p>
                <p>Schivelbeiner Str. 32</p>
                <p>10439 Berlin</p>
                <p>Deutschland</p>
              </div>
              <div className="space-y-1 text-muted-foreground mb-6">
                <p>
                  <span className="text-foreground">E-Mail:</span>{" "}
                  <a href="mailto:eliasbaumgartner@outlook.com" className="hover:text-primary transition-colors">
                    eliasbaumgartner@outlook.com
                  </a>
                </p>
                <p>
                  <span className="text-foreground">Telefon:</span>{" "}
                  <a href="tel:+4915159143332" className="hover:text-primary transition-colors">
                    +49 1515 9143332
                  </a>
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </p>
            </section>

            {/* 3. Hosting */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">3. Hosting</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diese Website wird bei All-Inkl.com – Neue Medien Münnich gehostet. Die über diese Website erhobenen personenbezogenen Daten werden auf den Servern des Hosting-Anbieters verarbeitet.
              </p>
              <p className="text-muted-foreground mb-2">Es erfolgt eine Verarbeitung auf Grundlage von:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anbahnung)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse: sichere & funktionale Bereitstellung der Website)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Mit dem Hoster wurde ein Auftragsverarbeitungsvertrag (AVV) abgeschlossen.
              </p>
            </section>

            {/* 4. Datenerfassung */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="font-medium mb-2 text-foreground">a) Technische Daten / Server-Logfiles</h3>
              <p className="text-muted-foreground mb-2">Beim Besuch dieser Website werden automatisch Daten erfasst, darunter:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                <li>Browsertyp & Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer-URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (gekürzt oder anonymisiert)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <span className="text-foreground">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. f DSGVO
              </p>
              
              <h3 className="font-medium mb-2 text-foreground">b) Cookies & Einwilligungsmanagement</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diese Website verwendet einen Cookie-Banner, bereitgestellt durch CookieYes, um rechtlich erforderliche Einwilligungen einzuholen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies werden erst gesetzt, wenn Besucher zugestimmt haben (Ausnahme: technisch notwendige Cookies).
              </p>
              <p className="text-muted-foreground mb-6">
                <span className="text-foreground">Rechtsgrundlage:</span><br />
                Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                Art. 6 Abs. 1 lit. f DSGVO (technische Notwendigkeit)
              </p>
              
              <h3 className="font-medium mb-2 text-foreground">c) Kontaktformular & E-Mail-Anfragen</h3>
              <p className="text-muted-foreground mb-2">Wenn du uns per Kontaktformular kontaktierst, werden folgende Daten verarbeitet:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Nachricht / Anfrageinhalt</li>
                <li>Optional: Telefonnummer</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diese Daten nutzen wir ausschließlich zur Bearbeitung deiner Anfrage.
              </p>
              <p className="text-muted-foreground mb-4">
                <span className="text-foreground">Rechtsgrundlage:</span><br />
                Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anbahnung)<br />
                Art. 6 Abs. 1 lit. a DSGVO (Einwilligung – falls freiwillige Angaben)
              </p>
              
              <h4 className="text-sm font-medium mb-2 text-foreground/80">Zukünftige Verarbeitung über n8n / KI-Systeme</h4>
              <p className="text-muted-foreground leading-relaxed">
                Sollte das Kontaktformular zukünftig in Automationssysteme (z. B. n8n, OpenAI, API-Dienste) eingebunden werden, erfolgt dies ausschließlich bei Vorliegen deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und im Rahmen eines AVV mit den jeweiligen Dienstleistern.
              </p>
            </section>

            {/* 5. Google Analytics */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">5. Webanalyse – Google Analytics 4</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diese Website verwendet Google Analytics 4.
              </p>
              <p className="text-muted-foreground mb-4">
                <span className="text-foreground">Dienstanbieter:</span><br />
                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Analytics verwendet Cookies nur nach deiner Einwilligung über den Cookie-Banner.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                IP-Anonymisierung ist aktiviert. Übermittlungen in die USA erfolgen auf Grundlage von Standardvertragsklauseln der EU.
              </p>
              <p className="text-muted-foreground mb-4">
                <span className="text-foreground">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Du kannst deine Einwilligung jederzeit widerrufen über den Cookie-Banner.
              </p>
            </section>

            {/* 6. KI-Dienste */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">6. KI-Dienste & Automatisierungsplattformen (OpenAI, n8n)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Für bestimmte Dienstleistungen von Kubrix kann die Verarbeitung personenbezogener Daten über KI- oder Automationsplattformen erforderlich sein.
              </p>
              <p className="text-muted-foreground mb-2">Mögliche Dienstleister:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                <li>OpenAI, L.L.C. (USA)</li>
                <li>n8n GmbH</li>
                <li>API-basierte Drittanbieter</li>
              </ul>
              <p className="text-muted-foreground mb-2">Eine solche Verarbeitung erfolgt nur:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>nach ausdrücklicher Einwilligung (Art. 6 Abs. 1 lit. a DSGVO),</li>
                <li>im Rahmen eines Vertrages oder einer Anbahnung (Art. 6 Abs. 1 lit. b DSGVO),</li>
                <li>auf Basis eines Auftragsverarbeitungsvertrages,</li>
                <li>mit geeigneten Garantien für Datenübertragung in Drittländer (Standardvertragsklauseln der EU).</li>
              </ul>
            </section>

            {/* 7. Deine Rechte */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">7. Rechte der betroffenen Person</h2>
              <p className="text-muted-foreground mb-4">Du hast jederzeit das Recht auf:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                <li>Auskunft (Art. 15 DSGVO)</li>
                <li>Berichtigung (Art. 16)</li>
                <li>Löschung (Art. 17)</li>
                <li>Einschränkung der Verarbeitung (Art. 18)</li>
                <li>Widerspruch (Art. 21)</li>
                <li>Datenübertragbarkeit (Art. 20)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground">Beschwerderecht bei der Aufsichtsbehörde:</span><br />
                Berliner Beauftragte für Datenschutz und Informationsfreiheit.
              </p>
            </section>

            {/* 8. Widerruf */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">8. Widerruf von Einwilligungen</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Du kannst jede Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Dies umfasst u. a.:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                <li>Google Analytics</li>
                <li>Kontaktformular-Verarbeitung</li>
                <li>KI-basierte Datenverarbeitung</li>
              </ul>
              <p className="text-muted-foreground mb-2">Widerruf über:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>den Cookie-Banner</li>
                <li>eine einfache E-Mail an:{" "}
                  <a href="mailto:eliasbaumgartner@outlook.com" className="text-primary hover:underline">
                    eliasbaumgartner@outlook.com
                  </a>
                </li>
              </ul>
            </section>

            {/* 9. Datenspeicherdauer */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">9. Datenspeicherdauer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Daten werden nur so lange gespeichert, wie für die jeweilige Zweckbestimmung erforderlich oder gesetzlich vorgeschrieben.
              </p>
            </section>

            {/* 10. Aktualisierung */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">10. Aktualisierung der Datenschutzerklärung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Datenschutzerklärung wird bei Bedarf angepasst, um sie aktuellen rechtlichen Vorgaben oder technischen Veränderungen anzupassen.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;
