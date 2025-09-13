"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, MessageSquare, Code, Zap, CheckCircle } from "lucide-react"

const processSteps = [
  {
    icon: FileText,
    title: "Planning Phase",
    description:
      "We analyze your requirements and create a comprehensive project roadmap with detailed medical education specifications.",
    phase: "Week 1-2",
  },
  {
    icon: MessageSquare,
    title: "Script and Storyboard Phase",
    description:
      "Content creation and visual storyboarding with medical accuracy validation and educational flow optimization.",
    phase: "Week 2-3",
  },
  {
    icon: Code,
    title: "Development Phase",
    description:
      "Our expert team builds your 3D models and full-stack applications using cutting-edge medical visualization technology.",
    phase: "Week 3-8",
  },
  {
    icon: Zap,
    title: "Prototype Phase",
    description: "Rigorous testing and refinement with medical professionals to ensure educational effectiveness.",
    phase: "Week 8-10",
  },
  {
    icon: CheckCircle,
    title: "Completion",
    description:
      "Final delivery with comprehensive documentation, training materials, and ongoing support for your medical visualization project.",
    phase: "Week 10-12",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From initial consultation to final delivery, we follow a proven methodology that ensures exceptional results
            for every medical visualization project.
          </p>
        </div>

        <div className="max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card
                  key={index}
                  className={`glass-card hover-lift text-center animate-slide-in-up stagger-${index + 1}`}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-bounce">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    <Badge variant="secondary" className="mb-3">
                      {step.phase}
                    </Badge>

                    <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>

                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Process Flow Line */}
          <div className="hidden lg:block relative mt-8">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent animate-shimmer" />
          </div>
        </div>

        <div className="text-center mt-16 animate-slide-in-up stagger-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Healthcare Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
