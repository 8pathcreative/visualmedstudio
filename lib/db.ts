import { supabaseServer } from './supabase-server'
import type { ContactSubmission, Project, Testimonial, TeamMember } from './types'

// ============ CONTACT SUBMISSIONS ============

export async function createContactSubmission(data: Omit<ContactSubmission, 'id' | 'createdAt' | 'status'>) {
  try {
    const { data: submission, error } = await supabaseServer
      .from('contact_submissions')
      .insert([
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          organization: data.organization,
          project_type: data.projectType,
          message: data.message,
          status: 'new',
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single()

    if (error) throw error
    return { success: true, data: submission }
  } catch (error) {
    console.error('Error creating contact submission:', error)
    return { success: false, error }
  }
}

export async function getContactSubmissions(limit = 50, offset = 0) {
  try {
    const { data, error, count } = await supabaseServer
      .from('contact_submissions')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) throw error
    return { success: true, data, count }
  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    return { success: false, error }
  }
}

export async function updateContactSubmissionStatus(id: string, status: ContactSubmission['status']) {
  try {
    const { data, error } = await supabaseServer
      .from('contact_submissions')
      .update({ status })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error updating contact submission:', error)
    return { success: false, error }
  }
}

export async function deleteContactSubmission(id: string) {
  try {
    const { error } = await supabaseServer
      .from('contact_submissions')
      .delete()
      .eq('id', id)

    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Error deleting contact submission:', error)
    return { success: false, error }
  }
}

// ============ PROJECTS ============

export async function createProject(data: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) {
  try {
    const now = new Date().toISOString()
    const { data: project, error } = await supabaseServer
      .from('projects')
      .insert([
        {
          title: data.title,
          description: data.description,
          category: data.category,
          image: data.image,
          featured: data.featured,
          link: data.link,
          technologies: data.technologies,
          created_at: now,
          updated_at: now,
        },
      ])
      .select()
      .single()

    if (error) throw error
    return { success: true, data: project }
  } catch (error) {
    console.error('Error creating project:', error)
    return { success: false, error }
  }
}

export async function getProjects(featured = false) {
  try {
    let query = supabaseServer.from('projects').select('*')
    
    if (featured) {
      query = query.eq('featured', true)
    }
    
    const { data, error } = await query.order('created_at', { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching projects:', error)
    return { success: false, error }
  }
}

export async function getProjectById(id: string) {
  try {
    const { data, error } = await supabaseServer
      .from('projects')
      .select('*')
      .eq('id', id)
      .single()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching project:', error)
    return { success: false, error }
  }
}

export async function updateProject(id: string, data: Partial<Omit<Project, 'id' | 'createdAt'>>) {
  try {
    const { data: project, error } = await supabaseServer
      .from('projects')
      .update({
        ...data,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return { success: true, data: project }
  } catch (error) {
    console.error('Error updating project:', error)
    return { success: false, error }
  }
}

export async function deleteProject(id: string) {
  try {
    const { error } = await supabaseServer
      .from('projects')
      .delete()
      .eq('id', id)

    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Error deleting project:', error)
    return { success: false, error }
  }
}

// ============ TESTIMONIALS ============

export async function createTestimonial(data: Omit<Testimonial, 'id' | 'createdAt'>) {
  try {
    const { data: testimonial, error } = await supabaseServer
      .from('testimonials')
      .insert([
        {
          author: data.author,
          title: data.title,
          company: data.company,
          content: data.content,
          image: data.image,
          rating: data.rating,
          featured: data.featured,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single()

    if (error) throw error
    return { success: true, data: testimonial }
  } catch (error) {
    console.error('Error creating testimonial:', error)
    return { success: false, error }
  }
}

export async function getTestimonials(featured = false) {
  try {
    let query = supabaseServer.from('testimonials').select('*')
    
    if (featured) {
      query = query.eq('featured', true)
    }
    
    const { data, error } = await query.order('created_at', { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return { success: false, error }
  }
}

export async function updateTestimonial(id: string, data: Partial<Omit<Testimonial, 'id' | 'createdAt'>>) {
  try {
    const { data: testimonial, error } = await supabaseServer
      .from('testimonials')
      .update(data)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return { success: true, data: testimonial }
  } catch (error) {
    console.error('Error updating testimonial:', error)
    return { success: false, error }
  }
}

export async function deleteTestimonial(id: string) {
  try {
    const { error } = await supabaseServer
      .from('testimonials')
      .delete()
      .eq('id', id)

    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Error deleting testimonial:', error)
    return { success: false, error }
  }
}

// ============ TEAM MEMBERS ============

export async function createTeamMember(data: Omit<TeamMember, 'id' | 'createdAt'>) {
  try {
    const { data: member, error } = await supabaseServer
      .from('team_members')
      .insert([
        {
          name: data.name,
          role: data.role,
          bio: data.bio,
          image: data.image,
          social: data.social,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single()

    if (error) throw error
    return { success: true, data: member }
  } catch (error) {
    console.error('Error creating team member:', error)
    return { success: false, error }
  }
}

export async function getTeamMembers() {
  try {
    const { data, error } = await supabaseServer
      .from('team_members')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching team members:', error)
    return { success: false, error }
  }
}

export async function updateTeamMember(id: string, data: Partial<Omit<TeamMember, 'id' | 'createdAt'>>) {
  try {
    const { data: member, error } = await supabaseServer
      .from('team_members')
      .update(data)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return { success: true, data: member }
  } catch (error) {
    console.error('Error updating team member:', error)
    return { success: false, error }
  }
}

export async function deleteTeamMember(id: string) {
  try {
    const { error } = await supabaseServer
      .from('team_members')
      .delete()
      .eq('id', id)

    if (error) throw error
    return { success: true }
  } catch (error) {
    console.error('Error deleting team member:', error)
    return { success: false, error }
  }
}
