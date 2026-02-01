'use client'

import { useState, useEffect } from 'react'
import { supabaseClient } from '@/lib/supabase-client'
import { getContactSubmissions, updateContactSubmissionStatus, deleteContactSubmission } from '@/lib/db'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Loader2, Trash2, Check, Archive } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { AdminNav } from '@/components/admin-nav'

interface ContactSubmission {
  id: string
  first_name: string
  last_name: string
  email: string
  organization?: string
  project_type?: string
  message: string
  status: 'new' | 'responded' | 'archived'
  created_at: string
}

export default function AdminSubmissions() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabaseClient.auth.getSession()
      if (!session) {
        router.push('/admin/login')
        return
      }
      
      await loadSubmissions()
    }
    
    checkAuth()
  }, [router])

  const loadSubmissions = async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await getContactSubmissions(50, 0)
      if (result.success) {
        setSubmissions(result.data || [])
      } else {
        setError('Failed to load submissions')
      }
    } catch (err) {
      setError('An error occurred while loading submissions')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const result = await updateContactSubmissionStatus(id, newStatus as 'new' | 'responded' | 'archived')
      if (result.success) {
        await loadSubmissions()
      }
    } catch (err) {
      console.error('Error updating status:', err)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return
    
    try {
      const result = await deleteContactSubmission(id)
      if (result.success) {
        await loadSubmissions()
      }
    } catch (err) {
      console.error('Error deleting submission:', err)
    }
  }

  const handleLogout = async () => {
    await supabaseClient.auth.signOut()
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav onLogout={handleLogout} />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Contact Submissions</h2>
          <Button onClick={loadSubmissions} disabled={loading}>
            {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Refresh
          </Button>
        </div>

        {error && (
          <Card className="border-destructive mb-8">
            <CardContent className="pt-6">
              <p className="text-destructive">{error}</p>
            </CardContent>
          </Card>
        )}

        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : submissions.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-center">No submissions yet</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <Card key={submission.id}>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">
                          {submission.first_name} {submission.last_name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{submission.email}</p>
                        {submission.organization && (
                          <p className="text-sm text-muted-foreground">{submission.organization}</p>
                        )}
                      </div>
                      <Badge variant={submission.status === 'new' ? 'default' : 'secondary'}>
                        {submission.status}
                      </Badge>
                    </div>

                    {submission.project_type && (
                      <div>
                        <p className="text-sm font-medium mb-1">Project Type</p>
                        <p className="text-sm text-muted-foreground">{submission.project_type}</p>
                      </div>
                    )}

                    <div>
                      <p className="text-sm font-medium mb-2">Message</p>
                      <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                        {submission.message}
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <p className="text-xs text-muted-foreground">
                        {new Date(submission.created_at).toLocaleString()}
                      </p>
                      <div className="flex gap-2">
                        {submission.status === 'new' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleStatusChange(submission.id, 'responded')}
                            className="gap-2"
                          >
                            <Check className="w-4 h-4" />
                            Mark Responded
                          </Button>
                        )}
                        {submission.status !== 'archived' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleStatusChange(submission.id, 'archived')}
                            className="gap-2"
                          >
                            <Archive className="w-4 h-4" />
                            Archive
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(submission.id)}
                          className="gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
