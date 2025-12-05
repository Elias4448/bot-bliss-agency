import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import KontaktForm from "./KontaktForm";
export const CTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="glass border border-white/20 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(circle at center, hsl(250 95% 63% / 0.3) 0%, transparent 70%)'
        }} />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Bereit für <span className="text-gradient">effizientere Prozesse?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, welche Automatisierungen Sie sofort entlasten und welche Ergebnisse realistisch sind.
            </p>
            
            <div className="flex flex-col gap-5 justify-center items-center">
              <Button variant="hero" size="xl" className="group" data-cal-namespace="kubrix" data-cal-link="eliasbaumgartner/20-minuten-analysegesprach-automatisierungspotenziale-entdecken" data-cal-config='{"layout":"month_view"}'>
                <Calendar className="w-5 h-5" />
                Kostenloses Erstgespräch  
              </Button>

              {/* Secondary CTA Button */}
              <button onClick={() => setIsOpen(true)} className="px-8 py-3 rounded-xl border-2 border-[#A78BFA] text-[#5B21B6] bg-transparent font-medium text-base hover:bg-[#A78BFA]/10 hover:border-[#8B5CF6] transition-all duration-300 inline-flex items-center gap-2">
                Anfrage ohne Termin senden
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <p className="mt-10 text-sm text-muted-foreground">100 % unverbindlich • Klare Empfehlungen in nur 20 Minuten • DSGVO-konform</p>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md bg-white dark:bg-background rounded-2xl shadow-xl border-0 p-0 overflow-hidden">
          <div className="p-6">
            <DialogHeader className="pb-4">
              <DialogTitle className="text-xl font-semibold text-foreground">
                Unverbindliche Anfrage
              </DialogTitle>
            </DialogHeader>
            
            <KontaktForm onSubmitted={() => setIsOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </section>;
};
