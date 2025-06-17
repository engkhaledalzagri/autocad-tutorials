
import TutorialCard from './TutorialCard';

const FeaturedContent = () => {
  const featuredTutorials = [
    {
      title: "أساسيات الرسم في الأوتوكاد للمبتدئين",
      description: "تعلم الأساسيات الأولى للرسم في برنامج الأوتوكاد من الصفر، بما في ذلك واجهة البرنامج والأدوات الأساسية",
      type: "tutorial" as const,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-15",
      author: "أحمد محمد",
      tags: ["مبتدئين", "أساسيات", "رسم"],
      featured: true
    },
    {
      title: "شرح أدوات التحديد والتعديل",
      description: "فيديو شامل يشرح جميع أدوات التحديد والتعديل في الأوتوكاد مع أمثلة عملية",
      type: "video" as const,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-12",
      author: "سارة أحمد",
      tags: ["أدوات", "تعديل", "متقدم"],
      featured: true
    },
    {
      title: "أمثلة تطبيقية للرسم الهندسي",
      description: "مجموعة من الصور والأمثلة التطبيقية للرسم الهندسي باستخدام الأوتوكاد",
      type: "image" as const,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "2024-01-10",
      author: "محمد علي",
      tags: ["أمثلة", "هندسة", "تطبيقي"],
      featured: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-autocad-gray mb-4 font-cairo">
            المحتوى المميز
          </h2>
          <p className="text-lg text-gray-600 font-cairo">
            أحدث الدروس والفيديوهات التعليمية المختارة بعناية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTutorials.map((tutorial, index) => (
            <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
              <TutorialCard {...tutorial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
