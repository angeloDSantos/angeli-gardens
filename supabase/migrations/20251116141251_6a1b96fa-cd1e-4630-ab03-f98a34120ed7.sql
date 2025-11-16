-- Create reviews table
CREATE TABLE public.reviews (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  location text,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 10),
  title text NOT NULL,
  review_text text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  approved boolean NOT NULL DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read approved reviews
CREATE POLICY "Anyone can view approved reviews"
ON public.reviews
FOR SELECT
USING (approved = true);

-- Allow anyone to insert reviews (they will need approval)
CREATE POLICY "Anyone can submit reviews"
ON public.reviews
FOR INSERT
WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX idx_reviews_approved ON public.reviews(approved, created_at DESC);
CREATE INDEX idx_reviews_created_at ON public.reviews(created_at DESC);