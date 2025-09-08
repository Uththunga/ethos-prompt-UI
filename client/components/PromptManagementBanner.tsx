import { Button } from '@/components/ui/button';
import ShinyText from './ShinyText';

export const PromptManagementBanner = () => {
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  const bannerBackgroundPath = `${baseUrl}assets/images/banner-background.jpg`;
  
  return (
    <section className="w-full relative overflow-hidden bg-white z-50" aria-labelledby="prompt-management-heading" style={{ position: 'relative' }}>
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
            <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8">
              {/* Text Content - Left Side */}
              <div className="lg:w-[55%] text-left flex flex-col justify-between">
                {/* Section Subheader */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-tight tracking-tight text-white mb-4 sm:mb-6 lg:mb-8">
                  Moreover we provide
                </p>

                {/* Main Header */}
                <h2 id="prompt-management-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight bg-gradient-to-r from-white to-[#717493] bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10">
                  <ShinyText className="bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500" speedInMs={10000}>AI-powered system for managing prompts</ShinyText>
                </h2>

                {/* Description */}
                <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 lg:mb-12">
                  (text instructions for AI models) that includes RAG (Retrieval-Augmented Generation) capabilities for document-based context enhancement
                </p>

                {/* CTA Button */}
                <div>
                  <Button variant="cta" size="cta" aria-label="View Prompt Library">
                    Prompt Library
                  </Button>
                </div>
              </div>

              {/* Image - Right Side */}
              <div className="hidden lg:flex items-end justify-end mt-8 lg:mt-0 relative z-[9999] pt-48 pr-0 ml-auto lg:w-[50%]">
                <div className="relative w-full max-w-[1000px] h-full flex justify-end mr-[-100px]">
                  <img
                    src={`${baseUrl}assets/images/promptmole.png`}
                    alt="AI Prompt Management Illustration"
                    className="w-full h-auto object-contain object-bottom"
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      bottom: '-120px',
                      maxHeight: '240%',
                      width: '100%',
                      objectFit: 'contain',
                      objectPosition: 'bottom',
                      zIndex: 100
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};