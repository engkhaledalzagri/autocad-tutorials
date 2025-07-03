
import React, { useState, useEffect } from 'react';
import { getMediaFiles, type MediaFile } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import FileUpload from './FileUpload';
import FileStats from './FileStats';
import SearchFilters from './SearchFilters';
import FileGrid from './FileGrid';

const MediaManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const { toast } = useToast();

  // Load media files on component mount
  useEffect(() => {
    loadMediaFiles();
  }, [selectedType]);

  const loadMediaFiles = async () => {
    try {
      console.log('Loading media files for category:', selectedType);
      const { data, error } = await getMediaFiles(selectedType);
      if (error) {
        console.error('Error loading media files:', error);
        throw error;
      }
      console.log('Loaded media files:', data);
      setMediaFiles(data || []);
    } catch (error) {
      console.error('Error loading media files:', error);
      toast({
        title: "تنبيه",
        description: "تم تحميل البيانات التجريبية - لم يتم تكوين Supabase",
        variant: "default",
      });
    }
  };

  const filteredFiles = mediaFiles.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || file.category === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">إدارة الملفات</h2>
          <p className="text-gray-600">إدارة الصور والفيديوهات والمستندات</p>
        </div>
        <FileUpload onUploadComplete={loadMediaFiles} />
      </div>

      <FileStats mediaFiles={mediaFiles} />

      <SearchFilters
        searchTerm={searchTerm}
        selectedType={selectedType}
        onSearchChange={setSearchTerm}
        onTypeChange={setSelectedType}
      />

      <FileGrid mediaFiles={filteredFiles} onDeleteComplete={loadMediaFiles} />
    </div>
  );
};

export default MediaManagement;
