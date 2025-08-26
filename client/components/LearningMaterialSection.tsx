import React from 'react';
import { Button } from '@/components/ui/button';

interface LearningMaterialSectionProps {
  baseUrl: string;
}

export const LearningMaterialSection: React.FC<LearningMaterialSectionProps> = ({ 
  baseUrl
}) => {
  const backgroundImagePath = `${baseUrl}assets/images/footer-background.jpg`;
  
  return (
    <section className="bg-ethos-navy relative" aria-labelledby="learning-material-heading">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImagePath}
          alt=""
          className="w-full h-full object-cover object-center sm:object-right opacity-20 transition-all duration-300"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="text-center">
          {/* Content */}
          <div className="space-y-4 md:space-y-5 lg:space-y-6 max-w-2xl mx-auto">
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-tight tracking-tight">
                Are you keen to learn?
              </h4>
              
              <h2 id="learning-material-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-r from-white to-[#717493] bg-clip-text text-transparent">
                Download the free learning material
              </h2>
            </div>
            
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-normal">
              This learning material is for beginners who are keen to learn more, with examples of what we have discussed.
            </p>
            
            <Button variant="cta" className="px-6 py-2 text-sm sm:text-base">
              Download Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};