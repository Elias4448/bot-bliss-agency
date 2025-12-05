import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logoKubrix from "@/assets/kubrix-logo-new.png";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToHome = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate("/");
    }
  };

  const handleNavClick = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate("/" + hash);
    }
  };

  return <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass border border-white/20 rounded-2xl px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <button onClick={goToHome} className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src={logoKubrix} 
              alt="Kubrix Logo" 
              className="h-7 w-auto sm:h-9"
            />
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#leistungen" onClick={handleNavClick("#leistungen")} className="font-medium hover:text-primary transition-colors text-lg">
              Leistungen
            </a>
            <a href="#vorteile" onClick={handleNavClick("#vorteile")} className="font-medium hover:text-primary transition-colors text-lg">
              Vorteile
            </a>
            <a href="#ueber-uns" onClick={handleNavClick("#ueber-uns")} className="font-medium hover:text-primary transition-colors text-lg">
              Über uns
            </a>
            <a href="#kontakt" onClick={handleNavClick("#kontakt")} className="font-medium hover:text-primary transition-colors text-lg">
              Kontakt
            </a>
          </div>
          
          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button 
              variant="hero" 
              size="default" 
              className="hidden sm:inline-flex"
              data-cal-namespace="kubrix"
              data-cal-link="eliasbaumgartner/20-minuten-analysegesprach-automatisierungspotenziale-entdecken"
              data-cal-config='{"layout":"month_view"}'
            >
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
