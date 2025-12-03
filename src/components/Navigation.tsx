import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logoKubrix from "@/assets/logo-kubrix.png";

export const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass border border-white/20 rounded-2xl px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center gap-1 hover:opacity-80 transition-opacity">
            <img 
              src={logoKubrix} 
              alt="Kubrix Logo" 
              className="h-8 w-auto sm:h-10"
            />
            <span className="font-bold text-xl hidden sm:inline">Kubrix</span>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#leistungen" className="font-medium hover:text-primary transition-colors text-lg">
              Leistungen
            </a>
            <a href="#vorteile" className="font-medium hover:text-primary transition-colors text-lg">
              Vorteile
            </a>
            <a href="#kontakt" className="font-medium hover:text-primary transition-colors text-lg">
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
    </nav>;
};