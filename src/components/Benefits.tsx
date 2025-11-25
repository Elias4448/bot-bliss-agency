import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Zeit sparen",
    description: "Automatisieren Sie zeitraubende, repetitive Aufgaben und gewinnen Sie wertvolle Zeit für strategische Entscheidungen."
  },
  {
    title: "Kosten reduzieren",
    description: "Senken Sie Betriebskosten durch effiziente Prozesse und intelligente Automatisierung."
  },
  {
    title: "Fehler minimieren",
    description: "KI-gestützte Prozesse arbeiten präzise und zuverlässig – für weniger Fehler und höhere Qualität."
  },
  {
    title: "Skalierbarkeit",
    description: "Wachsen Sie ohne Grenzen. Unsere Lösungen skalieren mit Ihrem Unternehmen."
  },
  {
    title: "Wettbewerbsvorteil",
    description: "Bleiben Sie der Konkurrenz voraus mit modernster KI-Technologie."
  },
  {
    title: "24/7 Verfügbarkeit",
    description: "Ihre automatisierten Systeme arbeiten rund um die Uhr – ohne Pause."
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Warum mit uns <span className="text-gradient">arbeiten?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Wir kombinieren technische Expertise mit tiefem Verständnis für Geschäftsprozesse. 
              Das Ergebnis: Lösungen, die wirklich funktionieren.
            </p>
            
            <div className="space-y-6">
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
          </div>
          
          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="aspect-square rounded-3xl glass border border-white/20 p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/40 to-secondary/40 animate-pulse" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
