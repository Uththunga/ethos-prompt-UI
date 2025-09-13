import "./global.css";
import React from "react";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { Solutions } from "./pages/Solutions";
import { PromptingGuide } from "./pages/PromptingGuide";
import { Basics } from "./pages/Basics";
import { Techniques } from "./pages/Techniques";
import { Contact } from "./pages/Contact";
import CustomAISolutions from "./pages/CustomAISolutions";
import SystemIntegration from "./pages/SystemIntegration";
import IntelligentApplications from "./pages/IntelligentApplications";
import DigitalTransformation from "./pages/DigitalTransformation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import HelpCenter from "./pages/HelpCenter";
import FAQ from "./pages/FAQ";
import Moleicon from '@/components/Moleicon';

const queryClient = new QueryClient();

// Determine basename based on environment
const basename = import.meta.env.DEV ? '/' : '/ethos-prompt-UI';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route
            path="/prompt-library"
            element={
              <PlaceholderPage
                title="Prompt Library"
                description="Access our comprehensive collection of expertly crafted AI prompts."
              />
            }
          />
          <Route path="/prompting-guide" element={<PromptingGuide />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/techniques" element={<Techniques />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/custom-ai-solutions" element={<CustomAISolutions />} />
          <Route path="/services/system-integration" element={<SystemIntegration />} />
          <Route path="/services/intelligent-applications" element={<IntelligentApplications />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/faq" element={<FAQ />} />
          <Route
            path="/tutorials"
            element={
              <PlaceholderPage
                title="Tutorials"
                description="Step-by-step guides to help you get the most out of our platform."
              />
            }
          />
          <Route
            path="/resources"
            element={
              <PlaceholderPage
                title="Resources"
                description="Explore our collection of AI resources and tools."
              />
            }
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-20 h-20 z-50">
          <Moleicon hoverIntensity={0.8} rotateOnHover={false} />
        </div>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);