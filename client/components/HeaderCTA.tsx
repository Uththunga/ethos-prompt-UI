import React from 'react';
import { Button } from '@/components/ui/button';

export const HeaderCTA = () => {
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  const footerBackgroundPath = `${baseUrl}assets/images/footer-background.jpg`;
  
  return (
    <section className="bg-ethos-navy relative" aria-labelledby="cta-heading">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={footerBackgroundPath}
          alt=""
          className="w-full h-full object-cover object-center sm:object-right opacity-20 transition-all duration-300"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="text-center">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <span className="text-white">Ready to accelerate your </span>
            <span className="text-ethos-purple">business growth</span>
          </h2>
          <p className="text-white text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 sm:mb-10 md:mb-12 lg:mb-14 max-w-7xl mx-auto">
            Join forward-thinking organizations leveraging our enterprise AI solutions to drive operational excellence, reduce costs, and achieve measurable business outcomes.
          </p>
          <Button 
            variant="cta" 
            size="cta"
            aria-label="Start your AI transformation journey"
          >
            Begin Your Transformation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeaderCTA;