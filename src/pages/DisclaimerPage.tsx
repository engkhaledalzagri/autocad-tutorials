import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-background font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            إخلاء المسؤولية
          </h1>
          
          <div className="bg-card rounded-lg shadow-sm p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. طبيعة المحتوى</h2>
              <p className="text-muted-foreground leading-relaxed">
                المعلومات المقدمة في موقع الأوتوكاد هي لأغراض تعليمية عامة فقط. 
                المحتوى مقدم "كما هو" ولا نقدم أي ضمانات، صريحة أو ضمنية، حول دقة أو اكتمال أو موثوقية المعلومات.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. عدم المسؤولية عن الأضرار</h2>
              <p className="text-muted-foreground leading-relaxed">
                لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية 
                قد تنتج عن استخدام هذا الموقع أو المعلومات الواردة فيه، بما في ذلك على سبيل المثال لا الحصر:
              </p>
              <ul className="text-muted-foreground leading-relaxed space-y-2 mt-3">
                <li>• فقدان البيانات أو الأرباح</li>
                <li>• انقطاع الأعمال</li>
                <li>• الأضرار التي تلحق بالأجهزة أو البرامج</li>
                <li>• أي أضرار أخرى قد تنتج من الاستخدام</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. دقة المعلومات</h2>
              <p className="text-muted-foreground leading-relaxed">
                رغم أننا نبذل قصارى جهدنا لضمان دقة وحداثة المعلومات المقدمة، إلا أننا لا نضمن:
              </p>
              <ul className="text-muted-foreground leading-relaxed space-y-2 mt-3">
                <li>• دقة جميع المعلومات الواردة في الموقع</li>
                <li>• أن المعلومات محدثة أو خالية من الأخطاء</li>
                <li>• أن استخدام المعلومات سيحقق نتائج معينة</li>
                <li>• أن الموقع سيكون متاحاً دون انقطاع</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. المحتوى التعليمي</h2>
              <p className="text-muted-foreground leading-relaxed">
                الدروس والمواد التعليمية المقدمة هي لأغراض التعلم العام فقط. 
                ننصح بشدة بالتحقق من المعلومات مع مصادر إضافية والحصول على استشارة مهنية 
                عند الحاجة لتطبيق هذه المعلومات في مشاريع حقيقية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. الروابط الخارجية</h2>
              <p className="text-muted-foreground leading-relaxed">
                قد يحتوي موقعنا على روابط لمواقع ويب أخرى لا نملكها أو نتحكم فيها. 
                لسنا مسؤولين عن محتوى أو سياسات الخصوصية أو ممارسات هذه المواقع الخارجية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. البرامج والملفات</h2>
              <p className="text-muted-foreground leading-relaxed">
                أي ملفات أو برامج يتم تحميلها من الموقع تكون على مسؤوليتك الخاصة. 
                ننصح بفحص جميع الملفات ببرامج مكافحة الفيروسات قبل الاستخدام.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. النصائح المهنية</h2>
              <p className="text-muted-foreground leading-relaxed">
                المعلومات المقدمة لا تشكل نصيحة مهنية في الهندسة أو العمارة أو أي مجال تقني آخر. 
                للمشاريع المهنية، ننصح بالتشاور مع مهندسين مرخصين ومتخصصين.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. تحديث المحتوى</h2>
              <p className="text-muted-foreground leading-relaxed">
                نحتفظ بالحق في تعديل أو إزالة أي محتوى من الموقع في أي وقت دون إشعار مسبق. 
                كما أن برامج مثل AutoCAD قد تتغير مع التحديثات الجديدة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. الاستخدام الشخصي</h2>
              <p className="text-muted-foreground leading-relaxed">
                هذا الموقع مخصص للاستخدام الشخصي والتعليمي فقط. 
                أنت تتحمل المسؤولية الكاملة عن أي استخدام تجاري أو مهني للمعلومات المقدمة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. القيود القانونية</h2>
              <p className="text-muted-foreground leading-relaxed">
                في أقصى حد يسمح به القانون، نحن غير مسؤولين عن أي خسائر أو أضرار 
                تنشأ عن استخدام هذا الموقع أو عدم القدرة على استخدامه.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. التواصل والاستفسارات</h2>
              <p className="text-muted-foreground leading-relaxed">
                إذا كان لديك أي أسئلة حول هذا الإخلاء للمسؤولية، يمكنك التواصل معنا 
                من خلال صفحة "تواصل معنا" في الموقع.
              </p>
            </section>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-8">
              <p className="text-sm text-yellow-800">
                <strong>تنويه مهم:</strong> باستخدامك لهذا الموقع، فإنك تقر بأنك قد قرأت وفهمت 
                وتوافق على شروط إخلاء المسؤولية هذا.
              </p>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg mt-4">
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

export default DisclaimerPage;