"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#features", label: "Features" },
    { href: "/#portfolio", label: "Gallery" },
    { href: "/#resources", label: "Resources" },
    { href: "/#contact", label: "Contact" },
    { href: "/demos", label: "Demos" },
  ]

  return (
    <header className="w-full px-4 py-6 bg-background/80 border-b border-border backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg hover-glow">
            <span className="text-primary-foreground font-black text-xl">V</span>
          </div>
          <span className="font-sans font-black text-2xl text-foreground">Vismed Studio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 hover-lift hover-glow"
          >
            <Link href="/#contact">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col space-y-4 p-4 bg-card rounded-lg border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-4">
              <Link href="/#contact">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
