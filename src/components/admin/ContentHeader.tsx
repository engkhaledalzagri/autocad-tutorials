import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContentHeaderProps {
  onAddContent: () => void;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({ onAddContent }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">إدارة المحتوى</h2>
        <p className="text-gray-600">إدارة المقالات والدروس والفيديوهات</p>
      </div>
      <Button 
        onClick={onAddContent}
        className="bg-blue-600 hover:bg-blue-700"
      >
        <Plus className="ml-2 h-4 w-4" />
        إضافة محتوى جديد
      </Button>
    </div>
  );
};

export default ContentHeader;