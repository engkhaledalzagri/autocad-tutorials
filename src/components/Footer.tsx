
import { BookOpen, Video, Image, Mail, Facebook, Twitter, Youtube, Instagram, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    tutorials: [
      { name: "أساسيات الأوتوكاد", href: "#" },
      { name: "الرسم ثنائي الأبعاد", href: "#" },
      { name: "الرسم ثلاثي الأبعاد", href: "#" },
      { name: "التخطيط المعماري", href: "#" },
      { name: "نصائح وحيل", href: "#" }
    ],
    support: [
      { name: "اتصل بنا", href: "#" },
      { name: "الأسئلة الشائعة", href: "#" },
      { name: "شروط الاستخدام", href: "#" },
      { name: "سياسة الخصوصية", href: "#" },
      { name: "خريطة الموقع", href: "#" }
    ],
    resources: [
      { name: "تحميل ملفات التمرين", href: "#" },
      { name: "قوالب جاهزة", href: "#" },
      { name: "كتب مجانية", href: "#" },
      { name: "أدوات مساعدة", href: "#" },
      { name: "منتدى المناقشة", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/Eng.Khaled.Alzagri", color: "hover:text-blue-600" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@Eng.KhaledAl-Zagri", color: "hover:text-red-600" },
    { name: "Telegram", icon: Send, href: "https://t.me/K0H1A2L3E4D5", color: "hover:text-blue-500" },
    { name: "Email", icon: Mail, href: "mailto:engkhaledalzagri2019@gmail.com", color: "hover:text-green-600" }
  ];

  return (
    <footer className="bg-autocad-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-cairo">مدونة تعلم الأوتوكاد</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 font-cairo leading-relaxed">
              مدونتك الشاملة لتعلم برنامج الأوتوكاد من الصفر إلى الاحتراف مع دروس مجانية وفيديوهات تعليمية وشروحات مفصلة.
            </p>
            
            {/* Contact Info */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-autocad-blue" />
                <a href="mailto:engkhaledalzagri2019@gmail.com" className="hover:text-white transition-colors">
                  engkhaledalzagri2019@gmail.com
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors p-2 hover:bg-white/10 rounded-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Tutorials Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-cairo flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-autocad-blue" />
              الدروس التعليمية
            </h4>
            <ul className="space-y-2">
              {footerLinks.tutorials.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors font-cairo text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-cairo flex items-center gap-2">
              <Mail className="w-5 h-5 text-autocad-blue" />
              الدعم والمساعدة
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors font-cairo text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-cairo flex items-center gap-2">
              <Video className="w-5 h-5 text-autocad-blue" />
              الموارد المفيدة
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors font-cairo text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-2 font-cairo">اشترك في النشرة البريدية</h4>
            <p className="text-gray-300 font-cairo text-sm">
              احصل على أحدث الدروس والنصائح مباشرة في بريدك الإلكتروني
            </p>
          </div>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input 
              type="email" 
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-autocad-blue font-cairo"
            />
            <button className="px-6 py-2 bg-autocad-blue hover:bg-autocad-blue/90 rounded-lg transition-colors font-cairo font-semibold">
              اشترك
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm font-cairo">
            &copy; {currentYear} مدونة تعلم الأوتوكاد. جميع الحقوق محفوظة.
          </p>
          <div className="flex justify-center items-center gap-4 mt-2 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors font-cairo">شروط الاستخدام</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors font-cairo">سياسة الخصوصية</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors font-cairo">خريطة الموقع</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
