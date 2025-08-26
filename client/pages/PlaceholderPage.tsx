import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8" role="main" id="main-content">
        <section className="text-center max-w-4xl mx-auto" aria-labelledby="page-heading">
          <h1 id="page-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-ethos-navy mb-4 lg:mb-6">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-ethos-gray mb-6 lg:mb-8 leading-relaxed">
            {description}
          </p>
          <div className="space-y-4 lg:space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-ethos-gray-light">
              This page is coming soon! Continue prompting to help us build out this section.
            </p>
            <Button 
              onClick={() => window.history.back()}
              variant="cta" 
              size="cta"
              aria-label="Go back to previous page"
            >
              Go Back
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};
