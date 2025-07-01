
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Award, Target } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: BookOpen,
      title: "محتوى تعليمي شامل",
      description: "مكتبة واسعة من الدروس والشروحات المفصلة لجميع مستويات التعلم"
    },
    {
      icon: Users,
      title: "مجتمع نشط",
      description: "انضم إلى مجتمع من المتعلمين والمحترفين في مجال الأوتوكاد"
    },
    {
      icon: Award,
      title: "جودة عالية",
      description: "محتوى معد بعناية من قبل خبراء ومحترفين في المجال"
    },
    {
      icon: Target,
      title: "تعلم موجه",
      description: "مسار تعليمي واضح يأخذك من المبتدئ إلى المحترف"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-autocad-gray mb-6 font-cairo">
              حول مدونة تعلم الأوتوكاد
            </h1>
            <p className="text-xl text-gray-600 font-cairo max-w-3xl mx-auto leading-relaxed">
              مدونتك الشاملة لتعلم برنامج الأوتوكاد من الصفر إلى الاحتراف. نوفر لك أفضل المحتوى التعليمي 
              والدروس العملية لتطوير مهاراتك في الرسم الهندسي والتصميم المعماري.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-hero-gradient text-white rounded-lg p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 font-cairo">رسالتنا</h2>
              <p className="text-lg font-cairo leading-relaxed max-w-4xl mx-auto">
                نهدف إلى توفير تعليم عالي الجودة ومجاني لبرنامج الأوتوكاد، مما يساعد الطلاب والمهندسين 
                والمصممين على تطوير مهاراتهم وتحقيق أهدافهم المهنية في مجال التصميم الهندسي والمعماري.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <feature.icon className="w-12 h-12 text-autocad-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-autocad-gray mb-3 font-cairo">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-cairo">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-autocad-blue mb-2">200+</div>
                <div className="text-gray-600 font-cairo">درس تعليمي</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-autocad-blue mb-2">50+</div>
                <div className="text-gray-600 font-cairo">فيديو شرح</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-autocad-blue mb-2">1000+</div>
                <div className="text-gray-600 font-cairo">طالب نشط</div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-autocad-gray mb-8 font-cairo">
              فريق العمل
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-autocad-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">م</span>
                  </div>
                  <h3 className="text-xl font-bold text-autocad-gray mb-2 font-cairo">
                    المهندس أحمد محمد
                  </h3>
                  <p className="text-gray-600 font-cairo">
                    مؤسس الموقع ومدرب الأوتوكاد
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-autocad-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">د</span>
                  </div>
                  <h3 className="text-xl font-bold text-autocad-gray mb-2 font-cairo">
                    الدكتورة فاطمة خالد
                  </h3>
                  <p className="text-gray-600 font-cairo">
                    خبيرة في التصميم المعماري
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-autocad-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">م</span>
                  </div>
                  <h3 className="text-xl font-bold text-autocad-gray mb-2 font-cairo">
                    المهندس عمر حسن
                  </h3>
                  <p className="text-gray-600 font-cairo">
                    مختص في الرسم الهندسي
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
