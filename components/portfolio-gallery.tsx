"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Eye, ArrowRight } from "lucide-react"

const portfolioProjects = [
  {
    id: "3d-pelvic-floor",
    title: "3D Pelvic Floor Visualization",
    description: "Interactive 3D anatomical model for medical education with detailed muscle structure visualization.",
    image: "/3d-pelvic-floor-anatomy.png",
    category: "3D Anatomy",
    technologies: ["Three.js", "WebGL", "React"],
    featured: true,
  },
  {
    id: "medical-database",
    title: "Medical Visualization Database",
    description: "Comprehensive database of medical illustrations and interactive learning modules.",
    image: "/medical-database-heart.png",
    category: "Database",
    technologies: ["Next.js", "PostgreSQL", "TypeScript"],
    featured: true,
  },
  {
    id: "bpv-assessment",
    title: "BPV Assessment Module",
    description: "Interactive diagnostic tool for benign paroxysmal vertigo assessment and treatment planning.",
    image: "/medical-ear-assessment.png",
    category: "Assessment Tool",
    technologies: ["React", "D3.js", "Node.js"],
    featured: true,
  },
  {
    id: "cardiac-simulation",
    title: "Cardiac Cycle Simulation",
    description: "Real-time 3D heart simulation showing cardiac cycle phases and blood flow dynamics.",
    image: "/3d-heart-simulation.png",
    category: "Simulation",
    technologies: ["Three.js", "WebGL", "GSAP"],
    featured: false,
  },
  {
    id: "neural-pathways",
    title: "Neural Pathways Visualization",
    description: "Interactive brain visualization showing neural connections and signal transmission.",
    image: "/brain-neural-pathways-3d.png",
    category: "Neurology",
    technologies: ["Three.js", "React", "WebGL"],
    featured: false,
  },
  {
    id: "surgical-planning",
    title: "Surgical Planning Tool",
    description: "3D surgical planning interface with real-time collaboration and annotation features.",
    image: "/surgical-planning-interface.png",
    category: "Planning Tool",
    technologies: ["React", "Three.js", "Socket.io"],
    featured: false,
  },
]

export function PortfolioGallery() {
  const [filter, setFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const categories = ["all", ...Array.from(new Set(portfolioProjects.map((p) => p.category)))]
  const filteredProjects = filter === "all" ? portfolioProjects : portfolioProjects.filter((p) => p.category === filter)

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our collection of innovative 3D medical illustrations and full-stack applications that are
            transforming medical education and healthcare visualization.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="capitalize hover-lift"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`glass-card hover-lift hover-glow transition-all duration-700 group animate-slide-in-up stagger-${(index % 6) + 1}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="aspect-[3/2] w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={index < 3}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex gap-3">
                      <Link href={`/projects/${project.id}`}>
                        <Button
                          size="sm"
                          className="animate-scale-bounce bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Case Study
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {project.featured && <Badge className="absolute top-4 left-4 animate-pulse-glow">Featured</Badge>}
                  <div className="absolute bottom-4 left-4">
                    <Badge
                      variant={
                        filter !== "all" && filter === project.category
                          ? "default"
                          : "secondary"
                      }
                      className="text-xs transition-colors"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="animate-pulse-glow">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
