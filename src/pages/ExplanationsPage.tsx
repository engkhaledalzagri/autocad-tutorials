
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye, Heart, Share2, Home, TreePine } from 'lucide-react';

const ExplanationsPage = () => {
  const pinterestInfo = {
    username: "EngKhaledAlZagri",
    userId: "1524922",
    profileId: "pina_AMA3URAXAAPW2AIAGDAOSC6ADT45XFYBQBIQCOG2PC2JOMZEKZMFKX4MKI2A6HO66VF6MDCMXW7C5YAW7EWESMDWJ2VE7OAA",
    profileUrl: "https://www.pinterest.com/EngKhaledAlZagri/"
  };

  const categories = [
    {
      title: "تصاميم حدائق منزلية",
      description: "أفكار إبداعية لتصميم الحدائق المنزلية والمساحات الخضراء",
      icon: TreePine,
      color: "bg-green-500"
    },
    {
      title: "ديكورات منازل عصرية",
      description: "تصاميم داخلية وخارجية للمنازل العصرية",
      icon: Home,
      color: "bg-blue-500"
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
              حدائق ومنازل
            </h1>
            <p className="text-lg text-gray-600 font-cairo">
              أفكار إبداعية لتصميم الحدائق والمنازل من صفحتي على Pinterest
            </p>
          </div>

          {/* Pinterest Profile Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-autocad-gray mb-4">
                  صفحتي على Pinterest
                </CardTitle>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Eye className="w-6 h-6 text-red-600" />
                    <span className="text-lg font-semibold">أفكار حصرية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-red-600" />
                    <span className="text-lg font-semibold">تصاميم ملهمة</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-6 text-lg">
                  تابع صفحتي على Pinterest لأحدث أفكار تصميم الحدائق والمنازل
                  <br />
                  مجموعة متنوعة من التصاميم والأفكار الإبداعية للمساحات الداخلية والخارجية
                </p>
                <Button
                  onClick={() => window.open(pinterestInfo.profileUrl, '_blank')}
                  className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-3"
                >
                  <ExternalLink className="w-5 h-5 ml-2" />
                  زيارة صفحتي على Pinterest
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${category.color} flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-autocad-gray mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {category.description}
                      </p>
                      <Button
                        onClick={() => window.open(pinterestInfo.profileUrl, '_blank')}
                        variant="outline"
                        className="w-full"
                      >
                        <ExternalLink className="w-4 h-4 ml-2" />
                        استكشف التصاميم
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pinterest Embed Section */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-autocad-gray">
                  أحدث التصاميم والأفكار
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="bg-red-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold text-autocad-gray mb-4">
                      @{pinterestInfo.username}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      للاطلاع على جميع التصاميم والأفكار الحصرية
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                      <Button
                        onClick={() => window.open(pinterestInfo.profileUrl, '_blank')}
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        <ExternalLink className="w-4 h-4 ml-2" />
                        زيارة الصفحة
                      </Button>
                      <Button
                        onClick={() => window.open(`${pinterestInfo.profileUrl}${pinterestInfo.username}/`, '_blank')}
                        variant="outline"
                        className="border-red-600 text-red-600 hover:bg-red-50"
                      >
                        <Share2 className="w-4 h-4 ml-2" />
                        مشاركة الصفحة
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>معرف المستخدم: {pinterestInfo.userId}</p>
                    <p>اسم المستخدم: {pinterestInfo.username}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">ابدأ رحلتك في التصميم!</h2>
              <p className="text-lg mb-6">
                اكتشف عالم من الأفكار الإبداعية لتصميم المنازل والحدائق
              </p>
              <ul className="text-right mb-6 space-y-2">
                <li>• تصاميم حدائق منزلية مبتكرة</li>
                <li>• أفكار ديكور داخلي وخارجي</li>
                <li>• نصائح تصميم المساحات الصغيرة</li>
                <li>• حلول إبداعية للمنازل العصرية</li>
              </ul>
              <Button
                onClick={() => window.open(pinterestInfo.profileUrl, '_blank')}
                className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-3"
              >
                <ExternalLink className="w-5 h-5 ml-2" />
                تابع صفحتي الآن
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExplanationsPage;
