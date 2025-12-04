import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, X, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
export const CTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: "Bitte füllen Sie alle Pflichtfelder aus",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns schnellstmöglich bei Ihnen."
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    setIsOpen(false);
    setIsSubmitting(false);
  };
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
                Kostenloses Erstgespräch buchen 
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
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input id="name" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} placeholder="Ihr Name" className="rounded-xl border-border/50 bg-muted/30 focus:bg-background" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-Mail-Adresse <span className="text-destructive">*</span>
                </Label>
                <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} placeholder="ihre@email.de" className="rounded-xl border-border/50 bg-muted/30 focus:bg-background" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  Ihre Nachricht / Ihr Anliegen
                </Label>
                <Textarea id="message" value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} placeholder="Optional: Beschreiben Sie kurz Ihr Anliegen..." rows={4} className="rounded-xl border-border/50 bg-muted/30 focus:bg-background resize-none" />
              </div>

              <Button type="submit" variant="outline" className="w-full rounded-xl h-12 font-medium" disabled={isSubmitting}>
                {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
              </Button>

              <p className="text-xs text-[#6B6B6B] text-center pt-2">
                Ihre Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet.
              </p>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </section>;
};