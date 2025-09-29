import { Button } from "./ui/button";
import { Phone, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold">JM</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">Julie Martin</h1>
            <p className="text-sm text-muted-foreground">Agent Immobilier</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#biens" className="text-foreground hover:text-accent transition-colors">Nos Biens</a>
          <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
          <a href="#avis" className="text-foreground hover:text-accent transition-colors">Avis Clients</a>
          <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-3">
          <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>06 12 34 56 78</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>julie@immobilier.fr</span>
            </div>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            Estimation gratuite
          </Button>
        </div>
      </div>
    </header>
  );
}