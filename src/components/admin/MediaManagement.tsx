
import React, { useState } from 'react';
import { Upload, Image, Video, FileText, Trash2, Download, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const MediaManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  // Sample media data
  const mediaFiles = [
    {
      id: 1,
      name: 'autocad-interface.jpg',
      type: 'image',
      size: '2.4 MB',
      uploadDate: '2024-01-15',
      url: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'drawing-tutorial.mp4',
      type: 'video',
      size: '15.2 MB',
      uploadDate: '2024-01-14',
      url: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'autocad-shortcuts.pdf',
      type: 'document',
      size: '1.1 MB',
      uploadDate: '2024-01-13',
      url: '/placeholder.svg'
    },
    {
      id: 4,
      name: '3d-modeling-example.jpg',
      type: 'image',
      size: '3.7 MB',
      uploadDate: '2024-01-12',
      url: '/placeholder.svg'
    }
  ];

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

  const filteredFiles = mediaFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || file.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log('Uploading files:', files);
      // Handle file upload logic here
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
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Upload className="ml-2 h-4 w-4" />
            رفع ملفات
          </Button>
        </div>
      </div>

      {/* Upload Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Image className="h-8 w-8 text-green-600" />
              <div className="mr-4">
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-gray-500">صورة</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Video className="h-8 w-8 text-blue-600" />
              <div className="mr-4">
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-gray-500">فيديو</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-red-600" />
              <div className="mr-4">
                <div className="text-2xl font-bold">89</div>
                <p className="text-xs text-gray-500">مستند</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Upload className="h-8 w-8 text-purple-600" />
              <div className="mr-4">
                <div className="text-2xl font-bold">2.4GB</div>
                <p className="text-xs text-gray-500">المساحة المستخدمة</p>
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
              className="px-3 py-2 border border-gray-300 rounded-md bg-white"
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
              <div key={file.id} className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between mb-3">
                  {getFileIcon(file.type)}
                  <div className="flex items-center gap-2">
                    <button className="p-1 text-gray-600 hover:text-blue-600">
                      <Download size={16} />
                    </button>
                    <button className="p-1 text-gray-600 hover:text-red-600">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                
                {file.type === 'image' ? (
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <img
                      src={file.url}
                      alt={file.name}
                      className="max-w-full max-h-full object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    {getFileIcon(file.type)}
                  </div>
                )}
                
                <div>
                  <h3 className="font-medium text-gray-900 truncate" title={file.name}>
                    {file.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                    <span>{getFileTypeLabel(file.type)}</span>
                    <span>{file.size}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{file.uploadDate}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MediaManagement;
