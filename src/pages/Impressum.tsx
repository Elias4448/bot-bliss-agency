import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundBlobs } from "@/components/BackgroundBlobs";
import { DotGrid } from "@/components/DotGrid";

const Impressum = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundBlobs />
      <DotGrid />
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Impressum</h1>
          
          <div className="glass border border-white/10 rounded-2xl p-8 md:p-12 space-y-10">
            {/* Angaben gemäß § 5 TMG */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-1 text-muted-foreground">
                <p className="font-medium text-foreground">Kubrix – Elias Baumgartner (Einzelunternehmen)</p>
                <p>Schivelbeiner Str. 32</p>
                <p>10439 Berlin</p>
                <p>Deutschland</p>
              </div>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Kontakt</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="text-foreground">Telefon:</span>{" "}
                  <a href="tel:+4915159143332" className="hover:text-primary transition-colors">
                    +49 (0) 151 59 14 33 32
                  </a>
                </p>
                <p>
                  <span className="text-foreground">E-Mail:</span>{" "}
                  <a href="mailto:eliasbaumgartner@outlook.com" className="hover:text-primary transition-colors">
                    eliasbaumgartner@outlook.com
                  </a>
                </p>
              </div>
            </section>

            {/* Umsatzsteuer-ID */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Umsatzsteuer-ID</h2>
              <p className="text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              </p>
              <p className="font-medium mt-2">DE369357931</p>
            </section>

            {/* Verantwortlich für den Inhalt */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <div className="space-y-1 text-muted-foreground">
                <p className="font-medium text-foreground">Elias Baumgartner</p>
                <p>Schivelbeiner Str. 32</p>
                <p>10439 Berlin</p>
              </div>
            </section>

            {/* Haftung für Inhalte */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Haftung für Inhalte</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten verantwortlich.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </section>

            {/* Haftung für Links */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Haftung für Links</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Für diese fremden Inhalte übernehmen wir keine Gewähr.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
              </p>
            </section>

            {/* Verbraucherstreitbeilegung */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Verbraucherstreitbeilegung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
