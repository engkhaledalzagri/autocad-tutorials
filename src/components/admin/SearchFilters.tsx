
import React from 'react';
import { Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface SearchFiltersProps {
  searchTerm: string;
  selectedType: string;
  onSearchChange: (value: string) => void;
  onTypeChange: (value: string) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  searchTerm,
  selectedType,
  onSearchChange,
  onTypeChange
}) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="البحث في الملفات..."
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
            <option value="all">جميع الأنواع</option>
            <option value="image">صور</option>
            <option value="video">فيديوهات</option>
            <option value="document">مستندات</option>
          </select>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchFilters;
