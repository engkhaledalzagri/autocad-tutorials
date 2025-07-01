
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TutorialsPage from "./pages/TutorialsPage";
import VideosPage from "./pages/VideosPage";
import ImagesPage from "./pages/ImagesPage";
import FilesPage from "./pages/FilesPage";
import ExplanationsPage from "./pages/ExplanationsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SitemapPage from "./pages/SitemapPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import TutorialDetailsPage from "./pages/TutorialDetailsPage";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/images" element={<ImagesPage />} />
          <Route path="/files" element={<FilesPage />} />
          <Route path="/explanations" element={<ExplanationsPage />} />
          <Route path="/tutorial/:id" element={<TutorialDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
