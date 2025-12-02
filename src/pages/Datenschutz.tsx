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
          
          <div className="glass border border-white/10 rounded-2xl p-8 md:p-12 space-y-10">
            {/* 1. Datenschutz auf einen Blick */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="font-medium mb-2 text-foreground">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst. Ausführliche Informationen zum Thema Datenschutz findest du in der folgenden Datenschutzerklärung.
              </p>
              
              <h3 className="font-medium mb-2 text-foreground">Datenerfassung auf dieser Website</h3>
              
              <h4 className="text-sm font-medium mb-1 text-foreground/80">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten kannst du dem Impressum dieser Website entnehmen.
              </p>
              
              <h4 className="text-sm font-medium mb-1 text-foreground/80">Wie erfassen wir deine Daten?</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Deine Daten werden zum einen dadurch erhoben, dass du uns diese mitteilst, z. B. durch die Eingabe in ein Kontaktformular. Andere Daten werden automatisch oder nach deiner Einwilligung beim Besuch der Website durch IT-Systeme erfasst (z. B. durch Cookies).
              </p>
              
              <h4 className="text-sm font-medium mb-1 text-foreground/80">Wofür nutzen wir deine Daten?</h4>
              <p className="text-muted-foreground leading-relaxed">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse deines Nutzerverhaltens verwendet werden.
              </p>
            </section>

            {/* 2. Hosting */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">2. Hosting und Content Delivery Networks (CDN)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unsere Website wird bei einem externen Dienstleister gehostet (Hosting-Anbieter). Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
              </p>
            </section>

            {/* 3. Allgemeine Hinweise */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="font-medium mb-2 text-foreground">Datenschutz</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wir nehmen den Schutz deiner persönlichen Daten sehr ernst und behandeln deine personenbezogenen Daten vertraulich sowie entsprechend der gesetzlichen Datenschutzvorschriften und dieser Datenschutzerklärung.
              </p>
              
              <h3 className="font-medium mb-2 text-foreground">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-muted-foreground mb-2">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="space-y-1 text-muted-foreground">
                <p><span className="text-foreground">Name:</span> Elias Baumgartner</p>
                <p><span className="text-foreground">Adresse:</span> Schivelbeiner Str. 32, 10439 Berlin</p>
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
            </section>

            {/* 4. Datenerfassung */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="font-medium mb-2 text-foreground">Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf deinem Endgerät gespeichert werden. Sie dienen dazu, die Website nutzerfreundlicher und effektiver zu machen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Du kannst deinen Browser so einstellen, dass du über das Setzen von Cookies informiert wirst und diese nur im Einzelfall erlaubst oder generell ausschließt.
              </p>
              
              <h3 className="font-medium mb-2 text-foreground">Kontaktformular</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wenn du uns per Kontaktformular Anfragen zukommen lässt, werden deine Angaben zur Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne deine Einwilligung weiter.
              </p>
            </section>

            {/* 5. Google Analytics */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">5. Google Analytics</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diese Website nutzt Google Analytics, einen Webanalysedienst von Google LLC („Google"). Google Analytics verwendet „Cookies", die eine Analyse deiner Nutzung der Website ermöglichen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die durch das Cookie erzeugten Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Wir haben die IP-Anonymisierung aktiviert, sodass deine IP-Adresse innerhalb der EU gekürzt wird.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Du kannst die Speicherung der Cookies durch eine entsprechende Einstellung deines Browsers verhindern. Zusätzlich kannst du die Erfassung der Daten durch Google Analytics deaktivieren, indem du das Browser-Add-on zur Deaktivierung von Google Analytics herunterlädst:{" "}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </p>
            </section>

            {/* 6. Deine Rechte */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">6. Deine Rechte</h2>
              <p className="text-muted-foreground mb-4">Dir stehen folgende Rechte bezüglich deiner Daten zu:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Auskunft über gespeicherte Daten</li>
                <li>Berichtigung falscher Daten</li>
                <li>Löschung deiner Daten, sofern keine gesetzlichen Pflichten dagegensprechen</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Widerspruch gegen die Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Falls du Fragen zum Datenschutz hast, kannst du uns jederzeit kontaktieren.
              </p>
            </section>

            {/* 7. Aktualisierung */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">7. Aktualisierung der Datenschutzerklärung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte rechtliche Anforderungen oder neue Funktionen auf unserer Website anzupassen.
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
