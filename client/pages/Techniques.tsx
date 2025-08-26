import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Techniques = () => {
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <main role="main" id="main-content">
        <section className="bg-gradient-to-b from-white via-white to-[#E8E8E8] relative overflow-hidden py-16 md:py-20 lg:py-24 xl:py-28" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-6 lg:space-y-8 xl:space-y-12">
                {/* Title */}
                <header>
                  <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-poppins leading-tight tracking-tight">
                    <span className="bg-gradient-to-r from-[#181C4C] to-[#717493] bg-clip-text text-transparent">
                      Practical
                    </span>
                    <br />
                    <span className="text-ethos-purple">
                      Prompt Engineering
                    </span>
                  </h1>
                </header>

                {/* Subtitle */}
                <div>
                  <p className="text-[#313131] text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed tracking-tight max-w-2xl">
                    Master the Art of Crafting Effective Prompts
                  </p>
                </div>

                {/* Button */}
                <div>
                  <Button 
                    className="bg-ethos-purple-light hover:bg-ethos-purple text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 lg:py-4 rounded-[32px] sm:rounded-[40px] lg:rounded-[53px] text-sm sm:text-base md:text-lg lg:text-xl font-normal h-12 sm:h-14 md:h-16 lg:h-18"
                    aria-label="Download prompt engineering learning material"
                  >
                    Download material
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center lg:justify-end items-center">
                <img
                  src={`${baseUrl}assets/images/techniques-hero-image.jpg`}
                  alt=""
                  className="w-full h-auto object-contain"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Core Techniques Section */}
        <section className="bg-gradient-to-b from-[#FEFEFE] to-[#FBFBFB] py-16 md:py-20 lg:py-24 xl:py-28" aria-labelledby="core-techniques-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-12 lg:mb-16">
              <h2 id="core-techniques-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-6 lg:mb-8">
                <span className="text-ethos-gray">The </span>
                <span className="text-ethos-purple">Core techniques</span>
              </h2>
              
              <p className="text-ethos-gray text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight max-w-5xl">
                Think of a Large Language Model (LLM) like a super-smart student who has read every book in the world's biggest library. Just like how a student learns by reading books, an LLM learns by processing vast amounts of text from the internet.
              </p>
            </header>

            {/* Four Technique Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12" role="list" aria-label="Core prompt engineering techniques">
              {/* Role Setting */}
              <article className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center items-center text-center" role="listitem">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-4 lg:mb-6">
                  Role Setting
                </h3>
                
                <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-normal tracking-tight mb-3 lg:mb-4">
                  Give the AI a specific role to guide its responses.
                </p>
                
                <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-normal tracking-tight">
                  Roles help set expectations and context for the interaction.
                </p>
              </article>

              {/* Context Providing */}
              <article className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center items-center text-center" role="listitem">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-4 lg:mb-6">
                  Context Providing
                </h3>
                
                <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-normal tracking-tight mb-3 lg:mb-4">
                  Set the background and requirements clearly.
                </p>
                
                <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-normal tracking-tight">
                  More context leads to more relevant responses.
                </p>
              </article>

              {/* Task Breakdown */}
              <article className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center items-center text-center" role="listitem">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-4 lg:mb-6">
                  Task Breakdown
                </h3>
                
                <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-normal tracking-tight mb-3 lg:mb-4">
                  Split complex requests into clear steps.
                </p>
                
                <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-normal tracking-tight">
                  Breaking down tasks improves clarity and quality.
                </p>
              </article>

              {/* Output Formatting */}
              <article className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center items-center text-center" role="listitem">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight bg-gradient-to-r from-[#7471E0] to-[#EA73D4] bg-clip-text text-transparent mb-4 lg:mb-6">
                  Output Formatting
                </h3>
                
                <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-normal tracking-tight mb-3 lg:mb-4">
                  Specify how you want the response structured.
                </p>
                
                <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-normal tracking-tight">
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
              
              <div className="space-y-4 lg:space-y-6">
                <p className="text-ethos-gray text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight">
                  Chain of Thought (CoT) is a powerful prompting technique used in artificial intelligence—particularly in large language models like ChatGPT—that encourages the model to generate step-by-step reasoning before reaching a final answer. Rather than responding immediately with a single, direct answer, the AI is prompted to "think out loud", breaking down the problem or question into logical steps. This method closely mirrors how humans solve complex problems by working through their thoughts in stages.
                </p>
                
                <p className="text-ethos-gray text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.66] tracking-[-0.96px]">
                  CoT is especially useful in scenarios that require multi-step thinking, such as solving math equations, analyzing cause-and-effect relationships, making decisions based on multiple conditions, or answering questions that involve abstract or layered reasoning. By guiding the model to articulate its thought process, CoT significantly improves the accuracy, clarity, and reliability of responses.
                </p>
                
                <p className="text-ethos-gray text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.66] tracking-[-0.96px]">
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
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            {/* Best Practices Card */}
            <div className="relative flex justify-center xl:justify-end">
              <svg
                className="w-full max-w-[688px] h-auto"
                viewBox="0 0 688 796"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 725V71C0 31.7878 31.7877 0 71 0H224.231C244.585 0 263.959 8.73503 277.436 23.9874L369.938 128.674C383.415 143.926 402.79 152.661 423.144 152.661H617C656.212 152.661 688 184.449 688 223.661V725C688 764.212 656.212 796 617 796H71C31.7878 796 0 764.212 0 725Z"
                  fill="#6D6AED"
                />
                <text
                  fill="white"
                  xmlSpace="preserve"
                  style={{ whiteSpace: 'pre' }}
                  fontFamily="Poppins"
                  fontSize="64"
                  fontWeight="500"
                  letterSpacing="-0.03em"
                >
                  <tspan x="123" y="253.4">Best Practices</tspan>
                </text>
                <rect x="79" y="370" width="536" height="368" rx="54" fill="#9F9DF3"/>
                <text
                  fill="white"
                  xmlSpace="preserve"
                  style={{ whiteSpace: 'pre' }}
                  fontFamily="Poppins"
                  fontSize="25"
                  letterSpacing="-0.03em"
                >
                  <tspan x="152" y="430.25">Instead of "make it better," say </tspan>
                  <tspan x="152" y="461.25">"improve the performance by </tspan>
                  <tspan x="152" y="492.25">reducing database calls"</tspan>
                </text>
                <text
                  fill="white"
                  xmlSpace="preserve"
                  style={{ whiteSpace: 'pre' }}
                  fontFamily="Poppins"
                  fontSize="25"
                  letterSpacing="-0.03em"
                >
                  <tspan x="152" y="557.25">Include relevant background </tspan>
                  <tspan x="152" y="588.25">information and constraints</tspan>
                </text>
                <text
                  fill="white"
                  xmlSpace="preserve"
                  style={{ whiteSpace: 'pre' }}
                  fontFamily="Poppins"
                  fontSize="25"
                  letterSpacing="-0.03em"
                >
                  <tspan x="152" y="653.25">Show what good output looks like </tspan>
                  <tspan x="152" y="684.25">with concrete examples</tspan>
                </text>
                <circle cx="119" cy="427" r="16" fill="#7900E3"/>
                <circle cx="119" cy="549" r="16" fill="#7900E3"/>
                <circle cx="119" cy="647" r="16" fill="#7900E3"/>
                <path d="M79 515.5H613.001" stroke="white"/>
                <path d="M79 615.5H613.001" stroke="white"/>
              </svg>
            </div>

            {/* Center Image */}
            <div className="flex justify-center order-3 xl:order-2">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9a911d75162403557beac2155006e70e2b647c95?width=1922"
                alt="Best practices illustration"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Common Pitfalls Card */}
            <div className="relative flex justify-center xl:justify-start order-2 xl:order-3">
              <svg
                className="w-full max-w-[686px] h-auto"
                viewBox="0 0 686 796"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M686 725V71C686 31.7878 654.212 0 615 0H462.575C442.186 0 422.781 8.76562 409.302 24.0642L317.205 128.597C303.726 143.895 284.321 152.661 263.932 152.661H71C31.7878 152.661 0 184.449 0 223.661V725C0 764.212 31.7878 796 71 796H615C654.212 796 686 764.212 686 725Z"
                  fill="#2E3D88"
                />
                <text
                  fill="white"
                  xmlSpace="preserve"
                  style={{ whiteSpace: 'pre' }}
                  fontFamily="Poppins"
                  fontSize="64"
                  fontWeight="500"
                  letterSpacing="-0.03em"
                >
                  <tspan x="95" y="253.4">Common Pitfalls</tspan>
                </text>
                <rect x="86" y="370" width="536" height="368" rx="54" fill="#6B7EDD"/>
                <text
                  fill="white"
                  xmlSpace="preserve"
                  style={{ whiteSpace: 'pre' }}
                  fontFamily="Poppins"
                  fontSize="25"
                  letterSpacing="-0.03em"
                >
                  <tspan x="159" y="430.25">"Make it good" vs "Optimize the </tspan>
                  <tspan x="159" y="461.25">function for readability and </tspan>
                  <tspan x="159" y="492.25">performance"</tspan>
                </text>
                <text
                  fill="white"
                  xmlSpace="preserve"
                  style={{ whiteSpace: 'pre' }}
                  fontFamily="Poppins"
                  fontSize="25"
                  letterSpacing="-0.03em"
                >
                  <tspan x="159" y="557.25">Break complex tasks into smaller, </tspan>
                  <tspan x="159" y="588.25">manageable prompts</tspan>
                </text>
                <text
                  fill="white"
                  xmlSpace="preserve"
                  style={{ whiteSpace: 'pre' }}
                  fontFamily="Poppins"
                  fontSize="25"
                  letterSpacing="-0.03em"
                >
                  <tspan x="159" y="653.25">Always provide necessary </tspan>
                  <tspan x="159" y="684.25">background, even if it seems obvious</tspan>
                </text>
                <circle cx="119" cy="427" r="16" fill="#7900E3"/>
                <circle cx="119" cy="549" r="16" fill="#7900E3"/>
                <circle cx="119" cy="647" r="16" fill="#7900E3"/>
                <path d="M86 515.5H620.001" stroke="white"/>
                <path d="M86 615.5H620.001" stroke="white"/>
              </svg>
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
                        <path d="M13.3047 6.05739C15.3047 7.21209 15.3047 10.0988 13.3047 11.2535L4.82149 16.1513C2.82149 17.306 0.321495 15.8626 0.321495 13.5532V3.75769C0.321495 1.44828 2.8215 0.00491142 4.8215 1.15961L13.3047 6.05739Z" fill="url(#paint0_linear_589_22)"/>
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
      {/* Banner Section */}
      <section className="bg-ethos-navy py-16 lg:py-20 xl:py-32 relative overflow-hidden">
        {/* Background Image - Direct child of section */}
        <div className="absolute inset-0 pointer-events-none flex justify-end">
          <img
            src={`${baseUrl}assets/images/techniques/technique-7083aca9f6f513559fd873fcf0f7869fbbeeac1b.jpg`}
            alt="Banner background"
            className="h-full w-auto max-w-none object-contain object-right"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-20 relative">

          <div className="relative z-10 max-w-7xl">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.13] tracking-[-1.92px] mb-8 lg:mb-12">
              Are you keen to learn ?
            </p>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.13] tracking-[-4.05px] bg-gradient-to-r from-white to-[#717493] bg-clip-text text-transparent mb-8 lg:mb-12">
              Download the free learning material
            </h2>
            
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-normal max-w-7xl mb-12 lg:mb-16">
              This learning material is for the beginners who are keen to learn more with examples which what we have discussed.
            </p>
            
            <Button className="bg-ethos-purple-light hover:bg-ethos-purple text-white px-8 lg:px-12 xl:px-16 py-3 lg:py-4 xl:py-6 rounded-[56px] text-base sm:text-lg md:text-xl lg:text-2xl font-normal h-auto">
              Download Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      </main>
    </div>
  );
};
