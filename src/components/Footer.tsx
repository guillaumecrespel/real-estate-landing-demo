import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Informations principales */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">JM</span>
              </div>
              <div>
                <h3 className="font-semibold">Julie Martin</h3>
                <p className="text-sm text-primary-foreground/70">Agent Immobilier</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Votre expert immobilier dans les Hauts-de-Seine. 
              Accompagnement premium pour vendre vite et bien.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>06 12 34 56 78</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>julie@immobilier.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>92 Hauts-de-Seine</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Estimation gratuite</li>
              <li>Vente immobilière</li>
              <li>Conseils en investissement</li>
              <li>Accompagnement personnalisé</li>
            </ul>
          </div>

          {/* CTA et réseaux sociaux */}
          <div className="space-y-4">
            <h4 className="font-semibold">Restez connecté</h4>
            <Button className="w-full bg-accent hover:bg-accent/90">
              Estimation gratuite
            </Button>
            <div className="flex space-x-3">
              <button className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
          <p>© 2024 Julie Martin Immobilier. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">RGPD</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}