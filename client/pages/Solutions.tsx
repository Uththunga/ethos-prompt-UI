import React, { memo } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
 
 export const Solutions = memo(function Solutions() {
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || "/";
  // Normalize paths with the Vite base URL (prevents double slashes and missing separators)
  const withBase = (path: string) => {
    const base = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    return `${base}${path.replace(/^\/+/, "")}`;
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

      <section className="py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-[#FEFEFE] to-[#E6E6E6] overflow-hidden" aria-labelledby="ethosprompt-help-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <header className="space-y-2">
                <h2 id="ethosprompt-help-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5.5xl font-medium leading-tight tracking-[-0.02em]">
                  <span className="block text-ethos-gray">How EthosPrompt Drives</span>
                  <span className="text-ethos-purple">Business Transformation</span>
                </h2>
              </header>
              <p className="text-ethos-gray text-sm sm:text-base lg:text-lg font-light leading-relaxed tracking-normal">
                EthosPrompt delivers enterprise-grade AI solutions that transform how organizations operate. We specialize in developing intelligent systems that optimize workflows, reduce operational costs, and accelerate growth through strategic automation. Our comprehensive platform integrates seamlessly with over 600 business applications, including CRMs, communication tools, and enterprise databases. From enhancing customer experience to streamlining complex processes, we provide scalable solutions engineered for sustainable business success.
              </p>

              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <h2 className="text-ethos-gray text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
                  Our Services
                </h2>
                <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-ethos-gray">
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg lg:text-xl font-medium leading-snug tracking-normal">
                      Enterprise AI Solutions
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed tracking-normal">
                      Tailored AI systems designed for customer service excellence, sales optimization, and operational automation across your organization.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base lg:text-lg font-medium leading-snug">
                      System Integration & Automation
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                      Seamlessly connect AI to your enterprise applications—email systems, CRMs, calendars, and databases—for comprehensive workflow automation.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base lg:text-lg font-medium leading-snug">
                      AI Prompt Optimization Platform
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                      Advanced management systems for organizing and optimizing AI interactions, ensuring consistent, high-quality results across your organization.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base lg:text-lg font-medium leading-snug">
                      Intelligent Application Development
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                      Dynamic web and mobile applications that adapt intelligently to user behavior, delivering personalized experiences and real-time interactions.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base lg:text-lg font-medium leading-snug">
                      Digital Transformation Services
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                      Comprehensive digital modernization including enhanced user experiences, intelligent automation, and optimized customer engagement systems.
                    </p>
                  </div>
                </div>

                {/* Get Started Button */}
                <div className="pt-2">
                  <Button variant="cta" size="cta" type="button" aria-label="Start your transformation with EthosPrompt">
                    Start Your Transformation
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - AI Workflow Diagram */}
            <div className="relative flex justify-center items-center w-full py-8 sm:py-12 lg:py-16">
              <img
                src={withBase("assets/images/ai-workflow-diagram.svg")}
                alt="AI Agent workflow diagram showing connections and integrations with productivity, financial, and communication tools"
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 md:py-20 lg:py-24 xl:py-28 bg-white relative" aria-labelledby="integration-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
              {/* Left Column - App Logos Image */}
              <div className="flex justify-center items-center">
                <img
                  src={withBase("assets/images/App Logos.png")}
                  alt="Application logos showing various integrations"
                  className="w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Right Column - Integration Content */}
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 lg:pl-8 xl:pl-16">
                <header className="space-y-2 sm:space-y-3">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight tracking-[-0.02em] text-black">
                    Integrate
                  </h2>
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-[-0.03em] text-ethos-purple">
                    600+
                  </div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight tracking-[-0.02em] text-black">
                    Applications
                  </h3>
                </header>
                
                <p className="text-gray-800 text-base sm:text-lg lg:text-xl font-light leading-relaxed tracking-normal max-w-3xl">
                  EthosPrompt's enterprise platform seamlessly integrates with over 600 business applications, creating unified workflows that eliminate silos and maximize efficiency. From task management to CRM and marketing automation, our intelligent systems orchestrate complex processes with precision and reliability.
                </p>

                <div className="pt-2">
                  <Button variant="cta" size="cta" type="button" aria-label="Begin integration with EthosPrompt">
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
