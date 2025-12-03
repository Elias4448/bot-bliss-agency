import logoKubrix from "@/assets/logo-kubrix-lila.png";
import { useNavigate, useLocation } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToHome = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate("/");
    }
  };

  return <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <button onClick={goToHome} className="flex items-center gap-0.5 mb-4 hover:opacity-80 transition-opacity">
              <img 
                src={logoKubrix} 
                alt="Kubrix Logo" 
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl">Kubrix</span>
            </button>
            <p className="text-muted-foreground max-w-md">
              Ihre Experten für KI-Integration und Prozessautomatisierung. 
              Wir verwandeln komplexe Aufgaben in intelligente Lösungen.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/impressum" className="hover:text-primary transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</a></li>
              <li><a href="/agb" className="hover:text-primary transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© 2025 Kubrix.de. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>;
};