
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const ImagesPage = () => {
  const images = [
    {
      id: 1,
      title: "مخططات معمارية",
      description: "مجموعة من المخططات المعمارية المنفذة بالأوتوكاد",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "معماري"
    },
    {
      id: 2,
      title: "الرسوم الهندسية",
      description: "نماذج من الرسوم الهندسية والتقنية",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "هندسي"
    },
    {
      id: 3,
      title: "التصاميم ثلاثية الأبعاد",
      description: "مجموعة من التصاميم المعمارية ثلاثية الأبعاد",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "3D"
    }
  ];

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <Card key={image.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImagesPage;
