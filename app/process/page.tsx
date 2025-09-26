import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Users, FileText, Palette, Code, TestTube, Rocket } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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

export default function ProcessPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      {/* Hero Section */}
      <section className="bg-primary/10 py-20 text-center">
        <div className="container">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Process
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            From initial concept to final delivery, we follow a structured and
            collaborative process to ensure the highest quality medical
            visualizations.
          </p>
        </div>
      </section>

      {/* Process Steps Section */}
      <main className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="grid grid-cols-1 items-start gap-12 md:grid-cols-3"
              >
                {/* Step Number and Icon */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="mt-4">
                    <Badge variant="secondary" className="mb-2">
                      Step {step.id}
                    </Badge>
                    <h2 className="text-2xl font-bold">{step.title}</h2>
                    <div className="mt-2 flex items-center justify-center gap-2 text-muted-foreground md:justify-start">
                      <Clock className="h-4 w-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Step Details */}
                <div className="md:col-span-2">
                  <p className="text-lg text-muted-foreground">
                    {step.description}
                  </p>
                  <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Key Activities
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">
                              {activity}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        Deliverables
                      </h3>
                      <ul className="mt-4 space-y-2">
                        {step.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">
                              {deliverable}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Let's discuss how our expertise can bring your medical visualization
            ideas to life.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
