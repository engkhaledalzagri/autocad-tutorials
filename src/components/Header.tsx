
import React from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              موقع الأوتوكاد
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              الرئيسية
            </Link>
            <Link to="#tutorials" className="text-gray-700 hover:text-blue-600">
              الدروس
            </Link>
            <Link to="#about" className="text-gray-700 hover:text-blue-600">
              حول الموقع
            </Link>
            <Link to="#contact" className="text-gray-700 hover:text-blue-600">
              تواصل معنا
            </Link>
            <Link 
              to="/admin" 
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 border-r border-gray-300 pr-4 mr-4"
            >
              <Settings size={16} />
              لوحة التحكم
            </Link>
          </nav>
          
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
