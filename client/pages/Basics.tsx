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
                <h1 id="hero-heading" className="font-semibold font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-[#181C4C] via-[#717493] to-[#717493] bg-clip-text text-transparent">
                    The Story of 
                  </span>
                  <br />
                  <span className="text-ethos-purple">Prompting</span>
                </h1>
              </header>
              
              {/* Description */}
              <div className="max-w-4xl mb-12 lg:mb-16">
                <p className="text-ethos-gray text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed tracking-tight">
                  Explore how artificial intelligence learns to communicate like humans in this engaging, interactive journey that unpacks machine learning, language models, and the evolving relationship between AI and natural conversation.
                </p>
              </div>
              
              {/* Download Button */}
              <Button 
                className="bg-ethos-purple-light hover:bg-ethos-purple text-white px-8 sm:px-10 md:px-12 lg:px-16 py-3 lg:py-4 rounded-[32px] sm:rounded-[40px] lg:rounded-[53px] text-sm sm:text-base md:text-lg lg:text-xl font-normal h-12 sm:h-14 md:h-16 lg:h-[64px] w-full max-w-sm sm:max-w-md lg:max-w-lg"
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
              <h2 id="ai-to-llm-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-6 lg:mb-8">
                <span className="text-ethos-gray">From Ai to </span>
                <span className="text-ethos-purple">Large Language Model (LLM)</span>
              </h2>
              
              <p className="text-ethos-gray text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight max-w-6xl mx-auto">
                You might know these as "AI" tools, but we'll call them "LLMs" (Large Language Models). Why? Because that's exactly what they are - large models that understand and generate human language. Understanding LLMs is crucial because prompt engineering is all about effectively communicating with these models - the better you understand how they work, the more effectively you can craft your prompts.
              </p>
            </header>

            {/* What Is an LLM Really? */}
            <section className="mb-16 lg:mb-20" aria-labelledby="what-is-llm-heading">
              <h3 id="what-is-llm-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight text-center mb-6 lg:mb-8">
                <span className="text-ethos-gray">What Is an </span>
                <span className="text-ethos-purple">LLM Really?</span>
              </h3>
              
              <p className="text-[#313131] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight text-center mx-auto mb-12 lg:mb-16">
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
                      <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-3 lg:mb-4">
                        Large
                      </h4>
                      <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-normal tracking-tight">
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
                      <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-3 lg:mb-4">
                        Language
                      </h4>
                      <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-normal tracking-tight">
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
                      <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-3 lg:mb-4">
                        Model
                      </h4>
                      <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-normal tracking-tight">
                        The intelligent part that processes patterns and thinks!
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </section>

        {/* LLM Description Section */}
        <section className="bg-white py-8 md:py-12 lg:py-16" aria-labelledby="llm-description-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 id="llm-description-heading" className="sr-only">What is a Large Language Model?</h3>
            <p className="text-ethos-gray text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight max-w-5xl mx-auto">
              Large Language Models are AI systems trained by processing vast amounts of text from the internet.
            </p>

            {/* REMOVED DUPLICATE L-L-M Breakdown Cards */}
          </div>
        </section>

      {/* 20+ LLMs Available Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24 xl:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Background LLM Logos */}
          <div className="absolute left-0 top-0 w-full h-full pointer-events-none opacity-10">
            <img
              src={`${baseUrl}assets/images/basics/Image.png`}
              alt="Collection of LLM logos and AI platforms"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <div className="space-y-8 lg:space-y-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none tracking-tight text-black">
                There are
              </h2>
              
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight text-ethos-purple">
                20+ LLMs
              </div>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none tracking-tight text-black">
                available
              </h3>
              
              <p className="text-[#313131] text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed tracking-tight mb-6 lg:mb-8">
                and the number will grow
              </p>
              
              <Button className="bg-ethos-purple-light hover:bg-ethos-purple text-white px-8 sm:px-10 md:px-12 lg:px-16 py-3 lg:py-4 rounded-[32px] sm:rounded-[40px] lg:rounded-[53px] text-sm sm:text-base md:text-lg lg:text-xl font-normal h-12 sm:h-14 md:h-16 lg:h-[65px] w-full max-w-sm sm:max-w-md lg:max-w-lg">
                Download Materials
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Training, Fine-Tuning, Prompting Section */}
      <section className="bg-gradient-to-t from-white to-[#E9EBEB] py-16 md:py-20 lg:py-24 xl:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left side - AI Image */}
            <div className="order-2 lg:order-1 flex justify-center">                 
              <img
                src={`${baseUrl}assets/images/basics/ChatGPT Image.png`}
                alt="AI head with technological elements"
                className="w-full h-auto"
              />
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 space-y-12 lg:space-y-16 xl:space-y-20">
              {/* Pre-Training */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-4 lg:mb-6">
                  <span className="text-ethos-gray">What Is an </span>
                  <span className="text-ethos-purple">Pre-Training?</span>
                </h3>
                <p className="text-[#313131] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight">
                  This is where the "L" (Large) in LLM comes to life! Pre-training is the foundational phase where an AI model acquires its vast knowledge by processing enormous amounts of text data - like a student speed-reading through millions of books, articles, and documents simultaneously.
                </p>
              </div>

              {/* Fine-Tuning */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-4 lg:mb-6">
                  <span className="text-ethos-gray">What Is an </span>
                  <span className="text-ethos-purple">Fine tuning?</span>
                </h3>
                <p className="text-[#313131] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight">
                  This is where the "M" (Model) in LLM truly comes to life! While pre-training provides vast knowledge, fine-tuning transforms this raw knowledge into sophisticated thinking and decision-making abilities - it's like transforming a medical student who has memorized textbooks into a skilled doctor who can diagnose and treat patients effectively.
                </p>
              </div>

              {/* Prompting */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-4 lg:mb-6">
                  <span className="text-ethos-gray">What Is an </span>
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
