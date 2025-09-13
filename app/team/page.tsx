import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Award, GraduationCap } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Lead Medical Visualization Specialist",
    image: "/professional-headshot-of-asian-woman-doctor-in-lab.jpg",
    bio: "Dr. Chen brings over 12 years of experience in medical imaging and 3D visualization. She specializes in creating accurate anatomical models for surgical planning and medical education.",
    credentials: ["PhD in Biomedical Engineering", "Certified Medical Illustrator", "Published 40+ Research Papers"],
    specializations: ["Surgical Planning", "Anatomical Modeling", "Medical Animation"],
    email: "sarah.chen@vismedstudio.com",
    linkedin: "https://linkedin.com/in/sarahchen",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Senior 3D Artist & Technical Director",
    image: "/professional-headshot-of-hispanic-man-with-beard-i.jpg",
    bio: "Marcus is a master of both artistic vision and technical execution. With expertise in Cinema 4D, Blender, and custom shader development, he creates stunning photorealistic medical visualizations.",
    credentials: ["MFA in Digital Arts", "Autodesk Certified Professional", "10+ Years Industry Experience"],
    specializations: ["3D Modeling", "Shader Development", "Photorealistic Rendering"],
    email: "marcus.rodriguez@vismedstudio.com",
    linkedin: "https://linkedin.com/in/marcusrodriguez",
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    title: "Medical Consultant & Research Director",
    image: "/professional-headshot-of-caucasian-woman-doctor-wi.jpg",
    bio: "Dr. Watson ensures all our visualizations maintain medical accuracy and clinical relevance. She bridges the gap between complex medical concepts and accessible visual communication.",
    credentials: ["MD from Johns Hopkins", "Board Certified Radiologist", "Medical Education Specialist"],
    specializations: ["Medical Accuracy", "Clinical Review", "Educational Content"],
    email: "emily.watson@vismedstudio.com",
    linkedin: "https://linkedin.com/in/emilywatson",
  },
  {
    id: 4,
    name: "Alex Kim",
    title: "Full-Stack Developer & UX Designer",
    image: "/professional-headshot-of-asian-man-in-modern-offic.jpg",
    bio: "Alex develops the interactive platforms and user experiences that make our 3D visualizations accessible across devices. He specializes in WebGL, React, and responsive design.",
    credentials: ["BS Computer Science", "Google UX Design Certificate", "AWS Certified Developer"],
    specializations: ["Web Development", "Interactive Design", "User Experience"],
    email: "alex.kim@vismedstudio.com",
    linkedin: "https://linkedin.com/in/alexkim",
  },
  {
    id: 5,
    name: "Dr. James Mitchell",
    title: "Biomechanics Specialist",
    image: "/professional-headshot-of-african-american-man-in-l.jpg",
    bio: "Dr. Mitchell brings deep expertise in biomechanics and motion analysis to create accurate simulations of human movement and physiological processes.",
    credentials: ["PhD in Biomechanics", "Licensed Physical Therapist", "Motion Capture Specialist"],
    specializations: ["Motion Analysis", "Biomechanical Modeling", "Physiological Simulation"],
    email: "james.mitchell@vismedstudio.com",
    linkedin: "https://linkedin.com/in/jamesmitchell",
  },
  {
    id: 6,
    name: "Lisa Park",
    title: "Project Manager & Client Relations",
    image: "/professional-headshot-of-asian-woman-in-business-s.jpg",
    bio: "Lisa ensures seamless project delivery and maintains strong relationships with our medical and educational clients. She coordinates complex multi-disciplinary projects from concept to completion.",
    credentials: ["MBA in Healthcare Management", "PMP Certified", "6+ Years Medical Industry"],
    specializations: ["Project Management", "Client Relations", "Healthcare Operations"],
    email: "lisa.park@vismedstudio.com",
    linkedin: "https://linkedin.com/in/lisapark",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-card to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">Meet Our Expert Team</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty">
              A diverse group of medical professionals, 3D artists, and technology experts dedicated to advancing
              medical visualization and education.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Badge variant="secondary" className="px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                40+ Combined Years Experience
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <GraduationCap className="w-4 h-4 mr-2" />
                Advanced Medical Degrees
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Industry Certified Professionals
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, index) => (
              <Card
                key={member.id}
                className={`group hover-lift hover:shadow-2xl border-0 bg-card/50 backdrop-blur-sm animate-slide-in-up stagger-${(index % 6) + 1}`}
              >
                <CardContent className="p-0">
                  {/* Profile Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.title}`}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                      <p className="text-primary font-semibold text-lg mb-4">{member.title}</p>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-pretty">{member.bio}</p>

                    {/* Credentials */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                        Credentials
                      </h4>
                      <div className="space-y-2">
                        {member.credentials.map((credential, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <Award className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                            {credential}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specializations */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                        Specializations
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specializations.map((spec, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Contact Links */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                        <Link href={`mailto:${member.email}`}>
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                        <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Let's collaborate to bring your medical visualization project to life. Our experts are ready to transform
              complex medical concepts into clear, engaging visuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent" asChild>
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
