
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TutorialCard from '@/components/TutorialCard';
import { Button } from '@/components/ui/button';
import { getMediaFiles, type MediaFile } from '@/lib/supabase';

const VideosPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      const { data, error } = await getMediaFiles('video');
      if (error) throw error;
      
      // Transform MediaFile to video format for TutorialCard
      const transformedVideos = (data || []).map((file: MediaFile) => ({
        id: parseInt(file.id),
        title: file.name,
        description: file.description || 'فيديو تعليمي للأوتوكاد',
        type: 'video' as const,
        image: file.thumbnail_url || file.file_url,
        date: new Date(file.created_at).toLocaleDateString('ar-SA'),
        author: file.uploaded_by,
        tags: [file.category],
        videoUrl: file.file_url
      }));
      
      setVideos(transformedVideos);
    } catch (error) {
      console.error('Error loading videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', label: 'جميع الفيديوهات', count: videos.length },
    { id: 'beginner', label: 'للمبتدئين', count: 2 },
    { id: 'advanced', label: 'متقدم', count: 1 }
  ];

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-autocad-gray mb-4 font-cairo">
              مكتبة الفيديوهات التعليمية
            </h1>
            <p className="text-lg text-gray-600 font-cairo">
              مجموعة شاملة من الفيديوهات التعليمية لتعلم الأوتوكاد
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`font-cairo ${
                  activeCategory === category.id 
                    ? 'bg-autocad-blue hover:bg-autocad-blue/90' 
                    : 'hover:bg-autocad-blue hover:text-white'
                }`}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="w-8 h-8 border-4 border-autocad-blue border-t-transparent rounded-full animate-spin"></div>
              <span className="mr-3 text-autocad-gray">جاري التحميل...</span>
            </div>
          ) : videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div key={video.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                  <TutorialCard {...video} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-autocad-gray mb-4">لا توجد فيديوهات حالياً</h3>
              <p className="text-gray-600">سيتم إضافة المزيد من الفيديوهات قريباً</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VideosPage;
