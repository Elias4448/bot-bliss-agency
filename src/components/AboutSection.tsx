import { CheckCircle2 } from "lucide-react";
const trustPoints = [{
  title: "Klare Lösungen statt Komplexität",
  description: "Wir übersetzen KI in sofort nutzbare Geschäftsprozesse."
}, {
  title: "Technische Umsetzung inklusive",
  description: "Beratung, Entwicklung und Integration aus einer Hand."
}, {
  title: "Auf Ergebnisse fokussiert",
  description: "Entlastung der Mitarbeiter, geringere Kosten, messbare Prozessverbesserungen."
}];
export const AboutSection = () => {
  return <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Über <span className="text-gradient">Kubrix</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Wir helfen Unternehmen, mit KI und Automatisierung spürbar effizienter zu werden – schnell, pragmatisch und messbar.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {trustPoints.map((point, index) => <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-card/30 border border-border/30 backdrop-blur-sm">
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  {point.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};