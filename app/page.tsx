import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import dynamic from 'next/dynamic'

// Dynamically import non-critical components
const FeaturesSection = dynamic(() => import("@/components/features-section").then(mod => ({ default: mod.FeaturesSection })), {
  loading: () => <div className="animate-pulse bg-muted h-96 rounded-lg" />,
  ssr: true,
})

const PortfolioGallery = dynamic(() => import("@/components/portfolio-gallery").then(mod => ({ default: mod.PortfolioGallery })), {
  loading: () => <div className="animate-pulse bg-muted h-96 rounded-lg" />,
})

const ProcessSection = dynamic(() => import("@/components/process-section").then(mod => ({ default: mod.ProcessSection })), {
  loading: () => <div className="animate-pulse bg-muted h-64 rounded-lg" />,
})

const TestimonialSection = dynamic(() => import("@/components/testimonial-section").then(mod => ({ default: mod.TestimonialSection })), {
  loading: () => <div className="animate-pulse bg-muted h-64 rounded-lg" />,
})

const VisibilitySection = dynamic(() => import("@/components/visibility-section").then(mod => ({ default: mod.VisibilitySection })), {
  loading: () => <div className="animate-pulse bg-muted h-64 rounded-lg" />,
})

const ContactForm = dynamic(() => import("@/components/contact-form").then(mod => ({ default: mod.ContactForm })), {
  loading: () => <div className="animate-pulse bg-muted h-96 rounded-lg" />,
})

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="animate-pulse bg-muted h-32 rounded-lg" />,
})

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