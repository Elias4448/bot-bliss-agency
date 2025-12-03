import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const PhoneDemo = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber.trim()) {
      toast({
        title: "Bitte geben Sie Ihre Telefonnummer ein",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call - replace with actual implementation
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Testanruf wird eingeleitet",
        description: "Sie erhalten in Kürze einen Anruf von unserem KI-Assistenten.",
      });
      setPhoneNumber("");
    }, 1500);
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <Card className="p-10 md:p-12 bg-card border border-border/50 shadow-lg">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Testen Sie Ihren KI-Assistenten in <span className="text-gradient">10 Sekunden</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Erleben Sie selbst, wie natürlich und zuverlässig unser KI-Telefonassistent klingt.
              Geben Sie Ihre Nummer ein und lassen Sie sich direkt anrufen – unverbindlich und DSGVO-konform.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="tel"
                placeholder="Telefonnummer eingeben"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 h-12 text-base bg-background border-border focus:border-primary"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="h-12 px-6 text-base font-medium"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Wird eingeleitet...
                  </span>
                ) : (
                  <>
                    <Phone className="w-4 h-4 mr-2" />
                    Jetzt Testanruf erhalten
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Trust Element */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Ihre Nummer wird nicht gespeichert. Der Anruf dient ausschließlich der Demonstration.
          </p>
        </Card>
      </div>
    </section>
  );
};
