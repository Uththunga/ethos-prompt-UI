import React, { memo } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ui/service-card';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const mainServices = [
  {
    title: 'Smart Business Assistant',
    description: '• 24/7 AI-powered support for customer service and sales operations\n• Handles daily business operations like a skilled team member\n• Continuously learns and adapts to help your business grow',
    href: '/custom-ai-solutions'
  },
  {
    title: 'Connect Everything',
    description: '• Seamlessly integrates all your business tools and platforms\n• Automates data flow between email, calendar, and CRM systems\n• Ensures information reaches the right place at the right time',
    href: '/system-integration'
  },
  {
    title: 'Intelligent Applications',
    description: '• AI-powered web and mobile apps that learn from user interactions\n• Personalized experiences through machine learning\n• Continuously improves with real-time data and analytics',
    href: '/intelligent-applications'
  },
  {
    title: 'Modern Business Upgrade',
    description: '• Transforms traditional operations with smart automation\n• Creates engaging digital experiences for customers\n• Future-proofs your business with cutting-edge technology',
    href: '/digital-transformation'
  }
];

const featuredServices = [
  {
    title: 'AI Prompt Optimization',
    description: '• Advanced systems for refining AI interactions\n• Ensures consistent, high-quality AI responses\n• Optimizes prompts for better performance and accuracy',
    className: 'bg-gradient-to-br from-ethos-purple/10 to-ethos-navy/10'
  }
];

const integrationCapabilities = [
  'Connect with 600+ business applications',
  'Create unified workflows',
  'Eliminate silos',
  'Maximize efficiency',
  'Orchestrate complex processes with precision',
  'Enable reliable automation'
];

const keyBenefits = [
  {
    category: 'Operational Excellence',
    items: [
      'Streamlined workflows',
      'Reduced manual tasks',
      'Improved efficiency'
    ]
  },
  {
    category: 'Cost Reduction',
    items: [
      'Automated processes',
      'Optimized resource usage',
      'Reduced operational overhead'
    ]
  },
  {
    category: 'Strategic Growth',
    items: [
      'Data-driven decisions',
      'Scalable solutions',
      'Future-ready infrastructure'
    ]
  },
  {
    category: 'Customer Experience',
    items: [
      'Personalized interactions',
      'Faster response times'
    ]
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

      <section className="w-full pt-0 -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 pb-4 sm:pb-6 md:pb-10 lg:pb-12" style={{ background: 'linear-gradient(180deg, #FFF 37.11%, #E8E8E8 100%)' }} aria-labelledby="ethosprompt-help-heading">
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
            <div className="relative flex justify-center items-center w-full max-w-4xl mx-auto -mt-8 sm:mt-0 pt-0 pb-1 sm:py-10 md:py-12 lg:py-16 order-1 lg:order-2">
              <img
                src="/assets/images/botsolution.png"
                alt="AI Agent workflow diagram showing connections and integrations with productivity, financial, and communication tools"
                className="w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Services Section */}
          <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 px-2 sm:px-4 relative" aria-labelledby="services-heading">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none" />
            
            <motion.header 
              className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl xl:text-6xl font-medium leading-tight tracking-tight">
                <span className="text-ethos-navy inline-block">
                  Our Core
                </span>{' '}
                <span className="text-ethos-purple inline-block">
                  Services
                </span>
              </h3>
            </motion.header>

            {/* Main Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto relative mb-12 sm:mb-16">
              {mainServices.map((service, index) => (
                <motion.div 
                  key={index}
                  className="w-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeOut"
                  }}
                >
                  <div className="group h-full">
                    <ServiceCard 
                      {...service}
                      className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg h-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Featured Services - AI Prompt Optimization & Continuous Support */}
            <div className="mb-8 sm:mb-12 md:mb-16">
              <div className="flex justify-center items-center w-full px-4">
                {featuredServices.map((service, index) => (
                  <motion.div 
                    key={index}
                    className="w-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5,
                      delay: 0.1 * index,
                      ease: "easeOut"
                    }}
                  >
                    <div className={`group rounded-2xl p-6 sm:p-8 ${service.className} border border-ethos-purple/20 shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-2xl mx-auto`}>
                      <h4 className="text-xl sm:text-2xl font-semibold mb-3 text-ethos-navy">{service.title}</h4>
                      <p className="text-ethos-gray text-sm sm:text-base whitespace-pre-line">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Integration Capabilities Section */}
            <motion.section 
              className="mt-16 sm:mt-20 md:mt-24 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-medium text-ethos-navy text-center mb-6 sm:mb-8">
                Integration Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {integrationCapabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 text-ethos-purple mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{capability}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Key Benefits Section */}
            <motion.section 
              className="mt-20 sm:mt-24 md:mt-28 max-w-7xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-medium text-ethos-navy text-center mb-8 sm:mb-12">
                Key Benefits
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <h5 className="text-xl font-semibold text-ethos-purple mb-4">{benefit.category}</h5>
                    <ul className="space-y-2">
                      {benefit.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-ethos-purple mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>
            
            {/* CTA Button */}
            <motion.div 
              className="col-span-full flex justify-center mt-16 sm:mt-20 md:mt-24 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                variant="cta" 
                size="cta" 
                type="button" 
                className="group relative overflow-hidden w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                aria-label="Start your transformation with EthosPrompt"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-ethos-purple to-ethos-purple-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </motion.div>
          </section>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white relative overflow-hidden" aria-labelledby="integration-heading">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Background Image with Floating Animation */}
          <motion.div 
            className="absolute inset-0 flex justify-center items-center"
            initial={{ y: 0 }}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.img
              src={withBase("assets/images/integration-background.png")}
              alt=""
              role="presentation"
              aria-hidden="true"
              className="w-full h-auto object-contain"
              loading="lazy"
              decoding="async"
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

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
