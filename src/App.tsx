
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Index from "./pages/Index";
import TutorialsPage from "./pages/TutorialsPage";
import VideosPage from "./pages/VideosPage";
import ImagesPage from "./pages/ImagesPage";
import FilesPage from "./pages/FilesPage";
import ExplanationsPage from "./pages/ExplanationsPage";
import AutocadTutorialsPage from "./pages/AutocadTutorialsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SitemapPage from "./pages/SitemapPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import TutorialDetailsPage from "./pages/TutorialDetailsPage";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import DisclaimerPage from "./pages/DisclaimerPage";
import FAQPage from "./pages/FAQPage";
import TutorialCategoriesPage from "./pages/TutorialCategoriesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
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
            <Route path="/autocad-tutorials" element={<AutocadTutorialsPage />} />
            <Route path="/tutorial/:id" element={<TutorialDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } />
            <Route path="/admin/*" element={
              <ProtectedRoute requireAdmin={true}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/tutorial-categories" element={<TutorialCategoriesPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
