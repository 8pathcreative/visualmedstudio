"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Calendar,
  Users,
  Target,
  Lightbulb,
  CheckCircle,
  Briefcase,
  Cpu,
  Paintbrush,
  FileText,
} from "lucide-react"

const projectData = {
  "medical-database": {
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
}

export default function ProjectPageV2() {
  const project = projectData["medical-database"]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-12 bg-card/50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/projects" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
            <Button variant="outline" asChild>
              <Link href="/contact">
                Start Your Project <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">{project.title}</h1>
            <p className="text-xl text-muted-foreground mt-2">{project.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Paintbrush className="w-6 h-6 text-accent" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-accent" />
                    Gallery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.gallery.map((img, index) => (
                      <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                        <Image
                          src={img}
                          alt={`Gallery image ${index + 1}`}
                          fill
                          objectFit="cover"
                          className="hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-accent" />
                    Project Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-semibold">Client</p>
                      <p className="text-muted-foreground">{project.client}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-semibold">Duration</p>
                      <p className="text-muted-foreground">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-semibold">Team</p>
                      <p className="text-muted-foreground">{project.team}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="w-6 h-6 text-accent" />
                    Technologies Used
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-accent" />
                    The Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.challenge}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-accent" />
                    The Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.solution}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-accent" />
                    Impact & Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Have a similar project in mind?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your medical visualization ideas to life. Contact us today for a free
            consultation.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Get in Touch <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
