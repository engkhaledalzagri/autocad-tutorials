
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Archive, Image } from 'lucide-react';
import { getMediaFiles, type MediaFile } from '@/lib/supabase';

const FilesPage = () => {
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    try {
      const { data, error } = await getMediaFiles('document');
      if (error) throw error;
      
      // Transform MediaFile to file format
      const transformedFiles = (data || []).map((file: MediaFile) => ({
        id: parseInt(file.id),
        name: file.file_name,
        type: getFileType(file.file_type),
        size: formatFileSize(file.file_size),
        downloads: Math.floor(Math.random() * 2000) + 100, // Placeholder for downloads
        icon: getFileIcon(file.file_type),
        description: file.description || 'ملف مفيد للأوتوكاد',
        url: file.file_url
      }));
      
      setFiles(transformedFiles);
    } catch (error) {
      console.error('Error loading files:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const getFileType = (mimeType: string): string => {
    if (mimeType.includes('pdf')) return 'PDF';
    if (mimeType.includes('word') || mimeType.includes('document')) return 'Document';
    if (mimeType.includes('zip') || mimeType.includes('archive')) return 'Archive';
    if (mimeType.includes('autocad') || mimeType.includes('dwg')) return 'AutoCAD';
    return 'File';
  };

  const getFileIcon = (mimeType: string) => {
    if (mimeType.includes('zip') || mimeType.includes('archive')) return Archive;
    if (mimeType.includes('image')) return Image;
    return FileText;
  };

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-autocad-gray mb-4 font-cairo">
              مكتبة الملفات والموارد
            </h1>
            <p className="text-lg text-gray-600 font-cairo">
              تحميل الملفات والموارد المجانية لبرنامج الأوتوكاد
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="w-8 h-8 border-4 border-autocad-blue border-t-transparent rounded-full animate-spin"></div>
              <span className="mr-3 text-autocad-gray">جاري التحميل...</span>
            </div>
          ) : files.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {files.map((file) => (
                <Card key={file.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-autocad-blue/10 rounded-lg flex items-center justify-center">
                        <file.icon className="w-6 h-6 text-autocad-blue" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-cairo text-autocad-gray">
                          {file.name}
                        </CardTitle>
                        <p className="text-sm text-gray-500 font-cairo">{file.type} • {file.size}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 font-cairo">{file.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-cairo">
                        {file.downloads} تحميل
                      </span>
                      <Button 
                        onClick={() => window.open(file.url, '_blank')}
                        className="bg-autocad-blue hover:bg-autocad-blue/90 font-cairo"
                      >
                        <Download className="w-4 h-4 ml-2" />
                        تحميل
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-autocad-gray mb-4">لا توجد ملفات حالياً</h3>
              <p className="text-gray-600">سيتم إضافة المزيد من الملفات قريباً</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FilesPage;
