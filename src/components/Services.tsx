import { Phone, Workflow, Lightbulb, Server } from "lucide-react";
import { Card } from "@/components/ui/card";
const services = [{
  icon: Lightbulb,
  title: "Beratung, Konzeption & Implementierung",
  description: "Wir analysieren Ihre Abläufe und entwickeln Automationen, die messbar Zeit sparen, Fehler reduzieren und die Produktivität Ihres Teams erhöhen."
}, {
  icon: Phone,
  title: "KI-Telefonassistenten & Voice-Automation",
  description: "Intelligente KI-Assistenten übernehmen Anrufe, qualifizieren Leads, beantworten Kundenfragen und koordinieren Termine – zuverlässig, skalierbar und rund um die Uhr."
}, {
  icon: Workflow,
  title: "Workflow-Automatisierung & API-Integration",
  description: "Wir verbinden Systeme, automatisieren wiederkehrende Aufgaben und schaffen reibungslose Prozesse mit maximaler Effizienz."
}, {
  icon: Server,
  title: "Managed Hosting & Support",
  description: "Wir betreiben, überwachen und erweitern Ihre KI-Systeme – sicher, zuverlässig und vollständig betreut."
}];
export const Services = () => {
  return <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Unsere <span className="text-gradient">Leistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Von der Analyse bis zur fertigen KI-Lösung – wir automatisieren Prozesse.</p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => <Card key={index} className="p-8 glass border-white/20 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>)}
        </div>
      </div>
    </section>;
};