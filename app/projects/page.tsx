import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Building, Users, ExternalLink, Play } from "lucide-react"
import Image from "next/image";

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
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-accent/20 text-foreground border-accent/30 px-4 py-2 mb-6">Our Portfolio</Badge>
            <h1 className="text-5xl lg:text-6xl font-black text-foreground mb-6">
              Transforming Medical
              <span className="block text-accent">Education & Care</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our award-winning projects that have revolutionized medical visualization, education, and patient
              care across leading healthcare institutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`glass-card hover-lift overflow-hidden ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-cols-2" : ""}`}>
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground">{project.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Button
                        size="icon"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20"
                      >
                        <Play className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <Badge variant="outline" className="text-xs">
                            {project.year}
                          </Badge>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {project.duration}
                          </div>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{project.title}</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Building className="w-5 h-5 text-accent" />
                          <div>
                            <p className="font-semibold text-foreground">Client</p>
                            <p className="text-muted-foreground">{project.client}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-accent" />
                          <div>
                            <p className="font-semibold text-foreground">Impact</p>
                            <p className="text-muted-foreground">{project.results}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-foreground mb-3">Technologies Used</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button className="bg-accent hover:bg-accent/90 text-primary">
                          View Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button variant="outline">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-accent to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Project Impact</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our medical visualization projects have transformed healthcare education and patient care worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Projects Completed", description: "Across 50+ institutions" },
              { number: "1M+", label: "Students Impacted", description: "Enhanced learning outcomes" },
              { number: "95%", label: "Client Satisfaction", description: "Repeat business rate" },
              { number: "40%", label: "Average Improvement", description: "In comprehension scores" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can create innovative medical visualization solutions for your institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary px-8 py-4">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 bg-transparent">
                View More Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
