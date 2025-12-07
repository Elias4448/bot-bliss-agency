import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    title: "Zeit sparen",
    description: "Reduzieren Sie manuelle Aufgaben und gewinnen Sie wertvolle Arbeitszeit für Tätigkeiten, die wirklich voranbringen."
  },
  {
    title: "Kosten senken",
    description: "Effiziente KI-Prozesse reduzieren Betriebskosten – ohne zusätzlichen Personalaufwand."
  },
  {
    title: "Fehler reduzieren",
    description: "Standardisierte, KI-gesteuerte Abläufe sorgen für klare Ergebnisse und weniger Fehler."
  },
  {
    title: "Skalierbarkeit erhöhen",
    description: "Unsere Lösungen wachsen flexibel mit Ihrem Unternehmen – ohne Grenzen."
  },
  {
    title: "Wettbewerbsvorteile sichern",
    description: "Nutzen Sie moderne KI-Technologien und bleiben Sie Ihrer Konkurrenz einen Schritt voraus."
  },
  {
    title: "24/7 erreichbar bleiben",
    description: "KI-Assistenten übernehmen Aufgaben jederzeit – auch nachts, am Wochenende und bei hohem Anfragevolumen."
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Warum Unternehmen <span className="text-gradient">mit uns arbeiten</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wir schaffen Automatisierungen, die spürbare Ergebnisse liefern.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex gap-4 items-start group"
            >
              <div className="mt-1 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Bereit, diese Vorteile für Ihr Unternehmen zu nutzen?</p>
          <Button 
            variant="hero" 
            size="lg" 
            className="group"
            data-cal-namespace="kubrix"
            data-cal-link="eliasbaumgartner/20-minuten-analysegesprach-automatisierungspotenziale-entdecken"
            data-cal-config='{"layout":"month_view"}'
          >
            Jetzt Potenziale entdecken
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
