import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { ServiceFailuresSection } from "../components/ServiceFailuresSection";
import { WaysWeCanHelp } from "../components/WaysWeCanHelp";
import { PromptManagementBanner } from "../components/PromptManagementBanner";
import { Testimonials } from "../components/Testimonials";
import { HeaderCTA } from "../components/HeaderCTA";
import { Footer } from "../components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      <main id="main-content" role="main">
        {/* Hero Section */}
        <Hero />
        
        {/* Service Failures Prevention */}
        <ServiceFailuresSection />
        
        {/* Ways We Can Help */}
        <WaysWeCanHelp />
        
        {/* Prompt Management Banner */}
        <PromptManagementBanner />
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* Call to Action */}
        <HeaderCTA />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
