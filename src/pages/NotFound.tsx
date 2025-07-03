
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-cairo">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">الصفحة غير موجودة</h2>
          <p className="text-gray-600 mb-6">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم حذفها.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            المسار المطلوب: <code className="bg-gray-100 px-2 py-1 rounded">{location.pathname}</code>
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button className="w-full bg-primary hover:bg-primary/90">
              <Home className="ml-2 h-4 w-4" />
              العودة للصفحة الرئيسية
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="w-full"
          >
            <ArrowLeft className="ml-2 h-4 w-4" />
            العودة للصفحة السابقة
          </Button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            إذا كنت تعتقد أن هذا خطأ، يرجى التواصل معنا
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
