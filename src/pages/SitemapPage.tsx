
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Video, Image, FileText, HelpCircle, Phone, Settings, User, LogIn } from 'lucide-react';

const SitemapPage = () => {
  const sitePages = [
    {
      category: "الصفحات الرئيسية",
      icon: Home,
      pages: [
        { name: "الصفحة الرئيسية", url: "/", icon: Home },
        { name: "حول الموقع", url: "/about", icon: HelpCircle },
        { name: "تواصل معنا", url: "/contact", icon: Phone }
      ]
    },
    {
      category: "المحتوى التعليمي",
      icon: BookOpen,
      pages: [
        { name: "جميع الدروس", url: "/tutorials", icon: BookOpen },
        { name: "الفيديوهات", url: "/videos", icon: Video },
        { name: "الصور والمشاريع", url: "/images", icon: Image },
        { name: "الملفات والموارد", url: "/files", icon: FileText },
        { name: "الشروحات التفصيلية", url: "/explanations", icon: HelpCircle },
        { name: "دروس أوتوكاد", url: "/autocad-tutorials", icon: Video }
      ]
    },
    {
      category: "حساب المستخدم",
      icon: User,
      pages: [
        { name: "تسجيل الدخول", url: "/login", icon: LogIn },
        { name: "الملف الشخصي", url: "/profile", icon: User }
      ]
    },
    {
      category: "الإدارة",
      icon: Settings,
      pages: [
        { name: "لوحة التحكم", url: "/admin", icon: Settings }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-autocad-gray mb-4 font-cairo">
              خريطة الموقع
            </h1>
            <p className="text-lg text-gray-600 font-cairo">
              دليل شامل لجميع صفحات وأقسام الموقع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sitePages.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-autocad-gray font-cairo">
                    <section.icon className="w-6 h-6 text-autocad-blue" />
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.pages.map((page, pageIndex) => (
                      <Link
                        key={pageIndex}
                        to={page.url}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <page.icon className="w-5 h-5 text-gray-500 group-hover:text-autocad-blue" />
                        <span className="text-gray-700 group-hover:text-autocad-blue font-cairo">
                          {page.name}
                        </span>
                      </Link>
                    ))}
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

export default SitemapPage;
