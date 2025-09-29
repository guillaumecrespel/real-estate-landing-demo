"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Ici, vous pourriez envoyer les données à votre backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            Contact
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Obtenez votre estimation gratuite
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Remplissez ce formulaire et je vous recontacte dans les 24h pour une estimation personnalisée
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="space-y-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Téléphone</p>
                    <p className="text-muted-foreground">06 12 34 56 78</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">julie@immobilier.fr</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Agence</p>
                    <p className="text-muted-foreground">92 Hauts-de-Seine</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Horaires</p>
                    <p className="text-muted-foreground">Lun-Sam 9h-19h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-accent/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Pourquoi nous choisir ?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Estimation gratuite et sans engagement</li>
                  <li>✓ Expertise locale reconnue</li>
                  <li>✓ Accompagnement de A à Z</li>
                  <li>✓ Réseau d'acheteurs qualifiés</li>
                  <li>✓ Marketing digital premium</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Demande d'estimation</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        required
                        className="bg-input-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.fr"
                        required
                        className="bg-input-background border-border"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="06 12 34 56 78"
                        required
                        className="bg-input-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Adresse du bien *</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Adresse de votre bien"
                        required
                        className="bg-input-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet, vos attentes, le type de bien..."
                      rows={4}
                      className="bg-input-background border-border"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, consent: checked as boolean }))
                      }
                      className="mt-1"
                    />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                      J'accepte d'être recontacté(e) concernant ma demande d'estimation et confirme avoir pris connaissance de la politique de confidentialité. Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression.
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                    disabled={!formData.consent}
                  >
                    Être recontacté sous 24h
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Champs obligatoires
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}