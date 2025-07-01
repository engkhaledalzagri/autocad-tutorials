
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Youtube } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "engkhaledalzagri2019@gmail.com",
      link: "mailto:engkhaledalzagri2019@gmail.com"
    },
    {
      icon: Phone,
      title: "رقم الهاتف",
      value: "+964 XXX XXX XXXX",
      link: "tel:+964XXXXXXXXX"
    },
    {
      icon: MapPin,
      title: "الموقع",
      value: "العراق - بغداد",
      link: "#"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      value: "الأحد - الخميس: 9:00 ص - 5:00 م",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/Eng.Khaled.Alzagri",
      color: "text-blue-600"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://www.youtube.com/@Eng.KhaledAl-Zagri",
      color: "text-red-600"
    },
    {
      icon: Send,
      name: "Telegram",
      url: "https://t.me/K0H1A2L3E4D5",
      color: "text-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-autocad-gray mb-6 font-cairo">
              تواصل معنا
            </h1>
            <p className="text-xl text-gray-600 font-cairo max-w-2xl mx-auto">
              نحن هنا لمساعدتك! لا تتردد في التواصل معنا لأي استفسار أو اقتراح
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-cairo text-autocad-gray">
                  أرسل لنا رسالة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-autocad-gray mb-2 font-cairo">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-autocad-blue focus:border-transparent font-cairo"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-autocad-gray mb-2 font-cairo">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-autocad-blue focus:border-transparent font-cairo"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-autocad-gray mb-2 font-cairo">
                      الموضوع
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-autocad-blue focus:border-transparent font-cairo"
                      placeholder="موضوع الرسالة"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-autocad-gray mb-2 font-cairo">
                      الرسالة
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-autocad-blue focus:border-transparent font-cairo resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-autocad-blue hover:bg-autocad-blue/90 text-white font-cairo py-3"
                  >
                    <Send className="w-5 h-5 ml-2" />
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-cairo text-autocad-gray">
                    معلومات التواصل
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-autocad-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-autocad-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-autocad-gray mb-1 font-cairo">
                          {info.title}
                        </h3>
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-autocad-blue transition-colors font-cairo"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-cairo text-autocad-gray">
                    تابعنا على وسائل التواصل
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors ${social.color}`}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-cairo text-autocad-gray">
                    الأسئلة الشائعة
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-autocad-gray mb-2 font-cairo">
                      كم يستغرق الرد على الاستفسارات؟
                    </h4>
                    <p className="text-gray-600 font-cairo text-sm">
                      نحن نرد على جميع الاستفسارات خلال 24-48 ساعة كحد أقصى.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-autocad-gray mb-2 font-cairo">
                      هل يمكنني طلب دروس خاصة؟
                    </h4>
                    <p className="text-gray-600 font-cairo text-sm">
                      نعم، يمكنك طلب دروس خاصة أو مواضيع محددة عبر نموذج التواصل.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-autocad-gray mb-2 font-cairo">
                      هل المحتوى مجاني؟
                    </h4>
                    <p className="text-gray-600 font-cairo text-sm">
                      نعم، جميع المحتوى التعليمي على الموقع مجاني بالكامل.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
