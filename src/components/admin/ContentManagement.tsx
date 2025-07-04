
import React, { useState } from 'react';
import ContentForm from './ContentForm';
import ContentHeader from './ContentHeader';
import ContentFilters from './ContentFilters';
import ContentTable from './ContentTable';

const ContentManagement = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingContent, setEditingContent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

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

  const filteredContents = contents.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === '' || content.type === selectedType;
    const matchesStatus = selectedStatus === '' || content.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleAddContent = () => {
    setShowForm(true);
  };

  const handleEditContent = (content: any) => {
    setEditingContent(content);
    setShowForm(true);
  };

  const handleViewContent = (content: any) => {
    console.log('Viewing content:', content);
  };

  const handleDeleteContent = (content: any) => {
    console.log('Deleting content:', content);
  };

  return (
    <div className="space-y-6">
      <ContentHeader onAddContent={handleAddContent} />
      
      <ContentFilters
        searchTerm={searchTerm}
        selectedType={selectedType}
        selectedStatus={selectedStatus}
        onSearchChange={setSearchTerm}
        onTypeChange={setSelectedType}
        onStatusChange={setSelectedStatus}
      />

      <ContentTable
        contents={contents}
        filteredContents={filteredContents}
        onEditContent={handleEditContent}
        onViewContent={handleViewContent}
        onDeleteContent={handleDeleteContent}
      />

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
