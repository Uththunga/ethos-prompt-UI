import React from 'react';
import { Button } from '@/components/ui/button';

export const HeaderCTA = () => {
  return (
    <div className="bg-ethos-navy relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/footer-background.jpg"
          alt="CTA Background"
          className="w-full h-full object-cover object-center sm:object-right opacity-20 transition-all duration-300"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <span className="text-white">Ready to transform your </span>
            <span className="text-ethos-purple">AI workflows</span>
          </h2>
          <p className="text-white text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 sm:mb-10 md:mb-12 lg:mb-14 max-w-4xl mx-auto">
            Join thousands of professionals using our solutions to save time, increase productivity, and achieve better results with AI.
          </p>
          <Button variant="cta" size="cta">
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCTA;
