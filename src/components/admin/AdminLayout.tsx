import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { 
  Settings, 
  FileText, 
  File, 
  Menu, 
  X,
  LayoutDashboard 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, loading, isAdmin } = useAuth();

  const menuItems = [
    {
      title: 'لوحة التحكم',
      icon: LayoutDashboard,
      path: '/admin'
    },
    {
      title: 'إدارة المحتوى',
      icon: FileText,
      path: '/admin/content'
    },
    {
      title: 'إدارة الملفات',
      icon: File,
      path: '/admin/media'
    },
    {
      title: 'الإعدادات',
      icon: Settings,
      path: '/admin/settings'
    }
  ];

  if (loading) {
    return <div>جاري التحميل...</div>;
  }

  if (!user || !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-cairo">
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="text-xl font-bold text-gray-900">
              لوحة تحكم الأوتوكاد
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              عرض الموقع
            </NavLink>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className={cn(
          "bg-white shadow-sm border-l transition-all duration-300",
          sidebarOpen ? "w-64" : "w-16"
        )}>
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/admin'}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                        isActive
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      )
                    }
                  >
                    <item.icon size={20} />
                    {sidebarOpen && <span>{item.title}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
