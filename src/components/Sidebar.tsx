
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, TrendingUp, Star } from 'lucide-react';

const Sidebar = () => {
  const popularPosts = [
    {
      title: "أساسيات الرسم في الأوتوكاد",
      date: "2024-01-15",
      views: "1.2k"
    },
    {
      title: "شرح أدوات التحديد والتعديل",
      date: "2024-01-12",
      views: "890"
    },
    {
      title: "الرسم ثلاثي الأبعاد في الأوتوكاد",
      date: "2024-01-11",
      views: "756"
    }
  ];

  const categories = [
    { name: "أساسيات الأوتوكاد", count: 25 },
    { name: "الرسم ثنائي الأبعاد", count: 18 },
    { name: "الرسم ثلاثي الأبعاد", count: 12 },
    { name: "التخطيط المعماري", count: 15 },
    { name: "نصائح وحيل", count: 8 }
  ];

  return (
    <aside className="space-y-6">
      {/* Google AdSense Placeholder */}
      <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
        <CardContent className="p-4">
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg">
            <div className="text-center text-gray-600">
              <div className="text-sm font-cairo mb-2">مساحة إعلانية</div>
              <div className="text-xs">Google AdSense</div>
              <div className="text-xs">300 × 250</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Popular Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-cairo">
            <TrendingUp className="w-5 h-5 text-autocad-blue" />
            المقالات الأكثر قراءة
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="flex-shrink-0">
                <Badge className="bg-autocad-blue text-white">
                  {index + 1}
                </Badge>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-autocad-gray mb-1 font-cairo leading-tight">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="font-cairo">{post.date}</span>
                  <span>•</span>
                  <span>{post.views} مشاهدة</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-cairo">
            <BookOpen className="w-5 h-5 text-autocad-blue" />
            التصنيفات
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <span className="text-sm font-cairo text-autocad-gray">{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="bg-hero-gradient text-white">
        <CardContent className="p-6 text-center">
          <Star className="w-8 h-8 mx-auto mb-3" />
          <h3 className="text-lg font-bold mb-2 font-cairo">اشترك في النشرة البريدية</h3>
          <p className="text-sm mb-4 font-cairo opacity-90">
            احصل على أحدث الدروس والنصائح مباشرة في بريدك الإلكتروني
          </p>
          <div className="space-y-2">
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني"
              className="w-full p-2 rounded-lg border-0 text-autocad-gray font-cairo text-sm"
            />
            <Button className="w-full bg-white text-autocad-blue hover:bg-gray-100 font-cairo">
              اشترك الآن
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Another Ad Space */}
      <Card className="bg-gradient-to-br from-gray-100 to-gray-200">
        <CardContent className="p-4">
          <div className="h-32 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg">
            <div className="text-center text-gray-600">
              <div className="text-sm font-cairo mb-1">مساحة إعلانية</div>
              <div className="text-xs">300 × 120</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;
