import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Users, FileText, Palette, Code, TestTube, Rocket } from "lucide-react"
import Link from "next/link"

const processSteps = [
  {
    id: 1,
    title: "Discovery & Consultation",
    duration: "1-2 weeks",
    icon: Users,
    description:
      "We begin with an in-depth consultation to understand your medical visualization needs, target audience, and project objectives.",
    deliverables: ["Project brief document", "Technical requirements", "Timeline proposal", "Budget estimate"],
    activities: [
      "Initial client meeting and needs assessment",
      "Medical content review and accuracy requirements",
      "Target audience analysis",
      "Technical feasibility study",
    ],
  },
  {
    id: 2,
    title: "Research & Planning",
    duration: "1-3 weeks",
    icon: FileText,
    description:
      "Our medical experts conduct thorough research to ensure scientific accuracy while our team develops the creative and technical strategy.",
    deliverables: ["Research documentation", "Creative brief", "Technical architecture", "Project roadmap"],
    activities: [
      "Medical literature review",
      "Reference material gathering",
      "Storyboard and wireframe creation",
      "Technology stack selection",
    ],
  },
  {
    id: 3,
    title: "Design & Modeling",
    duration: "2-6 weeks",
    icon: Palette,
    description:
      "We create detailed 3D models, animations, and visual designs that accurately represent complex medical concepts in an engaging way.",
    deliverables: ["3D models and assets", "Visual style guide", "Animation concepts", "Interactive prototypes"],
    activities: [
      "3D modeling and texturing",
      "Animation and motion design",
      "Visual style development",
      "Interactive element design",
    ],
  },
  {
    id: 4,
    title: "Development & Integration",
    duration: "2-4 weeks",
    icon: Code,
    description:
      "Our developers build the interactive platforms and integrate all visual elements into a cohesive, user-friendly experience.",
    deliverables: [
      "Functional prototype",
      "Interactive features",
      "Cross-platform compatibility",
      "Performance optimization",
    ],
    activities: [
      "Frontend and backend development",
      "3D rendering optimization",
      "Interactive feature implementation",
      "Cross-device testing",
    ],
  },
  {
    id: 5,
    title: "Testing & Refinement",
    duration: "1-2 weeks",
    icon: TestTube,
    description:
      "Rigorous testing ensures medical accuracy, usability, and performance across all platforms and devices.",
    deliverables: ["Quality assurance report", "Performance metrics", "User testing results", "Final refinements"],
    activities: [
      "Medical accuracy validation",
      "User experience testing",
      "Performance optimization",
      "Cross-browser compatibility testing",
    ],
  },
  {
    id: 6,
    title: "Launch & Support",
    duration: "1 week + ongoing",
    icon: Rocket,
    description:
      "We handle the deployment and provide ongoing support to ensure your medical visualization continues to perform optimally.",
    deliverables: ["Live deployment", "Training materials", "Support documentation", "Maintenance plan"],
    activities: [
      "Production deployment",
      "Team training and handover",
      "Documentation delivery",
      "Ongoing support setup",
    ],
  },
]

const processStats = [
  { label: "Average Project Duration", value: "8-16 weeks" },
  { label: "Medical Accuracy Rate", value: "99.9%" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "On-Time Delivery", value: "95%" },
]

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-card to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">Our Proven Process</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty">
              A systematic approach to creating accurate, engaging medical visualizations that meet the highest
              standards of scientific precision and visual excellence.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {processStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <div key={step.id} className="relative mb-16 lg:mb-24 last:mb-0">
                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-1/2 top-32 w-px h-16 bg-border transform -translate-x-1/2 hidden lg:block" />
                  )}

                  <div
                    className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isEven ? "" : "lg:flex-row-reverse"}`}
                  >
                    {/* Content */}
                    <div className="flex-1 w-full">
                      <Card
                        className={`hover-lift hover:shadow-2xl border-0 bg-card/50 backdrop-blur-sm animate-slide-in-${isEven ? "left" : "right"}`}
                      >
                        <CardContent className="p-8 lg:p-10">
                          <div className="flex items-center gap-4 mb-6">
                            <Badge variant="secondary" className="text-lg px-4 py-2">
                              Step {step.id}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {step.duration}
                            </Badge>
                          </div>

                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{step.title}</h3>

                          <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-pretty">
                            {step.description}
                          </p>

                          {/* Activities */}
                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                              Key Activities
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {step.activities.map((activity, idx) => (
                                <div key={idx} className="flex items-center text-sm text-muted-foreground">
                                  <CheckCircle className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                                  {activity}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Deliverables */}
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                              Deliverables
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {step.deliverables.map((deliverable, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {deliverable}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
                        <Icon className="w-12 h-12 lg:w-16 lg:h-16 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Quality & Accuracy Guaranteed
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-pretty">
              Every project undergoes rigorous medical review and quality assurance to ensure the highest standards of
              scientific accuracy and visual excellence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Medical Review</h3>
                  <p className="text-sm text-muted-foreground">
                    All content reviewed by certified medical professionals
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <TestTube className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Rigorous Testing</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive testing across devices and platforms</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Continuous Support</h3>
                  <p className="text-sm text-muted-foreground">Ongoing maintenance and updates as needed</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent" asChild>
                <Link href="/projects">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
