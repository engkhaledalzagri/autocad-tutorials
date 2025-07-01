
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import DashboardHome from '@/components/admin/DashboardHome';
import ContentManagement from '@/components/admin/ContentManagement';
import MediaManagement from '@/components/admin/MediaManagement';
import SiteSettings from '@/components/admin/SiteSettings';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/content" element={<ContentManagement />} />
        <Route path="/media" element={<MediaManagement />} />
        <Route path="/settings" element={<SiteSettings />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminDashboard;
