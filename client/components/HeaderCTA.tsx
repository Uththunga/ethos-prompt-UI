import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ShinyText from './ShinyText';

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export const HeaderCTA = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  const footerBackgroundPath = `${baseUrl}assets/images/footer-background.jpg`;
  
  // Handle mount for animations
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    scrollToContact();
  }, []);
  
  return (
    <section 
      className="bg-ethos-navy relative overflow-hidden" 
      aria-labelledby="cta-heading"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-ethos-navy to-ethos-navy/80 mix-blend-multiply" aria-hidden="true" />
        <img
          src={footerBackgroundPath}
          alt=""
          className="w-full h-full object-cover object-center sm:object-right opacity-20 transition-all duration-500 ease-in-out transform hover:scale-105"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 
            id="cta-heading" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          >
            <motion.div className="block">
              <motion.span 
                className="text-white block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              >
                Ready to accelerate your
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
                <ShinyText 
                  className="bg-gradient-to-r from-ethos-purple-light to-ethos-purple-light" 
                  speedInMs={10000}
                >
                  business growth?
                </ShinyText>
              </motion.span>
            </motion.div>
          </h2>
          
          <motion.p 
            className="text-white/90 text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-10 sm:mb-12 md:mb-14 lg:mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            Join forward-thinking organizations leveraging our enterprise AI solutions to drive operational excellence, reduce costs, and achieve measurable business outcomes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="cta" 
              size="cta"
              onClick={handleClick}
              className="group relative overflow-hidden px-8 py-6 text-lg font-medium tracking-wide transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              aria-label="Get started with AI workflow transformation"
            >
              <span className="relative z-10 flex items-center">
                Begin Your Transformation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-ethos-purple to-ethos-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </motion.div>
          
          <motion.p 
            className="text-white/70 text-sm sm:text-base mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          >

          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};