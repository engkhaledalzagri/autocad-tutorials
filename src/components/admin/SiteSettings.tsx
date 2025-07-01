
import React, { useState } from 'react';
import { Save, Globe, Mail, Phone, Facebook, Youtube } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const SiteSettings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    siteName: 'مدونة تعلم الأوتوكاد',
    siteDescription: 'أفضل مدونة لتعلم برنامج الأوتوكاد مع دروس مجانية',
    siteUrl: 'https://your-domain.com',
    email: 'engkhaledalzagri2019@gmail.com',
    phone: '+966123456789',
    facebook: 'https://www.facebook.com/Eng.Khaled.Alzagri',
    telegram: 'https://t.me/K0H1A2L3E4D5',
    youtube: 'https://www.youtube.com/@Eng.KhaledAl-Zagri',
    seoTitle: 'مدونة تعلم الأوتوكاد - دروس وشروحات تعليمية مجانية',
    seoDescription: 'أفضل مدونة لتعلم برنامج الأوتوكاد مع دروس مجانية، فيديوهات تعليمية، وشروحات مفصلة للمبتدئين والمحترفين',
    seoKeywords: 'أوتوكاد, تعلم أوتوكاد, دروس أوتوكاد, AutoCAD, تصميم هندسي, رسم تقني',
    googleAnalytics: '',
    googleAdsense: 'ca-pub-7511115833815306',
    maintenanceMode: false,
    commentsEnabled: true,
    registrationEnabled: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Saving settings:', settings);
    toast({
      title: "تم حفظ الإعدادات",
      description: "تم حفظ إعدادات الموقع بنجاح",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">إعدادات الموقع</h2>
        <p className="text-gray-600">إدارة الإعدادات العامة للموقع</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              الإعدادات العامة
            </CardTitle>
            <CardDescription>
              الإعدادات الأساسية للموقع
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">اسم الموقع</Label>
                <Input
                  id="siteName"
                  name="siteName"
                  value={settings.siteName}
                  onChange={handleChange}
                  placeholder="اسم الموقع"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteUrl">رابط الموقع</Label>
                <Input
                  id="siteUrl"
                  name="siteUrl"
                  value={settings.siteUrl}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  type="url"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="siteDescription">وصف الموقع</Label>
              <textarea
                id="siteDescription"
                name="siteDescription"
                value={settings.siteDescription}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
                placeholder="وصف مختصر عن الموقع"
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              معلومات التواصل
            </CardTitle>
            <CardDescription>
              معلومات التواصل وحسابات التواصل الاجتماعي
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={settings.phone}
                  onChange={handleChange}
                  placeholder="+966123456789"
                  type="tel"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="facebook">رابط فيسبوك</Label>
                <Input
                  id="facebook"
                  name="facebook"
                  value={settings.facebook}
                  onChange={handleChange}
                  placeholder="https://facebook.com/username"
                  type="url"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telegram">رابط تليجرام</Label>
                <Input
                  id="telegram"
                  name="telegram"
                  value={settings.telegram}
                  onChange={handleChange}
                  placeholder="https://t.me/username"
                  type="url"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="youtube">رابط يوتيوب</Label>
              <Input
                id="youtube"
                name="youtube"
                value={settings.youtube}
                onChange={handleChange}
                placeholder="https://youtube.com/@username"
                type="url"
              />
            </div>
          </CardContent>
        </Card>

        {/* SEO Settings */}
        <Card>
          <CardHeader>
            <CardTitle>إعدادات SEO</CardTitle>
            <CardDescription>
              إعدادات تحسين محركات البحث
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="seoTitle">عنوان SEO</Label>
              <Input
                id="seoTitle"
                name="seoTitle"
                value={settings.seoTitle}
                onChange={handleChange}
                placeholder="عنوان الموقع لمحركات البحث"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="seoDescription">وصف SEO</Label>
              <textarea
                id="seoDescription"
                name="seoDescription"
                value={settings.seoDescription}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
                placeholder="وصف الموقع لمحركات البحث"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="seoKeywords">الكلمات المفتاحية</Label>
              <Input
                id="seoKeywords"
                name="seoKeywords"
                value={settings.seoKeywords}
                onChange={handleChange}
                placeholder="كلمة1, كلمة2, كلمة3"
              />
            </div>
          </CardContent>
        </Card>

        {/* Analytics & Ads */}
        <Card>
          <CardHeader>
            <CardTitle>التحليلات والإعلانات</CardTitle>
            <CardDescription>
              إعدادات Google Analytics و AdSense
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="googleAnalytics">Google Analytics ID</Label>
                <Input
                  id="googleAnalytics"
                  name="googleAnalytics"
                  value={settings.googleAnalytics}
                  onChange={handleChange}
                  placeholder="GA-XXXXXXXXX-X"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="googleAdsense">Google AdSense Publisher ID</Label>
                <Input
                  id="googleAdsense"
                  name="googleAdsense"
                  value={settings.googleAdsense}
                  onChange={handleChange}
                  placeholder="ca-pub-xxxxxxxxxxxxxxxx"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Site Features */}
        <Card>
          <CardHeader>
            <CardTitle>ميزات الموقع</CardTitle>
            <CardDescription>
              تفعيل أو إلغاء تفعيل ميزات الموقع
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">وضع الصيانة</h4>
                <p className="text-sm text-gray-500">تفعيل وضع الصيانة للموقع</p>
              </div>
              <input
                type="checkbox"
                name="maintenanceMode"
                checked={settings.maintenanceMode}
                onChange={handleChange}
                className="toggle"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">التعليقات</h4>
                <p className="text-sm text-gray-500">السماح بالتعليقات على المقالات</p>
              </div>
              <input
                type="checkbox"
                name="commentsEnabled"
                checked={settings.commentsEnabled}
                onChange={handleChange}
                className="toggle"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">التسجيل</h4>
                <p className="text-sm text-gray-500">السماح للمستخدمين بالتسجيل</p>
              </div>
              <input
                type="checkbox"
                name="registrationEnabled"
                checked={settings.registrationEnabled}
                onChange={handleChange}
                className="toggle"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Save className="ml-2 h-4 w-4" />
            حفظ الإعدادات
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SiteSettings;
