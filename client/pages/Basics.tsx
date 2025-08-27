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
      
      {/* Hero Section - The Story of Prompting */}
      <main role="main" id="main-content">
        <section className="bg-gradient-to-b from-white via-white to-[#E8E8E8] relative overflow-hidden" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto relative">
            {/* Hero Image */}
            <div className="absolute right-0 top-0 w-3/5 h-full pointer-events-none">
              <img
                src={`${baseUrl}assets/images/basics-hero-image.jpg`}
                alt=""
                className="w-full h-full object-contain"
                aria-hidden="true"
              />
            </div>
            
            {/* Content Container */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-16 lg:pb-20">
              {/* Main Title */}
              <header className="max-w-5xl mb-12 lg:mb-16">
                <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-poppins leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-ethos-navy-light to-ethos-gray-light bg-clip-text text-transparent">
                    The Story of 
                  </span>
                  <br />
                  <span className="text-ethos-purple">Prompting</span>
                </h1>
              </header>
              
              {/* Description */}
              <div className="max-w-4xl mb-12 lg:mb-16">
                <p className="text-ethos-gray text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight">
                  Explore how artificial intelligence learns to communicate like humans in this engaging, interactive journey that unpacks machine learning, language models, and the evolving relationship between AI and natural conversation.
                </p>
              </div>
              
              {/* Download Button */}
              <Button 
                className="bg-ethos-purple-light hover:bg-ethos-purple text-white px-4 sm:px-6 md:px-8 lg:px-10 py-2 rounded-[28px] sm:rounded-[32px] lg:rounded-[40px] text-sm sm:text-sm md:text-base lg:text-base font-normal h-9 sm:h-10 md:h-11 lg:h-12 w-full max-w-[280px] mx-auto"
                aria-label="Download learning materials about AI prompting"
              >
                Download Materials
              </Button>
            </div>
          </div>
        </section>

        {/* From AI to LLM Section */}
        <section className="bg-gradient-to-b from-white via-white to-[#E8E8E8] py-16 md:py-20 lg:py-24 xl:py-28" aria-labelledby="ai-to-llm-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <header className="text-center mb-12 lg:mb-16">
              <h2 id="ai-to-llm-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight tracking-tight mb-6 lg:mb-8">
                <span className="text-ethos-gray">From AI to </span>
                <span className="text-ethos-purple">Large Language Model (LLM)</span>
              </h2>
              
              <p className="text-ethos-gray text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed tracking-tight max-w-6xl mx-auto">
                You might know these as "AI" tools, but we'll call them "LLMs" (Large Language Models). Why? Because that's exactly what they are - large models that understand and generate human language. Understanding LLMs is crucial because prompt engineering is all about effectively communicating with these models - the better you understand how they work, the more effectively you can craft your prompts.
              </p>
            </header>

            {/* What is an LLM Really? */}
            <section className="mb-16 lg:mb-20" aria-labelledby="what-is-llm-heading">
              <h3 id="what-is-llm-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight text-center mb-6 lg:mb-8">
                <span className="text-ethos-gray">What is an </span>
                <span className="text-ethos-purple">LLM Really?</span>
              </h3>
              
              <p className="text-[#313131] text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed tracking-tight text-center mx-auto mb-12 lg:mb-16">
                Think of a Large Language Model (LLM) like a super-smart student who has read every book in the world's biggest library. Just like how a student learns by reading books, an LLM learns by processing vast amounts of text from the internet.
              </p>

              {/* L-L-M Breakdown Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12" role="list" aria-label="LLM component breakdown">
                {/* Large Card */}
                <article className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 xl:p-10 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] flex flex-col justify-center" role="listitem">
                  <div className="flex items-start gap-8 lg:gap-12">
                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-bold leading-none tracking-[-3.84px] bg-gradient-to-b from-[#7A71DF] to-[#442785] bg-clip-text text-transparent drop-shadow-[0_18px_28.5px_rgba(0,0,0,0.25)]" aria-hidden="true">
                      L
                    </div>
                    <div className="flex-1 pt-4">
                      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-3 lg:mb-4">
                        Large
                      </h4>
                      <p className="text-ethos-gray text-xs sm:text-sm md:text-base font-normal leading-normal tracking-tight">
                        Vast knowledge bank - like having read millions of books!
                      </p>
                    </div>
                  </div>
                </article>

                {/* Language Card */}
                <article className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 xl:p-10 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] flex flex-col justify-center" role="listitem">
                  <div className="flex items-start gap-8 lg:gap-12">
                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-bold leading-none tracking-[-3.84px] bg-gradient-to-b from-[#7A71DF] to-[#442785] bg-clip-text text-transparent drop-shadow-[0_18px_28.5px_rgba(0,0,0,0.25)]" aria-hidden="true">
                      L
                    </div>
                    <div className="flex-1 pt-4">
                      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-3 lg:mb-4">
                        Language
                      </h4>
                      <p className="text-ethos-gray text-xs sm:text-sm md:text-base font-normal leading-normal tracking-tight">
                        Speaks and understands human languages!
                      </p>
                    </div>
                  </div>
                </article>

                {/* Model Card */}
                <article className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 xl:p-10 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] flex flex-col justify-center" role="listitem">
                  <div className="flex items-start gap-8 lg:gap-12">
                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl font-bold leading-none tracking-[-3.84px] bg-gradient-to-b from-[#7A71DF] to-[#442785] bg-clip-text text-transparent drop-shadow-[0_18px_28.5px_rgba(0,0,0,0.25)]" aria-hidden="true">
                      M
                    </div>
                    <div className="flex-1 pt-4">
                      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-3 lg:mb-4">
                        Model
                      </h4>
                      <p className="text-ethos-gray text-xs sm:text-sm md:text-base font-normal leading-normal tracking-tight">
                        The intelligent part that processes patterns and thinks!
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </section><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 id="llm-description-heading" className="sr-only">What is a Large Language Model?</h3>
            <p className="text-ethos-gray text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed tracking-tight max-w-5xl mx-auto">
              Large Language Models are AI systems trained by processing vast amounts of text from the internet.
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
                    Integrate
                  </h2>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-black">
                    20+ LLMs
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight text-black">
                    Available
                  </h3>
                </header>
                
                <p className="text-gray-800 text-sm sm:text-base lg:text-lg font-normal leading-relaxed tracking-tight max-w-4xl mx-auto lg:mx-0">
                  EthosPrompt agents can seamlessly integrate with over 20+ leading language models to enhance your AI capabilities. From content generation to code assistance and beyond, access the right model for every task with a single click.
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

      {/* Pre-Training, Fine-Tuning, Prompting Section */}
      <section className="bg-gradient-to-t from-white to-[#E9EBEB] py-16 md:py-20 lg:py-24 xl:py-28 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20 lg:space-y-24">
            {/* Main Content */}
            <div className="space-y-12 lg:space-y-16 xl:space-y-20 text-center">
              {/* Pre-Training */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-4 lg:mb-6">
                  <span className="text-ethos-gray">What is an </span>
                  <span className="text-ethos-purple">Pre-Training?</span>
                </h3>
                <p className="text-[#313131] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight">
                  This is where the "L" (Large) in LLM comes to life! Pre-training is the foundational phase where an AI model acquires its vast knowledge by processing enormous amounts of text data - like a student speed-reading through millions of books, articles, and documents simultaneously.
                </p>
              </div>

              {/* Fine-Tuning */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-4 lg:mb-6">
                  <span className="text-ethos-gray">What is an </span>
                  <span className="text-ethos-purple">Fine tuning?</span>
                </h3>
                <p className="text-[#313131] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight">
                  This is where the "M" (Model) in LLM truly comes to life! While pre-training provides vast knowledge, fine-tuning transforms this raw knowledge into sophisticated thinking and decision-making abilities - it's like transforming a medical student who has memorized textbooks into a skilled doctor who can diagnose and treat patients effectively.
                </p>
              </div>

              {/* Prompting */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-4 lg:mb-6">
                  <span className="text-ethos-gray">What is </span>
                  <span className="text-ethos-purple">Prompting?</span>
                </h3>
                <p className="text-[#313131] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight">
                  This is where the second "L" (Language) in LLM comes to life! Prompting is like having a conversation with a highly knowledgeable assistant - you communicate your needs in plain language, and the AI understands and responds accordingly.
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
