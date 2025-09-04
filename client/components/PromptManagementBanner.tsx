import { Button } from '@/components/ui/button';

export const PromptManagementBanner = () => {
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  const bannerBackgroundPath = `${baseUrl}assets/images/banner-background.jpg`;
  
  return (
    <section className="w-full relative overflow-hidden bg-white" aria-labelledby="prompt-management-heading">
      {/* Main Banner Container */}
      <div className="relative">
        {/* Background Section with Navy */}
        <div className="bg-ethos-navy relative">
          {/* Banner Background Image - positioned behind content */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={bannerBackgroundPath}
              alt=""
              className="w-full h-full object-cover object-center sm:object-right transition-all duration-300"
              aria-hidden="true"
            />
          </div>

          {/* Content Section */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
            <div className="text-left max-w-7xl">
              {/* Section Subheader */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-tight tracking-tight text-white mb-4 sm:mb-6 lg:mb-8">
                Moreover, we provide
              </p>

              {/* Main Header */}
              <h2 id="prompt-management-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight bg-gradient-to-r from-white to-[#717493] bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10">
                AI-powered system for managing prompts
              </h2>

              {/* Description */}
              <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed max-w-7xl mb-8 sm:mb-10 lg:mb-12">
                (text instructions for AI models) that includes RAG (Retrieval-Augmented Generation) capabilities for document-based context enhancement
              </p>

              {/* CTA Button */}
              <div>
                <Button variant="cta" size="cta" aria-label="View Prompt Library">
                  Prompt Library
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};