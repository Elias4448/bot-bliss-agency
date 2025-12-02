import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
export const Hero = () => {
  return <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">KI-Telefonassistenten & Automatisierungen, die Ihr Team spürbar entlasten.</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 font-sans">
          <span className="text-gradient">Mehr Effizienz,   </span>
          <span className="text-popover-foreground"> weniger Aufwand</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">Wir bauen KI-Telefonassistenten und Automationslösungen, die Zeit sparen & Kosten senken. Entlasten Sie Ihre Mitarbeiter mit intelligenten KI-Prozessen – ohne Mehraufwand.</p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button variant="hero" size="xl" className="group">
            Kostenloses Beratungsgespräch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-in fade-in duration-700 delay-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>24/7 verfügbar</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>DSGVO-konform</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>Individuell entwickelt</span>
          </div>
        </div>
      </div>
    </section>;
};
