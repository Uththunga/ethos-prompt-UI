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
      
      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section>
      
      {/* Service Failures Prevention */}
      <section className="relative">
        <ServiceFailuresSection />
      </section>
      
      {/* Ways We Can Help */}
      <section className="relative">
        <WaysWeCanHelp />
      </section>
      
      {/* Prompt Management Banner */}
      <section className="relative">
        <PromptManagementBanner />
      </section>
      
      {/* Testimonials */}
      <section className="relative">
        <Testimonials />
      </section>
      
      {/* Call to Action */}
      <section className="relative">
        <HeaderCTA />
      </section>
      
      {/* Footer */}
      <footer className="relative">
        <Footer />
      </footer>
    </div>
  );
}
