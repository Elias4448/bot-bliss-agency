import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
export const CTA = () => {
  return <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="glass border border-white/20 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(circle at center, hsl(250 95% 63% / 0.3) 0%, transparent 70%)'
        }} />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Bereit für die <span className="text-gradient">KI-Automation Ihrer Prozesse?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, wie KI und Automatisierung 
              Ihr Unternehmen voranbringen können.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" className="group">
                <Calendar className="w-5 h-5" />
                Termin vereinbaren
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl">
                Kontakt aufnehmen
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground">
              Kostenlose Erstberatung • Keine Verpflichtungen • 100% unverbindlich
            </p>
          </div>
        </div>
      </div>
    </section>;
};