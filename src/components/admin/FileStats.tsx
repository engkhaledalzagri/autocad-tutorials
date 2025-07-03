
import React from 'react';
import { Image, Video, FileText, Upload } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { type MediaFile } from '@/lib/supabase';

interface FileStatsProps {
  mediaFiles: MediaFile[];
}

const FileStats: React.FC<FileStatsProps> = ({ mediaFiles }) => {
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
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
  );
};

export default FileStats;
