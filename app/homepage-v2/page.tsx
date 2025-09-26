"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Play, Star, Users, Award, Zap, Mail, Phone, MapPin, Loader2 } from "lucide-react"
import { useState } from "react"
import Image from "next/image";

export default function HomepageV2() {
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  })
  const [isContactLoading, setIsContactLoading] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)

  const handleContactInputChange = (e) => {
    const { name, value } = e.target
    setContactForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setIsContactLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsContactLoading(false)
    alert("Message sent successfully!")
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section V2 - Split Layout with Video */}
      <section
        id="home"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-accent/5 to-secondary/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_24px,rgba(95,179,212,0.03)_25px,rgba(95,179,212,0.03)_26px,transparent_27px),linear-gradient(-45deg,transparent_24px,rgba(25,25,112,0.03)_25px,rgba(25,25,112,0.03)_26px,transparent_27px)] bg-[size:50px_50px]"></div>

        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="flex items-center gap-3">
                <Badge className="bg-accent/20 text-foreground border-accent/30 px-4 py-2">
                  <Star className="w-4 h-4 mr-2" />
                  Award-Winning Studio
                </Badge>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black text-foreground leading-tight">
                Next-Gen
                <span className="block text-accent">Medical</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                We craft immersive 3D medical visualizations and cutting-edge applications that revolutionize healthcare
                education and patient understanding.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-transparent">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">200+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">99%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative aspect-[4/3] max-w-2xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>
                <Card className="relative glass-card p-8 rounded-3xl hover-lift">
                  <CardContent className="p-0 relative aspect-[4/3]">
                    <Image
                      src="/medical-dashboard.png"
                      alt="Medical Dashboard Interface"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl"
                    />
                    <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold animate-pulse-glow">
                      Live Demo
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid V2 */}
      <section id="features" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Why Choose Vismed Studio?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine medical expertise with cutting-edge technology to deliver unparalleled visualization solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                description: "Optimized 3D rendering with real-time interactions for seamless user experiences.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Team",
                description: "Medical professionals and 3D artists working together to ensure accuracy.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Award Winning",
                description: "Recognized by healthcare institutions for innovation and educational impact.",
              },
            ].map((feature, index) => (
              <Card key={index} className="glass-card hover-lift hover-glow p-8">
                <CardContent className="p-0 text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto text-accent">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by leading healthcare institutions worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Mitchell",
                role: "Chief Medical Educator",
                company: "Johns Hopkins Medical",
                rating: 5,
                testimonial:
                  "Vismed Studio transformed our anatomy curriculum. Students now grasp complex concepts 3x faster with their interactive 3D models.",
              },
              {
                name: "Prof. Michael Chen",
                role: "Department Head",
                company: "Stanford Medical School",
                rating: 5,
                testimonial:
                  "The quality and accuracy of their medical visualizations is unmatched. Our surgical training programs have never been more effective.",
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Research Director",
                company: "Mayo Clinic",
                rating: 5,
                testimonial:
                  "Their patient education apps have revolutionized how we explain procedures. Patient understanding and satisfaction scores increased by 40%.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="glass-card hover-lift p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.testimonial}"</p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-accent font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Let's Create Something Amazing</h2>
                <p className="text-xl text-muted-foreground">
                  Ready to revolutionize your medical education or patient communication? Get in touch with our team.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@vismedstudio.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="glass-card p-8">
              <CardContent className="p-0">
                {contactSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          className="w-full"
                          value={contactForm.firstName}
                          onChange={handleContactInputChange}
                          disabled={isContactLoading}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          className="w-full"
                          value={contactForm.lastName}
                          onChange={handleContactInputChange}
                          disabled={isContactLoading}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full"
                        value={contactForm.email}
                        onChange={handleContactInputChange}
                        disabled={isContactLoading}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company/Institution
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your organization"
                        className="w-full"
                        value={contactForm.company}
                        onChange={handleContactInputChange}
                        disabled={isContactLoading}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Project Details
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project requirements..."
                        className="w-full min-h-[120px]"
                        value={contactForm.message}
                        onChange={handleContactInputChange}
                        disabled={isContactLoading}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      disabled={isContactLoading}
                    >
                      {isContactLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section V2 */}
      <section className="py-24 bg-gradient-to-r from-accent to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Medical Education?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join leading healthcare institutions in revolutionizing how medical concepts are taught and understood.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
