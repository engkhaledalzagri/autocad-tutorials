
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { getMediaFiles, type MediaFile } from '@/lib/supabase';

const ImagesPage = () => {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const { data, error } = await getMediaFiles('image');
      if (error) throw error;
      
      // Transform MediaFile to image format
      const transformedImages = (data || []).map((file: MediaFile) => ({
        id: parseInt(file.id),
        title: file.name,
        description: file.description || 'صورة تعليمية للأوتوكاد',
        image: file.file_url,
        category: file.category
      }));
      
      setImages(transformedImages);
    } catch (error) {
      console.error('Error loading images:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-autocad-gray mb-4 font-cairo">
              معرض الصور والمشاريع
            </h1>
            <p className="text-lg text-gray-600 font-cairo">
              مجموعة من أفضل المشاريع والرسوم المنفذة باستخدام الأوتوكاد
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="w-8 h-8 border-4 border-autocad-blue border-t-transparent rounded-full animate-spin"></div>
              <span className="mr-3 text-autocad-gray">جاري التحميل...</span>
            </div>
          ) : images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((image) => (
                <Card key={image.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={image.image} 
                        alt={image.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="text-xl font-bold mb-2 font-cairo">{image.title}</h3>
                          <p className="text-sm font-cairo">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-autocad-gray mb-4">لا توجد صور حالياً</h3>
              <p className="text-gray-600">سيتم إضافة المزيد من الصور قريباً</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImagesPage;
