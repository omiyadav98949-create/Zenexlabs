/*
# Create project_inquiries table

1. New Tables
- `project_inquiries` — stores contact form submissions from the Zenix Labs website
  - `id` (uuid, primary key, auto-generated)
  - `created_at` (timestamptz, defaults to now())
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `brand` (text, not null) — brand or company name
  - `website` (text, nullable) — brand website URL
  - `instagram` (text, nullable) — Instagram handle/URL
  - `product_category` (text, nullable) — type of product (beauty, jewelry, etc.)
  - `project_type` (text, nullable) — desired service (cinematic ad, product film, etc.)
  - `budget` (text, nullable) — budget range selection
  - `timeline` (text, nullable) — timeline expectation
  - `message` (text, not null) — free-form project description
  - `status` (text, not null, default 'new') — inquiry status for tracking

2. Security
- Enable RLS on `project_inquiries`.
- Allow anon + authenticated INSERT so the public contact form can submit inquiries.
- No SELECT/UPDATE/DELETE for anon — only the studio owner (via authenticated dashboard, future) can read/manage inquiries.
- INSERT policy uses WITH CHECK (true) since the form is intentionally public; all validation happens in the API route before insert.
*/

CREATE TABLE IF NOT EXISTS project_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  brand text NOT NULL,
  website text,
  instagram text,
  product_category text,
  project_type text,
  budget text,
  timeline text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE project_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON project_inquiries;
CREATE POLICY "anon_insert_inquiries"
ON project_inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_project_inquiries_created_at ON project_inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_project_inquiries_status ON project_inquiries (status);
