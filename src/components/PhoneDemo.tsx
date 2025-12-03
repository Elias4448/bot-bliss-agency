import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
const AnimatedOrb = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId: number;
    let time = 0;
    const draw = () => {
      time += 0.008;
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.35;
      ctx.clearRect(0, 0, width, height);

      // Create soft glow background
      const glowGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.5);
      glowGradient.addColorStop(0, 'rgba(200, 220, 255, 0.3)');
      glowGradient.addColorStop(0.5, 'rgba(180, 200, 240, 0.1)');
      glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = glowGradient;
      ctx.fillRect(0, 0, width, height);

      // Main orb gradient with shifting colors
      const orbGradient = ctx.createRadialGradient(centerX - radius * 0.3, centerY - radius * 0.3, 0, centerX, centerY, radius);
      const hue1 = 200 + Math.sin(time) * 20;
      const hue2 = 180 + Math.cos(time * 0.7) * 30;
      const hue3 = 220 + Math.sin(time * 0.5) * 25;
      orbGradient.addColorStop(0, `hsla(${hue1}, 60%, 95%, 0.9)`);
      orbGradient.addColorStop(0.3, `hsla(${hue2}, 50%, 85%, 0.8)`);
      orbGradient.addColorStop(0.6, `hsla(${hue3}, 40%, 75%, 0.7)`);
      orbGradient.addColorStop(1, `hsla(200, 30%, 65%, 0.5)`);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = orbGradient;
      ctx.fill();

      // Inner highlight for 3D effect
      const highlightGradient = ctx.createRadialGradient(centerX - radius * 0.4, centerY - radius * 0.4, 0, centerX - radius * 0.2, centerY - radius * 0.2, radius * 0.8);
      highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
      highlightGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
      highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = highlightGradient;
      ctx.fill();

      // Soft edge blur effect
      const edgeGradient = ctx.createRadialGradient(centerX, centerY, radius * 0.85, centerX, centerY, radius * 1.1);
      edgeGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      edgeGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
      edgeGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.1, 0, Math.PI * 2);
      ctx.fillStyle = edgeGradient;
      ctx.fill();
      animationId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  return <canvas ref={canvasRef} width={300} height={300} className="w-48 h-48 md:w-64 md:h-64" style={{
    filter: 'blur(1px)'
  }} />;
};
export const PhoneDemo = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      toast({
        title: "Bitte geben Sie Ihre Telefonnummer ein",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Testanruf wird eingeleitet",
        description: "Sie erhalten in Kürze einen Anruf von unserem KI-Assistenten."
      });
      setPhoneNumber("");
    }, 1500);
  };
  return <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight mx-0">
          Testen Sie unseren <span className="text-gradient">KI-Telefonassistenten</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12">Lust auf ein Praxisbeispiel? Testen Sie jetzt unsere KI in einem Anruf.</p>

        {/* Animated Orb */}
        

        {/* Input Card with Animated Border */}
        <div className="relative max-w-md mx-auto">
          {/* Animated gradient border */}
          <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient-flow_3s_linear_infinite] opacity-60" />
          
          {/* Card content */}
          <div className="relative bg-card rounded-2xl p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="tel" placeholder="Telefonnummer eingeben" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="h-12 text-base bg-muted/50 border-0 rounded-xl text-center placeholder:text-muted-foreground/60" />
              <Button type="submit" disabled={isLoading} className="w-full h-12 text-base font-medium rounded-xl bg-foreground text-background hover:bg-foreground/90">
                {isLoading ? <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    Wird eingeleitet...
                  </span> : "Jetzt Anruf erhalten"}
              </Button>
            </form>
          </div>
        </div>

        {/* Trust Element */}
        
      </div>
    </section>;
};