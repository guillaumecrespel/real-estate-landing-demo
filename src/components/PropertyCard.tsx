import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Heart, MapPin, Maximize, Bed, Bath } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PropertyCardProps {
  id: number;
  image: string;
  price: string;
  type: string;
  surface: string;
  rooms: number;
  bathrooms: number;
  location: string;
  badge?: "Exclusivité" | "Coup de cœur" | "Nouveau";
}

export function PropertyCard({ 
  image, 
  price, 
  type, 
  surface, 
  rooms, 
  bathrooms,
  location, 
  badge 
}: PropertyCardProps) {
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-xl">
      <div className="relative overflow-hidden">
        <ImageWithFallback 
          src={image}
          alt={`${type} - ${location}`}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {badge && (
          <Badge 
            className={`absolute top-3 left-3 ${
              badge === "Exclusivité" ? "bg-accent text-white" :
              badge === "Coup de cœur" ? "bg-red-500 text-white" :
              "bg-green-500 text-white"
            }`}
          >
            {badge}
          </Badge>
        )}
        
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group">
          <Heart className="w-4 h-4 text-muted-foreground group-hover:text-red-500 transition-colors" />
        </button>

        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg">
          <span className="text-lg font-bold text-foreground">{price}</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-1">{type}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Maximize className="w-4 h-4 mr-1" />
                {surface}
              </div>
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                {rooms}
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                {bathrooms}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}