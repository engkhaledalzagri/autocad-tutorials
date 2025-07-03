
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('تحميل التطبيق...');
console.log('Environment check:');
console.log('- VITE_SUPABASE_URL:', !!import.meta.env.VITE_SUPABASE_URL);
console.log('- VITE_SUPABASE_ANON_KEY:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error('لم يتم العثور على عنصر root');
} else {
  console.log('تم العثور على عنصر root، بدء تشغيل التطبيق');
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log('تم تشغيل التطبيق بنجاح');
  } catch (error) {
    console.error('خطأ في تشغيل التطبيق:', error);
  }
}
