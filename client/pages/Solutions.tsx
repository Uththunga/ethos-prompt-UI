import React, { memo } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ui/service-card';
const services = [
  {
    title: 'Enterprise AI Solutions',
    description: 'Tailored AI systems for customer service, sales optimization, and operational automation across your organization.'
  },
  {
    title: 'System Integration & Automation',
    description: 'Seamlessly connect AI with your enterprise apps—CRMs, calendars, and databases—for comprehensive workflow automation.'
  },
  {
    title: 'AI Prompt Optimization',
    description: 'Advanced systems for organizing and optimizing AI interactions to ensure consistent, high-quality results every time.'
  },
  {
    title: 'Intelligent Applications',
    description: 'Dynamic web and mobile applications that intelligently adapt to user behavior for superior personalized experiences.'
  },
  {
    title: 'Digital Transformation',
    description: 'Complete modernization including enhanced UX, intelligent automation, and optimized customer engagement strategies.'
  },
  {
    title: 'Continuous Support',
    description: 'Dedicated ongoing optimization and support services to ensure your AI solutions continuously evolve with your needs.'
  }
];

export const Solutions = memo(function Solutions() {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const withBase = (path: string) => {
    const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    return `${base}${path.replace(/^\/+/, '')}`;
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main role="main" id="main-content" className="font-sans antialiased">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#FEFEFE] to-[#FEFEFE] py-16 md:py-20 lg:py-24 xl:py-28" aria-labelledby="solutions-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <header className="text-center">
            <h1 id="solutions-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7.5xl font-semibold font-poppins leading-tight tracking-[-0.02em]">
              <span className="bg-gradient-to-r from-ethos-navy-light to-ethos-gray-light bg-clip-text text-transparent">
                Enterprise AI Solutions for
              </span>
              <br />
              <span className="text-ethos-purple">Strategic Growth</span>
            </h1>
          </header>

          {/* Combined Image and Text Container */}
          <div className="relative -mt-0.5">
            {/* AI Workflow Illustration */}
            <div className="relative">
              <img
                src={withBase("assets/images/ai-workflow-illustration.jpg")}
                alt="AI Workflow Illustration showing various AI tools and integrations"
                className="w-full max-w-5xl h-auto mx-auto"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            
            {/* Bottom Text */}
            <div className="relative mt-0.5">
              <p className="text-ethos-gray text-base sm:text-lg lg:text-xl font-light leading-relaxed tracking-normal max-w-3xl mx-auto">
                Transform your organization with intelligent AI systems designed to drive operational excellence, reduce costs, and accelerate business growth through strategic automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pt-6 sm:pt-8 md:pt-12 lg:pt-16 pb-4 sm:pb-6 md:pb-10 lg:pb-12" style={{ background: 'linear-gradient(180deg, #FFF 37.11%, #E8E8E8 100%)' }} aria-labelledby="ethosprompt-help-heading">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-14 md:mb-16 lg:mb-20">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center w-full space-y-3 sm:space-y-4 lg:space-y-5 order-2 lg:order-1">
              <header className="space-y-2">
                <h2 id="ethosprompt-help-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5.5xl font-medium leading-tight tracking-[-0.02em]">
                  <span className="block text-ethos-gray">How EthosPrompt Drives</span>
                  <span className="text-ethos-purple">Business Transformation</span>
                </h2>
              </header>
              <p className="text-ethos-gray text-sm sm:text-base lg:text-lg font-light leading-relaxed tracking-normal">
                EthosPrompt delivers enterprise-grade AI solutions that transform how organizations operate. We specialize in developing intelligent systems that optimize workflows, reduce operational costs, and accelerate growth through strategic automation. Our comprehensive platform integrates seamlessly with over 600 business applications, including CRMs, communication tools, and enterprise databases. From enhancing customer experience to streamlining complex processes, we provide scalable solutions engineered for sustainable business success.
              </p>
            </div>

            {/* Right Side - AI Workflow Diagram */}
            <div className="relative flex justify-center items-center w-full py-6 sm:py-8 md:py-10 lg:py-12 order-1 lg:order-2">
              <img
                src={withBase("assets/images/ai-workflow-diagram.svg")}
                alt="AI Agent workflow diagram showing connections and integrations with productivity, financial, and communication tools"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Services Section */}
          <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 px-2 sm:px-4" aria-labelledby="services-heading">
            <header className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <h3 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl xl:text-6xl font-medium leading-tight tracking-tight">
                <span className="text-ethos-navy">Our</span>{' '}
                <span className="text-ethos-purple">Services</span>
              </h3>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="w-full">
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="col-span-full flex justify-center mt-8 sm:mt-10 md:mt-12 px-4">
              <Button 
                variant="cta" 
                size="cta" 
                type="button" 
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
                aria-label="Start your transformation with EthosPrompt"
              >
                Start Your Transformation
              </Button>
            </div>
          </section>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white relative overflow-hidden" aria-labelledby="integration-heading">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Background Image */}
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src={withBase("assets/images/integration-background.png")}
              alt=""
              role="presentation"
              aria-hidden="true"
              className="w-full h-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
              {/* Left Column - App Logos Image */}
              <div className="flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-0">
                <img
                  src={withBase("assets/images/App Logos.png")}
                  alt="Application logos showing various integrations"
                  className="w-full h-auto max-w-[500px] lg:max-w-none"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Right Column - Integration Content */}
              <div className="space-y-3 sm:space-y-4 lg:space-y-5 px-4 sm:px-6 md:px-8 lg:pl-8 xl:pl-12 2xl:pl-16 mt-6 sm:mt-8 lg:mt-0">
                <header className="space-y-1 sm:space-y-2 md:space-y-3">
                  <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl xl:text-7xl font-medium leading-tight tracking-[-0.02em] text-black">
                    Integrate
                  </h2>
                  <div className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7.5xl xl:text-8xl font-bold leading-none tracking-[-0.03em] text-ethos-purple">
                    600+
                  </div>
                  <h3 className="text-3xl xs:text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl xl:text-7xl font-medium leading-tight tracking-[-0.02em] text-black">
                    Applications
                  </h3>
                </header>
                
                <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed tracking-normal max-w-3xl">
                  EthosPrompt's enterprise platform seamlessly integrates with over 600 business applications, creating unified workflows that eliminate silos and maximize efficiency. From task management to CRM and marketing automation, our intelligent systems orchestrate complex processes with precision and reliability.
                </p>

                <div className="pt-2 sm:pt-3 md:pt-4">
                  <Button 
                    variant="cta" 
                    size="cta" 
                    type="button" 
                    className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base"
                    aria-label="Begin integration with EthosPrompt"
                  >
                    Begin Integration
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
});
