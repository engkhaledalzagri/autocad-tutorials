
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedContent from '@/components/FeaturedContent';
import TutorialsSection from '@/components/TutorialsSection';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-cairo">
      <Header />
      <main>
        <HeroSection />
        <FeaturedContent />
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <TutorialsSection />
              </div>
              <div className="lg:col-span-1">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
