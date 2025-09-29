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
      <iframe
        src="https://avm.kojimo.fr/widget/index.html?config=eyJhcGlCYXNlVXJsIjoiaHR0cHM6Ly9hcGkua29qaW1vLmZyIiwicHVibGljQXBpS2V5IjoidGVzdC1rZXktMTIzIiwicmVkaXJlY3RVcmwiOiJodHRwczovL3d3dy5rb2ppbW8uZnIvY29udGFjdCIsInF1ZXN0aW9uc1VybCI6Imh0dHBzOi8vYXZtLmtvamltby5mci9xdWVzdGlvbnMuanNvbiIsImFiYWNVcmwiOiJodHRwczovL2F2bS5rb2ppbW8uZnIvYWJhYy5qc29uIn0="
        style={{
          width: "100%",
          maxWidth: "520px",
          height: "700px",
          border: "0",
          overflow: "hidden"
        }}
        loading="lazy"
        title="Kojimo AVM Widget"
      />
      <Hero />
      <PropertyGrid />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}
