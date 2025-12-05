import { MessageSquare, Target, Cog, Headphones } from "lucide-react";
const steps = [{
  icon: MessageSquare,
  title: "1. Kostenloses Erstgespräch",
  description: "Wir verstehen Ihre Situation, analysieren Abläufe und identifizieren konkrete Automatisierungspotenziale."
}, {
  icon: Target,
  title: "2. Workshop",
  description: "Gemeinsam definieren wir Ziele, Anforderungen und priorisierte Use Cases. Sie erhalten ein klares Konzept und einen Projektfahrplan."
}, {
  icon: Cog,
  title: "3. Implementierung",
  description: "Wir entwickeln Ihre Lösung, integrieren sie in Ihre Systeme und begleiten Sie durch die Testphase – inklusive Änderungswünschen."
}, {
  icon: Headphones,
  title: "4. Betrieb & Support",
  description: "Auf Wunsch übernehmen wir Hosting, Monitoring und Weiterentwicklung Ihrer KI-Systeme – sicher, zuverlässig und vollständig betreut."
}];
export const Process = () => {
  return <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            So läuft die <span className="text-gradient">Zusammenarbeit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ein klar strukturierter Prozess. Ein fester Ansprechpartner. Messbare Ergebnisse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const isOptional = index === 3;
            return (
              <div key={index} className="group relative">
                <div className={`rounded-2xl p-6 h-full transition-all duration-300 ${
                  isOptional 
                    ? 'bg-white/10 border border-white/15 hover:border-white/25' 
                    : 'glass border border-white/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10'
                }`}>
                  {isOptional && (
                    <span className="absolute -top-3 right-4 px-3 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-full bg-primary/15 text-primary/80 border border-primary/25">
                      Optional
                    </span>
                  )}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                    isOptional
                      ? 'bg-gradient-to-br from-primary/10 to-accent/10'
                      : 'bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30'
                  }`}>
                    <step.icon className={`w-7 h-7 ${isOptional ? 'text-primary/60' : 'text-primary'}`} />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${isOptional ? 'text-foreground/70' : ''}`}>{step.title}</h3>
                  <p className={`leading-relaxed ${isOptional ? 'text-muted-foreground/60' : 'text-muted-foreground'}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>;
};