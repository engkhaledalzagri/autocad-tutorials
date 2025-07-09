import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ContentActions from './ContentActions';

interface Content {
  id: number;
  title: string;
  type: string;
  status: string;
  author: string;
  date: string;
  views: number;
}

interface ContentTableProps {
  contents: Content[];
  filteredContents: Content[];
  onEditContent: (content: Content) => void;
  onViewContent: (content: Content) => void;
  onDeleteContent: (content: Content) => void;
}

const ContentTable: React.FC<ContentTableProps> = ({
  contents,
  filteredContents,
  onEditContent,
  onViewContent,
  onDeleteContent
}) => {
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

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published': return 'منشور';
      case 'draft': return 'مسودة';
      case 'archived': return 'مؤرشف';
      default: return status;
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case 'article': return 'مقال';
      case 'tutorial': return 'درس';
      case 'video': return 'فيديو';
      default: return type;
    }
  };

  return (
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
                      {getTypeText(content.type)}
                    </span>
                  </td>
                  <td className="py-4 pr-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(content.status)}`}>
                      {getStatusText(content.status)}
                    </span>
                  </td>
                  <td className="py-4 pr-4 text-gray-600">{content.views.toLocaleString()}</td>
                  <td className="py-4 pr-4 text-gray-600">{content.date}</td>
                  <td className="py-4 pr-4">
                    <ContentActions
                      onView={() => onViewContent(content)}
                      onEdit={() => onEditContent(content)}
                      onDelete={() => onDeleteContent(content)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentTable;
