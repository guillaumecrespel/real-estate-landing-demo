import { ContactForm } from "@/components/ContactForm"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { PropertyGrid } from "@/components/PropertyGrid"
import { Testimonials } from "@/components/Testimonials"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PropertyGrid />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}
