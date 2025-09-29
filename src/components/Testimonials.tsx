import { TestimonialCard } from "./TestimonialCard";
import { Badge } from "./ui/badge";
import { Star, Shield } from "lucide-react";

const testimonials = [
  {
    name: "Marie D.",
    initials: "MD",
    rating: 5,
    comment: "Julie a vendu notre appartement en 3 semaines seulement ! Son expertise et son accompagnement ont été parfaits du début à la fin.",
    location: "Neuilly-sur-Seine"
  },
  {
    name: "Thomas L.",
    initials: "TL",
    rating: 5,
    comment: "Estimation très précise et service premium. Julie comprend vraiment les enjeux du marché local et sait mettre en valeur les biens.",
    location: "Boulogne-Billancourt"
  },
  {
    name: "Sophie R.",
    initials: "SR",
    rating: 5,
    comment: "Professionnalisme exemplaire ! Julie nous a trouvé l'acheteur idéal et a négocié au mieux nos intérêts. Je recommande vivement.",
    location: "Saint-Cloud"
  },
  {
    name: "Pierre M.",
    initials: "PM",
    rating: 5,
    comment: "Une approche très humaine et personnalisée. Julie prend le temps d'écouter et de comprendre nos besoins. Résultat au-delà de nos attentes.",
    location: "Issy-les-Moulineaux"
  },
  {
    name: "Isabelle C.",
    initials: "IC",
    rating: 5,
    comment: "Vendu plus cher que prévu grâce aux conseils avisés de Julie. Son réseau et sa connaissance du marché font la différence.",
    location: "Sèvres"
  },
  {
    name: "Laurent B.",
    initials: "LB",
    rating: 5,
    comment: "Transaction rapide et sans stress. Julie gère tout de A à Z avec une grande transparence. Un vrai plus dans ce secteur.",
    location: "Levallois-Perret"
  }
];

export function Testimonials() {
  return (
    <section id="avis" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            Avis Clients
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            La satisfaction client au cœur de notre métier
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Découvrez les témoignages de nos clients qui nous font confiance
          </p>

          {/* Note Google */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-3 bg-white rounded-xl px-6 py-4 shadow-md">
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-bold text-foreground">4.9</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Note Google</div>
                <div className="text-sm text-muted-foreground">150+ avis clients</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white rounded-xl px-6 py-4 shadow-md">
              <Shield className="w-8 h-8 text-accent" />
              <div className="text-left">
                <div className="font-semibold text-foreground">Vérifié sur Google</div>
                <div className="text-sm text-muted-foreground">Avis certifiés</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grille de témoignages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}