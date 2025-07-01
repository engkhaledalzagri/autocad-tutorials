
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Mail, Calendar, BookOpen, Video, Download } from 'lucide-react';

const ProfilePage = () => {
  const userStats = [
    { icon: BookOpen, label: "الدروس المكتملة", value: "25", color: "text-blue-600" },
    { icon: Video, label: "الفيديوهات المشاهدة", value: "18", color: "text-red-600" },
    { icon: Download, label: "الملفات المحملة", value: "12", color: "text-green-600" }
  ];

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Info */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-autocad-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <CardTitle className="text-xl font-cairo text-autocad-gray">
                      أحمد محمد
                    </CardTitle>
                    <p className="text-gray-600 font-cairo">طالب متقدم</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600 font-cairo">ahmed@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600 font-cairo">انضم في يناير 2024</span>
                    </div>
                    <Button className="w-full bg-autocad-blue hover:bg-autocad-blue/90 font-cairo">
                      تعديل الملف الشخصي
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Stats and Activity */}
              <div className="lg:col-span-2 space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {userStats.map((stat, index) => (
                    <Card key={index}>
                      <CardContent className="p-6 text-center">
                        <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                        <div className="text-2xl font-bold text-autocad-gray mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 font-cairo">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-cairo text-autocad-gray">
                      النشاط الأخير
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-cairo text-autocad-gray">أكملت درس "أساسيات الرسم"</p>
                          <p className="text-sm text-gray-500 font-cairo">منذ ساعتين</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Video className="w-5 h-5 text-red-600" />
                        <div>
                          <p className="font-cairo text-autocad-gray">شاهدت فيديو "الطبقات في الأوتوكاد"</p>
                          <p className="text-sm text-gray-500 font-cairo">أمس</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Download className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="font-cairo text-autocad-gray">حملت ملف "نماذج معمارية"</p>
                          <p className="text-sm text-gray-500 font-cairo">منذ 3 أيام</p>
                        </div>
                      </div>
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

export default ProfilePage;
