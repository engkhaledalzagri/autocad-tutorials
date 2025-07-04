import React from 'react';
import { Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface ContentFiltersProps {
  searchTerm: string;
  selectedType: string;
  selectedStatus: string;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

const ContentFilters: React.FC<ContentFiltersProps> = ({
  searchTerm,
  selectedType,
  selectedStatus,
  onSearchChange,
  onTypeChange,
  onStatusChange
}) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="البحث في المحتوى..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pr-10"
            />
          </div>
          <select 
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="px-3 py-2 border border-input rounded-md bg-background"
          >
            <option value="">جميع الأنواع</option>
            <option value="article">مقالات</option>
            <option value="tutorial">دروس</option>
            <option value="video">فيديوهات</option>
          </select>
          <select 
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
            className="px-3 py-2 border border-input rounded-md bg-background"
          >
            <option value="">جميع الحالات</option>
            <option value="published">منشور</option>
            <option value="draft">مسودة</option>
            <option value="archived">مؤرشف</option>
          </select>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentFilters;