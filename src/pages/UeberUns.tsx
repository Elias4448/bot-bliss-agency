import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundBlobs } from "@/components/BackgroundBlobs";
import { DotGrid } from "@/components/DotGrid";

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <DotGrid />
      <BackgroundBlobs />
      
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero Section */}
          <section className="mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Über <span className="text-primary">Kubrix</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Wir sind eine spezialisierte Agentur für KI-Automatisierung und intelligente Geschäftsprozesse. 
              Mit modernsten Technologien helfen wir Unternehmen, effizienter zu arbeiten und sich auf das Wesentliche zu konzentrieren.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Unsere Mission</h2>
            <div className="glass border border-white/10 rounded-2xl p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Das Team</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass border border-white/10 rounded-2xl p-8">
                <div className="w-20 h-20 rounded-full bg-primary/20 mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">EB</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Elias Baumgartner</h3>
                <p className="text-primary text-sm mb-3">Gründer & Geschäftsführer</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              
              <div className="glass border border-white/10 rounded-2xl p-8">
                <div className="w-20 h-20 rounded-full bg-secondary/20 mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary">+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Platzhalter</h3>
                <p className="text-secondary text-sm mb-3">Position</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Unsere Werte</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="glass border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-semibold mb-2">Präzision</h3>
                <p className="text-muted-foreground text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              
              <div className="glass border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
              
              <div className="glass border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-semibold mb-2">Partnerschaft</h3>
                <p className="text-muted-foreground text-sm">
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="glass border border-white/10 rounded-2xl p-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Bereit für den nächsten Schritt?</h2>
              <p className="text-muted-foreground mb-6">
                Lassen Sie uns gemeinsam Ihre Prozesse automatisieren.
              </p>
              <button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors"
                data-cal-namespace="kubrix"
                data-cal-link="eliasbaumgartner/20-minuten-analysegesprach-automatisierungspotenziale-entdecken"
                data-cal-config='{"layout":"month_view"}'
              >
                Kostenloses Erstgespräch vereinbaren
              </button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UeberUns;
