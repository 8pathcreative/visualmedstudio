import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="w-full px-4 section-spacing bg-background perspective-2000 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="flex-1 text-center lg:text-left content-spacing">
            <div className="flex items-center justify-center lg:justify-start mb-8 animate-slide-in-left stagger-1">
              <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-full hover-glow">
                <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center animate-pulse-glow">
                  <span className="text-accent-foreground text-xs font-bold">3D</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  Trusted by 200+ Healthcare Institutions
                </span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-sans font-black text-foreground mb-8 leading-tight animate-slide-in-left stagger-2">
              Bringing Medical{" "}
              <span className="text-accent animate-shimmer bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text">
                Visualization
              </span>{" "}
              to Life
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-slide-in-left stagger-3">
              We create cutting-edge 3D medical illustrations and full-stack applications that transform complex medical
              concepts into interactive, educational experiences for healthcare professionals and students.
            </p>

            <div className="animate-slide-in-left stagger-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg hover-lift hover-glow transform-3d"
              >
                Explore Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="flex-1 relative animate-slide-in-right stagger-2">
            <div className="relative w-full max-w-lg mx-auto perspective-1000">
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent/20 rounded-full animate-float stagger-1 blur-sm"></div>
              <div className="absolute -bottom-12 -right-12 w-20 h-20 bg-secondary/20 rounded-full animate-float stagger-3 blur-sm"></div>
              <div className="absolute top-1/2 -left-6 w-16 h-16 bg-primary/20 rounded-full animate-float stagger-5 blur-sm"></div>

              <div className="glass-card rounded-3xl p-10 shadow-2xl hover-lift transform-3d animate-scale-bounce">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/3d-heart-anatomy.png"
                    alt="3D Medical Heart Visualization"
                    className="w-full h-auto rounded-xl animate-float"
                  />
                  <div className="absolute top-6 right-6 glass-card bg-accent/95 text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow hover-lift">
                    Interactive 3D
                  </div>
                  <div className="absolute bottom-6 left-6 glass-card bg-primary/95 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow hover-lift stagger-2">
                    Educational
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-secondary/10 rounded-xl"></div>
                </div>

                <div className="absolute -top-8 left-1/4 glass-card px-4 py-3 rounded-xl text-sm font-semibold animate-float stagger-4 hover-glow">
                  <span className="text-accent">●</span> Real-time Rendering
                </div>
                <div className="absolute -bottom-8 right-1/4 glass-card px-4 py-3 rounded-xl text-sm font-semibold animate-float stagger-6 hover-glow">
                  <span className="text-secondary">●</span> AI-Powered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(95,179,212,0.3)_25px,rgba(95,179,212,0.3)_26px,transparent_27px,transparent_74px,rgba(95,179,212,0.3)_75px,rgba(95,179,212,0.3)_76px,transparent_77px),linear-gradient(rgba(95,179,212,0.3)_24px,transparent_25px,transparent_26px,rgba(95,179,212,0.3)_27px,rgba(95,179,212,0.3)_74px,transparent_75px,transparent_76px,rgba(95,179,212,0.3)_77px)] bg-[size:100px_100px] animate-pulse"></div>
      </div>
    </section>
  )
}
