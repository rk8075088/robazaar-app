-- Run this in Supabase Dashboard → SQL Editor
-- Creates the bookings table and allows inserts from your form

CREATE TABLE IF NOT EXISTS public.bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon insert" ON public.bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Required for Admin Panel: allows reading bookings (run if you use /admin-panel)
CREATE POLICY "Allow anon select" ON public.bookings
  FOR SELECT
  TO anon
  USING (true);
