import { Bot, Workflow, Zap, Brain, Database, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Bot,
    title: "KI-Assistenten",
    description: "Intelligente Chatbots und virtuelle Assistenten, die Ihre Kunden 24/7 betreuen und Anfragen automatisch bearbeiten."
  },
  {
    icon: Workflow,
    title: "Prozessautomatisierung",
    description: "Automatisierung wiederkehrender Aufgaben und Workflows für maximale Effizienz in Ihrem Unternehmen."
  },
  {
    icon: Brain,
    title: "KI-Integration",
    description: "Nahtlose Integration modernster KI-Modelle in Ihre bestehenden Systeme und Prozesse."
  },
  {
    icon: Zap,
    title: "API-Automatisierung",
    description: "Verbindung und Automatisierung verschiedener Tools und Plattformen für nahtlose Workflows."
  },
  {
    icon: Database,
    title: "Datenanalyse",
    description: "KI-gestützte Auswertung Ihrer Daten für bessere Entscheidungen und tiefere Einblicke."
  },
  {
    icon: MessageSquare,
    title: "Custom Solutions",
    description: "Individuelle KI-Lösungen perfekt zugeschnitten auf Ihre spezifischen Geschäftsanforderungen."
  }
];

export const Services = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Unsere <span className="text-gradient">Leistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Von der Beratung bis zur Implementierung – wir begleiten Sie auf Ihrem Weg zur digitalen Transformation
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 glass border-white/20 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
