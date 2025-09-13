import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { ProcessSection } from "@/components/process-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { VisibilitySection } from "@/components/visibility-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="portfolio">
        <PortfolioGallery />
      </section>
      <section id="process">
        <ProcessSection />
      </section>
      <TestimonialSection />
      <section id="resources">
        <VisibilitySection />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </main>
  )
}
