'use client'

import { useState, useEffect } from 'react'
import { supabaseClient } from '@/lib/supabase-client'
import { Button } from '@/components/ui/button'
import { LogOut, Menu, X } from 'lucide-react'

interface User {
  email?: string
}

export function AdminNav({ onLogout }: { onLogout: () => void }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabaseClient.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [])

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-40">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">{user?.email}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={onLogout}
            className="gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  )
}
