import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            سياسة الخصوصية
          </h1>
          
          <div className="bg-card rounded-lg shadow-sm p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. مقدمة</h2>
              <p className="text-muted-foreground leading-relaxed">
                نحن في موقع الأوتوكاد نولي اهتماماً كبيراً لحماية خصوصيتك وبياناتك الشخصية. 
                هذه السياسة توضح كيفية جمع واستخدام وحماية المعلومات التي تقدمها لنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. المعلومات التي نجمعها</h2>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                <li>• عنوان البريد الإلكتروني عند التسجيل</li>
                <li>• معلومات الاستخدام والتفاعل مع الموقع</li>
                <li>• عنوان IP والمعلومات التقنية للجهاز</li>
                <li>• ملفات تعريف الارتباط (Cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. كيف نستخدم المعلومات</h2>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                <li>• تقديم خدمات الموقع وتحسين تجربة المستخدم</li>
                <li>• إرسال تحديثات مهمة حول الخدمة</li>
                <li>• تحليل استخدام الموقع لتحسين الأداء</li>
                <li>• عرض إعلانات مخصصة من خلال Google AdSense</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. مشاركة المعلومات</h2>
              <p className="text-muted-foreground leading-relaxed">
                لا نقوم ببيع أو تأجير أو مشاركة معلوماتك الشخصية مع أطراف ثالثة، باستثناء:
              </p>
              <ul className="text-muted-foreground leading-relaxed space-y-2 mt-3">
                <li>• مقدمي الخدمات الموثوقين مثل Google AdSense</li>
                <li>• عند الطلب القانوني من السلطات المختصة</li>
                <li>• لحماية حقوق وأمان المستخدمين الآخرين</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. ملفات تعريف الارتباط (Cookies)</h2>
              <p className="text-muted-foreground leading-relaxed">
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك وعرض إعلانات مناسبة. 
                يمكنك التحكم في هذه الملفات من خلال إعدادات متصفحك.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Google AdSense</h2>
              <p className="text-muted-foreground leading-relaxed">
                يستخدم موقعنا خدمة Google AdSense لعرض الإعلانات. قد تستخدم Google 
                ملفات تعريف الارتباط لعرض إعلانات بناءً على زياراتك السابقة لهذا الموقع أو مواقع أخرى.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. أمان المعلومات</h2>
              <p className="text-muted-foreground leading-relaxed">
                نطبق معايير أمان عالية لحماية معلوماتك من الوصول غير المصرح به أو 
                الاستخدام أو الكشف أو التغيير أو التدمير.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. حقوقك</h2>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                <li>• طلب نسخة من بياناتك الشخصية</li>
                <li>• تصحيح أو تحديث معلوماتك</li>
                <li>• طلب حذف حسابك وبياناتك</li>
                <li>• الاعتراض على معالجة بياناتك</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. تحديث السياسة</h2>
              <p className="text-muted-foreground leading-relaxed">
                قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم إشعارك بأي تغييرات مهمة 
                عبر البريد الإلكتروني أو إشعار على الموقع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. تواصل معنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك التواصل معنا من خلال 
                صفحة "تواصل معنا" أو عبر البريد الإلكتروني.
              </p>
            </section>

            <div className="bg-muted/30 p-4 rounded-lg mt-8">
              <p className="text-sm text-muted-foreground">
                <strong>تاريخ آخر تحديث:</strong> {new Date().toLocaleDateString('ar-SA')}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;