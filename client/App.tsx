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
import Orb from '@/components/Orb';

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
          <Route
            path="/help-center"
            element={
              <PlaceholderPage
                title="Help Center"
                description="Find answers to your questions and get support."
              />
            }
          />
          <Route
            path="/faq"
            element={
              <PlaceholderPage
                title="FAQ"
                description="Frequently asked questions about our AI services."
              />
            }
          />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '80px', height: '80px', zIndex: 1000 }}>
          <Orb hoverIntensity={0.8} rotateOnHover={false} />
        </div>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);