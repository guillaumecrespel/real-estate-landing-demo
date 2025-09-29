import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  initials: string;
  rating: number;
  comment: string;
  location: string;
}

export function TestimonialCard({ name, initials, rating, comment, location }: TestimonialCardProps) {
  return (
    <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-semibold">
            {initials}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h4 className="font-semibold text-foreground">{name}</h4>
              <span className="text-sm text-muted-foreground">• {location}</span>
            </div>
            <div className="flex items-center space-x-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating 
                      ? "text-yellow-400 fill-current" 
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              "{comment}"
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}