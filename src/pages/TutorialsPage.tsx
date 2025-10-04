
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TutorialCard from '@/components/TutorialCard';
import { Button } from '@/components/ui/button';

const TutorialsPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tutorials = [
    {
      id: 6,
      title: "درس تجريبي جديد من Manus AI",
      description: "هذا منشور تجريبي تم إنشاؤه بواسطة Manus AI لاختبار وظيفة النشر.",
      type: "tutorial" as const,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2025-10-04",
      author: "Manus AI",
      tags: ["تجريبي", "AI", "نشر"],
      content: "محتوى هذا الدرس التجريبي هو لاختبار عملية إضافة منشورات جديدة إلى موقعك. يمكنك تعديل هذا المحتوى أو حذفه لاحقًا."
    },
    {
      id: 1,
      title: "أساسيات الرسم في الأوتوكاد للمبتدئين",
      description: "تعلم الأساسيات الأولى للرسم في برنامج الأوتوكاد من الصفر، بما في ذلك واجهة البرنامج والأدوات الأساسية",
      type: "tutorial" as const,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-15",
      author: "أحمد محمد",
      tags: ["مبتدئين", "أساسيات", "رسم"],
      content: "محتوى تفصيلي للدرس هنا..."
    },
    {
      id: 2,
      title: "إعداد المشروع الجديد في الأوتوكاد",
      description: "تعلم كيفية إنشاء مشروع جديد وضبط الإعدادات الأساسية والوحدات",
      type: "tutorial" as const,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-14",
      author: "فاطمة خالد",
      tags: ["إعداد", "مشروع", "أساسيات"],
      content: "محتوى تفصيلي للدرس هنا..."
    },
    {
      id: 3,
      title: "استخدام الطبقات (Layers) في الأوتوكاد",
      description: "شرح مفصل لنظام الطبقات وأهميته في تنظيم الرسوم الهندسية",
      type: "video" as const,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-13",
      author: "عمر حسن",
      tags: ["طبقات", "تنظيم", "متوسط"],
      content: "محتوى تفصيلي للفيديو هنا..."
    },
    {
      id: 4,
      title: "الرسم ثلاثي الأبعاد في الأوتوكاد",
      description: "تعلم أساسيات الرسم ثلاثي الأبعاد وإنشاء النماذج المعقدة",
      type: "tutorial" as const,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-11",
      author: "نور الدين",
      tags: ["3D", "نمذجة", "متقدم"],
      content: "محتوى تفصيلي للدرس هنا..."
    },
    {
      id: 5,
      title: "معرض صور لمشاريع الأوتوكاد",
      description: "مجموعة من أفضل المشاريع المنفذة باستخدام برنامج الأوتوكاد",
      type: "image" as const,
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-09",
      author: "ريم سالم",
      tags: ["معرض", "مشاريع", "إلهام"],
      content: "مجموعة من الصور والمشاريع الملهمة..."
    }
  ];

  const tabs = [
    { id: 'all', label: 'الكل', count: tutorials.length },
    { id: 'tutorial', label: 'الدروس', count: tutorials.filter(t => t.type === 'tutorial').length },
    { id: 'video', label: 'الفيديوهات', count: tutorials.filter(t => t.type === 'video').length },
    { id: 'image', label: 'الصور', count: tutorials.filter(t => t.type === 'image').length }
  ];

  const filteredTutorials = activeTab === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.type === activeTab);

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-autocad-gray mb-4 font-cairo">
              جميع الدروس والشروحات
            </h1>
            <p className="text-lg text-gray-600 font-cairo">
              مكتبة شاملة من الدروس التعليمية والفيديوهات والصور
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={`font-cairo ${
                  activeTab === tab.id 
                    ? 'bg-autocad-blue hover:bg-autocad-blue/90' 
                    : 'hover:bg-autocad-blue hover:text-white'
                }`}
              >
                {tab.label} ({tab.count})
              </Button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial, index) => (
              <div key={tutorial.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <TutorialCard {...tutorial} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-autocad-blue hover:bg-autocad-blue/90 text-white font-cairo px-8"
            >
              تحميل المزيد
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TutorialsPage;
