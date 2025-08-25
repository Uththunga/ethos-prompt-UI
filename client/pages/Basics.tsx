import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export const Basics = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - The Story of Prompting */}
      <section className="bg-gradient-to-b from-white via-white to-[#E8E8E8] relative overflow-hidden">
        <div className="max-w-[2560px] mx-auto relative">
          {/* Hero Image */}
          <div className="absolute right-0 top-0 w-[71.3%] h-full pointer-events-none">
            <img
              src="/assets/images/basics-hero-image.jpg"
              alt="AI Story illustration showing futuristic AI character"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Content Container */}
          <div className="relative z-10 px-6 lg:px-16 xl:px-20 pt-16 pb-20 lg:pt-24 lg:pb-28">
            {/* Main Title */}
            <div className="max-w-[1427px] mb-12 lg:mb-16">
              <h1 className="font-semibold font-poppins leading-[201px] tracking-[-5.67px] text-[135px] xl:text-[189px] lg:text-[150px] md:text-[100px] sm:text-[80px] text-[60px]">
                <span className="bg-gradient-to-r from-[#181C4C] via-[#717493] to-[#717493] bg-clip-text text-transparent">
                  The Story of 
                </span>
                <br />
                <span className="text-ethos-purple">Prompting</span>
              </h1>
            </div>
            
            {/* Description */}
            <div className="max-w-[953px] mb-12 lg:mb-16">
              <p className="text-ethos-gray text-xl lg:text-2xl xl:text-[32px] font-normal leading-[53px] tracking-[-0.96px]">
                Explore how artificial intelligence learns to communicate like humans in this engaging, interactive journey that unpacks machine learning, language models, and the evolving relationship between AI and natural conversation.
              </p>
            </div>
            
            {/* Download Button */}
            <Button className="bg-ethos-purple-light hover:bg-ethos-purple text-white px-12 lg:px-16 py-3 lg:py-4 rounded-[53px] text-lg lg:text-xl xl:text-[28px] font-normal h-[64px] w-[369px]">
              Download material
            </Button>
          </div>
        </div>
      </section>

      {/* From AI to LLM Section */}
      <section className="bg-gradient-to-b from-white via-white to-[#E8E8E8] py-16 lg:py-20 xl:py-28">
        <div className="max-w-[2560px] mx-auto px-6 lg:px-16 xl:px-20">
          {/* Section Title */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[96px] font-medium leading-[1.11] tracking-[-2.88px] mb-8 lg:mb-12">
              <span className="text-ethos-gray">From Ai to </span>
              <span className="text-ethos-purple">Large Language Model (LLM)</span>
            </h2>
            
            <p className="text-ethos-gray text-lg lg:text-xl xl:text-[32px] font-normal leading-[53px] tracking-[-0.96px] max-w-[1873px] mx-auto">
              You might know these as "AI" tools, but we'll call them "LLMs" (Large Language Models). Why? Because that's exactly what they are - large models that understand and generate human language. Understanding LLMs is crucial because prompt engineering is all about effectively communicating with these models - the better you understand how they work, the more effectively you can craft your prompts.
            </p>
          </div>

          {/* What Is an LLM Really? */}
          <div className="mb-16 lg:mb-20">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[96px] font-medium leading-[1.11] tracking-[-2.88px] text-center mb-8 lg:mb-12">
              <span className="text-ethos-gray">What Is an </span>
              <span className="text-ethos-purple">LLM Really?</span>
            </h3>
            
            <p className="text-[#313131] text-lg lg:text-xl xl:text-[32px] font-normal leading-[53px] tracking-[-0.96px] text-center max-w-[1870px] mx-auto mb-16 lg:mb-20">
              Think of a Large Language Model (LLM) like a super-smart student who has read every book in the world's biggest library. Just like how a student learns by reading books, an LLM learns by processing vast amounts of text from the internet.
            </p>

            {/* L-L-M Breakdown Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
              {/* Large Card */}
              <div className="bg-white rounded-[50px] p-8 lg:p-12 xl:p-16 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] h-[367px] flex flex-col justify-center">
                <div className="flex items-start gap-8 lg:gap-12">
                  <div className="text-[128px] font-bold leading-none tracking-[-3.84px] bg-gradient-to-b from-[#7A71DF] to-[#442785] bg-clip-text text-transparent drop-shadow-[0_18px_28.5px_rgba(0,0,0,0.25)]">
                    L
                  </div>
                  <div className="flex-1 pt-4">
                    <h4 className="text-3xl lg:text-4xl xl:text-[64px] font-medium leading-[1.1] tracking-[-1.92px] bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-4 lg:mb-6">
                      Large
                    </h4>
                    <p className="text-ethos-gray text-lg lg:text-xl xl:text-[28px] font-normal leading-normal tracking-[-0.84px]">
                      Vast knowledge bank - like having read millions of books!
                    </p>
                  </div>
                </div>
              </div>

              {/* Language Card */}
              <div className="bg-white rounded-[50px] p-8 lg:p-12 xl:p-16 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] h-[367px] flex flex-col justify-center">
                <div className="flex items-start gap-8 lg:gap-12">
                  <div className="text-[128px] font-bold leading-none tracking-[-3.84px] bg-gradient-to-b from-[#7A71DF] to-[#442785] bg-clip-text text-transparent drop-shadow-[0_18px_28.5px_rgba(0,0,0,0.25)]">
                    L
                  </div>
                  <div className="flex-1 pt-4">
                    <h4 className="text-3xl lg:text-4xl xl:text-[64px] font-medium leading-[1.1] tracking-[-1.92px] bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-4 lg:mb-6">
                      Language
                    </h4>
                    <p className="text-ethos-gray text-lg lg:text-xl xl:text-[28px] font-normal leading-normal tracking-[-0.84px]">
                      Speaks and understands human languages!
                    </p>
                  </div>
                </div>
              </div>

              {/* Model Card */}
              <div className="bg-white rounded-[50px] p-8 lg:p-12 xl:p-16 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] h-[367px] flex flex-col justify-center">
                <div className="flex items-start gap-8 lg:gap-12">
                  <div className="text-[128px] font-bold leading-none tracking-[-3.84px] bg-gradient-to-b from-[#7A71DF] to-[#442785] bg-clip-text text-transparent drop-shadow-[0_18px_28.5px_rgba(0,0,0,0.25)]">
                    M
                  </div>
                  <div className="flex-1 pt-4">
                    <h4 className="text-3xl lg:text-4xl xl:text-[64px] font-medium leading-[1.1] tracking-[-1.92px] bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-4 lg:mb-6">
                      Model
                    </h4>
                    <p className="text-ethos-gray text-lg lg:text-xl xl:text-[28px] font-normal leading-normal tracking-[-0.84px]">
                      The intelligent part that processes patterns and thinks!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 20+ LLMs Available Section */}
      <section className="bg-white py-16 lg:py-20 xl:py-28 relative">
        <div className="max-w-[2560px] mx-auto px-6 lg:px-16 xl:px-20">
          {/* Background LLM Logos */}
          <div className="absolute left-0 top-0 w-[68%] h-full pointer-events-none">
            <img
              src="/assets/images/basics/Image.png"
              alt="Collection of LLM logos and AI platforms"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 ml-auto max-w-[45%] text-right">
            <div className="space-y-8 lg:space-y-12">
              <h2 className="text-6xl lg:text-7xl xl:text-[128px] font-bold leading-none tracking-[-3.84px] text-black">
                There are
              </h2>
              
              <div className="text-7xl lg:text-8xl xl:text-[200px] font-bold leading-none tracking-[-6px] text-ethos-purple">
                20+ LLMs
              </div>
              
              <h3 className="text-6xl lg:text-7xl xl:text-[128px] font-bold leading-none tracking-[-3.84px] text-black">
                available
              </h3>
              
              <p className="text-[#313131] text-xl lg:text-2xl xl:text-[48px] font-normal leading-[39px] tracking-[-1.44px] mb-8 lg:mb-12">
                and the number will grow
              </p>
              
              <Button className="bg-ethos-purple-light hover:bg-ethos-purple text-white px-12 lg:px-16 py-3 lg:py-4 rounded-[53px] text-lg lg:text-xl xl:text-[28px] font-normal h-[65px] w-[369px]">
                Download Materials
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Training, Fine-Tuning, Prompting Section */}
      <section className="bg-gradient-to-t from-white to-[#E9EBEB] py-16 lg:py-20 xl:py-32 relative">
        <div className="max-w-[2560px] mx-auto px-6 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left side - AI Image */}
            <div className="order-2 lg:order-1">                 
              <img
                src="/assets/images/basics/ChatGPT Image.png"
                alt="AI head with technological elements"
                className="w-full max-w-[1024px] h-auto"
              />
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 space-y-12 lg:space-y-16 xl:space-y-20">
              {/* Pre-Training */}
              <div>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[96px] font-medium leading-[1.11] tracking-[-2.88px] mb-6 lg:mb-8">
                  <span className="text-ethos-gray">What Is an </span>
                  <span className="text-ethos-purple">Pre-Training?</span>
                </h3>
                <p className="text-[#313131] text-lg lg:text-xl xl:text-[32px] font-normal leading-[53px] tracking-[-0.96px]">
                  This is where the "L" (Large) in LLM comes to life! Pre-training is the foundational phase where an AI model acquires its vast knowledge by processing enormous amounts of text data - like a student speed-reading through millions of books, articles, and documents simultaneously.
                </p>
              </div>

              {/* Fine-Tuning */}
              <div>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[96px] font-medium leading-[1.11] tracking-[-2.88px] mb-6 lg:mb-8">
                  <span className="text-ethos-gray">What Is an </span>
                  <span className="text-ethos-purple">Fine tuning ?</span>
                </h3>
                <p className="text-[#313131] text-lg lg:text-xl xl:text-[32px] font-normal leading-[53px] tracking-[-0.96px]">
                  This is where the "M" (Model) in LLM truly comes to life! While pre-training provides vast knowledge, fine-tuning transforms this raw knowledge into sophisticated thinking and decision-making abilities - it's like transforming a medical student who has memorized textbooks into a skilled doctor who can diagnose and treat patients effectively.
                </p>
              </div>

              {/* Prompting */}
              <div>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[96px] font-medium leading-[1.11] tracking-[-2.88px] mb-6 lg:mb-8">
                  <span className="text-ethos-gray">What Is an </span>
                  <span className="text-ethos-purple">Prompting ?</span>
                </h3>
                <p className="text-[#313131] text-lg lg:text-xl xl:text-[32px] font-normal leading-[53px] tracking-[-0.96px]">
                  This is where the second "L" (Language) in LLM comes to life! Prompting is like having a conversation with a highly knowledgeable assistant - you communicate your needs in plain language, and the AI understands and responds accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Learning Material Section */}
      <section className="bg-ethos-navy py-16 lg:py-20 xl:py-32 relative overflow-hidden">
        <div className="max-w-[2560px] mx-auto px-6 lg:px-16 xl:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left side - Content */}
            <div className="space-y-8 lg:space-y-12">
              <div className="space-y-6 lg:space-y-8">
                <h4 className="text-white text-3xl lg:text-4xl xl:text-[64px] font-normal leading-[1.13] tracking-[-1.92px]">
                  Are you keen to learn ?
                </h4>
                
                <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-[135px] font-bold leading-[1.13] tracking-[-4.05px] bg-gradient-to-r from-white to-[#717493] bg-clip-text text-transparent">
                  Download the free learning material
                </h2>
              </div>
              
              <p className="text-white text-lg lg:text-xl xl:text-[32px] font-normal leading-normal max-w-[1098px]">
                This learning material is for the beginners who are keen to learn more with examples which what we have discussed.
              </p>
              
              <Button className="bg-ethos-purple-light hover:bg-ethos-purple text-white px-8 lg:px-12 py-3 lg:py-4 rounded-full text-lg lg:text-xl xl:text-[28px] font-normal h-[70px] w-[261px]">
                Download Now
              </Button>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <img
                src="/assets/images/basics/Image1.png"
                alt="AI learning interface with futuristic design"
                className="w-full max-w-[1180px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
