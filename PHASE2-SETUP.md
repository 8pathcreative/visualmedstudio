# Phase 2: Database Integration - Setup Guide

## Step 1: Create Supabase Project (5 minutes)

1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub or Email
4. Create a new project:
   - Name: "visual-med-studio"
   - Region: Choose closest to you (e.g., us-east-1)
   - Password: Create a strong password
5. Wait for project to initialize (~2 minutes)

## Step 2: Get Your Database Credentials

After project is created:
1. Go to Project Settings → API
2. Copy these values:
   - `NEXT_PUBLIC_SUPABASE_URL` - the URL field
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - anon public key
   - `SUPABASE_SERVICE_ROLE_KEY` - service role key

3. Update your `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Step 3: Create Database Tables

We'll create tables for:
- Contact submissions
- Projects
- Testimonials
- Team members

## Installation Steps

1. Install Supabase client:
   `pnpm add @supabase/supabase-js`

2. Create database helpers
3. Create migration files
4. Create API routes for database operations
5. Update contact form to save to database

---

**Do you have Supabase set up, or should I guide you through creating an account?**

Once ready, respond with your credentials or "ready" and we'll proceed with:
- Creating database tables
- Writing database queries
- Updating the contact API
- Building the admin dashboard
