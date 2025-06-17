
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Book, BookOpen, Video, Image, Mail, Facebook, Youtube, Send } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '#home', icon: Book },
    { name: 'الدروس', href: '#tutorials', icon: BookOpen },
    { name: 'الفيديوهات', href: '#videos', icon: Video },
    { name: 'الصور', href: '#images', icon: Image },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/Eng.Khaled.Alzagri", color: "hover:text-blue-600" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@Eng.KhaledAl-Zagri", color: "hover:text-red-600" },
    { name: "Telegram", icon: Send, href: "https://t.me/K0H1A2L3E4D5", color: "hover:text-blue-500" },
    { name: "Email", icon: Mail, href: "mailto:engkhaledalzagri2019@gmail.com", color: "hover:text-green-600" }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-autocad-gray font-cairo">
                مدونة تعلم الأوتوكاد
              </h1>
              <p className="text-sm text-gray-600">دروس وشروحات تعليمية</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 space-x-reverse text-gray-700 hover:text-autocad-blue transition-colors duration-200 font-cairo"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            {/* Social Icons */}
            <div className="flex space-x-2 space-x-reverse">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 ${social.color} transition-colors p-1 hover:bg-gray-100 rounded`}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            
            {/* CTA Button */}
            <Button className="bg-hero-gradient hover:opacity-90 text-white font-cairo px-6">
              ابدأ التعلم الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fadeInUp">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 space-x-reverse text-gray-700 hover:text-autocad-blue transition-colors duration-200 font-cairo p-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex space-x-4 space-x-reverse justify-center py-2">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-500 ${social.color} transition-colors p-2 hover:bg-gray-100 rounded-lg`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              <Button className="bg-hero-gradient hover:opacity-90 text-white font-cairo mt-4">
                ابدأ التعلم الآن
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
