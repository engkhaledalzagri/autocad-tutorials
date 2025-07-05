import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Youtube, Linkedin, MessageCircle, Globe } from 'lucide-react';

const FilesPage = () => {
  const channelInfo = {
    name: "AutoCad Tutorials YQARCH",
    subscribers: "18,065",
    telegramUrl: "https://t.me/K0H1A2L3E4D5",
    youtubeUrl: "https://youtube.com/@Eng.KhaledAl-Zagri",
    websiteUrl: "https://engkhaledalzagri.netlify.app/",
    tiktokUrl: "https://www.tiktok.com/@inspiration4cad",
    linkedinUrl: "https://ye.linkedin.com/in/engkhaledalzagri1"
  };

  const socialLinks = [
    {
      name: "قناة التيليجرام",
      icon: MessageCircle,
      url: channelInfo.telegramUrl,
      description: "انضم إلى قناتنا الرئيسية على التيليجرام",
      color: "bg-blue-500"
    },
    {
      name: "قناة اليوتيوب",
      icon: Youtube,
      url: channelInfo.youtubeUrl,
      description: "شاهد جميع دروس الأوتوكاد المرئية",
      color: "bg-red-500"
    },
    {
      name: "الموقع الشخصي",
      icon: Globe,
      url: channelInfo.websiteUrl,
      description: "زيارة الموقع الشخصي للمهندس خالد الزجري",
      color: "bg-green-500"
    },
    {
      name: "حساب لينكد إن",
      icon: Linkedin,
      url: channelInfo.linkedinUrl,
      description: "تواصل معنا على لينكد إن",
      color: "bg-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-autocad-gray mb-4 font-cairo">
              قناة AutoCad Tutorials YQARCH
            </h1>
            <p className="font-cairo text-xl text-indigo-600 font-semibold mb-8">
              انضم إلى أكبر مجتمع عربي لتعلم الأوتوكاد والتصميم الهندسي
            </p>
          </div>

          {/* Channel Info Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-autocad-gray mb-4">
                  معلومات القناة
                </CardTitle>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-blue-600" />
                    <span className="text-lg font-semibold">{channelInfo.subscribers} مشترك</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                    <span className="text-lg font-semibold">محتوى يومي</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-6 text-lg">
                  قناة متخصصة في تعليم برنامج الأوتوكاد والتصميم الهندسي باللغة العربية
                  <br />
                  نقدم دروس مجانية، ملفات تدريبية، ونصائح مهنية للمهندسين والطلاب
                </p>
                <Button
                  onClick={() => window.open(channelInfo.telegramUrl, '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3"
                >
                  <MessageCircle className="w-5 h-5 ml-2" />
                  انضم إلى القناة الآن
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {socialLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${link.color} flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform`}>
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-autocad-gray mb-2">
                        {link.name}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {link.description}
                      </p>
                      <Button
                        onClick={() => window.open(link.url, '_blank')}
                        variant="outline"
                        className="w-full"
                      >
                        <ExternalLink className="w-4 h-4 ml-2" />
                        زيارة الرابط
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Telegram Widget */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-autocad-gray">
                  آخر منشورات القناة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <iframe
                    src={`https://t.me/s/K0H1A2L3E4D5?embed=1`}
                    width="100%"
                    height="500"
                    frameBorder="0"
                    scrolling="no"
                    className="rounded-lg border border-gray-200"
                    title="Telegram Channel"
                  ></iframe>
                </div>
                <div className="text-center mt-6">
                  <p className="text-gray-600 mb-4">
                    لمشاهدة جميع المنشورات والتفاعل مع المحتوى
                  </p>
                  <Button
                    onClick={() => window.open(channelInfo.telegramUrl, '_blank')}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <MessageCircle className="w-4 h-4 ml-2" />
                    فتح القناة في التيليجرام
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">لا تفوت أي جديد!</h2>
              <p className="text-lg mb-6">
                انضم إلى مجتمعنا المتنامي واحصل على:
              </p>
              <ul className="text-right mb-6 space-y-2">
                <li>• دروس مجانية يومية</li>
                <li>• ملفات تدريبية حصرية</li>
                <li>• نصائح من خبراء في المجال</li>
                <li>• إجابات على استفساراتك</li>
              </ul>
              <Button
                onClick={() => window.open(channelInfo.telegramUrl, '_blank')}
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                اشترك الآن مجاناً
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FilesPage;
