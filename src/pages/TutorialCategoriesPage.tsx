import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Play, Download, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const TutorialCategoriesPage = () => {
  const categories = [
    {
      title: "أساسيات AutoCAD",
      description: "تعلم الأساسيات من البداية - الواجهة، الأدوات الأساسية، الرسم البسيط",
      icon: BookOpen,
      lessons: 15,
      level: "مبتدئ",
      color: "bg-green-500",
      link: "/tutorials/basics"
    },
    {
      title: "الرسم ثنائي الأبعاد",
      description: "إتقان الرسم 2D - الخطوط، الأشكال، التحرير، والقياسات",
      icon: BookOpen,
      lessons: 20,
      level: "متوسط",
      color: "bg-blue-500",
      link: "/tutorials/2d-drawing"
    },
    {
      title: "النمذجة ثلاثية الأبعاد",
      description: "تعلم النمذجة 3D المتقدمة وإنشاء كائنات معقدة",
      icon: BookOpen,
      lessons: 18,
      level: "متقدم",
      color: "bg-purple-500",
      link: "/tutorials/3d-modeling"
    },
    {
      title: "المخططات المعمارية",
      description: "رسم المخططات المعمارية المهنية - المساقط، التفاصيل، الواجهات",
      icon: BookOpen,
      lessons: 25,
      level: "متوسط",
      color: "bg-orange-500",
      link: "/tutorials/architectural"
    },
    {
      title: "التخطيط الحضري",
      description: "تصميم المخططات الحضرية والمناطق السكنية",
      icon: BookOpen,
      lessons: 12,
      level: "متقدم",
      color: "bg-red-500",
      link: "/tutorials/urban-planning"
    },
    {
      title: "التصميم الداخلي",
      description: "تصميم المساحات الداخلية وتوزيع الأثاث",
      icon: BookOpen,
      lessons: 16,
      level: "متوسط",
      color: "bg-pink-500",
      link: "/tutorials/interior-design"
    },
    {
      title: "الحدائق والمناظر الطبيعية",
      description: "تصميم الحدائق والمساحات الخضراء والمناظر الطبيعية",
      icon: BookOpen,
      lessons: 14,
      level: "متوسط",
      color: "bg-emerald-500",
      link: "/tutorials/landscape"
    },
    {
      title: "التفاصيل الإنشائية",
      description: "رسم التفاصيل الإنشائية والعقد الهندسية",
      icon: BookOpen,
      lessons: 22,
      level: "متقدم",
      color: "bg-slate-500",
      link: "/tutorials/structural"
    },
    {
      title: "الطباعة والإخراج",
      description: "إعداد الرسومات للطباعة وتصدير الملفات",
      icon: BookOpen,
      lessons: 10,
      level: "متوسط",
      color: "bg-yellow-500",
      link: "/tutorials/printing"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "مبتدئ": return "bg-green-100 text-green-800";
      case "متوسط": return "bg-yellow-100 text-yellow-800";
      case "متقدم": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              فئات الدروس التعليمية
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اختر المجال الذي تريد تعلمه واستكشف الدروس المنظمة حسب المستوى والتخصص
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 text-center shadow-sm">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground">152</h3>
              <p className="text-muted-foreground">درس تعليمي</p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center shadow-sm">
              <Play className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground">89</h3>
              <p className="text-muted-foreground">فيديو تعليمي</p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center shadow-sm">
              <Download className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground">45</h3>
              <p className="text-muted-foreground">ملف قابل للتحميل</p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center shadow-sm">
              <Users className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground">5.2K</h3>
              <p className="text-muted-foreground">طالب مسجل</p>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <Badge className={getLevelColor(category.level)}>
                        {category.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {category.lessons} درس
                      </span>
                      <Link 
                        to={category.link}
                        className="inline-flex items-center text-primary hover:underline font-medium"
                      >
                        استكشاف الدروس ←
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-primary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              ابدأ رحلتك التعليمية اليوم
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              انضم إلى آلاف الطلاب الذين تعلموا AutoCAD من خلال دروسنا المتخصصة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/register" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                إنشاء حساب مجاني
              </Link>
              <Link 
                to="/tutorials" 
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                تصفح جميع الدروس
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TutorialCategoriesPage;