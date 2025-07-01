
import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface ContentFormProps {
  content?: any;
  onClose: () => void;
  onSave: (data: any) => void;
}

const ContentForm = ({ content, onClose, onSave }: ContentFormProps) => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'article',
    status: 'draft',
    content: '',
    excerpt: '',
    tags: '',
    thumbnail: ''
  });

  useEffect(() => {
    if (content) {
      setFormData({
        title: content.title || '',
        type: content.type || 'article',
        status: content.status || 'draft',
        content: content.content || '',
        excerpt: content.excerpt || '',
        tags: content.tags || '',
        thumbnail: content.thumbnail || ''
      });
    }
  }, [content]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>
            {content ? 'تحرير المحتوى' : 'إضافة محتوى جديد'}
          </CardTitle>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={20} />
          </button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">العنوان</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="عنوان المحتوى"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">نوع المحتوى</Label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                >
                  <option value="article">مقال</option>
                  <option value="tutorial">درس</option>
                  <option value="video">فيديو</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="status">الحالة</Label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
                >
                  <option value="draft">مسودة</option>
                  <option value="published">منشور</option>
                  <option value="archived">مؤرشف</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tags">الكلمات المفتاحية</Label>
                <Input
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="أوتوكاد، تصميم، هندسة"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">الملخص</Label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
                placeholder="ملخص مختصر عن المحتوى..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnail">رابط الصورة المصغرة</Label>
              <Input
                id="thumbnail"
                name="thumbnail"
                value={formData.thumbnail}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                type="url"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">المحتوى</Label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={10}
                className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
                placeholder="اكتب محتوى المقال أو الدرس هنا..."
                required
              />
            </div>

            <div className="flex items-center justify-end gap-4 pt-4 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
              >
                إلغاء
              </Button>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Save className="ml-2 h-4 w-4" />
                حفظ
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentForm;
