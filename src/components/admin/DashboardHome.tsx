
import React from 'react';
import { FileText, File, Settings, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DashboardHome = () => {
  const stats = [
    {
      title: 'المقالات والدروس',
      value: '24',
      description: 'إجمالي المحتوى المنشور',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'الملفات والوسائط',
      value: '156',
      description: 'الصور والفيديوهات والملفات',
      icon: File,
      color: 'text-green-600'
    },
    {
      title: 'الزوار هذا الشهر',
      value: '1,234',
      description: 'زيادة 12% عن الشهر الماضي',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'الإعدادات النشطة',
      value: '8',
      description: 'تم تحديثها مؤخراً',
      icon: Settings,
      color: 'text-orange-600'
    }
  ];

  const recentActivity = [
    { action: 'تم إضافة درس جديد', time: 'منذ ساعتين', type: 'content' },
    { action: 'تم رفع 3 صور جديدة', time: 'منذ 4 ساعات', type: 'media' },
    { action: 'تم تحديث إعدادات الموقع', time: 'منذ يوم', type: 'settings' },
    { action: 'تم نشر مقال جديد', time: 'منذ يومين', type: 'content' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          مرحباً بك في لوحة التحكم
        </h2>
        <p className="text-gray-600">
          نظرة سريعة على إحصائيات موقعك وآخر النشاطات
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>آخر النشاطات</CardTitle>
            <CardDescription>
              أحدث التغييرات والإضافات في موقعك
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'content' ? 'bg-blue-500' :
                    activity.type === 'media' ? 'bg-green-500' :
                    'bg-orange-500'
                  }`} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>روابط سريعة</CardTitle>
            <CardDescription>
              الوصول السريع للمهام الأكثر استخداماً
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 text-center bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <FileText className="mx-auto mb-2 text-blue-600" size={24} />
                <span className="text-sm font-medium">إضافة مقال</span>
              </button>
              <button className="p-4 text-center bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <File className="mx-auto mb-2 text-green-600" size={24} />
                <span className="text-sm font-medium">رفع ملف</span>
              </button>
              <button className="p-4 text-center bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <Users className="mx-auto mb-2 text-purple-600" size={24} />
                <span className="text-sm font-medium">إدارة المستخدمين</span>
              </button>
              <button className="p-4 text-center bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <Settings className="mx-auto mb-2 text-orange-600" size={24} />
                <span className="text-sm font-medium">الإعدادات</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
