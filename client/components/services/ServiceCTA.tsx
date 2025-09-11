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
      className="bg-ethos-navy relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32" 
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12"
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
            className="text-white/90 text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-10 sm:mb-12 md:mb-14 lg:mb-16 max-w-4xl mx-auto"
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
                className="group relative bg-gradient-to-r from-ethos-purple to-ethos-purple-dark hover:from-ethos-purple-dark hover:to-ethos-purple-darker text-white px-8 py-6 text-base sm:text-lg font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-ethos-purple/20 border-0"
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
