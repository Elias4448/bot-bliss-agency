import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundBlobs } from "@/components/BackgroundBlobs";
import { DotGrid } from "@/components/DotGrid";

const AGB = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <DotGrid />
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-muted-foreground mb-12">Kubrix – Elias Baumgartner</p>
          
          <div className="glass border border-white/10 rounded-2xl p-8 md:p-12 space-y-10">
            {/* 1. Geltungsbereich */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">1. Geltungsbereich</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>1.1. Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Kubrix – Elias Baumgartner (nachfolgend „Dienstleister") und dem Kunden über Beratungsleistungen, KI-basierte Systeme, Workflow-Automatisierungen, Implementierungen sowie Managed-Hosting-Dienstleistungen.</p>
                <p>1.2. Abweichende Bedingungen des Kunden gelten nur, wenn sie ausdrücklich schriftlich bestätigt wurden.</p>
                <p>1.3. Diese AGB gelten ausschließlich für Unternehmer im Sinne des § 14 BGB.</p>
              </div>
            </section>

            {/* 2. Vertragsgegenstand */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">2. Vertragsgegenstand</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>2.1. Der Dienstleister erbringt Dienstleistungen insbesondere in den folgenden Bereichen:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Entwicklung und Integration von KI-Telefonassistenten und Voice-Automationslösungen</li>
                  <li>Konzeption und Umsetzung individueller Workflow-Automatisierungen</li>
                  <li>API-Integrationen und Prozessoptimierung</li>
                  <li>Beratungen, Workshops und technische Implementierungen</li>
                  <li>Betrieb, Monitoring und Support im Rahmen von Managed Hosting</li>
                </ul>
                <p>2.2. Umfang, Inhalt und Ziel der Leistungen ergeben sich aus dem jeweiligen Angebot, der Projektbeschreibung oder einer gesonderten Vereinbarung.</p>
                <p>2.3. Der Dienstleister schuldet keinen bestimmten wirtschaftlichen Erfolg, sondern die sorgfältige Erbringung der vereinbarten Leistungen.</p>
              </div>
            </section>

            {/* 3. Mitwirkungspflichten */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">3. Mitwirkungspflichten des Kunden</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>3.1. Der Kunde stellt alle für die Projektdurchführung erforderlichen Informationen, Daten, Zugänge und Systemberechtigungen rechtzeitig und vollständig bereit.</p>
                <p>3.2. Der Kunde gewährleistet die Funktionsfähigkeit seiner technischen Infrastruktur, insbesondere Telefonanlagen, CRM-Systeme, Server sowie API-Schnittstellen.</p>
                <p>3.3. Verzögert der Kunde notwendige Mitwirkungshandlungen, verschieben sich vereinbarte Fristen entsprechend; Mehraufwand wird gesondert berechnet.</p>
              </div>
            </section>

            {/* 4. Leistungsfristen */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">4. Leistungsfristen</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>4.1. Termine oder Fristen sind nur verbindlich, wenn sie ausdrücklich schriftlich vereinbart wurden.</p>
                <p>4.2. Verzögerungen durch höhere Gewalt, Ausfälle von Drittanbietern oder fehlende Kundenmitwirkung berechtigen den Dienstleister zur angemessenen Leistungsverschiebung.</p>
                <p>4.3. Schadensersatzansprüche aufgrund von Verzögerungen bestehen nur bei Vorsatz oder grober Fahrlässigkeit.</p>
              </div>
            </section>

            {/* 5. Vergütung */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">5. Vergütung</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>5.1. Die Vergütung ergibt sich aus dem individuellen Angebot oder der Projektvereinbarung.</p>
                <p>5.2. Zusätzliche Leistungen, die nicht im Angebot enthalten sind, werden nach Aufwand separat berechnet.</p>
                <p>5.3. Managed-Hosting-Pakete werden monatlich im Voraus abgerechnet und verlängern sich automatisch, sofern nichts anderes vereinbart ist.</p>
                <p>5.4. Alle Preise verstehen sich netto zuzüglich gesetzlicher Umsatzsteuer.</p>
              </div>
            </section>

            {/* 6. Managed Hosting & Support */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">6. Managed Hosting & Support</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>6.1. Der Dienstleister übernimmt im Rahmen des „Managed Hosting" insbesondere:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Betrieb, Hosting und Überwachung der bereitgestellten Automationen</li>
                  <li>Fehleranalyse und -behebung</li>
                  <li>Wartung, Updates und Optimierungen innerhalb der Paketgrenzen</li>
                </ul>
                <p>6.2. Leistungen, die über den vertraglichen Paketumfang hinausgehen, werden nach Aufwand gesondert vergütet.</p>
                <p>6.3. Der Dienstleister übernimmt keine Haftung für Ausfälle, Einschränkungen oder Schäden, die durch Systeme, Infrastruktur oder Drittanbieter des Kunden verursacht werden.</p>
                <p>6.4. Der Kunde ist dafür verantwortlich, sicherzustellen, dass eingesetzte Daten, Gesprächsregeln und KI-Anweisungen inhaltlich korrekt und rechtlich zulässig sind.</p>
              </div>
            </section>

            {/* 7. Nutzungsrechte */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">7. Nutzungsrechte & geistiges Eigentum</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>7.1. Alle vom Dienstleister erstellten Konzepte, Workflows, Skripte, KI-Logiken, Automationen und sonstigen Entwicklungen bleiben, sofern nicht anders vereinbart, geistiges Eigentum des Dienstleisters.</p>
                <p>7.2. Der Kunde erhält ein einfaches, nicht übertragbares Nutzungsrecht für die Dauer der Vertragslaufzeit bzw. der Bereitstellung des Systems.</p>
                <p>7.3. Eine Weitergabe, Vervielfältigung oder eigenständige Änderung der bereitgestellten Systeme ist ohne schriftliche Zustimmung des Dienstleisters nicht gestattet.</p>
              </div>
            </section>

            {/* 8. Haftung */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">8. Haftung</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>8.1. Der Dienstleister haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit.</p>
                <p>8.2. Bei leichter Fahrlässigkeit haftet der Dienstleister ausschließlich bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten). In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.</p>
                <p>8.3. Eine Haftung für entgangenen Gewinn, mittelbare Schäden, Folgeschäden, Datenverlust oder Schäden aufgrund fehlerhafter KI-Inhalte ist ausgeschlossen.</p>
                <p>8.4. Der Kunde bleibt inhaltlich verantwortlich für KI-Anweisungen, Gesprächsregeln, Weiterleitungslogiken, Telefonansagen und alle vom System erzeugten oder versendeten Inhalte.</p>
                <p>8.5. Der Dienstleister haftet nicht für Ausfälle oder Fehlfunktionen, die durch Drittanbieter (z. B. CRM-Systeme, Telefonprovider, API-Dienste) verursacht werden.</p>
              </div>
            </section>

            {/* 9. Datenschutz */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">9. Datenschutz & Vertraulichkeit</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>9.1. Beide Parteien verpflichten sich zur Einhaltung der geltenden Datenschutzgesetze, insbesondere der DSGVO.</p>
                <p>9.2. Der Dienstleister verarbeitet personenbezogene Daten ausschließlich im Rahmen der vereinbarten Leistungen.</p>
                <p>9.3. Vertrauliche Informationen dürfen ohne Zustimmung der anderen Partei nicht an Dritte weitergegeben werden.</p>
              </div>
            </section>

            {/* 10. Vertragslaufzeit */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">10. Vertragslaufzeit & Kündigung</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>10.1. Projektbezogene Leistungen enden automatisch nach Abschluss des Projekts.</p>
                <p>10.2. Managed-Hosting-Verträge haben, sofern nicht anders vereinbart, eine Mindestlaufzeit von 3 Monaten und verlängern sich danach automatisch um jeweils einen weiteren Monat.</p>
                <p>10.3. Die Kündigungsfrist beträgt 30 Tage zum Monatsende.</p>
                <p>10.4. Nach Vertragsende werden Automationen deaktiviert und Daten aus dem Hosting-System entfernt, sofern keine anderslautende Vereinbarung getroffen wurde.</p>
              </div>
            </section>

            {/* 11. Schlussbestimmungen */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">11. Schlussbestimmungen</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>11.1. Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.</p>
                <p>11.2. Sollte eine Bestimmung unwirksam sein, bleiben die übrigen Regelungen unberührt.</p>
                <p>11.3. Gerichtsstand ist – soweit zulässig – der Sitz des Dienstleisters.</p>
                <p>11.4. Es gilt ausschließlich deutsches Recht.</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AGB;
