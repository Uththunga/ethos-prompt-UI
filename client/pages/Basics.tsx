import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LearningMaterialSection } from "@/components/LearningMaterialSection";

export const Basics = () => {
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main role="main" id="main-content">
        <section className="bg-gradient-to-b from-white via-white to-[#E8E8E8] relative overflow-hidden py-4 md:py-6 lg:py-8" aria-labelledby="hero-heading">
          {/* Background Image - Positioned more to the right */}
          <div className="absolute right-[-5%] lg:right-[-10%] top-16 md:top-20 w-full h-full pointer-events-none">
            <img
              src={`${baseUrl}assets/images/basics/Group 287.png`}
              alt=""
              className="w-full h-full object-contain object-right lg:object-center"
              style={{ transform: 'scale(1.4)' }}
              aria-hidden="true"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 items-center min-h-[150px] sm:min-h-[180px] lg:min-h-[220px]">
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-3 md:space-y-4 lg:space-y-5">
                {/* Title */}
                <header>
                  <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-poppins leading-tight tracking-tight">
                    <span className="block bg-gradient-to-r from-ethos-navy-light to-ethos-gray-light bg-clip-text text-transparent">
                      Enterprise AI
                    </span>
                    <span className="block text-ethos-purple">
                      Fundamentals
                    </span>
                  </h1>
                </header>

                {/* Description */}
                <div>
                  <p className="text-ethos-gray text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight">
                    Master the foundational principles of enterprise AI systems and large language models. Understand how strategic prompt engineering drives business value through intelligent automation and optimized AI communication.
                  </p>
                </div>

                {/* Download Button */}
                <Button 
                  className="bg-ethos-purple-light hover:bg-ethos-purple text-white px-4 sm:px-6 md:px-8 lg:px-10 py-2 rounded-[28px] sm:rounded-[32px] lg:rounded-[40px] text-sm sm:text-sm md:text-base lg:text-base font-normal h-9 sm:h-10 md:h-11 lg:h-12 w-full max-w-[280px]"
                  aria-label="Download learning materials about AI prompting"
                >
                  Access Resources
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* From AI to LLM Section */}
        <section className="bg-gradient-to-b from-white via-white to-[#E8E8E8] py-16 md:py-20 lg:py-24 xl:py-28" aria-labelledby="ai-to-llm-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <header className="text-center mb-12 lg:mb-16">
              <h2 id="ai-to-llm-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight tracking-tight mb-6 lg:mb-8">
                <span className="text-ethos-gray">Understanding </span>
                <span className="text-ethos-purple">Enterprise AI Architecture</span>
              </h2>
              
              <p className="text-ethos-gray text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed tracking-tight max-w-6xl mx-auto">
                Enterprise AI systems are powered by Large Language Models (LLMs)—sophisticated neural networks trained on vast datasets to understand and generate human language. Mastering LLM architecture is essential for strategic prompt engineering, as deeper technical understanding enables more precise, business-focused AI implementations that deliver measurable organizational value.
              </p>
            </header>

            {/* What is an LLM Really? */}
            <section className="mb-16 lg:mb-20" aria-labelledby="what-is-llm-heading">
              <h3 id="what-is-llm-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight text-center mb-6 lg:mb-8">
                <span className="text-ethos-gray">Enterprise LLM </span>
                <span className="text-ethos-purple">Architecture</span>
              </h3>
              
              <p className="text-[#313131] text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed tracking-tight text-center mx-auto mb-12 lg:mb-16">
                Enterprise Large Language Models function as sophisticated knowledge processing systems, trained on extensive datasets to understand complex business contexts, industry-specific terminology, and strategic communication patterns. These systems serve as intelligent intermediaries between organizational requirements and actionable AI responses.
              </p>

              {/* L-L-M Breakdown Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-8" role="list" aria-label="LLM component breakdown">
                {/* Large Card */}
                <article className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 xl:p-10 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] flex flex-col justify-center" role="listitem">
                  <div className="flex items-center gap-8 lg:gap-12">
                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-bold leading-none tracking-[-3.84px] bg-gradient-to-b from-[#7A71DF] to-[#442785] bg-clip-text text-transparent drop-shadow-[0_18px_28.5px_rgba(0,0,0,0.25)]" aria-hidden="true">
                      L
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-3 lg:mb-4">
                        Scale
                      </h4>
                      <p className="text-ethos-gray text-xs sm:text-sm md:text-base font-normal leading-normal tracking-tight">
                        Massive datasets encompassing industry knowledge, best practices, and strategic frameworks.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Language Card */}
                <article className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 xl:p-10 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] flex flex-col justify-center" role="listitem">
                  <div className="flex items-center gap-8 lg:gap-12">
                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-bold leading-none tracking-[-3.84px] bg-gradient-to-b from-[#7A71DF] to-[#442785] bg-clip-text text-transparent drop-shadow-[0_18px_28.5px_rgba(0,0,0,0.25)]" aria-hidden="true">
                      L
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-3 lg:mb-4">
                        Intelligence
                      </h4>
                      <p className="text-ethos-gray text-xs sm:text-sm md:text-base font-normal leading-normal tracking-tight">
                        Advanced natural language processing for complex business communication.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Model Card */}
                <article className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 xl:p-10 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] flex flex-col justify-center" role="listitem">
                  <div className="flex items-center gap-8 lg:gap-12">
                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-bold leading-none tracking-[-3.84px] bg-gradient-to-b from-[#7A71DF] to-[#442785] bg-clip-text text-transparent drop-shadow-[0_18px_28.5px_rgba(0,0,0,0.25)]" aria-hidden="true">
                      M
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-3 lg:mb-4">
                        System
                      </h4>
                      <p className="text-ethos-gray text-xs sm:text-sm md:text-base font-normal leading-normal tracking-tight">
                        Sophisticated neural architecture that processes patterns and generates strategic insights.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </section><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 id="llm-description-heading" className="sr-only">What is a Large Language Model?</h3>
            <p className="text-ethos-gray text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed tracking-tight max-w-5xl mx-auto">
              Enterprise LLMs are sophisticated AI systems trained on comprehensive datasets to deliver strategic business intelligence and automated decision support.
            </p>
    
          </div>
          </div>
        </section>

       

      {/* 20+ LLMs Available Section */}
      <section className="py-16 md:py-20 lg:py-24 xl:py-28 relative overflow-hidden" aria-labelledby="llms-available-heading">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`${baseUrl}assets/images/basics/Image.png`}
            alt=""
            className="w-full h-full object-cover opacity-40"
            aria-hidden="true"
          />
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Content */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
              {/* Left Column - App Logos Image */}
              <div className="flex justify-center items-center">
                <img
                  src={`${baseUrl}assets/images/basics/App Logos.png`}
                  alt="Collection of LLM logos and AI platforms"
                  className="w-full h-auto max-w-[500px]"
                />
              </div>

              {/* Right Column - Content */}
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 lg:pl-8 xl:pl-16 text-center lg:text-left">
                <header className="space-y-1 sm:space-y-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight text-ethos-purple">
                    Deploy
                  </h2>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-black">
                    20+ Enterprise Models
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight text-black">
                    Ready
                  </h3>
                </header>
                
                <p className="text-gray-800 text-sm sm:text-base lg:text-lg font-normal leading-relaxed tracking-tight max-w-4xl mx-auto lg:mx-0">
                  EthosPrompt's enterprise platform provides seamless integration with 20+ leading language models, enabling organizations to deploy optimal AI solutions for diverse business requirements. From strategic analysis to automated workflows, access enterprise-grade models tailored for specific operational needs.
                </p>

                <div className="pt-2">
                  <Button variant="cta" size="cta">
                    Explore Platform
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Training, Fine-Tuning, Prompting Section */}
      <section className="bg-gradient-to-t from-white to-[#E9EBEB] py-16 md:py-20 lg:py-24 xl:py-28 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20 lg:space-y-24">
            {/* Main Content */}
            <div className="space-y-12 lg:space-y-16 xl:space-y-20 text-center">
              {/* Pre-Training */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-4 lg:mb-6">
                  <span className="text-ethos-gray">Understanding </span>
                  <span className="text-ethos-purple">Pre-Training</span>
                </h3>
                <p className="text-[#313131] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight">
                  Pre-training establishes the foundational knowledge base of enterprise AI systems through comprehensive dataset processing. This critical phase enables models to understand industry contexts, business terminology, and strategic frameworks essential for delivering relevant, actionable insights across diverse organizational functions.
                </p>
              </div>

              {/* Fine-Tuning */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-4 lg:mb-6">
<<<<<<< HEAD
                  <span className="text-ethos-gray">What is an </span>
                  <span className="text-ethos-purple">Fine-tuning?</span>
=======
                  <span className="text-ethos-gray">Strategic </span>
                  <span className="text-ethos-purple">Fine-Tuning</span>
>>>>>>> badb4b1a1141a78c890bc33039528cfbfcea0287
                </h3>
                <p className="text-[#313131] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight">
                  Fine-tuning transforms general AI capabilities into specialized business intelligence systems. This process aligns models with specific organizational requirements, industry standards, and strategic objectives, enabling precise, context-aware responses that drive measurable business outcomes and operational excellence.
                </p>
              </div>

              {/* Prompting */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-4 lg:mb-6">
                  <span className="text-ethos-gray">Strategic </span>
                  <span className="text-ethos-purple">Prompt Engineering</span>
                </h3>
                <p className="text-[#313131] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight">
                  Strategic prompt engineering is the discipline of crafting precise, business-focused instructions that guide AI systems toward optimal outcomes. This methodology bridges organizational requirements with AI capabilities, enabling consistent delivery of high-value, actionable intelligence that supports strategic decision-making and operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LearningMaterialSection baseUrl={baseUrl} />

      <Footer />
      </main>
    </div>
  );
};
