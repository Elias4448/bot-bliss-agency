import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass border border-white/20 rounded-2xl px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline">AI Agentur</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#leistungen" className="text-sm font-medium hover:text-primary transition-colors">
              Leistungen
            </a>
            <a href="#vorteile" className="text-sm font-medium hover:text-primary transition-colors">
              Vorteile
            </a>
            <a href="#kontakt" className="text-sm font-medium hover:text-primary transition-colors">
              Kontakt
            </a>
          </div>
          
          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button variant="hero" size="default" className="hidden sm:inline-flex">
              Jetzt starten
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
