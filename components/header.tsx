import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Header() {
  return (
    <header className="w-full px-4 py-8 bg-background border-b border-border backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg hover-glow">
            <span className="text-primary-foreground font-black text-xl">V</span>
          </div>
          <span className="font-sans font-black text-2xl text-foreground">Vismed Studio</span>
        </div>

        <nav className="hidden md:flex items-center space-x-10">
          <a
            href="#home"
            className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
          >
            Features
          </a>
          <a
            href="#portfolio"
            className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
          >
            Gallery
          </a>
          <a
            href="#resources"
            className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
          >
            Resources
          </a>
          <a
            href="#contact"
            className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
          >
            Contact
          </a>
        </nav>

        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 hover-lift hover-glow">
          Get Started
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </header>
  )
}
