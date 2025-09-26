"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    projectDetails: "",
    projectType: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.organization,
          message: formData.projectDetails,
          projectType: formData.projectType,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          organization: "",
          projectDetails: "",
          projectType: "",
        })
      } else {
        console.error("[v0] Form submission failed")
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-background via-secondary/5 to-accent/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-slide-in-up">
            <Card className="glass-card p-8">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-scale-bounce">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Message Sent!</h2>
                <p className="text-muted-foreground text-lg">
                  Thank you for reaching out. We'll get back to you within 24 hours to discuss your medical
                  visualization project.
                </p>
                <Button onClick={() => setIsSubmitted(false)} className="animate-pulse-glow">
                  Send Another Message
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/5 to-accent/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Start Your Project</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your medical education or visualization needs? Let's discuss how we can bring your vision
            to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8 animate-slide-in-left">
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">hello@vismedstudio.com</p>
                <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  2223 Dodge Street
                  <br />
                  Suite 17
                  <br />
                  Omaha, NE 68105
                </p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Our Expertise</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">3D Medical Illustrations</Badge>
                <Badge variant="secondary">Interactive Applications</Badge>
                <Badge variant="secondary">Educational Tools</Badge>
                <Badge variant="secondary">VR/AR Experiences</Badge>
                <Badge variant="secondary">Full-Stack Web & App Development</Badge>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="hover-lift"
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="hover-lift"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="hover-lift"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      placeholder="Medical University"
                      value={formData.organization}
                      onChange={(e) => handleInputChange("organization", e.target.value)}
                      className="hover-lift"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select onValueChange={(value) => handleInputChange("projectType", value)} disabled={isLoading}>
                      <SelectTrigger className="hover-lift">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3d-illustration">3D Medical Illustration</SelectItem>
                        <SelectItem value="interactive-app">Interactive Application</SelectItem>
                        <SelectItem value="educational-tool">Educational Tool</SelectItem>
                        <SelectItem value="vr-ar">VR/AR Experience</SelectItem>
                        <SelectItem value="custom">Custom Development</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectDetails">Project Details *</Label>
                    <Textarea
                      id="projectDetails"
                      placeholder="Tell us about your medical visualization or application needs..."
                      value={formData.projectDetails}
                      onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                      required
                      rows={5}
                      className="hover-lift resize-none"
                      disabled={isLoading}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full animate-pulse-glow hover-lift" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
