import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQPage = () => {
  const faqs = [
    {
      question: "هل الموقع مجاني؟",
      answer: "نعم، جميع المحتويات التعليمية في الموقع متاحة مجاناً لجميع المستخدمين. نحن نعتمد على الإعلانات لتمويل الموقع وإبقاء المحتوى مجانياً."
    },
    {
      question: "هل أحتاج إلى خبرة سابقة في AutoCAD؟",
      answer: "لا، الموقع يحتوي على دروس لجميع المستويات من المبتدئين إلى المتقدمين. نبدأ بالأساسيات ونتدرج في الصعوبة."
    },
    {
      question: "هل يمكنني تحميل الملفات والمواد؟",
      answer: "نعم، يمكنك تحميل الملفات التعليمية والنماذج للاستخدام الشخصي والتعليمي. لا يجوز إعادة توزيعها تجارياً."
    },
    {
      question: "كيف يمكنني إنشاء حساب؟",
      answer: "يمكنك إنشاء حساب مجاني من خلال النقر على 'إنشاء حساب' في الصفحة الرئيسية وإدخال بريدك الإلكتروني وكلمة مرور آمنة."
    },
    {
      question: "هل الدروس باللغة العربية؟",
      answer: "نعم، جميع الدروس والشروحات متوفرة باللغة العربية لسهولة الفهم والتطبيق."
    },
    {
      question: "ما هي أحدث إصدارات AutoCAD المدعومة؟",
      answer: "نغطي جميع الإصدارات الحديثة من AutoCAD، وننتظم في تحديث المحتوى ليواكب الإصدارات الجديدة."
    },
    {
      question: "هل يمكنني طلب دروس في موضوع معين؟",
      answer: "نعم، يمكنك إرسال طلبك من خلال صفحة 'تواصل معنا' وسنحاول تلبية الطلب في المحتوى القادم."
    },
    {
      question: "كيف أتواصل مع فريق الدعم؟",
      answer: "يمكنك التواصل معنا من خلال صفحة 'تواصل معنا' أو إرسال بريد إلكتروني، وسنرد عليك في أقرب وقت ممكن."
    },
    {
      question: "هل هناك تطبيق جوال للموقع؟",
      answer: "حالياً لا يوجد تطبيق منفصل، لكن الموقع مصمم ليعمل بشكل ممتاز على جميع الأجهزة الذكية والأجهزة اللوحية."
    },
    {
      question: "كيف يمكنني تتبع تقدمي في التعلم؟",
      answer: "عند إنشاء حساب، يمكنك حفظ الدروس المفضلة وتتبع الدروس التي أكملتها من خلال ملفك الشخصي."
    },
    {
      question: "هل المحتوى مناسب للطلاب والمهندسين؟",
      answer: "نعم، المحتوى مصمم ليناسب طلاب الهندسة والعمارة والمهندسين المحترفين والمهتمين بتعلم AutoCAD."
    },
    {
      question: "كم من الوقت أحتاج لتعلم AutoCAD؟",
      answer: "يعتمد على مستواك الحالي وأهدافك. للأساسيات، قد تحتاج من 2-4 أسابيع، وللإتقان من 3-6 أشهر مع الممارسة المنتظمة."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-cairo">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            الأسئلة الشائعة
          </h1>
          
          <div className="mb-8 text-center">
            <p className="text-lg text-muted-foreground">
              إجابات على أكثر الأسئلة شيوعاً حول موقع الأوتوكاد والخدمات التي نقدمها
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-sm p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-right text-lg font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 bg-primary/10 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              لم تجد إجابة لسؤالك؟
            </h2>
            <p className="text-muted-foreground mb-6">
              تواصل معنا وسنكون سعداء لمساعدتك
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;