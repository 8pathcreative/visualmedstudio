import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, GraduationCap, Eye, Brush } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      title: "Interactive 3D Models",
      description:
        "Create detailed anatomical models with interactive elements that enhance learning and comprehension for medical students and professionals.",
      icon: Stethoscope,
      gradient: "from-red-500/20 to-pink-500/20",
    },
    {
      title: "Educational Applications",
      description:
        "Build comprehensive full-stack applications that provide immersive educational experiences with real-time collaboration features.",
      icon: GraduationCap,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Medical Visualization",
      description:
        "Transform complex medical data and concepts into clear, engaging visual representations that improve patient understanding.",
      icon: Eye,
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Custom Illustrations",
      description:
        "Design bespoke medical illustrations tailored to specific educational needs and healthcare communication requirements.",
      icon: Brush,
      gradient: "from-purple-500/20 to-violet-500/20",
    },
  ]

  return (
    <section className="w-full px-4 py-20 bg-muted/30 perspective-1000 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/30 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/30 rounded-full animate-float stagger-3 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary/20 rounded-full animate-rotate-3d blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-sans font-black text-foreground mb-6 animate-slide-in-up stagger-1">
            Innovative tools to{" "}
            <span className="text-accent animate-shimmer bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text">
              transform
            </span>{" "}
            medical education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-slide-in-up stagger-2">
            Explore our suite of tools designed to streamline medical visualization, enhance productivity, and drive
            growth in healthcare education and communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className={`glass-card border-border hover-lift hover-glow transition-all duration-700 transform-3d animate-slide-in-up stagger-${index + 3} group relative overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <CardHeader className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all duration-500 animate-scale-bounce group-hover:animate-rotate-3d">
                      <IconComponent className="w-6 h-6 text-accent group-hover:text-accent/90 transition-all duration-500" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-sans font-bold text-card-foreground group-hover:text-accent transition-colors duration-500 text-center">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-500 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-shimmer"></div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
