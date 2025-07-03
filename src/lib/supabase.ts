
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key exists:', !!supabaseKey);

// Create a dummy client if environment variables are missing
export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for our media files
export interface MediaFile {
  id: string
  name: string
  file_name: string
  file_type: string
  file_size: number
  file_url: string
  thumbnail_url?: string
  description?: string
  category: string
  status: 'active' | 'inactive'
  uploaded_by: string
  created_at: string
  updated_at: string
}

// Upload file to Supabase Storage
export const uploadFile = async (file: File, category: string): Promise<{ data: any; error: any }> => {
  if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    return { data: null, error: { message: 'Supabase not configured' } };
  }
  
  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
  const filePath = `${category}/${fileName}`

  const { data, error } = await supabase.storage
    .from('media-files')
    .upload(filePath, file)

  return { data, error }
}

// Get public URL for uploaded file
export const getFileUrl = (path: string): string => {
  if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    return '#';
  }
  
  const { data } = supabase.storage
    .from('media-files')
    .getPublicUrl(path)
  
  return data.publicUrl
}

// Save file metadata to database
export const saveFileMetadata = async (fileData: Omit<MediaFile, 'id' | 'created_at' | 'updated_at'>): Promise<{ data: any; error: any }> => {
  if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    return { data: null, error: { message: 'Supabase not configured' } };
  }
  
  const { data, error } = await supabase
    .from('media_files')
    .insert([fileData])
    .select()

  return { data, error }
}

// Get all media files
export const getMediaFiles = async (category?: string): Promise<{ data: MediaFile[] | null; error: any }> => {
  if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    // Return sample data when Supabase is not configured
    return { 
      data: [
        {
          id: '1',
          name: 'صورة تجريبية',
          file_name: 'sample.jpg',
          file_type: 'image/jpeg',
          file_size: 1024,
          file_url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          description: 'صورة تجريبية للأوتوكاد',
          category: 'image',
          status: 'active' as const,
          uploaded_by: 'demo@example.com',
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z'
        }
      ], 
      error: null 
    };
  }

  let query = supabase
    .from('media_files')
    .select('*')
    .eq('status', 'active')
    .order('created_at', { ascending: false })

  if (category && category !== 'all') {
    query = query.eq('category', category)
  }

  const { data, error } = await query
  return { data, error }
}

// Delete file from storage and database
export const deleteFile = async (fileId: string, filePath: string): Promise<{ success: boolean; error?: any }> => {
  if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
    return { success: false, error: { message: 'Supabase not configured' } };
  }
  
  // Delete from storage
  const { error: storageError } = await supabase.storage
    .from('media-files')
    .remove([filePath])

  if (storageError) {
    return { success: false, error: storageError }
  }

  // Delete from database
  const { error: dbError } = await supabase
    .from('media_files')
    .delete()
    .eq('id', fileId)

  if (dbError) {
    return { success: false, error: dbError }
  }

  return { success: true }
}
