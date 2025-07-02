
import React, { useState, useEffect } from 'react';
import { Upload, Image, Video, FileText, Trash2, Download, Search, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { uploadFile, getFileUrl, saveFileMetadata, getMediaFiles, deleteFile, type MediaFile } from '@/lib/supabase';

const MediaManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{[key: string]: number}>({});
  const { toast } = useToast();

  // Load media files on component mount
  useEffect(() => {
    loadMediaFiles();
  }, [selectedType]);

  const loadMediaFiles = async () => {
    try {
      const { data, error } = await getMediaFiles(selectedType);
      if (error) throw error;
      setMediaFiles(data || []);
    } catch (error) {
      console.error('Error loading media files:', error);
      toast({
        title: "خطأ",
        description: "فشل في تحميل الملفات",
        variant: "destructive",
      });
    }
  };

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

  const getFileCategory = (file: File): string => {
    if (file.type.startsWith('image/')) return 'image';
    if (file.type.startsWith('video/')) return 'video';
    if (file.type.includes('pdf') || file.type.includes('document') || file.type.includes('text')) return 'document';
    return 'other';
  };

  const filteredFiles = mediaFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || file.category === selectedType;
    return matchesSearch && matchesType;
  });

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const uploadPromises = Array.from(files).map(async (file) => {
      try {
        setUploadProgress(prev => ({ ...prev, [file.name]: 0 }));
        
        // Get file category
        const category = getFileCategory(file);
        
        // Upload to Supabase Storage
        const { data: uploadData, error: uploadError } = await uploadFile(file, category);
        if (uploadError) throw uploadError;

        setUploadProgress(prev => ({ ...prev, [file.name]: 50 }));

        // Get public URL
        const fileUrl = getFileUrl(uploadData.path);
        
        // Save metadata to database
        const fileMetadata = {
          name: file.name.split('.')[0],
          file_name: file.name,
          file_type: file.type,
          file_size: file.size,
          file_url: fileUrl,
          category: category,
          status: 'active' as const,
          uploaded_by: 'admin', // In real app, get from auth
        };

        const { data: dbData, error: dbError } = await saveFileMetadata(fileMetadata);
        if (dbError) throw dbError;

        setUploadProgress(prev => ({ ...prev, [file.name]: 100 }));
        
        return { success: true, file: file.name };
      } catch (error) {
        console.error('Upload error:', error);
        return { success: false, file: file.name, error };
      }
    });

    try {
      const results = await Promise.all(uploadPromises);
      const successful = results.filter(r => r.success).length;
      const failed = results.filter(r => !r.success).length;

      if (successful > 0) {
        toast({
          title: "نجح الرفع",
          description: `تم رفع ${successful} ملف بنجاح`,
        });
        await loadMediaFiles(); // Reload files
      }

      if (failed > 0) {
        toast({
          title: "خطأ جزئي",
          description: `فشل رفع ${failed} ملف`,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "خطأ",
        description: "فشل في رفع الملفات",
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

  const handleDeleteFile = async (file: MediaFile) => {
    try {
      const filePath = file.file_url.split('/').slice(-2).join('/'); // Extract path from URL
      const { success, error } = await deleteFile(file.id, filePath);
      
      if (!success) throw error;
      
      toast({
        title: "تم الحذف",
        description: "تم حذف الملف بنجاح",
      });
      
      await loadMediaFiles(); // Reload files
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">إدارة الملفات</h2>
          <p className="text-gray-600">إدارة الصور والفيديوهات والمستندات</p>
        </div>
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
      </div>

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
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Upload Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Image className="h-8 w-8 text-green-600" />
              <div className="mr-4">
                <div className="text-2xl font-bold">
                  {mediaFiles.filter(f => f.category === 'image').length}
                </div>
                <p className="text-xs text-muted-foreground">صورة</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Video className="h-8 w-8 text-blue-600" />
              <div className="mr-4">
                <div className="text-2xl font-bold">
                  {mediaFiles.filter(f => f.category === 'video').length}
                </div>
                <p className="text-xs text-muted-foreground">فيديو</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-red-600" />
              <div className="mr-4">
                <div className="text-2xl font-bold">
                  {mediaFiles.filter(f => f.category === 'document').length}
                </div>
                <p className="text-xs text-muted-foreground">مستند</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Upload className="h-8 w-8 text-purple-600" />
              <div className="mr-4">
                <div className="text-2xl font-bold">
                  {formatFileSize(mediaFiles.reduce((total, file) => total + file.file_size, 0))}
                </div>
                <p className="text-xs text-muted-foreground">المساحة المستخدمة</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="البحث في الملفات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 border border-input rounded-md bg-background"
            >
              <option value="all">جميع الأنواع</option>
              <option value="image">صور</option>
              <option value="video">فيديوهات</option>
              <option value="document">مستندات</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Media Grid */}
      <Card>
        <CardHeader>
          <CardTitle>المكتبة</CardTitle>
          <CardDescription>
            {filteredFiles.length} ملف من أصل {mediaFiles.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFiles.map((file) => (
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
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<div class="flex items-center justify-center w-full h-full">${getFileIcon(file.category)}</div>`;
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
          
          {filteredFiles.length === 0 && (
            <div className="text-center py-12">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">لا توجد ملفات</h3>
              <p className="text-muted-foreground">
                {searchTerm ? 'لا توجد ملفات تطابق البحث' : 'ابدأ برفع ملفاتك الأولى'}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MediaManagement;
