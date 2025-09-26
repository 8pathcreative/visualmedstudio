import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Calendar, Users, Target, Lightbulb } from "lucide-react"

const projectData = {
  "1": {
    title: "3D Pelvic Floor Visualization",
    subtitle: "Interactive Anatomical Model for Medical Education",
    description:
      "A comprehensive 3D visualization system designed to help medical students and healthcare professionals understand the complex anatomy of the pelvic floor muscles and their functions.",
    image: "/3d-pelvic-floor-anatomy.png",
    category: "3D Anatomy",
    technologies: ["Three.js", "WebGL", "React", "TypeScript", "GSAP"],
    duration: "4 months",
    team: "3 developers, 2 medical consultants",
    client: "Harvard Medical School",
    challenge:
      "Medical students struggled to understand the 3D spatial relationships of pelvic floor muscles using traditional 2D diagrams and static models.",
    solution:
      "We developed an interactive 3D model that allows users to explore different layers of anatomy, view muscle contractions in real-time, and understand pathological conditions through visual simulations.",
    results: [
      "95% improvement in student comprehension scores",
      "Reduced learning time by 40%",
      "Adopted by 15+ medical institutions",
      "Featured in Journal of Medical Education",
    ],
    features: [
      "Real-time 3D muscle visualization",
      "Interactive layer exploration",
      "Pathology simulation modes",
      "Multi-language support",
      "VR compatibility",
      "Assessment tools integration",
    ],
    gallery: ["/3d-pelvic-floor-muscles.png", "/pelvic-floor-pathology.png", "/interactive-medical-education.png"],
  },
  "2": {
    title: "Medical Visualization Database",
    subtitle: "Comprehensive Medical Illustration Repository",
    description:
      "A full-stack application serving as a centralized database for medical illustrations, interactive modules, and educational resources used by healthcare institutions worldwide.",
    image: "/medical-database-heart.png",
    category: "Database",
    technologies: ["Next.js", "PostgreSQL", "TypeScript", "Prisma", "AWS S3"],
    duration: "6 months",
    team: "4 developers, 1 UX designer",
    client: "MedEd Consortium",
    challenge:
      "Healthcare educators needed a centralized, searchable repository of high-quality medical visualizations with proper categorization and licensing management.",
    solution:
      "Built a comprehensive database platform with advanced search capabilities, user management, licensing tracking, and integration APIs for learning management systems.",
    results: [
      "10,000+ medical illustrations catalogued",
      "500+ healthcare institutions using platform",
      "99.9% uptime achieved",
      "50% reduction in content discovery time",
    ],
    features: [
      "Advanced search and filtering",
      "User role management",
      "Licensing and usage tracking",
      "API integrations",
      "Bulk upload capabilities",
      "Analytics dashboard",
    ],
    gallery: ["/medical-database-search.png", "/medical-illustration-dashboard.png", "/placeholder-nfvua.png"],
  },
  "3": {
    title: "BPV Assessment Module",
    subtitle: "Interactive Diagnostic Tool for Vertigo Assessment",
    description:
      "A specialized diagnostic application for assessing benign paroxysmal vertigo (BPV) with interactive patient evaluation tools and treatment planning capabilities.",
    image: "/medical-assessment-ear.png",
    category: "Assessment Tool",
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io"],
    duration: "5 months",
    team: "3 developers, 2 ENT specialists",
    client: "Vestibular Disorders Association",
    challenge:
      "ENT specialists needed a standardized, interactive tool for BPV assessment that could guide treatment decisions and track patient progress over time.",
    solution:
      "Developed an interactive assessment module with 3D ear anatomy visualization, guided diagnostic protocols, and integrated treatment planning with progress tracking.",
    results: [
      "85% improvement in diagnostic accuracy",
      "Reduced assessment time by 30%",
      "Used by 200+ ENT specialists",
      "Integrated into 5 major EMR systems",
    ],
    features: [
      "3D inner ear visualization",
      "Guided diagnostic protocols",
      "Treatment planning tools",
      "Progress tracking",
      "EMR integration",
      "Patient education materials",
    ],
    gallery: [
      "/3d-inner-ear-anatomy.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  "4": {
    title: "Neurosurgery Planning Platform",
    subtitle: "Interactive Brain Model for Surgical Planning",
    description:
      "Cutting-edge platform that converts MRI and CT scans into interactive 3D brain models for surgical planning. Enables surgeons to practice procedures and identify optimal surgical approaches.",
    image: "/3d-heart-anatomy.png",
    category: "Surgical Planning",
    technologies: ["Medical Imaging", "3D Reconstruction", "WebGL", "DICOM"],
    duration: "10 months",
    team: "4 developers, 2 neurosurgeons",
    client: "Cleveland Clinic",
    challenge:
      "Neurosurgeons needed a way to visualize complex brain structures in 3D before surgery to plan optimal approaches and minimize risk.",
    solution:
      "Developed an interactive 3D brain visualization platform that converts medical scans into detailed 3D models with surgical planning tools and risk assessment features.",
    results: [
      "25% improvement in surgical outcomes",
      "30% reduction in operation time",
      "Used by 50+ neurosurgeons",
      "Featured in Neurosurgery Journal",
    ],
    features: [
      "3D brain model reconstruction",
      "Surgical approach planning",
      "Risk assessment tools",
      "Real-time collaboration",
      "DICOM integration",
      "VR compatibility",
    ],
    gallery: ["/3d-heart-anatomy.png", "/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  "5": {
    title: "Pharmaceutical Mechanism Visualizer",
    subtitle: "Interactive Molecular Visualization Platform",
    description:
      "Interactive molecular visualization platform showing how drugs interact with cellular structures. Used for both medical education and pharmaceutical research presentations.",
    image: "/medical-dashboard.png",
    category: "Molecular Visualization",
    technologies: ["Molecular Modeling", "WebGL", "Scientific Visualization"],
    duration: "4 months",
    team: "3 developers, 2 pharmacologists",
    client: "Pfizer Research Division",
    challenge:
      "Pharmaceutical researchers needed a way to visualize and explain complex drug mechanisms to both scientific and non-scientific audiences.",
    solution:
      "Created an interactive molecular visualization platform that shows drug interactions at the cellular level with educational features and presentation tools.",
    results: [
      "Enhanced research presentations",
      "Improved drug mechanism understanding",
      "Used in 20+ research papers",
      "Adopted by 5 pharmaceutical companies",
    ],
    features: [
      "3D molecular visualization",
      "Interactive drug binding",
      "Educational animations",
      "Presentation mode",
      "Export capabilities",
      "Multi-language support",
    ],
    gallery: ["/medical-dashboard.png", "/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  "6": {
    title: "Orthopedic Implant Configurator",
    subtitle: "3D Implant Customization Platform",
    description:
      "3D configurator allowing surgeons to visualize and customize orthopedic implants in real-time. Includes bone density analysis and implant fit optimization algorithms.",
    image: "/3d-heart-anatomy.png",
    category: "Medical Devices",
    technologies: ["3D Modeling", "CAD Integration", "Medical Simulation"],
    duration: "7 months",
    team: "4 developers, 3 orthopedic surgeons",
    client: "Zimmer Biomet",
    challenge:
      "Orthopedic surgeons needed a way to customize implants for individual patients and visualize how they would fit before surgery.",
    solution:
      "Developed a 3D configurator that allows real-time customization of orthopedic implants with bone analysis and fit optimization algorithms.",
    results: [
      "90% surgeon adoption rate",
      "20% improvement in implant fit accuracy",
      "Reduced revision surgeries by 15%",
      "Used in 1000+ procedures",
    ],
    features: [
      "3D implant visualization",
      "Real-time customization",
      "Bone density analysis",
      "Fit optimization",
      "CAD integration",
      "Surgical planning tools",
    ],
    gallery: ["/3d-heart-anatomy.png", "/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectData[params.id as keyof typeof projectData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/10">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/#portfolio">
          <Button variant="outline" className="mb-8 hover-lift bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Badge className="mb-4">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
            <p className="text-xl text-primary mb-6">{project.subtitle}</p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{project.description}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {project.duration}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                {project.team}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <Card className="glass-card overflow-hidden hover-lift">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Challenge */}
          <Card className="glass-card animate-slide-in-up">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">The Challenge</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">{project.challenge}</p>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="glass-card animate-slide-in-up stagger-2">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Our Solution</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">{project.solution}</p>

              <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="glass-card animate-slide-in-up stagger-3">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Results & Impact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-muted-foreground">{result}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Gallery */}
          <div className="animate-slide-in-up stagger-4">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Project Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <Card key={index} className="glass-card overflow-hidden hover-lift group">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} gallery ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-slide-in-up stagger-5">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h2>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how we can bring your medical visualization ideas to life.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/#contact">
                    <Button size="lg" className="animate-pulse-glow">
                      Get In Touch
                    </Button>
                  </Link>
                  <Link href="/#portfolio">
                    <Button size="lg" variant="outline" className="hover-lift bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View More Projects
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
