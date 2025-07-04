import React from 'react';
import { Edit, Trash2, Eye } from 'lucide-react';

interface ContentActionsProps {
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const ContentActions: React.FC<ContentActionsProps> = ({
  onView,
  onEdit,
  onDelete
}) => {
  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={onView}
        className="p-1 text-gray-600 hover:text-blue-600"
      >
        <Eye size={16} />
      </button>
      <button 
        onClick={onEdit}
        className="p-1 text-gray-600 hover:text-green-600"
      >
        <Edit size={16} />
      </button>
      <button 
        onClick={onDelete}
        className="p-1 text-gray-600 hover:text-red-600"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default ContentActions;