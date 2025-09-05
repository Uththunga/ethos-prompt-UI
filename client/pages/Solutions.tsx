import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export const Solutions = () => {
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main role="main" id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#FEFEFE] to-[#FEFEFE] py-16 md:py-20 lg:py-24 xl:py-28" aria-labelledby="solutions-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <header className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h1 id="solutions-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-poppins leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-ethos-navy-light to-ethos-gray-light bg-clip-text text-transparent">
                Enterprise AI Solutions for
              </span>
              <br />
              <span className="text-ethos-purple">Strategic Growth</span>
            </h1>
          </header>

          {/* AI Workflow Illustration */}
          <div className="relative -mt-12 sm:-mt-16 lg:-mt-20">
            <img
              src={`${baseUrl}assets/images/ai-workflow-illustration.jpg`}
              alt="AI Workflow Illustration showing various AI tools and integrations"
              className="w-full max-w-5xl h-auto mx-auto"
            />
          </div>

          {/* Bottom Text */}
          <div className="text-center -mt-6 sm:-mt-8">
            <p className="text-ethos-gray text-sm sm:text-base lg:text-lg font-normal leading-relaxed tracking-tight max-w-4xl mx-auto">
              Transform your organization with intelligent AI systems designed to drive operational excellence, reduce costs, and accelerate business growth through strategic automation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 xl:py-28 bg-gradient-to-b from-[#FEFEFE] to-[#E6E6E6] overflow-hidden" aria-labelledby="ethosprompt-help-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <header>
                <h2 id="ethosprompt-help-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight tracking-tight">
                  <span className="block text-ethos-gray">How EthosPrompt Drives</span>
                  <span className="text-ethos-purple">Business Transformation</span>
                </h2>
              </header>
              <p className="text-ethos-gray text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                EthosPrompt delivers enterprise-grade AI solutions that transform how organizations operate. We specialize in developing intelligent systems that optimize workflows, reduce operational costs, and accelerate growth through strategic automation. Our comprehensive platform integrates seamlessly with over 600 business applications, including CRMs, communication tools, and enterprise databases. From enhancing customer experience to streamlining complex processes, we provide scalable solutions engineered for sustainable business success.
              </p>

              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <h2 className="text-ethos-gray text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
                  Our Services
                </h2>
                <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-ethos-gray">
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base lg:text-lg font-medium leading-snug">
                      Enterprise AI Solutions
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
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
                  <Button variant="cta" size="cta">
                    Start Your Transformation
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - AI Workflow Diagram */}
            <div className="relative flex justify-center items-center w-full py-8 sm:py-12 lg:py-16">
              <img
                src={`${baseUrl}assets/images/ai-workflow-diagram.svg`}
                alt="AI Agent workflow diagram showing connections and integrations with productivity, financial, and communication tools"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 md:py-20 lg:py-24 xl:py-28 bg-white relative" aria-labelledby="integration-heading">
        <div className="max-w-7xl mx-auto">
          {/* Background Image */}
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src={`${baseUrl}assets/images/integration-background.png`}
              alt="Integration applications background"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
              {/* Left Column - App Logos Image */}
              <div className="flex justify-center items-center">
                <img
                  src={`${baseUrl}assets/images/App Logos.png`}
                  alt="Application logos showing various integrations"
                  className="w-full h-auto"
                />
              </div>

              {/* Right Column - Integration Content */}
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 lg:pl-8 xl:pl-16">
                <header className="space-y-1 sm:space-y-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight text-black">
                    Integrate
                  </h2>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-ethos-purple">
                    600+
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight text-black">
                    Applications
                  </h3>
                </header>
                
                <p className="text-gray-800 text-sm sm:text-base lg:text-lg font-normal leading-relaxed tracking-tight max-w-4xl">
                  EthosPrompt's enterprise platform seamlessly integrates with over 600 business applications, creating unified workflows that eliminate silos and maximize efficiency. From task management to CRM and marketing automation, our intelligent systems orchestrate complex processes with precision and reliability.
                </p>

                <div className="pt-2">
                  <Button variant="cta" size="cta">
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
};
