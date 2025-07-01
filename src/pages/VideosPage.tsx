
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TutorialCard from '@/components/TutorialCard';
import { Button } from '@/components/ui/button';

const VideosPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const videos = [
    {
     {
  id: 4,
  title: "Ai Generator lisp For AutoCad",
  description: "Ai Generator lisp For AutoCad",
  type: "video",
  image: "رابط صورة مصغرة",
  date: "2024-07-01",
  author: "اسمك",
  tags: ["Ai Generator lisp For AutoCad"],
  videoUrl: "https://youtube.com/shorts/K0dpjap6qvM"
}
    {
      id: 2,
      title: "الرسم الهندسي في الأوتوكاد",
      description: "تعلم كيفية رسم الأشكال الهندسية الأساسية والمتقدمة",
      type: "video" as const,
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-18",
      author: "فاطمة خالد",
      tags: ["رسم", "هندسة", "متوسط"],
    },
    {
      id: 3,
      title: "التصميم المعماري ثلاثي الأبعاد",
      description: "دورة شاملة في التصميم المعماري باستخدام الأوتوكاد",
      type: "video" as const,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-15",
      author: "عمر حسن",
      tags: ["معماري", "3D", "متقدم"],
    }
  ];

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={video.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <TutorialCard {...video} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VideosPage;
