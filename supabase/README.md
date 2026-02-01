# Supabase Setup Instructions

## Prerequisites
- Supabase account (free tier available at https://supabase.com)
- Project created in Supabase

## Step 1: Get Your Credentials

1. Go to your Supabase project dashboard
2. Click **Settings** → **API**
3. Copy and save:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role secret` → `SUPABASE_SERVICE_ROLE_KEY`

4. Add to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Step 2: Run Migrations

### Option A: Using Supabase Dashboard (Easiest)

1. Go to your Supabase project → **SQL Editor**
2. Click **New Query**
3. Open each SQL file in `supabase/migrations/` folder
4. Copy the entire content and paste into the editor
5. Click **Run** or press `Ctrl+Enter`
6. Repeat for each migration file in order:
   - `001_contact_submissions.sql`
   - `002_projects.sql`
   - `003_testimonials.sql`
   - `004_team_members.sql`

### Option B: Using Supabase CLI (Advanced)

```bash
# Install Supabase CLI
brew install supabase/tap/supabase

# Link to your project
supabase link --project-ref your_project_ref

# Run migrations
supabase migration up
```

## Step 3: Verify Tables Created

In Supabase Dashboard:
1. Go to **Table Editor**
2. You should see:
   - `contact_submissions`
   - `projects`
   - `testimonials`
   - `team_members`

## Step 4: Test Connection

```bash
# In your project root
pnpm dev
```

Visit the contact form and submit a test message. Check Supabase Table Editor to see if the submission appears in `contact_submissions` table.

## Database Schema

### contact_submissions
- `id` (UUID, Primary Key)
- `first_name` (Text)
- `last_name` (Text)
- `email` (Text)
- `organization` (Text, Optional)
- `project_type` (Text, Optional)
- `message` (Text)
- `status` (Text: 'new', 'responded', 'archived')
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### projects
- `id` (UUID, Primary Key)
- `title` (Text)
- `description` (Text)
- `category` (Text)
- `image` (Text)
- `featured` (Boolean)
- `link` (Text, Optional)
- `technologies` (Array of Text)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### testimonials
- `id` (UUID, Primary Key)
- `author` (Text)
- `title` (Text)
- `company` (Text)
- `content` (Text)
- `image` (Text, Optional)
- `rating` (Integer: 1-5)
- `featured` (Boolean)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### team_members
- `id` (UUID, Primary Key)
- `name` (Text)
- `role` (Text)
- `bio` (Text)
- `image` (Text)
- `social` (JSONB)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

## Troubleshooting

### "Missing Supabase environment variables"
- Make sure you've added the credentials to `.env.local`
- Restart `pnpm dev`

### "Permission denied" on insert
- Make sure Row Level Security (RLS) policies are correctly applied
- Check the SQL migration ran successfully

### Tables not appearing
- Run the migration SQL files again in the correct order
- Check for any error messages in the Supabase dashboard

## Next Steps

After setup:
1. Update contact API to save submissions to database
2. Create admin dashboard to view submissions
3. Make projects and testimonials dynamic
4. Set up authentication for admin access
