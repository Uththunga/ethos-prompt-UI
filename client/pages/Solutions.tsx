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
            <h1 id="solutions-heading" className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-ethos-navy-light to-ethos-gray-light bg-clip-text text-transparent">
                Solutions for a smarter
              </span>
              <br />
              <span className="text-ethos-purple">Business</span>
            </h1>
          </header>

          {/* AI Workflow Illustration */}
          <div className="relative mb-6 lg:mb-8">
            <img
              src={`${baseUrl}assets/images/ai-workflow-illustration.jpg`}
              alt="AI Workflow Illustration showing various AI tools and integrations"
              className="w-full h-auto mx-auto"
            />
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <p className="text-ethos-gray text-sm sm:text-base lg:text-lg font-normal leading-relaxed tracking-tight max-w-4xl mx-auto">
              Unlock the full potential of AI models by learning how to craft effective prompts. Turn your ideas into powerful results.
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
                  <span className="block text-ethos-gray">How EthosPrompt</span>
                  <span className="text-ethos-purple">can help your Business</span>
                </h2>
              </header>
              <p className="text-ethos-gray text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                At EthosPrompt, we make artificial intelligence simple and useful for businesses. Our job is to help you save time, cut costs, and grow faster by creating smart tools that work for you. We build AI agents, automation systems, and intelligent apps that connect with over 600 popular business tools like CRMs, emails, and databases. Whether you want to improve customer service, speed up daily tasks, or upgrade your website, we provide solutions that fit your goals and scale as you grow.
              </p>

              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                <h2 className="text-ethos-gray text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
                  Our Services
                </h2>
                <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-ethos-gray">
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base lg:text-lg font-medium leading-snug">
                      Custom AI Agents
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                      AI assistants built for your business—helping with customer support, sales, learning, and more.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base lg:text-lg font-medium leading-snug">
                      Automation & App Connections
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                      Connect AI to your everyday apps (emails, CRMs, calendars, etc.) to handle routine tasks automatically.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base lg:text-lg font-medium leading-snug">
                      Prompt Management
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                      Simple systems to organize and manage your AI prompts—so your team gets better, faster results.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base lg:text-lg font-medium leading-snug">
                      AI Web & Mobile Apps
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                      Smart websites and mobile apps that personalize content, create designs, and interact with users in real time.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base lg:text-lg font-medium leading-snug">
                      Website Upgrades & Automation
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                      Give your website a new look, better user experience, and built-in automation to save time and improve customer satisfaction.
                    </p>
                  </div>
                </div>

                {/* Get Started Button */}
                <div className="pt-2">
                  <Button variant="cta" size="cta">
                    Get started
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - AI Workflow Diagram */}
            <div className="relative flex justify-center items-start pt-4 sm:pt-6 lg:pt-8">
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
                  EthosPrompt agents can seamlessly integrate with over 600+ applications to fully automate and streamline your workflows. From task management to CRM and marketing tools, everything works together effortlessly triggered by a single click.
                </p>

                <div className="pt-2">
                  <Button variant="cta" size="cta">
                    Get Started Now
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
