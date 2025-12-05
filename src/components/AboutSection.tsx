import { CheckCircle2 } from "lucide-react";
import founderImage from "@/assets/elias-baumgartner.jpg";
const trustPoints = [{
  title: "Klare Lösungen statt Komplexität",
  description: "KI in sofort nutzbare Geschäftsprozesse übersetzen."
}, {
  title: "Technische Umsetzung inklusive",
  description: "Beratung, Entwicklung und Integration aus einer Hand."
}, {
  title: "Auf Ergebnisse fokussiert",
  description: "Messbare Prozessverbesserungen und geringere Kosten."
}];
export const AboutSection = () => {
  return <section className="pt-24 pb-16 md:pt-32 md:pb-20 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-center">
          {/* Founder Image */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-border/30 shadow-lg">
              <img
                alt="Elias Baumgartner - Gründer & Geschäftsführer von Kubrix"
                className="w-full h-full object-cover object-top"
                src={founderImage}
              />
            </div>
            <div className="mt-4 text-center md:text-left">
              <h3 className="font-semibold text-foreground">Elias Baumgartner</h3>
              <p className="text-sm text-muted-foreground">Gründer & Geschäftsführer</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Über <span className="text-gradient">Kubrix</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl">Wir sind der Baustein, der Ihr Unternehmen durch KI und Automatisierung spürbar effizienter macht – schnell, pragmatisch und messbar. Unsere Mission: Unternehmern und Unternehmen zu helfen, Prozesse mit moderner Technologie zu vereinfachen und einen klaren Wettbewerbsvorteil zu erzielen.</p>

            <div className="space-y-3">
              {trustPoints.map((point, index) => <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-foreground">{point.title}:</span>
                    <span className="text-muted-foreground ml-1">{point.description}</span>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
