
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Archive, Image } from 'lucide-react';

const FilesPage = () => {
  const files = [
    {
      id: 1,
      name: "نماذج رسم معماري.dwg",
      type: "AutoCAD",
      size: "2.5 MB",
      downloads: 1250,
      icon: FileText,
      description: "مجموعة من النماذج المعمارية الجاهزة للاستخدام"
    },
    {
      id: 2,
      name: "مكتبة الرموز الهندسية.zip",
      type: "Archive",
      size: "15.8 MB",
      downloads: 890,
      icon: Archive,
      description: "مكتبة شاملة من الرموز والعناصر الهندسية"
    },
    {
      id: 3,
      name: "قوالب المخططات.dwt",
      type: "Template",
      size: "1.2 MB",
      downloads: 2100,
      icon: FileText,
      description: "قوالب جاهزة للمخططات المعمارية والهندسية"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-autocad-gray mb-4 font-cairo">
              مكتبة الملفات والموارد
            </h1>
            <p className="text-lg text-gray-600 font-cairo">
              تحميل الملفات والموارد المجانية لبرنامج الأوتوكاد
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {files.map((file) => (
              <Card key={file.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-autocad-blue/10 rounded-lg flex items-center justify-center">
                      <file.icon className="w-6 h-6 text-autocad-blue" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-cairo text-autocad-gray">
                        {file.name}
                      </CardTitle>
                      <p className="text-sm text-gray-500 font-cairo">{file.type} • {file.size}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 font-cairo">{file.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-cairo">
                      {file.downloads} تحميل
                    </span>
                    <Button className="bg-autocad-blue hover:bg-autocad-blue/90 font-cairo">
                      <Download className="w-4 h-4 ml-2" />
                      تحميل
                    </Button>
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

export default FilesPage;
