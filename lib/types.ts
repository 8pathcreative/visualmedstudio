// Contact Form Submission
export interface ContactSubmission {
  id: string
  firstName: string
  lastName: string
  email: string
  organization?: string
  projectType?: string
  message: string
  createdAt: Date
  status: "new" | "responded" | "archived"
}

// Project (for portfolio)
export interface Project {
  id: string
  title: string
  description: string
  category: string
  image: string
  featured: boolean
  link?: string
  technologies: string[]
  createdAt: Date
  updatedAt: Date
}

// Testimonial
export interface Testimonial {
  id: string
  author: string
  title: string
  company: string
  content: string
  image?: string
  rating: number
  createdAt: Date
  featured: boolean
}

// Team Member
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    email?: string
  }
  createdAt: Date
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  errors?: Record<string, string[]>
}
