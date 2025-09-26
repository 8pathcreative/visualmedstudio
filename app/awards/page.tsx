import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Trophy, Star, Medal, Briefcase as Certificate, Users, ExternalLink } from "lucide-react"
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const awards = [
  {
    id: 1,
    title: "Best Medical Visualization 2024",
    organization: "International Medical Media Association",
    year: "2024",
    category: "Industry Recognition",
    description:
      "Recognized for outstanding achievement in creating innovative 3D medical visualizations that advance medical education.",
    image: "/placeholder.svg?key=award1",
    type: "award",
  },
  {
    id: 2,
    title: "Healthcare Innovation Excellence",
    organization: "Digital Health Awards",
    year: "2023",
    category: "Innovation",
    description:
      "Honored for developing cutting-edge interactive medical training platforms that improve learning outcomes.",
    image: "/placeholder.svg?key=award2",
    type: "award",
  },
  {
    id: 3,
    title: "Top 10 MedTech Startups",
    organization: "MedTech Breakthrough",
    year: "2023",
    category: "Industry Recognition",
    description:
      "Selected as one of the most promising medical technology companies revolutionizing healthcare education.",
    image: "/placeholder.svg?key=award3",
    type: "recognition",
  },
]

const certifications = [
  {
    id: 1,
    title: "HIPAA Compliance Certification",
    organization: "U.S. Department of Health",
    year: "2024",
    validUntil: "2025",
    category: "Compliance",
    description: "Certified for secure handling of protected health information in all medical visualization projects.",
    image: "/placeholder.svg?key=cert1",
    type: "certification",
  },
  {
    id: 2,
    title: "ISO 27001 Information Security",
    organization: "International Organization for Standardization",
    year: "2023",
    validUntil: "2026",
    category: "Security",
    description: "International standard certification for information security management systems.",
    image: "/placeholder.svg?key=cert2",
    type: "certification",
  },
  {
    id: 3,
    title: "FDA 510(k) Cleared Visualization Tools",
    organization: "U.S. Food and Drug Administration",
    year: "2023",
    validUntil: "Ongoing",
    category: "Medical Device",
    description: "FDA clearance for medical device visualization software used in clinical settings.",
    image: "/placeholder.svg?key=cert3",
    type: "certification",
  },
  {
    id: 4,
    title: "Certified Medical Illustrator (CMI)",
    organization: "Association of Medical Illustrators",
    year: "2022",
    validUntil: "2027",
    category: "Professional",
    description: "Professional certification ensuring the highest standards in medical illustration and visualization.",
    image: "/placeholder.svg?key=cert4",
    type: "certification",
  },
]

const partnerships = [
  {
    id: 1,
    title: "Johns Hopkins Medical School",
    type: "Educational Partnership",
    year: "2023-Present",
    description: "Collaborative partnership developing next-generation medical education tools and curricula.",
    logo: "/placeholder.svg?key=partner1",
  },
  {
    id: 2,
    title: "Mayo Clinic Innovation Lab",
    type: "Research Collaboration",
    year: "2022-Present",
    description: "Joint research initiative focused on advancing surgical planning through 3D visualization.",
    logo: "/placeholder.svg?key=partner2",
  },
  {
    id: 3,
    title: "American Medical Association",
    type: "Industry Alliance",
    year: "2024-Present",
    description: "Strategic alliance to promote best practices in medical visualization and education technology.",
    logo: "/placeholder.svg?key=partner3",
  },
]

const achievements = [
  { metric: "50+", label: "Industry Awards", icon: Trophy },
  { metric: "99.9%", label: "Client Satisfaction", icon: Star },
  { metric: "15+", label: "Certifications", icon: Certificate },
  { metric: "100+", label: "Medical Partners", icon: Users },
]

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-card to-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Awards & Certifications
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-pretty">
              Our commitment to excellence in medical visualization has been recognized by leading healthcare
              organizations, industry bodies, and regulatory authorities worldwide.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">{achievement.metric}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Certifications Tabs */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="awards" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="awards" className="flex items-center gap-2 p-4">
                <Award className="w-4 h-4" />
                Awards
              </TabsTrigger>
              <TabsTrigger value="certifications" className="flex items-center gap-2 p-4">
                <Certificate className="w-4 h-4" />
                Certifications
              </TabsTrigger>
              <TabsTrigger value="partnerships" className="flex items-center gap-2 p-4">
                <Users className="w-4 h-4" />
                Partnerships
              </TabsTrigger>
            </TabsList>

            {/* Awards Tab */}
            <TabsContent value="awards" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Industry Recognition</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Our innovative approach to medical visualization has earned recognition from prestigious healthcare
                  and technology organizations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {awards.map((award, index) => (
                  <Card
                    key={award.id}
                    className={`hover-lift hover:shadow-2xl border-0 bg-card/50 backdrop-blur-sm animate-slide-in-up stagger-${(index % 3) + 1}`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                          <Trophy className="w-10 h-10 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {award.year}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {award.category}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-2">{award.title}</h3>
                          <p className="text-primary font-semibold mb-3">{award.organization}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">{award.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Certifications Tab */}
            <TabsContent value="certifications" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Professional Certifications</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Our certifications ensure compliance with healthcare regulations and demonstrate our commitment to the
                  highest professional standards.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {certifications.map((cert, index) => (
                  <Card
                    key={cert.id}
                    className={`hover-lift hover:shadow-2xl border-0 bg-card/50 backdrop-blur-sm animate-slide-in-up stagger-${(index % 4) + 1}`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                          <Certificate className="w-10 h-10 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {cert.year}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Valid until {cert.validUntil}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-2">{cert.title}</h3>
                          <p className="text-primary font-semibold mb-3">{cert.organization}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cert.description}</p>
                          <Badge variant="outline" className="text-xs">
                            {cert.category}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Partnerships Tab */}
            <TabsContent value="partnerships" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Strategic Partnerships</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                  We collaborate with leading medical institutions and healthcare organizations to advance the field of
                  medical visualization.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {partnerships.map((partnership, index) => (
                  <Card
                    key={partnership.id}
                    className={`hover-lift hover:shadow-2xl border-0 bg-card/50 backdrop-blur-sm animate-slide-in-up stagger-${index + 1}`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center gap-8">
                        <div className="w-24 h-24 rounded-lg bg-white p-4 flex items-center justify-center flex-shrink-0 relative">
                          <Image
                            src={partnership.logo || "/placeholder.svg"}
                            alt={`${partnership.title} logo`}
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {partnership.year}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {partnership.type}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-3">{partnership.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{partnership.description}</p>
                        </div>
                        <Button variant="outline" size="sm" className="flex-shrink-0 bg-transparent">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Our certifications and partnerships demonstrate our commitment to excellence, security, and compliance in
              medical visualization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 bg-card/50 backdrop-blur-sm hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Medal className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Regulatory Compliance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Full HIPAA and FDA compliance ensuring the highest standards of medical data security
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-card/50 backdrop-blur-sm hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Industry Recognition</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Multiple awards from leading healthcare and technology organizations worldwide
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-card/50 backdrop-blur-sm hover-lift">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Trusted Partnerships</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Collaborative relationships with top medical institutions and healthcare organizations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Experience Award-Winning Quality
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Join the leading medical institutions that trust us with their most critical visualization needs. Let's
              create something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg" asChild>
                <Link href="/contact">
                  <Award className="w-5 h-5 mr-2" />
                  Start Your Project
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent" asChild>
                <Link href="/projects">
                  <Trophy className="w-5 h-5 mr-2" />
                  View Our Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
