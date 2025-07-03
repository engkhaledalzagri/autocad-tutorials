
import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { uploadFile, getFileUrl, saveFileMetadata, type MediaFile } from '@/lib/supabase';

interface FileUploadProps {
  onUploadComplete: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUploadComplete }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{[key: string]: number}>({});
  const { toast } = useToast();
  const { user } = useAuth();

  const getFileCategory = (file: File): string => {
    console.log('Determining category for file:', file.name, 'type:', file.type);
    if (file.type.startsWith('image/')) return 'image';
    if (file.type.startsWith('video/')) return 'video';
    if (file.type.includes('pdf') || file.type.includes('document') || file.type.includes('text')) return 'document';
    return 'other';
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      console.log('No files selected');
      return;
    }

    console.log('Starting file upload for', files.length, 'files');
    
    // Check if Supabase is configured
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      toast({
        title: "خطأ في التكوين",
        description: "لم يتم تكوين Supabase. يرجى تكوين قاعدة البيانات أولاً",
        variant: "destructive",
      });
      console.error('Supabase not configured - cannot upload files');
      return;
    }

    setIsUploading(true);
    const uploadPromises = Array.from(files).map(async (file) => {
      try {
        console.log('Uploading file:', file.name);
        setUploadProgress(prev => ({ ...prev, [file.name]: 0 }));
        
        // Get file category
        const category = getFileCategory(file);
        console.log('File category:', category);
        
        // Upload to Supabase Storage
        const { data: uploadData, error: uploadError } = await uploadFile(file, category);
        if (uploadError) {
          console.error('Upload error:', uploadError);
          throw uploadError;
        }

        setUploadProgress(prev => ({ ...prev, [file.name]: 50 }));

        // Get public URL
        const fileUrl = getFileUrl(uploadData.path);
        console.log('File URL generated:', fileUrl);
        
        // Save metadata to database
        const fileMetadata = {
          name: file.name.split('.')[0],
          file_name: file.name,
          file_type: file.type,
          file_size: file.size,
          file_url: fileUrl,
          category: category,
          status: 'active' as const,
          uploaded_by: user?.email || 'anonymous',
        };

        console.log('Saving file metadata:', fileMetadata);
        const { data: dbData, error: dbError } = await saveFileMetadata(fileMetadata);
        if (dbError) {
          console.error('Database error:', dbError);
          throw dbError;
        }

        setUploadProgress(prev => ({ ...prev, [file.name]: 100 }));
        console.log('File uploaded successfully:', file.name);
        
        return { success: true, file: file.name };
      } catch (error) {
        console.error('Upload error for file', file.name, ':', error);
        return { success: false, file: file.name, error };
      }
    });

    try {
      const results = await Promise.all(uploadPromises);
      const successful = results.filter(r => r.success).length;
      const failed = results.filter(r => !r.success).length;

      console.log('Upload results:', { successful, failed });

      if (successful > 0) {
        toast({
          title: "نجح الرفع",
          description: `تم رفع ${successful} ملف بنجاح`,
        });
        onUploadComplete();
      }

      if (failed > 0) {
        const failedFiles = results.filter(r => !r.success);
        console.error('Failed uploads:', failedFiles);
        toast({
          title: "خطأ في الرفع",
          description: `فشل رفع ${failed} ملف - تحقق من اتصال الإنترنت وإعدادات Supabase`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('General upload error:', error);
      toast({
        title: "خطأ",
        description: "فشل في رفع الملفات. تحقق من إعدادات قاعدة البيانات",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      setUploadProgress({});
      // Reset file input
      if (event.target) {
        event.target.value = '';
      }
    }
  };

  return (
    <>
      {/* Upload Button */}
      <div className="flex items-center gap-4">
        <input
          type="file"
          id="file-upload"
          multiple
          accept="image/*,video/*,.pdf,.doc,.docx"
          onChange={handleFileUpload}
          className="hidden"
        />
        <Button
          onClick={() => document.getElementById('file-upload')?.click()}
          className="bg-primary hover:bg-primary/90"
          disabled={isUploading}
        >
          {isUploading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2" />
              جاري الرفع...
            </>
          ) : (
            <>
              <Upload className="ml-2 h-4 w-4" />
              رفع ملفات
            </>
          )}
        </Button>
      </div>

      {/* Configuration Warning */}
      {(!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <AlertCircle className="h-6 w-6 text-yellow-600" />
              <div>
                <h3 className="font-medium text-yellow-800">تحذير التكوين</h3>
                <p className="text-sm text-yellow-700">
                  لم يتم تكوين Supabase. رفع الملفات وحذفها غير متاح حالياً. يتم عرض بيانات تجريبية فقط.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Upload Progress */}
      {Object.keys(uploadProgress).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>حالة الرفع</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(uploadProgress).map(([fileName, progress]) => (
                <div key={fileName} className="flex items-center gap-4">
                  <span className="text-sm truncate flex-1">{fileName}</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-sm w-12 text-right">{progress}%</span>
                  {progress === 100 && <CheckCircle className="h-4 w-4 text-green-600" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FileUpload;
