
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TutorialCard from '@/components/TutorialCard';

const ExplanationsPage = () => {
  const explanations = [
    {
      id: 1,
      title: "شرح مفصل لأدوات الرسم الأساسية",
      description: "دليل شامل لجميع أدوات الرسم في الأوتوكاد مع أمثلة عملية",
      type: "tutorial" as const,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "2024-01-22",
      author: "أحمد محمد",
      tags: ["أدوات", "رسم", "شرح"],
    },
    {
      id: 2,
      title: "فهم نظام الإحداثيات في الأوتوكاد",
      description: "شرح مبسط لنظام الإحداثيات وكيفية استخدامه بفعالية",
      type: "tutorial" as const,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "2024-01-20",
      author: "فاطمة خالد",
      tags: ["إحداثيات", "أساسيات", "نظام"],
    }
  ];

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-autocad-gray mb-4 font-cairo">
              الشروحات التفصيلية
            </h1>
            <p className="text-lg text-gray-600 font-cairo">
              شروحات مفصلة ومبسطة لجميع جوانب برنامج الأوتوكاد
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {explanations.map((explanation, index) => (
              <div key={explanation.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <TutorialCard {...explanation} />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExplanationsPage;
