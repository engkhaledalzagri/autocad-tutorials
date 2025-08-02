import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-background font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            شروط الخدمة
          </h1>
          
          <div className="bg-card rounded-lg shadow-sm p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. قبول الشروط</h2>
              <p className="text-muted-foreground leading-relaxed">
                باستخدامك لموقع الأوتوكاد، فإنك توافق على الالتزام بهذه الشروط والأحكام. 
                إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. وصف الخدمة</h2>
              <p className="text-muted-foreground leading-relaxed">
                موقع الأوتوكاد هو منصة تعليمية تقدم دروس ومواد تعليمية مجانية في برنامج AutoCAD 
                وتصميم المخططات المعمارية والهندسية. نهدف إلى توفير محتوى عالي الجودة لجميع المستويات.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. حساب المستخدم</h2>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                <li>• أنت مسؤول عن الحفاظ على سرية معلومات حسابك</li>
                <li>• يجب أن تكون المعلومات المقدمة دقيقة وحديثة</li>
                <li>• لا يجوز مشاركة حسابك مع أشخاص آخرين</li>
                <li>• أنت مسؤول عن جميع الأنشطة التي تحدث في حسابك</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. استخدام المحتوى</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">المسموح:</h3>
                  <ul className="text-muted-foreground leading-relaxed space-y-1">
                    <li>• مشاهدة وتحميل المواد للاستخدام الشخصي والتعليمي</li>
                    <li>• مشاركة روابط الدروس مع الآخرين</li>
                    <li>• استخدام المعلومات في مشاريعك الشخصية</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">غير المسموح:</h3>
                  <ul className="text-muted-foreground leading-relaxed space-y-1">
                    <li>• إعادة نشر المحتوى دون إذن</li>
                    <li>• بيع أو توزيع المواد تجارياً</li>
                    <li>• ادعاء ملكية المحتوى</li>
                    <li>• استخدام المحتوى لأغراض ضارة أو غير قانونية</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. السلوك المقبول</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                عند استخدام الموقع، يجب عليك:
              </p>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                <li>• احترام حقوق المستخدمين الآخرين</li>
                <li>• عدم نشر محتوى مسيء أو غير لائق</li>
                <li>• عدم محاولة اختراق الموقع أو إلحاق الضرر به</li>
                <li>• اتباع جميع القوانين المحلية والدولية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. حقوق الملكية الفكرية</h2>
              <p className="text-muted-foreground leading-relaxed">
                جميع المحتويات في هذا الموقع، بما في ذلك النصوص والصور والفيديوهات والتصاميم، 
                محمية بحقوق الطبع والنشر وقوانين الملكية الفكرية الأخرى.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. الإعلانات</h2>
              <p className="text-muted-foreground leading-relaxed">
                يحتوي الموقع على إعلانات من Google AdSense وشركاء آخرين. 
                هذه الإعلانات تساعد في تمويل الموقع وإبقاء المحتوى مجانياً.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. إخلاء المسؤولية</h2>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                <li>• المحتوى مقدم "كما هو" دون ضمانات</li>
                <li>• لسنا مسؤولين عن أي أضرار قد تنتج من استخدام الموقع</li>
                <li>• قد يحتوي الموقع على روابط لمواقع خارجية لسنا مسؤولين عنها</li>
                <li>• نبذل قصارى جهدنا لضمان دقة المعلومات لكن لا نضمن ذلك</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. إنهاء الخدمة</h2>
              <p className="text-muted-foreground leading-relaxed">
                نحتفظ بالحق في إنهاء أو تعليق حسابك في أي وقت إذا انتهكت هذه الشروط 
                أو استخدمت الموقع بشكل غير لائق.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. تعديل الشروط</h2>
              <p className="text-muted-foreground leading-relaxed">
                قد نقوم بتحديث هذه الشروط من وقت لآخر. الاستمرار في استخدام الموقع 
                بعد التحديث يعني موافقتك على الشروط الجديدة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. القانون المعمول به</h2>
              <p className="text-muted-foreground leading-relaxed">
                تخضع هذه الشروط لقوانين المملكة العربية السعودية، وأي نزاع يحل وفقاً 
                لهذه القوانين.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. تواصل معنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                إذا كان لديك أي أسئلة حول هذه الشروط، يمكنك التواصل معنا من خلال 
                صفحة "تواصل معنا".
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

export default TermsOfServicePage;