import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 lg:px-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-ethos-navy mb-6">
            {title}
          </h1>
          <p className="text-xl lg:text-2xl text-ethos-gray mb-8 leading-relaxed">
            {description}
          </p>
          <div className="space-y-4">
            <p className="text-lg text-ethos-gray-light">
              This page is coming soon! Continue prompting to help us build out this section.
            </p>
            <button 
              onClick={() => window.history.back()}
              className="bg-ethos-purple-light hover:bg-ethos-purple transition-colors duration-300 text-white px-8 py-3 rounded-full text-lg font-normal"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};
