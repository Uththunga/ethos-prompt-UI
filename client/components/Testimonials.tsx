import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

interface ScrollingRowProps {
  testimonials: Testimonial[];
  direction?: 'left' | 'right';
}

const testimonials = [
    {
      name: "Amanda C.",
      role: "Freelance Consultant",
      rating: 5,
      text: "The best tech decision I've made this year. Ethos Prompt's AI agent handles client messages, follow-ups, and support tickets efficiently, friendly, and reliably."
    },
    {
      name: "Leo R.",
      role: "Drop Shipping Store Owner", 
      rating: 5,
      text: "Since implementing the AI assistant, our response time has improved by 200%. It handles customer inquiries 24/7, allowing us to focus on growing the business."
    },
    {
      name: "Michael K.",
      role: "Creative Agency Director",
      rating: 5,
      text: "Ethos Prompt's AI agent is basically our new virtual receptionist. It never misses a message, always replies with context, and can handle rescheduling. Clients are impressed."
    },
    {
      name: "Ryan G.",
      role: "UX Design Agency",
      rating: 5,
      text: "The automation is seamless. From lead capture to appointment reminders, everything runs on autopilot. My team now has more time to focus on creative work."
    },
    {
      name: "Samantha W.",
      role: "Beauty Studio Manager",
      rating: 5,
      text: "We implemented the AI assistant to automate our service bookings and customer responses. Within a week, the agent was managing 80% of our interactions."
    },
    {
      name: "Jared T.",
      role: "Event Coordinator",
      rating: 5,
      text: "We've been able to cut down on response times and increase client satisfaction without hiring new staff. The ROI has been incredible."
    },
    {
      name: "Steven B.",
      role: "Consultancy Firm",
      rating: 5,
      text: "Clients have complimented us on how responsive we are now. Little do they know, it's the AI agent doing most of the talking — and it does it better than we could."
    },
    {
      name: "Lina J.",
      role: "HR & Recruitment Services",
      rating: 5,
      text: "Reliable, intelligent, and constantly improving. The AI agent has become a key part of how we run our business. Highly recommended for scaling smart."
    },
    {
      name: "Chris D.",
      role: "Digital Marketing Agency",
      rating: 5,
      text: "Fast, smart, and accurate. Just what we needed for our growing client base."
    },
    {
      name: "Fatima A.",
      role: "Fitness Coach",
      rating: 5,
      text: "No more missed leads or late replies. This has been a complete game changer for my business."
    },
    {
      name: "Priya M.",
      role: "Online Course Creator",
      rating: 5,
      text: "Set it and forget it. The AI just works seamlessly in the background while I focus on content creation."
    }
  ];

const StarIcon = () => (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 0L23.2658 13.1287H37.0701L25.9022 21.2426L30.1679 34.3713L19 26.2574L7.83208 34.3713L12.0978 21.2426L0.929926 13.1287H14.7342L19 0Z" fill="#7409C5"/>
    </svg>
  );

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <div
    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px] xl:min-h-[280px] bg-gradient-to-b from-gray-50 to-gray-100 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-4 sm:p-5 md:p-6 lg:p-7 mx-2 sm:mx-3 lg:mx-4 flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus-within:scale-[1.02]"
    style={{
      boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25), inset -30px -30px 50px rgba(255, 255, 255, 0.7), inset 30px 30px 50px rgba(0, 39, 80, 0.05)",
      transform: 'translate3d(0, 0, 0)', // Hardware acceleration
      backfaceVisibility: 'hidden', // Performance optimization
    }}
    role="listitem"
    aria-label={`Testimonial from ${testimonial.name}`}
    tabIndex={0}
  >
    <div className="w-full h-full relative flex flex-col">
      <blockquote className="text-xs sm:text-sm md:text-base lg:text-lg bg-gradient-to-r from-ethos-gray to-ethos-gray-lighter bg-clip-text text-transparent leading-relaxed flex-1 mb-3 sm:mb-4 md:mb-6 font-normal">
        "{testimonial.text}"
      </blockquote>
      <footer className="flex items-center justify-between pt-2 sm:pt-3 border-t border-gray-100">
        <div className="flex items-center">
          <div 
            className="w-1 h-8 sm:h-10 mr-2 sm:mr-3 rounded-full bg-gradient-to-b from-[#D47CD9] to-ethos-purple"
          />
          <div>
            <cite className="text-xs sm:text-sm md:text-base font-semibold bg-gradient-to-r from-ethos-purple-gradient-start to-ethos-purple-gradient-end bg-clip-text text-transparent not-italic">
              {testimonial.name}
            </cite>
            <p className="text-xs sm:text-xs md:text-sm bg-gradient-to-r from-ethos-gray to-ethos-gray-lighter bg-clip-text text-transparent mt-0.5 sm:mt-1">
              {testimonial.role}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-ethos-purple/5 to-ethos-purple-light/5 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full">
          <StarIcon />
          <span className="text-xs sm:text-sm md:text-base font-semibold text-ethos-purple">
            {testimonial.rating}
          </span>
        </div>
      </footer>
    </div>
  </div>
);



const ScrollingRow = ({ testimonials, direction = 'left' }: ScrollingRowProps) => {
  const controls = useAnimationControls();
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth;
      setWidth(containerWidth / 2);
    }
  }, [testimonials]);

  useEffect(() => {
    if (width === 0 || prefersReducedMotion) return;
    if (paused) {
      controls.stop();
      return;
    }

    const from = direction === 'left' ? 0 : -width;
    const to = direction === 'left' ? -width : 0;

    controls.set({ x: from });
    const animationPromise = controls.start({
      x: to,
      transition: {
        duration: 40,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    });

    return () => {
      controls.stop();
      animationPromise.then(() => {}).catch(() => {}); // Handle potential promise rejection
    };
  }, [width, direction, paused, controls, prefersReducedMotion]);

  // Enhanced touch and interaction handlers for mobile
  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);
  const handleFocus = () => setPaused(true);
  const handleBlur = () => setPaused(false);
  
  // Optimized touch event handlers for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent scroll interference
    setPaused(true);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    setPaused(false);
  };
  
  // Optimized click handler
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setPaused((p) => !p);
  };

  return (
    <motion.div
      className="flex cursor-pointer focus:outline-none focus:ring-2 focus:ring-ethos-purple/20 focus:ring-offset-2 rounded-lg touch-pan-x"
      ref={containerRef}
      animate={controls}
      style={{
        willChange: prefersReducedMotion ? 'auto' : 'transform',
        transform: 'translate3d(0, 0, 0)', // Hardware acceleration
        backfaceVisibility: 'hidden', // Performance optimization
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      role="region"
      aria-label={`Testimonials row scrolling ${direction}. ${prefersReducedMotion ? 'Animation disabled for accessibility.' : 'Click or touch to pause/resume animation.'}`}
      tabIndex={0}
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <TestimonialCard key={`${direction}-${index}`} testimonial={testimonial} />
      ))}
    </motion.div>
  );
};

export const Testimonials = () => {
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 8);
  const row3 = testimonials.slice(8, 11);

  return (
    <section 
      className="w-full relative py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 overflow-hidden min-h-screen lg:min-h-[85vh] xl:min-h-[90vh] lg:flex lg:flex-col lg:justify-center"
      style={{
        background: 'linear-gradient(180deg, #FFF 60.69%, #DDD 100%)',
      }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 z-10">
          <h2 id="testimonials-heading" className="font-medium text-center max-w-7xl mx-auto">
            <span 
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium leading-tight tracking-tight text-ethos-navy"
            >
              Who uses it became
            </span>
            <span 
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium leading-tight tracking-tight text-ethos-purple"
            >
              a fan of it
            </span>
          </h2>
        </header>

        <div className="relative w-full flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-8" style={{ transform: 'translate3d(0, 0, 0)' }} role="list" aria-label="Customer testimonials">
          <ScrollingRow testimonials={row1} direction="left" />
          <ScrollingRow testimonials={row2} direction="right" />
          <ScrollingRow testimonials={row3} direction="left" />
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-14 lg:mt-18 xl:mt-20">
          <Button variant="cta" size="cta" aria-label="Send feedback about our service">
            Send Feedback
          </Button>
        </div>
      </div>
    </section>
  );
};
