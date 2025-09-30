import { Clock, Home, Star, Users } from "lucide-react";
import { EstimateDialog } from "./EstimateDialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-background via-secondary/30 to-muted/50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-accent/10 text-accent border-accent/20 px-3 py-1">
                ⭐ Agent N°1 dans le secteur
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Vendez <span className="text-accent">vite et bien</span>, au meilleur prix
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Expertise locale reconnue, estimation précise et accompagnement premium de A à Z. 
                Votre projet immobilier mérite une approche sur-mesure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <EstimateDialog />
              <Button variant="outline" size="lg" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-lg transition-all duration-200">
                Voir les biens en vente
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3 mx-auto">
                  <Home className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">Ventes réalisées</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3 mx-auto">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">45j</div>
                <div className="text-sm text-muted-foreground">Délai moyen</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3 mx-auto">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">4.9/5</div>
                <div className="text-sm text-muted-foreground">Note Google</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3 mx-auto">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Clients satisfaits</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1632131016411-0183bc4efdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTkwNzc0NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Julie Martin - Agent Immobilier"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Certifiée Premium</div>
                  <div className="text-sm text-muted-foreground">Réseau national</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}