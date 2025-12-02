import { MessageSquare, Target, Cog, Headphones } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Kostenloses Erstgespräch",
    description: "Wir analysieren Ihre Situation und identifizieren konkrete Potenziale für KI und Automatisierung.",
  },
  {
    icon: Target,
    title: "2. Workshop",
    description: "Gemeinsam definieren wir Ziele, Anforderungen und priorisierte Use Cases. Sie erhalten ein klares Konzept und einen Projektfahrplan.",
  },
  {
    icon: Cog,
    title: "3. Implementierung",
    description: "Wir entwickeln Ihre KI-Lösung, integrieren sie in Ihre Systeme und begleiten Sie durch die Testphase.",
  },
  {
    icon: Headphones,
    title: "4. Betrieb & Support",
    description: "Auf Wunsch übernehmen wir Hosting, Monitoring und Weiterentwicklung Ihrer KI-Systeme.",
  },
];

export const Process = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            So läuft die <span className="text-gradient">Zusammenarbeit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            „Ein klarer Prozess. Ein fester Ansprechpartner. Messbare Ergebnisse."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="glass border border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
