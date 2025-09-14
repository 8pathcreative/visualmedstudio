import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Building, Users, ExternalLink, Play } from "lucide-react"
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Interactive Heart Anatomy Platform",
      description:
        "A comprehensive 3D heart visualization platform that allows medical students to explore cardiac anatomy in unprecedented detail. Features real-time cross-sections, animated blood flow, and interactive pathology demonstrations.",
      client: "Johns Hopkins Medical School",
      duration: "8 months",
      category: "Educational Platform",
      image: "/3d-heart-anatomy.png",
      technologies: ["WebGL", "Three.js", "React", "Medical Imaging"],
      results: "300% increase in student comprehension scores, adopted by 15+ medical schools",
      year: "2024",
    },
    {
      id: 2,
      title: "Surgical Training Simulator",
      description:
        "Advanced VR surgical training environment for laparoscopic procedures. Includes haptic feedback, real-time performance analytics, and AI-powered skill assessment to accelerate surgical education.",
      client: "Stanford Medical Center",
      duration: "12 months",
      category: "VR Training",
      image: "/medical-dashboard.png",
      technologies: ["Unity", "VR", "Haptic Feedback", "AI Analytics"],
      results: "50% reduction in training time, 95% surgeon satisfaction rate",
      year: "2024",
    },
    {
      id: 3,
      title: "Patient Education App Suite",
      description:
        "Mobile application suite that transforms complex medical procedures into easy-to-understand 3D animations. Helps patients better understand their treatments and reduces pre-surgery anxiety.",
      client: "Mayo Clinic",
      duration: "6 months",
      category: "Patient Education",
      image: "/medical-dashboard.png",
      technologies: ["React Native", "3D Animation", "Cloud Sync"],
      results: "40% increase in patient satisfaction, 60% reduction in pre-surgery anxiety",
      year: "2023",
    },
    {
      id: 4,
      title: "Neurosurgery Planning Platform",
      description:
        "Cutting-edge platform that converts MRI and CT scans into interactive 3D brain models for surgical planning. Enables surgeons to practice procedures and identify optimal surgical approaches.",
      client: "Cleveland Clinic",
      duration: "10 months",
      category: "Surgical Planning",
      image: "/3d-heart-anatomy.png",
      technologies: ["Medical Imaging", "3D Reconstruction", "WebGL", "DICOM"],
      results: "25% improvement in surgical outcomes, 30% reduction in operation time",
      year: "2023",
    },
    {
      id: 5,
      title: "Pharmaceutical Mechanism Visualizer",
      description:
        "Interactive molecular visualization platform showing how drugs interact with cellular structures. Used for both medical education and pharmaceutical research presentations.",
      client: "Pfizer Research Division",
      duration: "4 months",
      category: "Molecular Visualization",
      image: "/medical-dashboard.png",
      technologies: ["Molecular Modeling", "WebGL", "Scientific Visualization"],
      results: "Enhanced research presentations, improved drug mechanism understanding",
      year: "2023",
    },
    {
      id: 6,
      title: "Orthopedic Implant Configurator",
      description:
        "3D configurator allowing surgeons to visualize and customize orthopedic implants in real-time. Includes bone density analysis and implant fit optimization algorithms.",
      client: "Zimmer Biomet",
      duration: "7 months",
      category: "Medical Devices",
      image: "/3d-heart-anatomy.png",
      technologies: ["3D Modeling", "CAD Integration", "Medical Simulation"],
      results: "90% surgeon adoption rate, 20% improvement in implant fit accuracy",
      year: "2022",
    },
  ]

  return (
    <div className="bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary/10 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Work
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Explore a selection of our most impactful medical visualization
            projects. Each case study represents a unique challenge and a
            successful collaboration.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <Badge
                    variant="secondary"
                    className="absolute top-4 right-4"
                  >
                    {project.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold">{project.client}</span>
                    </div>
                    <Button asChild variant="link" className="pr-0">
                      <Link href={`/projects/${project.id}`}>
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Let's turn your complex medical data into a clear and compelling
            visual story.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
