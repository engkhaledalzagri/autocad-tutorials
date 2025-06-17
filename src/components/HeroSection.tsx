
import { Button } from '@/components/ui/button';
import { BookOpen, Video, Image } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-lg animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-white rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 border-2 border-white rounded-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-cairo leading-tight">
            تعلم الأوتوكاد من
            <span className="block text-yellow-300">الصفر إلى الاحتراف</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-cairo leading-relaxed">
            مدونتك الشاملة لتعلم برنامج الأوتوكاد مع دروس مجانية وفيديوهات تعليمية وشروحات مفصلة
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-white text-autocad-blue hover:bg-gray-100 font-cairo text-lg px-8 py-3 rounded-full shadow-lg"
            >
              <BookOpen className="w-5 h-5 ml-2" />
              ابدأ التعلم الآن
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-autocad-blue font-cairo text-lg px-8 py-3 rounded-full"
            >
              <Video className="w-5 h-5 ml-2" />
              شاهد الفيديوهات
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">200+</div>
              <div className="text-white/80 font-cairo">درس تعليمي</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-white/80 font-cairo">فيديو شرح</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-white/80 font-cairo">طالب نشط</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
