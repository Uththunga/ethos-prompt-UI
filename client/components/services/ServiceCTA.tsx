import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ShinyText from '../ShinyText';

interface ServiceCTAProps {
  titlePart1: string;
  titlePart2: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

export const ServiceCTA: React.FC<ServiceCTAProps> = ({
  titlePart1,
  titlePart2,
  description,
  buttonText = 'Schedule a Free Consultation',
  buttonLink = '/contact?source=general',
}) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="bg-ethos-navy relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28"
      aria-labelledby="service-cta-heading"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-ethos-navy to-ethos-navy/80 mix-blend-multiply" aria-hidden="true" />
        <img
          src="/assets/images/footer-background.jpg"
          alt=""
          className="w-full h-full object-cover object-center sm:object-right opacity-20 transition-all duration-500 ease-in-out transform hover:scale-105"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 
            id="service-cta-heading" 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 lg:mb-10"
          >
            <motion.span 
              className="text-white block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              {titlePart1}
            </motion.span>
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <ShinyText 
                className="bg-gradient-to-r from-ethos-purple-light to-ethos-purple-light" 
                speedInMs={10000}
              >
                {titlePart2}
              </ShinyText>
            </motion.span>
          </h2>
          
          <motion.p 
            className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed mb-8 sm:mb-10 md:mb-12 lg:mb-14 max-w-4xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            {description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link to={buttonLink}>
              <Button
                className="group relative bg-gradient-to-r from-ethos-purple to-ethos-purple-dark hover:from-ethos-purple-dark hover:to-ethos-purple-darker text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-ethos-purple/20 border-0 min-h-[48px] min-w-[200px] touch-manipulation"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  {buttonText}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-ethos-purple to-ethos-purple-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
