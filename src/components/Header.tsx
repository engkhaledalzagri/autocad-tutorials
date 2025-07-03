
import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, User, LogIn, LogOut, Map } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { user, signOut, isAdmin } = useAuth();

  return (
    <header className="bg-background shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              موقع الأوتوكاد
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground hover:text-primary">
              الرئيسية
            </Link>
            <Link to="/tutorials" className="text-foreground hover:text-primary">
              الدروس
            </Link>
            <Link to="/videos" className="text-foreground hover:text-primary">
              الفيديوهات
            </Link>
            <Link to="/images" className="text-foreground hover:text-primary">
              الصور
            </Link>
            <Link to="/files" className="text-foreground hover:text-primary">
              الملفات
            </Link>
            <Link to="/explanations" className="text-foreground hover:text-primary">
              الشروحات
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary">
              حول الموقع
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary">
              تواصل معنا
            </Link>
            <Link to="/sitemap" className="text-foreground hover:text-primary flex items-center gap-1">
              <Map size={16} />
              خريطة الموقع
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">
                  مرحباً، {user.email}
                </span>
                <Link 
                  to="/profile" 
                  className="flex items-center gap-2 text-foreground hover:text-primary"
                >
                  <User size={16} />
                  الملف الشخصي
                </Link>
                {isAdmin && (
                  <Link 
                    to="/admin" 
                    className="flex items-center gap-2 text-foreground hover:text-primary"
                  >
                    <Settings size={16} />
                    لوحة التحكم
                  </Link>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={signOut}
                  className="flex items-center gap-2"
                >
                  <LogOut size={16} />
                  تسجيل الخروج
                </Button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="flex items-center gap-2 text-foreground hover:text-primary"
                >
                  <LogIn size={16} />
                  تسجيل الدخول
                </Link>
                <Link 
                  to="/register" 
                  className="flex items-center gap-2 text-foreground hover:text-primary"
                >
                  <User size={16} />
                  إنشاء حساب
                </Link>
              </>
            )}
          </div>
          
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
