import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cpu, Palette, Code, Cloud, Monitor, Zap, Shield, Globe, Layers, Settings } from "lucide-react"
import Link from "next/link"

const technologyCategories = {
  "3d-modeling": {
    title: "3D Modeling & Animation",
    icon: Palette,
    description: "Industry-leading software for creating photorealistic medical visualizations",
    technologies: [
      {
        name: "Cinema 4D",
        description: "Professional 3D modeling, animation, and rendering",
        use_case: "Complex anatomical modeling and medical animations",
        logo: "/cinema4d-logo.jpg",
      },
      {
        name: "Blender",
        description: "Open-source 3D creation suite with advanced rendering",
        use_case: "Detailed organ modeling and surgical simulations",
        logo: "/blender-logo.png",
      },
      {
        name: "Maya",
        description: "Advanced 3D animation and modeling software",
        use_case: "Character rigging and biomechanical animations",
        logo: "/maya-logo.jpg",
      },
      {
        name: "ZBrush",
        description: "Digital sculpting and painting software",
        use_case: "High-detail anatomical sculpting and texturing",
        logo: "/zbrush-logo.jpg",
      },
    ],
  },
  "web-development": {
    title: "Web Development",
    icon: Code,
    description: "Modern frameworks and technologies for interactive medical applications",
    technologies: [
      {
        name: "Next.js",
        description: "React framework for production-ready applications",
        use_case: "Interactive medical education platforms",
        logo: "/nextjs-logo.jpg",
      },
      {
        name: "React Three Fiber",
        description: "React renderer for Three.js 3D graphics",
        use_case: "Interactive 3D medical models in browsers",
        logo: "/react-three-fiber-logo.jpg",
      },
      {
        name: "TypeScript",
        description: "Typed JavaScript for scalable applications",
        use_case: "Type-safe medical data handling and APIs",
        logo: "/typescript-logo.png",
      },
      {
        name: "WebGL",
        description: "Hardware-accelerated 3D graphics in browsers",
        use_case: "Real-time 3D medical visualizations",
        logo: "/webgl-logo.png",
      },
    ],
  },
  "cloud-infrastructure": {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    description: "Scalable cloud solutions for medical data and applications",
    technologies: [
      {
        name: "Vercel",
        description: "Edge-optimized deployment platform",
        use_case: "Fast global delivery of medical applications",
        logo: "/vercel-logo.png",
      },
      {
        name: "AWS",
        description: "Comprehensive cloud computing services",
        use_case: "HIPAA-compliant medical data storage and processing",
        logo: "/aws-logo.png",
      },
      {
        name: "Supabase",
        description: "Open-source Firebase alternative",
        use_case: "Real-time medical data synchronization",
        logo: "/supabase-logo.png",
      },
      {
        name: "Docker",
        description: "Containerization for consistent deployments",
        use_case: "Scalable medical application deployment",
        logo: "/docker-logo.png",
      },
    ],
  },
  "medical-tools": {
    title: "Medical & Scientific Tools",
    icon: Monitor,
    description: "Specialized software for medical accuracy and scientific visualization",
    technologies: [
      {
        name: "DICOM Viewers",
        description: "Medical imaging data visualization",
        use_case: "Converting medical scans to 3D models",
        logo: "/dicom-medical-logo.jpg",
      },
      {
        name: "ImageJ",
        description: "Scientific image analysis software",
        use_case: "Medical image processing and analysis",
        logo: "/imagej-logo.jpg",
      },
      {
        name: "ParaView",
        description: "Scientific data visualization application",
        use_case: "Complex medical data visualization",
        logo: "/paraview-logo.jpg",
      },
      {
        name: "Anatomage",
        description: "3D anatomy visualization platform",
        use_case: "Accurate anatomical reference and modeling",
        logo: "/anatomage-logo.jpg",
      },
    ],
  },
}

const capabilities = [
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for fast loading and smooth interactions across all devices",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Secure handling of medical data with industry-standard encryption",
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    description: "Works seamlessly on desktop, tablet, and mobile devices",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Built to handle everything from small projects to enterprise solutions",
  },
]

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-card to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Cutting-Edge Technology Stack
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty">
              We leverage the latest tools and technologies to create stunning, accurate, and interactive medical
              visualizations that push the boundaries of what's possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="px-4 py-2">
                <Cpu className="w-4 h-4 mr-2" />
                Industry-Leading Software
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                HIPAA Compliant
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Globe className="w-4 h-4 mr-2" />
                Cross-Platform Compatible
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="3d-modeling" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              {Object.entries(technologyCategories).map(([key, category]) => {
                const Icon = category.icon
                return (
                  <TabsTrigger key={key} value={key} className="flex items-center gap-2 p-4">
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.title.split(" ")[0]}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {Object.entries(technologyCategories).map(([key, category]) => {
              const Icon = category.icon
              return (
                <TabsContent key={key} value={key} className="space-y-8">
                  <div className="text-center mb-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{category.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.technologies.map((tech, index) => (
                      <Card
                        key={index}
                        className={`hover-lift hover:shadow-2xl border-0 bg-card/50 backdrop-blur-sm animate-slide-in-up stagger-${(index % 4) + 1}`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <img
                              src={tech.logo || "/placeholder.svg"}
                              alt={`${tech.name} logo`}
                              className="w-12 h-12 rounded-lg object-contain bg-white p-2"
                            />
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-foreground mb-2">{tech.name}</h3>
                              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{tech.description}</p>
                              <div className="bg-primary/5 rounded-lg p-3">
                                <p className="text-sm font-medium text-primary mb-1">Use Case:</p>
                                <p className="text-sm text-muted-foreground">{tech.use_case}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Built for Excellence</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Our technology choices are driven by the need for accuracy, performance, and reliability in medical
              visualization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <Card
                  key={index}
                  className={`text-center border-0 bg-card/50 backdrop-blur-sm hover-lift animate-slide-in-up stagger-${index + 1}`}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{capability.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">&lt;2s</div>
              <div className="text-sm text-muted-foreground">Average Load Time</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">HIPAA Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Ready to Leverage Our Technology?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Let's discuss how our cutting-edge technology stack can bring your medical visualization project to life
              with unmatched accuracy and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg" asChild>
                <Link href="/contact">
                  <Settings className="w-5 h-5 mr-2" />
                  Discuss Your Project
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent" asChild>
                <Link href="/projects">
                  <Monitor className="w-5 h-5 mr-2" />
                  See Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
