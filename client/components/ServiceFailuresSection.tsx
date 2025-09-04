import { memo } from 'react';
import { Button } from '@/components/ui/button';

export const ServiceFailuresSection = () => {
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  const aiImagePath = `${baseUrl}assets/images/ai 3 1.png`;
  
  return (
    <section 
      className="w-full py-16 md:py-20 lg:py-24 xl:py-28" 
      style={{ background: '#F2F2F2' }}
      aria-labelledby="service-failures-title"
      role="region"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-10 lg:mb-12 text-left">
          <h2 
            id="service-failures-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.13] tracking-[-0.03em] max-w-7xl"
          >
            <span style={{ color: '#0F1345' }}>
              Eliminate Client Loss and Revenue Decline
            </span>
            <br />
            <span style={{ color: '#0F1345' }}>caused by </span>
            <span style={{ color: '#7409C5' }}>operational inefficiencies</span>
          </h2>
        </div>

        {/* Main Content Area with Cards and Image */}
        <div className="mb-16 md:mb-20 lg:mb-24 xl:mb-28 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,1fr)_auto_minmax(300px,1fr)] gap-8 sm:gap-10 md:gap-12 lg:gap-1 xl:gap-2 items-center justify-items-center min-h-[480px] md:min-h-[450px] lg:min-h-[500px]">
            
            {/* Left Card - Purple */}
            <div className="relative order-2 lg:order-1 group w-full max-w-md xl:max-w-lg mx-auto lg:-ml-6 px-4 sm:px-6 lg:px-0">
              {/* Background Shape */}
              <div 
                className="absolute inset-0 rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] transition-all duration-300 group-hover:scale-[1.02] shadow-lg hover:shadow-xl"
                style={{ background: '#6D6AED' }}
              />
              
              {/* Content */}
              <div className="relative z-10 p-6 sm:p-6 lg:p-8 xl:p-10 min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] flex flex-col justify-center">
                <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight tracking-tight mb-4 sm:mb-6 lg:mb-8 text-center">
                  Our AI solutions excel when you face
                </h3>
                
                <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                  <div className="flex items-start gap-2 sm:gap-3 group/item">
                    <div 
                      className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full flex-shrink-0 mt-1 transition-transform duration-200 group-hover/item:scale-110"
                      style={{ background: '#7900E3' }}
                      role="presentation"
                      aria-hidden="true"
                    />
                    <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed tracking-[-0.03em] transition-opacity duration-200 group-hover/item:opacity-90">
                      High employee turnover and engagement challenges
                    </p>
                  </div>
                  
                  <div className="h-px bg-white/20 my-2 sm:my-3 transition-opacity duration-300 hover:bg-white/40" />
                  
                  <div className="flex items-start gap-3 sm:gap-4 group/item">
                    <div 
                      className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full flex-shrink-0 mt-1.5 transition-transform duration-200 group-hover/item:scale-110"
                      style={{ background: '#7900E3' }}
                      role="presentation"
                      aria-hidden="true"
                    />
                    <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed tracking-[-0.03em] transition-opacity duration-200 group-hover/item:opacity-90">
                      Need to scale operations without increasing overhead
                    </p>
                  </div>
                  
                  <div className="h-px bg-white/20 my-2 sm:my-3 transition-opacity duration-300 hover:bg-white/40" />
                  
                  <div className="flex items-start gap-3 sm:gap-4 group/item">
                    <div 
                      className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full flex-shrink-0 mt-1.5 transition-transform duration-200 group-hover/item:scale-110"
                      style={{ background: '#7900E3' }}
                      role="presentation"
                      aria-hidden="true"
                    />
                    <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed tracking-[-0.03em] transition-opacity duration-200 group-hover/item:opacity-90">
                      Losing clients due to slow response times
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="order-1 lg:order-2 flex justify-center items-center w-full max-w-[400px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[640px] xl:max-w-[720px] mx-auto">
              <img
                src={aiImagePath}
                alt="Professional AI Agent Representative providing 24/7 customer service"
                className="w-full h-auto object-contain"
                loading="lazy"
                role="img"
              />
            </div>

            {/* Right Card - Dark Blue */}
            <div className="relative order-3 lg:order-3 group w-full max-w-md xl:max-w-lg mx-auto lg:-mr-6 px-4 sm:px-6 lg:px-0">
              {/* Background Shape */}
              <div 
                className="absolute inset-0 rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] transition-all duration-300 group-hover:scale-[1.02] shadow-lg hover:shadow-xl"
                style={{ background: '#2E3D88' }}
              />
              
              {/* Content */}
              <div className="relative z-10 p-4 sm:p-6 lg:p-8 xl:p-10 flex items-center justify-center min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]">
                <div className="w-full text-center">
                  <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.46] tracking-[-0.03em] transition-opacity duration-300 group-hover:opacity-95">
                    Our AI solutions provide 24/7 availability, delivering fast, professional, and accurate responses while ensuring every client receives exceptional service
                  </p>
                  
                  {/* Subtle accent line */}
                  <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center">
                    <div className="w-10 sm:w-12 lg:w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <footer className="text-center max-w-7xl mx-auto -mt-8">
          <h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-[1.13] tracking-[-0.03em] mb-8 sm:mb-10 lg:mb-12" 
            style={{ color: '#484848' }}
          >
            Experience our solutions in action
          </h2>
          <div className="flex justify-center">
            <Button
              variant="cta"
              size="cta"
              aria-label="Schedule a demonstration of our AI agent services"
            >
              Schedule a Demonstration
            </Button>
          </div>
        </footer>
        </div>
    </section>
  );
};

// Add display name for better React DevTools experience
ServiceFailuresSection.displayName = 'ServiceFailuresSection';