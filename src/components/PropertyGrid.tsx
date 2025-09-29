"use client";

import { useState } from "react";
import { PropertyCard } from "./PropertyCard";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1706809019104-02d83b4541ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc1OTE2MDA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "750 000 €",
    type: "Maison moderne",
    surface: "160 m²",
    rooms: 5,
    bathrooms: 3,
    location: "Neuilly-sur-Seine",
    badge: "Exclusivité" as const,
    priceValue: 750000,
    propertyType: "maison",
    area: "neuilly"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1603072819161-e864800276cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBraXRjaGVufGVufDF8fHx8MTc1OTE0MzE1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "480 000 €",
    type: "Appartement T4",
    surface: "95 m²",
    rooms: 4,
    bathrooms: 2,
    location: "Boulogne-Billancourt",
    badge: "Coup de cœur" as const,
    priceValue: 480000,
    propertyType: "appartement",
    area: "boulogne"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1635006459494-c9b9665a666e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaG91c2UlMjBleHRlcmlvcnxlbnwxfHx8fDE3NTkxMjUzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "1 200 000 €",
    type: "Villa de prestige",
    surface: "250 m²",
    rooms: 7,
    bathrooms: 4,
    location: "Saint-Cloud",
    priceValue: 1200000,
    propertyType: "maison",
    area: "saint-cloud"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc1OTA4NTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "650 000 €",
    type: "Duplex lumineux",
    surface: "120 m²",
    rooms: 5,
    bathrooms: 2,
    location: "Issy-les-Moulineaux",
    badge: "Nouveau" as const,
    priceValue: 650000,
    propertyType: "appartement",
    area: "issy"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMGV4dGVyaW9yJTIwcG9vbHxlbnwxfHx8fDE3NTkxNjAxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "2 100 000 €",
    type: "Villa avec piscine",
    surface: "400 m²",
    rooms: 8,
    bathrooms: 5,
    location: "Sèvres",
    badge: "Exclusivité" as const,
    priceValue: 2100000,
    propertyType: "maison",
    area: "sevres"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBiYWxjb255fGVufDF8fHx8MTc1OTE2MDEzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "390 000 €",
    type: "Appartement T3",
    surface: "70 m²",
    rooms: 3,
    bathrooms: 1,
    location: "Levallois-Perret",
    priceValue: 390000,
    propertyType: "appartement",
    area: "levallois"
  }
];

export function PropertyGrid() {
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [areaFilter, setAreaFilter] = useState<string>("all");

  const filteredProperties = properties.filter(property => {
    const matchesPrice = priceFilter === "all" || 
      (priceFilter === "0-500000" && property.priceValue <= 500000) ||
      (priceFilter === "500000-1000000" && property.priceValue > 500000 && property.priceValue <= 1000000) ||
      (priceFilter === "1000000+" && property.priceValue > 1000000);
    
    const matchesType = typeFilter === "all" || property.propertyType === typeFilter;
    const matchesArea = areaFilter === "all" || property.area === areaFilter;
    
    return matchesPrice && matchesType && matchesArea;
  });

  return (
    <section id="biens" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            Nos Biens Exclusifs
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Découvrez nos propriétés d'exception
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une sélection rigoureuse de biens immobiliers premium dans les meilleurs quartiers
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Select value={priceFilter} onValueChange={setPriceFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Tous les prix" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les prix</SelectItem>
              <SelectItem value="0-500000">Jusqu'à 500k €</SelectItem>
              <SelectItem value="500000-1000000">500k € - 1M €</SelectItem>
              <SelectItem value="1000000+">Plus de 1M €</SelectItem>
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Type de bien" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les types</SelectItem>
              <SelectItem value="appartement">Appartement</SelectItem>
              <SelectItem value="maison">Maison</SelectItem>
            </SelectContent>
          </Select>

          <Select value={areaFilter} onValueChange={setAreaFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Quartier" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les quartiers</SelectItem>
              <SelectItem value="neuilly">Neuilly-sur-Seine</SelectItem>
              <SelectItem value="boulogne">Boulogne-Billancourt</SelectItem>
              <SelectItem value="saint-cloud">Saint-Cloud</SelectItem>
              <SelectItem value="issy">Issy-les-Moulineaux</SelectItem>
              <SelectItem value="sevres">Sèvres</SelectItem>
              <SelectItem value="levallois">Levallois-Perret</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Grille de propriétés */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Aucun bien ne correspond à vos critères.</p>
          </div>
        )}

        <div className="text-center">
          <Button variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white">
            Voir tous nos biens
          </Button>
        </div>
      </div>
    </section>
  );
}