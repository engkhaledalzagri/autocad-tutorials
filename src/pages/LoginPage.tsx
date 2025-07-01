
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogIn, User, Lock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    alert('تم تسجيل الدخول بنجاح!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-autocad-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <LogIn className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-cairo text-autocad-gray">
                  تسجيل الدخول
                </CardTitle>
                <p className="text-gray-600 font-cairo">
                  ادخل بياناتك للوصول إلى حسابك
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-autocad-gray mb-2 font-cairo">
                      البريد الإلكتروني
                    </label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-autocad-blue focus:border-transparent font-cairo"
                        placeholder="أدخل بريدك الإلكتروني"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-autocad-gray mb-2 font-cairo">
                      كلمة المرور
                    </label>
                    <div className="relative">
                      <Lock className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-autocad-blue focus:border-transparent font-cairo"
                        placeholder="أدخل كلمة المرور"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-autocad-blue hover:bg-autocad-blue/90 text-white font-cairo py-3"
                  >
                    <LogIn className="w-5 h-5 ml-2" />
                    تسجيل الدخول
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-600 font-cairo">
                    ليس لديك حساب؟{' '}
                    <Link to="/register" className="text-autocad-blue hover:underline font-cairo">
                      إنشاء حساب جديد
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
