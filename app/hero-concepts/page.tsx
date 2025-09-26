import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Play, Star, Users, Award, Zap } from "lucide-react"

export default function HeroConceptsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="section-spacing bg-gradient-to-br from-background via-muted/30 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Hero Section Concepts
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore different hero section designs and layouts for medical visualization websites
            </p>
          </div>
        </div>
      </section>

      {/* Concept 1: Minimal & Clean */}
      <section className="section-spacing border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Concept 1: Minimal & Clean</h2>
            <p className="text-muted-foreground">Simple, focused design with plenty of whitespace</p>
          </div>

          <Card className="p-12 bg-gradient-to-br from-background to-muted/20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-primary">Medical Visualization</h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Transform complex medical concepts into clear, interactive 3D experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  View Portfolio
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Concept 2: Split Layout with Visual */}
      <section className="section-spacing border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Concept 2: Split Layout</h2>
            <p className="text-muted-foreground">Content and visual split for balanced presentation</p>
          </div>

          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[600px]">
              <div className="flex flex-col justify-center p-12 lg:p-16">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">Bringing Medicine to Life</h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We create stunning 3D medical illustrations and interactive applications that make complex anatomy and
                  procedures easy to understand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">
                    Start Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-8 pt-8 border-t">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <span className="font-semibold">4.9/5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-secondary" />
                    <span>500+ Projects</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center p-8">
                <div className="w-full max-w-md aspect-square bg-gradient-to-br from-secondary to-primary rounded-full opacity-20 animate-pulse-glow"></div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Concept 3: Centered with Stats */}
      <section className="section-spacing border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Concept 3: Centered with Stats</h2>
            <p className="text-muted-foreground">Central focus with supporting statistics</p>
          </div>

          <Card className="p-12 bg-gradient-to-r from-primary/5 via-background to-secondary/5">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="h-4 w-4" />
                Award-Winning Studio
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Vismed Studio
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                Creating the future of medical education through cutting-edge 3D visualization and interactive
                technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Building
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  Explore Work
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Medical Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Concept 4: Card-Based Layout */}
      <section className="section-spacing border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Concept 4: Card-Based Layout</h2>
            <p className="text-muted-foreground">Modular design with distinct content cards</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 p-8 lg:p-12 glass-card">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">Revolutionary Medical Visualization</h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transform how medical professionals and students understand complex anatomical structures through our
                advanced 3D modeling and interactive applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 glass-card hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Expert Team</div>
                    <div className="text-sm text-muted-foreground">Medical & Tech Specialists</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass-card hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Award Winning</div>
                    <div className="text-sm text-muted-foreground">Industry Recognition</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass-card hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Fast Delivery</div>
                    <div className="text-sm text-muted-foreground">Quick Turnaround</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Concept 5: Full-Width Background */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Concept 5: Full-Width Background</h2>
            <p className="text-muted-foreground">Immersive design with background imagery</p>
          </div>

          <Card className="relative overflow-hidden min-h-[600px] bg-gradient-to-br from-primary/90 via-secondary/80 to-primary/90">
            <div className="absolute inset-0 bg-[url('/abstract-medical-pattern.png')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10 flex items-center justify-center min-h-[600px] p-8 lg:p-16">
              <div className="text-center max-w-4xl text-white">
                <h1 className="text-5xl lg:text-7xl font-bold mb-8">The Future of Medical Education</h1>
                <p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
                  Immerse yourself in interactive 3D medical experiences that revolutionize how we learn, teach, and
                  practice medicine
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                    Explore Platform
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Introduction
                  </Button>
                </div>

                <div className="flex justify-center items-center gap-8 mt-16 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold">1M+</div>
                    <div className="text-sm opacity-80">Students Reached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">200+</div>
                    <div className="text-sm opacity-80">Universities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm opacity-80">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
