
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('تحميل التطبيق...');

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error('لم يتم العثور على عنصر root');
} else {
  console.log('تم العثور على عنصر root، بدء تشغيل التطبيق');
  const root = createRoot(rootElement);
  root.render(<App />);
}
