
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import TutorialCard from './TutorialCard';

const TutorialsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tutorials = [
    {
      title: "إعداد المشروع الجديد في الأوتوكاد",
      description: "تعلم كيفية إنشاء مشروع جديد وضبط الإعدادات الأساسية والوحدات",
      type: "tutorial" as const,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-14",
      author: "فاطمة خالد",
      tags: ["إعداد", "مشروع", "أساسيات"]
    },
    {
      title: "استخدام الطبقات (Layers) في الأوتوكاد",
      description: "شرح مفصل لنظام الطبقات وأهميته في تنظيم الرسوم الهندسية",
      type: "video" as const,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-13",
      author: "عمر حسن",
      tags: ["طبقات", "تنظيم", "متوسط"]
    },
    {
      title: "الرسم ثلاثي الأبعاد في الأوتوكاد",
      description: "تعلم أساسيات الرسم ثلاثي الأبعاد وإنشاء النماذج المعقدة",
      type: "tutorial" as const,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-11",
      author: "نور الدين",
      tags: ["3D", "نمذجة", "متقدم"]
    },
    {
      title: "معرض صور لمشاريع الأوتوكاد",
      description: "مجموعة من أفضل المشاريع المنفذة باستخدام برنامج الأوتوكاد",
      type: "image" as const,
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-09",
      author: "ريم سالم",
      tags: ["معرض", "مشاريع", "إلهام"]
    },
    {
      title: "نصائح لتحسين الأداء في الأوتوكاد",
      description: "مجموعة من النصائح والحيل لتحسين أداء البرنامج وزيادة الإنتاجية",
      type: "video" as const,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-08",
      author: "خالد أحمد",
      tags: ["نصائح", "أداء", "إنتاجية"]
    },
    {
      title: "التخطيط المعماري باستخدام الأوتوكاد",
      description: "دليل شامل لرسم المخططات المعمارية وتفاصيل البناء",
      type: "tutorial" as const,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-07",
      author: "منى عبدالله",
      tags: ["معماري", "مخططات", "بناء"]
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
    <section id="tutorials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-autocad-gray mb-4 font-cairo">
            جميع الدروس والشروحات
          </h2>
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
            <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
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
    </section>
  );
};

export default TutorialsSection;
