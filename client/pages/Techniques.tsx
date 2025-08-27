import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LearningMaterialSection } from "@/components/LearningMaterialSection";

export const Techniques = () => {
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <main role="main" id="main-content">
        <section className="bg-gradient-to-b from-white via-white to-[#E8E8E8] relative overflow-hidden py-8 md:py-12 lg:py-16 xl:py-20" aria-labelledby="hero-heading">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ 
              backgroundImage: `url(${baseUrl}assets/images/techniques-hero-image.jpg)`,
              backgroundPosition: 'right center'
            }}
            aria-hidden="true"
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[250px] sm:min-h-[300px] lg:min-h-[350px]">
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-4 md:space-y-5 lg:space-y-6">
                {/* Title */}
                <header>
                  <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-poppins leading-tight tracking-tight">
                    <span className="block bg-gradient-to-r from-ethos-navy-light to-ethos-gray-light bg-clip-text text-transparent">
                      Practical
                    </span>
                    <span className="block text-ethos-purple">
                      Prompt Engineering
                    </span>
                  </h1>
                </header>

                {/* Subtitle */}
                <div>
                  <p className="text-[#313131] text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight max-w-xl">
                    Master the Art of Crafting Effective Prompts
                  </p>
                </div>

                {/* Button */}
                <div>
                  <Button 
                    className="bg-ethos-purple-light hover:bg-ethos-purple text-white px-5 sm:px-6 md:px-8 lg:px-10 py-2.5 lg:py-3 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] text-xs sm:text-sm md:text-base lg:text-lg font-normal h-10 sm:h-12 md:h-14 lg:h-16"
                    aria-label="Download prompt engineering learning material"
                  >
                    Download material
                  </Button>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="hidden lg:flex items-center justify-center">
                <img 
                  src={`${baseUrl}assets/images/techniques/Group 205.png`}
                  alt="Prompt Engineering Illustration"
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Core Techniques Section */}
        <section className="bg-gradient-to-b from-[#FEFEFE] to-[#FBFBFB] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24" aria-labelledby="core-techniques-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-left">
              <h2 id="core-techniques-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight tracking-tight mb-3 sm:mb-4">
                <span className="text-ethos-gray">The </span>
                <span className="text-ethos-purple">Core techniques</span>
              </h2>
              
              <p className="text-ethos-gray text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed tracking-tight max-w-2xl text-left">
                Think of a Large Language Model (LLM) like a super-smart student who has read every book in the world's biggest library. Just like how a student learns by reading books, an LLM learns by processing vast amounts of text from the internet.
              </p>
            </header>

            {/* Four Technique Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6" role="list" aria-label="Core prompt engineering techniques">
              {/* Role Setting */}
              <article className="bg-white rounded-xl sm:rounded-2xl md:rounded-[24px] p-4 sm:p-5 md:p-6 flex flex-col justify-center items-center text-center shadow-[10px_10px_15px_0_rgba(0,39,80,0.05)_inset,-10px_-10px_15px_0_rgba(255,255,255,0.70)_inset,0_1px_1px_0_rgba(0,0,0,0.1)] min-h-[180px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px] transition-all duration-300 hover:shadow-[15px_15px_20px_0_rgba(0,39,80,0.07)_inset,-15px_-15px_20px_0_rgba(255,255,255,0.80)_inset,0_2px_2px_0_rgba(0,0,0,0.15)] group" role="listitem">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-2 sm:mb-3">
                  Role Setting
                </h3>
                
                <p className="text-ethos-gray text-[0.65rem] sm:text-xs md:text-sm font-normal leading-normal tracking-tight mb-1 sm:mb-2">
                  Give the AI a specific role to guide its responses.
                </p>
                
                <p className="text-ethos-gray text-[0.65rem] sm:text-xs md:text-sm font-normal leading-normal tracking-tight">
                  Roles help set expectations and context for the interaction.
                </p>
              </article>

              {/* Context Providing */}
              <article className="bg-white rounded-xl sm:rounded-2xl md:rounded-[24px] p-4 sm:p-5 md:p-6 flex flex-col justify-center items-center text-center shadow-[10px_10px_15px_0_rgba(0,39,80,0.05)_inset,-10px_-10px_15px_0_rgba(255,255,255,0.70)_inset,0_1px_1px_0_rgba(0,0,0,0.1)] min-h-[180px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px] transition-all duration-300 hover:shadow-[15px_15px_20px_0_rgba(0,39,80,0.07)_inset,-15px_-15px_20px_0_rgba(255,255,255,0.80)_inset,0_2px_2px_0_rgba(0,0,0,0.15)] group" role="listitem">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-2 sm:mb-3">
                  Context Providing
                </h3>
                
                <p className="text-ethos-gray text-[0.65rem] sm:text-xs md:text-sm font-normal leading-normal tracking-tight mb-1 sm:mb-2">
                  Set the background and requirements clearly.
                </p>
                
                <p className="text-ethos-gray text-[0.65rem] sm:text-xs md:text-sm font-normal leading-normal tracking-tight">
                  More context leads to more relevant responses.
                </p>
              </article>

              {/* Task Breakdown */}
              <article className="bg-white rounded-xl sm:rounded-2xl md:rounded-[24px] p-4 sm:p-5 md:p-6 flex flex-col justify-center items-center text-center shadow-[10px_10px_15px_0_rgba(0,39,80,0.05)_inset,-10px_-10px_15px_0_rgba(255,255,255,0.70)_inset,0_1px_1px_0_rgba(0,0,0,0.1)] min-h-[180px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px] transition-all duration-300 hover:shadow-[15px_15px_20px_0_rgba(0,39,80,0.07)_inset,-15px_-15px_20px_0_rgba(255,255,255,0.80)_inset,0_2px_2px_0_rgba(0,0,0,0.15)] group" role="listitem">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-2 sm:mb-3">
                  Task Breakdown
                </h3>
                
                <p className="text-ethos-gray text-[0.65rem] sm:text-xs md:text-sm font-normal leading-normal tracking-tight mb-1 sm:mb-2">
                  Split complex requests into clear steps.
                </p>
                
                <p className="text-ethos-gray text-[0.65rem] sm:text-xs md:text-sm font-normal leading-normal tracking-tight">
                  Breaking down tasks improves clarity and quality.
                </p>
              </article>

              {/* Output Formatting */}
              <article className="bg-white rounded-xl sm:rounded-2xl md:rounded-[24px] p-4 sm:p-5 md:p-6 flex flex-col justify-center items-center text-center shadow-[10px_10px_15px_0_rgba(0,39,80,0.05)_inset,-10px_-10px_15px_0_rgba(255,255,255,0.70)_inset,0_1px_1px_0_rgba(0,0,0,0.1)] min-h-[180px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px] transition-all duration-300 hover:shadow-[15px_15px_20px_0_rgba(0,39,80,0.07)_inset,-15px_-15px_20px_0_rgba(255,255,255,0.80)_inset,0_2px_2px_0_rgba(0,0,0,0.15)] group" role="listitem">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-2 sm:mb-3">
                  Output Formatting
                </h3>
                
                <p className="text-ethos-gray text-[0.65rem] sm:text-xs md:text-sm font-normal leading-normal tracking-tight mb-1 sm:mb-2">
                  Specify how you want the response structured.
                </p>
                
                <p className="text-ethos-gray text-[0.65rem] sm:text-xs md:text-sm font-normal leading-normal tracking-tight">
                  Clear formats make responses more useful and actionable.
                </p>
              </article>
            </div>
          </div>
        </section>

      {/* Chain of Thoughts Section */}
      <section className="bg-gradient-to-b from-white to-[#F1F1F1] py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-6 lg:mb-8">
                <span className="text-ethos-gray">Chain of Thoughts </span>
                <span className="text-ethos-purple">Prompting</span>
              </h2>
              
              <div className="space-y-4 lg:space-y-5">
                <p className="text-ethos-gray text-sm sm:text-base md:text-base lg:text-base font-normal leading-normal tracking-tight">
                  Chain of Thought (CoT) is a powerful prompting technique used in artificial intelligence—particularly in large language models like ChatGPT—that encourages the model to generate step-by-step reasoning before reaching a final answer. Rather than responding immediately with a single, direct answer, the AI is prompted to "think out loud", breaking down the problem or question into logical steps. This method closely mirrors how humans solve complex problems by working through their thoughts in stages.
                </p>
                
                <p className="text-ethos-gray text-sm sm:text-base md:text-base lg:text-base font-normal leading-normal tracking-tight">
                  CoT is especially useful in scenarios that require multi-step thinking, such as solving math equations, analyzing cause-and-effect relationships, making decisions based on multiple conditions, or answering questions that involve abstract or layered reasoning. By guiding the model to articulate its thought process, CoT significantly improves the accuracy, clarity, and reliability of responses.
                </p>
                
                <p className="text-ethos-gray text-sm sm:text-base md:text-base lg:text-base font-normal leading-normal tracking-tight">
                  In essence, Chain of Thought transforms AI from a tool that simply provides answers into a system that can demonstrate reasoning, justify conclusions, and reveal the logic behind its outputs—making it not only more effective but also more trustworthy and interpretable in fields like education, research, customer service, and beyond.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img
                src={`${baseUrl}assets/images/techniques/technique-33d3874838600fa90097bf09b02e6fa049405c93.jpg`}
                alt="Chain of Thoughts illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="bg-gradient-to-b from-[#F3F3F3] to-[#E8E8E8] py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight">
              <span className="text-ethos-gray">Best Practices and </span>
              <span className="text-ethos-purple">Common Pitfalls</span>
            </h2>
          </div>

          {/* Main content with three columns: Best Practices | Image | Common Pitfalls */}
          <div className="mb-12 lg:mb-16 relative">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,1fr)_auto_minmax(300px,1fr)] gap-8 sm:gap-10 md:gap-12 lg:gap-1 xl:gap-2 items-center justify-items-center min-h-[480px] md:min-h-[450px] lg:min-h-[500px]">
              
              {/* Left Card - Best Practices - Purple */}
              <div className="relative order-2 lg:order-1 group w-full lg:max-w-md xl:max-w-lg mx-auto -ml-2 sm:-ml-3 md:-ml-4 lg:-ml-6">
                {/* Background Shape */}
                <div 
                  className="absolute inset-0 rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] transition-all duration-300 group-hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  style={{ background: '#6D6AED' }}
                />
                
                {/* Content */}
                <div className="relative z-10 p-6 sm:p-6 lg:p-8 xl:p-10 min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] flex flex-col justify-center">
                  <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight mb-4 sm:mb-6 lg:mb-8 text-center">
                    Best Practices
                  </h3>
                  
                  <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                    <div className="flex items-start gap-2 sm:gap-3 group/item">
                      <div 
                        className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full flex-shrink-0 mt-1 transition-transform duration-200 group-hover/item:scale-110"
                        style={{ background: '#7900E3' }}
                        role="presentation"
                        aria-hidden="true"
                      />
                      <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed tracking-[-0.03em] transition-opacity duration-200 group-hover/item:opacity-90">
                        Instead of "make it better," say "improve the performance by reducing database calls"
                      </p>
                    </div>
                    
                    <div className="h-px bg-white/20 my-2 sm:my-3 transition-opacity duration-300 hover:bg-white/40" />
                    
                    <div className="flex items-start gap-3 sm:gap-4 group/item">
                      <div 
                        className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full flex-shrink-0 mt-1.5 transition-transform duration-200 group-hover/item:scale-110"
                        style={{ background: '#7900E3' }}
                        role="presentation"
                        aria-hidden="true"
                      />
                      <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed tracking-[-0.03em] transition-opacity duration-200 group-hover/item:opacity-90">
                        Include relevant background information and constraints
                      </p>
                    </div>
                    
                    <div className="h-px bg-white/20 my-2 sm:my-3 transition-opacity duration-300 hover:bg-white/40" />
                    
                    <div className="flex items-start gap-3 sm:gap-4 group/item">
                      <div 
                        className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full flex-shrink-0 mt-1.5 transition-transform duration-200 group-hover/item:scale-110"
                        style={{ background: '#7900E3' }}
                        role="presentation"
                        aria-hidden="true"
                      />
                      <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed tracking-[-0.03em] transition-opacity duration-200 group-hover/item:opacity-90">
                        Show what good output looks like with concrete examples
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Image */}
              <div className="order-1 lg:order-2 flex justify-center items-center w-full max-w-[400px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[640px] xl:max-w-[720px] mx-auto">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9a911d75162403557beac2155006e70e2b647c95?width=1922"
                  alt="Best practices illustration"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  role="img"
                />
              </div>

              {/* Right Card - Common Pitfalls - Dark Blue */}
              <div className="relative order-3 lg:order-3 group w-full lg:max-w-md xl:max-w-lg mx-auto -mr-2 sm:-mr-3 md:-mr-4 lg:-mr-6">
                {/* Background Shape */}
                <div 
                  className="absolute inset-0 rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] transition-all duration-300 group-hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  style={{ background: '#2E3D88' }}
                />
                
                {/* Content */}
                <div className="relative z-10 p-6 sm:p-6 lg:p-8 xl:p-10 min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] flex flex-col justify-center">
                  <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight mb-4 sm:mb-6 lg:mb-8 text-center">
                    Common Pitfalls
                  </h3>
                  
                  <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                    <div className="flex items-start gap-2 sm:gap-3 group/item">
                      <div 
                        className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full flex-shrink-0 mt-1 transition-transform duration-200 group-hover/item:scale-110"
                        style={{ background: '#7900E3' }}
                        role="presentation"
                        aria-hidden="true"
                      />
                      <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed tracking-[-0.03em] transition-opacity duration-200 group-hover/item:opacity-90">
                        "Make it good" vs "Optimize the function for readability and performance"
                      </p>
                    </div>
                    
                    <div className="h-px bg-white/20 my-2 sm:my-3 transition-opacity duration-300 hover:bg-white/40" />
                    
                    <div className="flex items-start gap-3 sm:gap-4 group/item">
                      <div 
                        className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full flex-shrink-0 mt-1.5 transition-transform duration-200 group-hover/item:scale-110"
                        style={{ background: '#7900E3' }}
                        role="presentation"
                        aria-hidden="true"
                      />
                      <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed tracking-[-0.03em] transition-opacity duration-200 group-hover/item:opacity-90">
                        Break complex tasks into smaller, manageable prompts
                      </p>
                    </div>
                    
                    <div className="h-px bg-white/20 my-2 sm:my-3 transition-opacity duration-300 hover:bg-white/40" />
                    
                    <div className="flex items-start gap-3 sm:gap-4 group/item">
                      <div 
                        className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full flex-shrink-0 mt-1.5 transition-transform duration-200 group-hover/item:scale-110"
                        style={{ background: '#7900E3' }}
                        role="presentation"
                        aria-hidden="true"
                      />
                      <p className="text-white text-xs sm:text-sm lg:text-base leading-relaxed tracking-[-0.03em] transition-opacity duration-200 group-hover/item:opacity-90">
                        Always provide necessary background, even if it seems obvious
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-ethos-gray text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight tracking-tight mb-6 lg:mb-8">
              Keen to learn more?
            </p>

            <Button className="bg-ethos-purple-light hover:bg-ethos-purple text-white px-8 sm:px-10 md:px-12 lg:px-16 py-3 lg:py-4 rounded-[32px] sm:rounded-[40px] lg:rounded-[53px] text-sm sm:text-base md:text-lg lg:text-xl font-normal h-12 sm:h-14 md:h-16 lg:h-18">
              Download Material
            </Button>
          </div>
        </div>
      </section>

      {/* Evaluation and Testing Section */}
      <section className="bg-gradient-to-b from-[#E8E8E8] to-white relative overflow-hidden py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          {/* Header Content */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-4 lg:mb-6">
              <span className="text-ethos-gray">Evaluation and </span>
              <span className="text-ethos-purple">Testing</span>
            </h2>

            <p className="text-ethos-gray text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight max-w-5xl mx-auto">
              Just like software testing, prompt engineering requires systematic evaluation to ensure reliability and effectiveness.
            </p>
          </div>

          {/* Desktop: Show diagram image */}
          <div className="hidden lg:block relative z-10 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/900ba67d47669581982c85770c5b291186aa8f7d?width=4654"
              alt="Evaluation and Testing Process Diagram"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Mobile/Tablet: Show detailed cards */}
          <div className="lg:hidden">
            {/* Subtitle */}
            <div className="mb-8">
              <h3 className="text-ethos-gray text-2xl font-semibold leading-[1.2] tracking-[-0.72px] text-left">
                Things to keep in mind..
              </h3>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Testing Strategies Card */}
              <div className="bg-white rounded-[50px] p-8 shadow-[0_4px_4px_0_rgba(0,0,0,0.25),30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset] min-h-[431px] flex flex-col">
                <h4 className="text-ethos-gray text-xl font-medium leading-[1.1] tracking-[-0.6px] text-center mb-6">
                  Testing Strategies
                </h4>

                <div className="space-y-6 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rotate-90 flex-shrink-0 mt-1">
                      <svg viewBox="0 0 15 17" fill="none">
                        <path d="M13.4743 5.88693C15.4749 7.04151 15.4749 9.92903 13.4743 11.0836L5.24113 15.8351C3.24113 16.9893 0.74159 15.5459 0.74159 13.2367V3.73382C0.74159 1.42466 3.24113 -0.0187476 5.24113 1.13548L13.4743 5.88693Z" fill="url(#paint0_linear_589_13)"/>
                        <defs>
                          <linearGradient id="paint0_linear_589_13" x1="6.48658" y1="-3" x2="6.48658" y2="19.9705" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFD5AC"/>
                            <stop offset="1" stopColor="#FF0037"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-ethos-purple text-lg font-normal leading-[1.1] tracking-[-0.54px] mb-1">
                        Edge Cases
                      </h5>
                      <p className="text-ethos-gray text-lg font-normal leading-[1.1] tracking-[-0.54px]">
                        Test with unusual or extreme inputs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rotate-90 flex-shrink-0 mt-1">
                      <svg viewBox="0 0 15 17" fill="none">
                        <path d="M13.4821 5.88693C15.4827 7.04151 15.4827 9.92903 13.4821 11.0836L5.24894 15.8351C3.24894 16.9893 0.749403 15.5459 0.749403 13.2367V3.73382C0.749403 1.42466 3.24894 -0.0187476 5.24894 1.13548L13.4821 5.88693Z" fill="url(#paint0_linear_589_14)"/>
                        <defs>
                          <linearGradient id="paint0_linear_589_14" x1="6.49439" y1="-3" x2="6.49439" y2="19.9705" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFD5AC"/>
                            <stop offset="1" stopColor="#FF0037"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-ethos-purple text-lg font-normal leading-[1.1] tracking-[-0.54px] mb-1">
                        Variations
                      </h5>
                      <p className="text-ethos-gray text-lg font-normal leading-[1.1] tracking-[-0.54px]">
                        Try different phrasings of the same prompt
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rotate-90 flex-shrink-0 mt-1">
                      <svg viewBox="0 0 15 17" fill="none">
                        <path d="M13.4801 5.88693C15.4807 7.04151 15.4807 9.92903 13.4801 11.0836L5.24699 15.8351C3.24699 16.9893 0.74745 15.5459 0.74745 13.2367V3.73382C0.74745 1.42466 3.24699 -0.0187476 5.24699 1.13548L13.4801 5.88693Z" fill="url(#paint0_linear_589_15)"/>
                        <defs>
                          <linearGradient id="paint0_linear_589_15" x1="6.49244" y1="-3" x2="6.49244" y2="19.9705" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFD5AC"/>
                            <stop offset="1" stopColor="#FF0037"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-ethos-purple text-lg font-normal leading-[1.1] tracking-[-0.54px] mb-1">
                        Cross-Validation
                      </h5>
                      <p className="text-ethos-gray text-lg font-normal leading-[1.1] tracking-[-0.54px]">
                        Test across different AI models if possible
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Iteration Process Card */}
              <div className="bg-white rounded-[50px] p-8 shadow-[0_4px_4px_0_rgba(0,0,0,0.25),30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset] min-h-[431px] flex flex-col">
                <h4 className="text-ethos-gray text-xl font-medium leading-[1.1] tracking-[-0.6px] text-center mb-6">
                  Iteration Process
                </h4>

                <div className="space-y-6 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rotate-90 flex-shrink-0 mt-1">
                      <svg viewBox="0 0 15 17" fill="none">
                        <path d="M13.3047 6.05739C15.3047 7.21209 15.3047 10.0988 13.3047 11.2535L4.82149 16.1513C2.82149 17.306 0.321495 15.8626 0.321495 13.5532V3.75769C0.321495 1.44828 2.8215 0.00491142 4.8215 1.15961L13.3047 6.05739Z" fill="url(#paint0_linear_589_19)"/>
                        <defs>
                          <linearGradient id="paint0_linear_589_19" x1="6.14923" y1="-3" x2="6.14923" y2="20.3109" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFD5AC"/>
                            <stop offset="1" stopColor="#FF0037"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-ethos-purple text-lg font-normal leading-[1.45] tracking-[-0.54px] mb-1">
                        Initial Testing
                      </h5>
                      <p className="text-ethos-gray text-lg font-normal leading-[1.45] tracking-[-0.54px]">
                        Start with the simple test cases
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rotate-90 flex-shrink-0 mt-1">
                      <svg viewBox="0 0 15 17" fill="none">
                        <path d="M13.3086 6.05739C15.3086 7.21209 15.3086 10.0988 13.3086 11.2535L4.8254 16.1513C2.8254 17.306 0.325401 15.8626 0.325401 13.5532V3.75769C0.325401 1.44828 2.8254 0.00491142 4.8254 1.15961L13.3086 6.05739Z" fill="url(#paint0_linear_589_20)"/>
                        <defs>
                          <linearGradient id="paint0_linear_589_20" x1="6.15313" y1="-3" x2="6.15313" y2="20.3109" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFD5AC"/>
                            <stop offset="1" stopColor="#FF0037"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-ethos-purple text-lg font-normal leading-[1.45] tracking-[-0.54px] mb-1">
                        Analyze Results
                      </h5>
                      <p className="text-ethos-gray text-lg font-normal leading-[1.45] tracking-[-0.54px]">
                        Identify patterns in response
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rotate-90 flex-shrink-0 mt-1">
                      <svg viewBox="0 0 15 17" fill="none">
                        <path d="M13.3086 6.05739C15.3086 7.21209 15.3086 10.0988 13.3086 11.2535L4.8254 16.1513C2.8254 17.306 0.325401 15.8626 0.325401 13.5532V3.75769C0.325401 1.44828 2.8254 0.00491142 4.8254 1.15961L13.3086 6.05739Z" fill="url(#paint0_linear_589_21)"/>
                        <defs>
                          <linearGradient id="paint0_linear_589_21" x1="6.15313" y1="-3" x2="6.15313" y2="20.3109" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFD5AC"/>
                            <stop offset="1" stopColor="#FF0037"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-ethos-purple text-lg font-normal leading-[1.45] tracking-[-0.54px] mb-1">
                        Refine Prompt
                      </h5>
                      <p className="text-ethos-gray text-lg font-normal leading-[1.45] tracking-[-0.54px]">
                        Adjust based on findings
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rotate-90 flex-shrink-0 mt-1">
                      <svg viewBox="0 0 15 17" fill="none">
                        <path d="M13.3047 6.05739C15.3047 7.21209 15.3047 10.0988 13.3047 11.2535L4.82149 15.8351C2.82149 16.9893 0.321495 15.5459 0.321495 13.2367V3.73382C0.321495 1.42466 2.8215 0.00491142 4.8215 1.15961L13.3047 6.05739Z" fill="url(#paint0_linear_589_22)"/>
                        <defs>
                          <linearGradient id="paint0_linear_589_22" x1="6.14923" y1="-3" x2="6.14923" y2="20.3109" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFD5AC"/>
                            <stop offset="1" stopColor="#FF0037"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-ethos-purple text-lg font-normal leading-[1.45] tracking-[-0.54px] mb-1">
                        Validate Changes
                      </h5>
                      <p className="text-ethos-gray text-lg font-normal leading-[1.45] tracking-[-0.54px]">
                        Re-test the refined prompt
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Matrix Card */}
              <div className="bg-white rounded-[50px] p-8 shadow-[0_4px_4px_0_rgba(0,0,0,0.25),30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset] min-h-[431px] flex flex-col">
                <h4 className="text-ethos-gray text-xl font-medium leading-[1.1] tracking-[-0.6px] text-center mb-6">
                  Success Matrix
                </h4>

                <div className="space-y-6 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rotate-90 flex-shrink-0 mt-1">
                      <svg viewBox="0 0 15 16" fill="none">
                        <path d="M12.5898 5.44692C14.5898 6.60162 14.5898 9.48838 12.5898 10.6431L5.02234 15.0122C3.02234 16.1669 0.522343 14.7235 0.522343 12.4141V3.6759C0.522343 1.3665 3.02234 -0.076875 5.02234 1.07783L12.5898 5.44692Z" fill="url(#paint0_linear_589_28)"/>
                        <defs>
                          <linearGradient id="paint0_linear_589_28" x1="6.04484" y1="-3" x2="6.04484" y2="19.09" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFD5AC"/>
                            <stop offset="1" stopColor="#FF0037"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-ethos-purple text-lg font-normal leading-[1.45] tracking-[-0.54px] mb-1">
                        Accuracy
                      </h5>
                      <p className="text-ethos-gray text-lg font-normal leading-[1.45] tracking-[-0.54px]">
                        Are the responses correct and relevant?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rotate-90 flex-shrink-0 mt-1">
                      <svg viewBox="0 0 15 16" fill="none">
                        <path d="M12.5898 5.44692C14.5898 6.60162 14.5898 9.48838 12.5898 10.6431L5.02234 15.0122C3.02234 16.1669 0.522343 14.7235 0.522343 12.4141V3.6759C0.522343 1.3665 3.02234 -0.076875 5.02234 1.07783L12.5898 5.44692Z" fill="url(#paint0_linear_589_29)"/>
                        <defs>
                          <linearGradient id="paint0_linear_589_29" x1="6.04484" y1="-3" x2="6.04484" y2="19.09" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFD5AC"/>
                            <stop offset="1" stopColor="#FF0037"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-ethos-purple text-lg font-normal leading-[1.45] tracking-[-0.54px] mb-1">
                        Consistency
                      </h5>
                      <p className="text-ethos-gray text-lg font-normal leading-[1.45] tracking-[-0.54px]">
                        Do similar prompts get similar responses?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rotate-90 flex-shrink-0 mt-1">
                      <svg viewBox="0 0 15 16" fill="none">
                        <path d="M12.5898 5.44692C14.5898 6.60162 14.5898 9.48838 12.5898 10.6431L5.02234 15.0122C3.02234 16.1669 0.522343 14.7235 0.522343 12.4141V3.6759C0.522343 1.3665 3.02234 -0.076875 5.02234 1.07783L12.5898 5.44692Z" fill="url(#paint0_linear_589_30)"/>
                        <defs>
                          <linearGradient id="paint0_linear_589_30" x1="6.04484" y1="-3" x2="6.04484" y2="19.09" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FFD5AC"/>
                            <stop offset="1" stopColor="#FF0037"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-ethos-purple text-lg font-normal leading-[1.45] tracking-[-0.54px] mb-1">
                        Usability
                      </h5>
                      <p className="text-ethos-gray text-lg font-normal leading-[1.45] tracking-[-0.54px]">
                        Is the output format practical and useful?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation Card */}
              <div className="bg-white rounded-[50px] p-8 shadow-[0_4px_4px_0_rgba(0,0,0,0.25),30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset] min-h-[431px] flex flex-col">
                <h4 className="text-ethos-gray text-xl font-medium leading-[1.1] tracking-[-0.6px] text-center mb-6">
                  Documentation
                </h4>

                <div className="flex-1">
                  <div className="mb-6">
                    <h5 className="text-ethos-purple text-lg font-normal leading-[1.45] tracking-[-0.54px] mb-4">
                      Keep track of your prompt engineering process
                    </h5>
                    <div className="space-y-2 text-ethos-gray text-lg font-normal leading-[1.45] tracking-[-0.54px]">
                      <p>• Record successful patterns</p>
                      <p>• Document edge cases</p>
                      <p>• Note model-specific behaviors</p>
                      <p>• Share learnings with team</p>
                    </div>
                  </div>
                </div>
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
