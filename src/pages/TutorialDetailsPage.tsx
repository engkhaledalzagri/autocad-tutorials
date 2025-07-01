
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock, Download, Share2, BookOpen, ArrowRight } from 'lucide-react';

const TutorialDetailsPage = () => {
  const { id } = useParams();

  // Mock data - في التطبيق الحقيقي ستحصل على البيانات من API
  const tutorial = {
    id: 1,
    title: "أساسيات الرسم في الأوتوكاد للمبتدئين",
    description: "تعلم الأساسيات الأولى للرسم في برنامج الأوتوكاد من الصفر",
    type: "tutorial" as const,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "2024-01-15",
    author: "أحمد محمد",
    tags: ["مبتدئين", "أساسيات", "رسم"],
    readTime: "15 دقيقة",
    content: `
      <h2>مقدمة حول الأوتوكاد</h2>
      <p>برنامج الأوتوكاد (AutoCAD) هو أحد أهم برامج التصميم بمساعدة الحاسوب (CAD) المستخدمة في العالم. يستخدم هذا البرنامج بشكل واسع في الهندسة المعمارية، والهندسة المدنية، والتصميم الصناعي، وغيرها من المجالات.</p>
      
      <h2>واجهة البرنامج</h2>
      <p>عند فتح البرنامج لأول مرة، ستجد واجهة المستخدم التي تحتوي على:</p>
      <ul>
        <li>شريط الأدوات العلوي</li>
        <li>منطقة الرسم الرئيسية</li>
        <li>نافذة الأوامر</li>
        <li>شريط الحالة</li>
      </ul>
      
      <h2>الأدوات الأساسية</h2>
      <p>سنتعلم في هذا الدرس الأدوات الأساسية التالية:</p>
      <ul>
        <li>أداة الخط (Line)</li>
        <li>أداة المستطيل (Rectangle)</li>
        <li>أداة الدائرة (Circle)</li>
        <li>أداة التحديد (Select)</li>
      </ul>
      
      <h2>بدء مشروع جديد</h2>
      <p>لبدء مشروع جديد في الأوتوكاد، اتبع الخطوات التالية:</p>
      <ol>
        <li>اختر File من القائمة الرئيسية</li>
        <li>اختر New</li>
        <li>حدد القالب المناسب</li>
        <li>اضغط على Open</li>
      </ol>
      
      <h2>الخلاصة</h2>
      <p>في هذا الدرس تعلمنا أساسيات واجهة الأوتوكاد والأدوات الأساسية. في الدرس القادم سنتعلم كيفية استخدام هذه الأدوات بشكل عملي.</p>
    `
  };

  const relatedTutorials = [
    {
      id: 2,
      title: "إعداد المشروع الجديد في الأوتوكاد",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      date: "2024-01-14"
    },
    {
      id: 3,
      title: "استخدام الطبقات في الأوتوكاد",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
      date: "2024-01-13"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-autocad-blue">الرئيسية</Link>
              <ArrowRight className="w-4 h-4" />
              <Link to="/tutorials" className="hover:text-autocad-blue">الدروس</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-autocad-gray">{tutorial.title}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article>
                {/* Header */}
                <div className="mb-8">
                  <img 
                    src={tutorial.image} 
                    alt={tutorial.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutorial.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="font-cairo">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-autocad-gray mb-4 font-cairo">
                    {tutorial.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span className="font-cairo">{tutorial.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-cairo">{tutorial.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-cairo">{tutorial.readTime}</span>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-8">
                    <Button className="bg-autocad-blue hover:bg-autocad-blue/90 font-cairo">
                      <Download className="w-4 h-4 ml-2" />
                      تحميل الملفات
                    </Button>
                    <Button variant="outline" className="font-cairo">
                      <Share2 className="w-4 h-4 ml-2" />
                      مشاركة
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <Card>
                  <CardContent className="p-8">
                    <div 
                      className="prose prose-lg max-w-none font-cairo"
                      dangerouslySetInnerHTML={{ __html: tutorial.content }}
                    />
                  </CardContent>
                </Card>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8 pt-8 border-t">
                  <Button variant="outline" className="font-cairo">
                    <ArrowRight className="w-4 h-4 ml-2" />
                    الدرس السابق
                  </Button>
                  <Button className="bg-autocad-blue hover:bg-autocad-blue/90 font-cairo">
                    الدरس التالي
                    <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  </Button>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6 sticky top-8">
                {/* Table of Contents */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-autocad-gray mb-4 font-cairo flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      محتويات الدرس
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#intro" className="text-gray-600 hover:text-autocad-blue font-cairo">
                          مقدمة حول الأوتوكاد
                        </a>
                      </li>
                      <li>
                        <a href="#interface" className="text-gray-600 hover:text-autocad-blue font-cairo">
                          واجهة البرنامج
                        </a>
                      </li>
                      <li>
                        <a href="#tools" className="text-gray-600 hover:text-autocad-blue font-cairo">
                          الأدوات الأساسية
                        </a>
                      </li>
                      <li>
                        <a href="#project" className="text-gray-600 hover:text-autocad-blue font-cairo">
                          بدء مشروع جديد
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Related Tutorials */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-autocad-gray mb-4 font-cairo">
                      دروس ذات صلة
                    </h3>
                    <div className="space-y-4">
                      {relatedTutorials.map((related) => (
                        <Link 
                          key={related.id}
                          to={`/tutorial/${related.id}`}
                          className="block hover:bg-gray-50 p-2 rounded-lg transition-colors"
                        >
                          <div className="flex gap-3">
                            <img 
                              src={related.image} 
                              alt={related.title}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div>
                              <h4 className="text-sm font-semibold text-autocad-gray mb-1 font-cairo line-clamp-2">
                                {related.title}
                              </h4>
                              <p className="text-xs text-gray-500 font-cairo">
                                {related.date}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TutorialDetailsPage;
