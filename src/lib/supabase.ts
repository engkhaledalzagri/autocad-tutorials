import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mtwcmonjviqshhxzkyqg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10d2Ntb25qdmlxc2hoeHpreXFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NzUyODYsImV4cCI6MjA2NzA1MTI4Nn0.jmdXCcTqf3H1aMixCN6BtYT3e5-KdRZsBEIRLy-Pnzs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

export const uploadFile = async (file: File, category: string) => {
  const fileExt = file.name.split('.').pop()
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
  const filePath = `${category}/${fileName}`

  const { data, error } = await supabase.storage
    .from('media-files')
    .upload(filePath, file)

  return { data, error }
}

export const getFileUrl = (path: string) => {
  const { data } = supabase.storage
    .from('media-files')
    .getPublicUrl(path)
  return data.publicUrl
}

export const saveFileMetadata = async (fileData: Omit<MediaFile, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('media_files')
    .insert([fileData])
    .select()
  return { data, error }
}

export const getMediaFiles = async (category?: string) => {
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

export const deleteFile = async (fileId: string, filePath: string) => {
  const { error: storageError } = await supabase.storage
    .from('media-files')
    .remove([filePath])

  if (storageError) {
    return { success: false, error: storageError }
  }

  const { error: dbError } = await supabase
    .from('media_files')
    .delete()
    .eq('id', fileId)

  if (dbError) {
    return { success: false, error: dbError }
  }

  return { success: true }
}
