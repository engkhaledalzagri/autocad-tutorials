
import React from 'react';
import { Image, Video, FileText, Download, Trash2, Upload } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { deleteFile, type MediaFile } from '@/lib/supabase';

interface FileGridProps {
  mediaFiles: MediaFile[];
  onDeleteComplete: () => void;
}

const FileGrid: React.FC<FileGridProps> = ({ mediaFiles, onDeleteComplete }) => {
  const { toast } = useToast();

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image': return <Image className="h-6 w-6 text-green-600" />;
      case 'video': return <Video className="h-6 w-6 text-blue-600" />;
      case 'document': return <FileText className="h-6 w-6 text-red-600" />;
      default: return <FileText className="h-6 w-6 text-gray-600" />;
    }
  };

  const getFileTypeLabel = (type: string) => {
    switch (type) {
      case 'image': return 'صورة';
      case 'video': return 'فيديو';
      case 'document': return 'مستند';
      default: return 'ملف';
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleDeleteFile = async (file: MediaFile) => {
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      toast({
        title: "خطأ في التكوين",
        description: "لم يتم تكوين Supabase. لا يمكن حذف الملفات",
        variant: "destructive",
      });
      return;
    }

    try {
      console.log('Deleting file:', file.name);
      const filePath = file.file_url.split('/').slice(-2).join('/'); // Extract path from URL
      const { success, error } = await deleteFile(file.id, filePath);
      
      if (!success) throw error;
      
      toast({
        title: "تم الحذف",
        description: "تم حذف الملف بنجاح",
      });
      
      onDeleteComplete();
    } catch (error) {
      console.error('Delete error:', error);
      toast({
        title: "خطأ",
        description: "فشل في حذف الملف",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>المكتبة</CardTitle>
        <CardDescription>
          {mediaFiles.length} ملف
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mediaFiles.map((file) => (
            <div key={file.id} className="border border-border rounded-lg p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                {getFileIcon(file.category)}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => window.open(file.file_url, '_blank')}
                    className="p-1 text-muted-foreground hover:text-primary transition-colors"
                    title="تحميل"
                  >
                    <Download size={16} />
                  </button>
                  <button 
                    onClick={() => handleDeleteFile(file)}
                    className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                    title="حذف"
                    disabled={!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              
              {file.category === 'image' ? (
                <div className="w-full h-32 bg-muted rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                  <img
                    src={file.file_url}
                    alt={file.name}
                    className="max-w-full max-h-full object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="flex items-center justify-center w-full h-full text-muted-foreground"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg></div>';
                      }
                    }}
                  />
                </div>
              ) : (
                <div className="w-full h-32 bg-muted rounded-lg mb-3 flex items-center justify-center">
                  {getFileIcon(file.category)}
                </div>
              )}
              
              <div>
                <h3 className="font-medium text-foreground truncate" title={file.file_name}>
                  {file.name}
                </h3>
                <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                  <span>{getFileTypeLabel(file.category)}</span>
                  <span>{formatFileSize(file.file_size)}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(file.created_at).toLocaleDateString('ar-SA')}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {mediaFiles.length === 0 && (
          <div className="text-center py-12">
            <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">لا توجد ملفات</h3>
            <p className="text-muted-foreground">
              ابدأ برفع ملفاتك الأولى
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FileGrid;
