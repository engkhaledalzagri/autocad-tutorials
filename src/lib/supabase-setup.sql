-- Database setup for security
-- Run these commands in your Supabase SQL editor

-- Enable RLS on media_files table
ALTER TABLE media_files ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read active files
CREATE POLICY "Users can read active media files" ON media_files
    FOR SELECT USING (status = 'active');

-- Policy: Only authenticated users can insert files
CREATE POLICY "Authenticated users can insert media files" ON media_files
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Policy: Users can only update their own files
CREATE POLICY "Users can update their own media files" ON media_files
    FOR UPDATE USING (auth.email() = uploaded_by);

-- Policy: Users can only delete their own files
CREATE POLICY "Users can delete their own media files" ON media_files
    FOR DELETE USING (auth.email() = uploaded_by);

-- Create storage bucket policies (run in Storage settings)
-- Bucket: media-files
-- INSERT policy: Allow authenticated users
-- SELECT policy: Allow public access to files
-- UPDATE/DELETE policy: Allow file owners only