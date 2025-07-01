
import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ContentForm from './ContentForm';

const ContentManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingContent, setEditingContent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data - in real app this would come from a database
  const contents = [
    {
      id: 1,
      title: 'مقدمة في الأوتوكاد',
      type: 'article',
      status: 'published',
      author: 'المحرر',
      date: '2024-01-15',
      views: 1250
    },
    {
      id: 2,
      title: 'أساسيات الرسم الهندسي',
      type: 'tutorial',
      status: 'draft',
      author: 'المحرر',
      date: '2024-01-14',
      views: 890
    },
    {
      id: 3,
      title: 'استخدام أدوات القياس',
      type: 'video',
      status: 'published',
      author: 'المحرر',
      date: '2024-01-13',
      views: 2100
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article': return '📄';
      case 'tutorial': return '🎓';
      case 'video': return '🎥';
      default: return '📄';
    }
  };

  const filteredContents = contents.filter(content =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">إدارة المحتوى</h2>
          <p className="text-gray-600">إدارة المقالات والدروس والفيديوهات</p>
        </div>
        <Button 
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="ml-2 h-4 w-4" />
          إضافة محتوى جديد
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="البحث في المحتوى..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>
            <select className="px-3 py-2 border border-gray-300 rounded-md bg-white">
              <option value="">جميع الأنواع</option>
              <option value="article">مقالات</option>
              <option value="tutorial">دروس</option>
              <option value="video">فيديوهات</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-md bg-white">
              <option value="">جميع الحالات</option>
              <option value="published">منشور</option>
              <option value="draft">مسودة</option>
              <option value="archived">مؤرشف</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Content Table */}
      <Card>
        <CardHeader>
          <CardTitle>قائمة المحتوى</CardTitle>
          <CardDescription>
            {filteredContents.length} عنصر من أصل {contents.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-right py-3 pr-4 font-medium text-gray-900">العنوان</th>
                  <th className="text-right py-3 pr-4 font-medium text-gray-900">النوع</th>
                  <th className="text-right py-3 pr-4 font-medium text-gray-900">الحالة</th>
                  <th className="text-right py-3 pr-4 font-medium text-gray-900">المشاهدات</th>
                  <th className="text-right py-3 pr-4 font-medium text-gray-900">التاريخ</th>
                  <th className="text-right py-3 pr-4 font-medium text-gray-900">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {filteredContents.map((content) => (
                  <tr key={content.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{getTypeIcon(content.type)}</span>
                        <div>
                          <div className="font-medium text-gray-900">{content.title}</div>
                          <div className="text-sm text-gray-500">بواسطة {content.author}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                        {content.type === 'article' ? 'مقال' : 
                         content.type === 'tutorial' ? 'درس' : 'فيديو'}
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(content.status)}`}>
                        {content.status === 'published' ? 'منشور' : 
                         content.status === 'draft' ? 'مسودة' : 'مؤرشف'}
                      </span>
                    </td>
                    <td className="py-4 pr-4 text-gray-600">{content.views.toLocaleString()}</td>
                    <td className="py-4 pr-4 text-gray-600">{content.date}</td>
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-gray-600 hover:text-blue-600">
                          <Eye size={16} />
                        </button>
                        <button 
                          onClick={() => {
                            setEditingContent(content);
                            setShowForm(true);
                          }}
                          className="p-1 text-gray-600 hover:text-green-600"
                        >
                          <Edit size={16} />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-red-600">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Content Form Modal */}
      {showForm && (
        <ContentForm
          content={editingContent}
          onClose={() => {
            setShowForm(false);
            setEditingContent(null);
          }}
          onSave={(data) => {
            console.log('Saving content:', data);
            setShowForm(false);
            setEditingContent(null);
          }}
        />
      )}
    </div>
  );
};

export default ContentManagement;
