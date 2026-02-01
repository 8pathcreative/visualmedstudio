import { z } from "zod"

export const ContactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  organization: z.string().max(100).optional().nullable(),
  projectType: z.string().min(1, "Please select a project type").optional(),
  projectDetails: z.string()
    .min(10, "Project details must be at least 10 characters")
    .max(5000, "Project details must be less than 5000 characters"),
})

export type ContactFormData = z.infer<typeof ContactFormSchema>

export function validateContactForm(data: unknown) {
  try {
    return ContactFormSchema.parse(data)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
      }
    }
    throw error
  }
}
