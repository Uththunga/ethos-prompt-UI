import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const PromptingGuide = () => {
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <main role="main" id="main-content">
        <section className="bg-gradient-to-b from-white to-[#FEFEFE] relative overflow-hidden py-16 md:py-20 lg:py-24 xl:py-28" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto relative h-full px-4 sm:px-6 lg:px-8">
            {/* Title Text - positioned at the top */}
            <header className="text-center">
              <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-poppins leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-ethos-navy-light to-ethos-gray-light bg-clip-text text-transparent">
                  Master the art of
                </span>
                <br />
                <span className="text-ethos-purple">
                  AI Communication
                </span>
              </h1>
            </header>

            {/* Hero Image - positioned below the title */}
            <div className="w-full max-w-7xl mx-auto mb-8 lg:mb-12 px-4 sm:px-6 -mt-12 sm:-mt-16">
              <img
                src={`${baseUrl}assets/images/ai-communication-illustration.jpg`}
                alt=""
                className="w-full h-auto object-contain"
                style={{ maxHeight: '80vh', width: '100%' }}
                aria-hidden="true"
              />
            </div>

            {/* Subtitle - positioned at bottom */}
            <div className="text-center">
              <p className="text-ethos-gray font-normal leading-relaxed text-sm sm:text-base lg:text-lg xl:text-xl w-full text-center whitespace-normal sm:whitespace-nowrap overflow-visible sm:overflow-hidden sm:text-ellipsis">
                Unlock the full potential of AI models by learning how to craft effective prompts. Turn your ideas into powerful results.
              </p>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="bg-gradient-to-b from-[#FEFEFE] via-[#FEFEFE] to-[#E8E8E8] py-16 md:py-20 lg:py-24 xl:py-28" aria-labelledby="journey-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 lg:mb-16">
              <div className="space-y-1 sm:space-y-2">
                <h2 id="journey-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight">
                  <span className="text-ethos-gray">Your Journey to Becoming a </span>
                  <span className="text-ethos-purple">Prompt Expert</span>
                </h2>
              </div>
            </header>

            {/* Three Step Cards - made more compact on mobile with centered content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 lg:mb-16" role="list" aria-label="Learning journey steps">
              {/* Step 1 */}
              <article className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[32px] p-4 sm:p-5 lg:p-8 shadow-[0_4px_4px_0_rgba(0,0,0,0.25),30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset] min-h-[140px] sm:min-h-[180px] lg:min-h-[280px] flex flex-col justify-center" role="listitem">
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row sm:gap-3 lg:gap-8">
                  <div className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-none bg-gradient-to-b from-[#7A71DF] to-[#442785] bg-clip-text text-transparent drop-shadow-[0_18px_28.5px_rgba(0,0,0,0.25)]" aria-hidden="true">
                    1
                  </div>
                  <div className="flex-1 pt-1 sm:pt-2">
                    <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium leading-snug bg-gradient-to-b from-[#7771DF] to-[#E872D4] bg-clip-text text-transparent mb-2 sm:mb-3 lg:mb-6">
                      Understand the basics
                    </h3>
                    <p className="text-ethos-gray text-xs sm:text-sm lg:text-base xl:text-lg font-normal leading-relaxed">
                      Learn the core principles of how AI interprets your requests.
                    </p>
                  </div>
                </div>
              </article>

              {/* Step 2 */}
              <article className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[32px] p-4 sm:p-5 lg:p-8 shadow-[0_4px_4px_0_rgba(0,0,0,0.25),30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset] min-h-[140px] sm:min-h-[180px] lg:min-h-[280px] flex flex-col justify-center" role="listitem">
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row sm:gap-3 lg:gap-8">
                  <div className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-none bg-gradient-to-b from-[#7A71DF] to-[#442785] bg-clip-text text-transparent drop-shadow-[0_18px_28.5px_rgba(0,0,0,0.25)]" aria-hidden="true">
                    2
                  </div>
                  <div className="flex-1 pt-1 sm:pt-2">
                    <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium leading-snug bg-gradient-to-b from-[#7771DF] to-[#E872D4] bg-clip-text text-transparent mb-2 sm:mb-3 lg:mb-6">
                      Master advanced techniques
                    </h3>
                    <p className="text-ethos-gray text-xs sm:text-sm lg:text-base xl:text-lg font-normal leading-relaxed">
                      Explore methods like zero-shot, few-shot, and chain-of-thought
                    </p>
                  </div>
                </div>
              </article>

              {/* Step 3 */}
              <article className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[32px] p-4 sm:p-5 lg:p-8 shadow-[0_4px_4px_0_rgba(0,0,0,0.25),30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset] min-h-[140px] sm:min-h-[180px] lg:min-h-[280px] flex flex-col justify-center" role="listitem">
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row sm:gap-3 lg:gap-8">
                  <div className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-none bg-gradient-to-b from-[#7A71DF] to-[#442785] bg-clip-text text-transparent drop-shadow-[0_18px_28.5px_rgba(0,0,0,0.25)]" aria-hidden="true">
                    3
                  </div>
                  <div className="flex-1 pt-1 sm:pt-2">
                    <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-medium leading-snug bg-gradient-to-b from-[#7771DF] to-[#E872D4] bg-clip-text text-transparent mb-2 sm:mb-3 lg:mb-6">
                      Apply and innovate
                    </h3>
                    <p className="text-ethos-gray text-xs sm:text-sm lg:text-base xl:text-lg font-normal leading-relaxed">
                      Use your skills to solve complex problems and create amazing things.
                    </p>
                  </div>
                </div>
              </article>
            </div>

          {/* What is Prompting Section */}
          <section className="pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-8 md:pb-12 lg:pb-16" aria-labelledby="what-is-prompting-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Responsive Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                {/* Text Content Column */}
                <div className="order-2 lg:order-1">
                  {/* Section Header - Left Aligned */}
                  <header className="mb-6 md:mb-8 lg:mb-10">
                    <h2 id="what-is-prompting-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight">
                      <span className="text-ethos-gray">What is </span>
                      <span className="text-ethos-purple">Prompting?</span>
                    </h2>
                  </header>
                  
                  {/* Content */}
                  <div className="space-y-4 md:space-y-5 lg:space-y-6">
                    <p className="text-ethos-gray text-sm lg:text-base xl:text-lg font-normal leading-relaxed">
                      Think of prompting as having a conversation with an AI. It's the art of giving clear, specific instructions to guide the AI towards the exact result you want. In essence, you're not just asking a question; you're programming the AI with words.
                    </p>
                    
                    <p className="text-ethos-gray text-sm lg:text-base xl:text-lg font-normal leading-relaxed">
                      A great prompt is like a good recipe—it gives the AI all the right ingredients and steps to create something amazing for you.
                    </p>
                  
                    {/* CTA Button */}
                    <div className="pt-6 md:pt-8 lg:pt-10">
                      <Button className="bg-ethos-purple-light hover:bg-ethos-purple text-white px-6 lg:px-8 xl:px-10 py-3 lg:py-4 rounded-full text-sm lg:text-base xl:text-lg font-normal h-auto transition-colors duration-300">
                        Go to Playground
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Image Column */}
                <div className="order-1 lg:order-2 relative">
                  <div className="flex justify-center">
                    <img
                      src={`${baseUrl}assets/images/prompting-illustration.jpg`}
                      alt="Interactive prompting illustration demonstrating AI conversation principles"
                      className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[750px] xl:max-w-[900px] 2xl:max-w-[1000px] h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* AI vs Human Conversation Section */}
      <section className="bg-gray-100 py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight">
              <span className="text-ethos-gray">AI vs. Human </span>
              <span className="text-ethos-purple">Conversation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
            {/* Talking to Human */}
            <div className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-center mb-6 lg:mb-8">
                <span className="text-ethos-gray">Talking to a </span>
                <span className="text-ethos-purple">Human</span>
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-ethos-gray text-sm lg:text-base xl:text-lg font-normal leading-relaxed">
                  Humans understand context, read between the lines, and use shared experiences to fill in the gaps. You can be vague, and they'll likely still get what you mean.
                </p>
                
                <p className="text-ethos-gray text-sm lg:text-base xl:text-lg font-bold leading-relaxed">
                  "Hey, can you suggest a dinner spot? Something not too fancy."
                </p>
              </div>
            </div>

            {/* Talking to AI */}
            <div className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-center mb-6 lg:mb-8">
                <span className="text-ethos-gray">Talking to an </span>
                <span className="text-ethos-purple">AI</span>
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-ethos-gray text-sm lg:text-base xl:text-lg font-normal leading-relaxed">
                  AI needs clear, direct instructions. It doesn't have personal experiences or intuition, so you need to provide all the necessary details for it to give you the best response.
                </p>
                
                <p className="text-ethos-gray text-sm lg:text-base xl:text-lg font-bold leading-relaxed">
                  "Suggest 3 casual Italian restaurants in San Francisco suitable for a date night, with an average price under $50 per person."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Break Down a Prompt Section */}
      <section className="bg-ethos-navy py-16 md:py-20 lg:py-24 xl:py-28" aria-labelledby="prompt-breakdown-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-end">
            {/* Text Content Column */}
            <div className="order-2 lg:order-1">
              {/* Section Header - Left Aligned */}
              <header className="mb-8 md:mb-10 lg:mb-12">
                <h2 id="prompt-breakdown-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-[#717493] bg-clip-text text-transparent">
                  Let's break down a prompt
                </h2>
                <p className="text-white text-sm lg:text-base xl:text-lg font-normal leading-relaxed mt-4 md:mt-5 lg:mt-6">
                  A good prompt is made of several key parts. Let's look at an example and see how they work together.
                </p>
              </header>

              {/* Content Points */}
              <div className="space-y-4 md:space-y-5 lg:space-y-6">
                {/* Point 1 */}
                <article className="flex items-start gap-3 lg:gap-4">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#E16D00] rounded flex-shrink-0 mt-1" aria-hidden="true"></div>
                  <div>
                    <h3 className="text-[#E16D00] text-xs lg:text-sm font-bold mb-1">
                      The Role: Set the Persona
                    </h3>
                    <p className="text-white text-xs lg:text-sm font-normal leading-relaxed">
                      Tells the AI who to be. This sets the tone, style, and expertise.
                    </p>
                  </div>
                </article>

                {/* Point 2 */}
                <article className="flex items-start gap-3 lg:gap-4">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#399703] rounded flex-shrink-0 mt-1" aria-hidden="true"></div>
                  <div>
                    <h3 className="text-[#399703] text-xs lg:text-sm font-bold mb-1">
                      The Task: Define the Goal
                    </h3>
                    <p className="text-white text-xs lg:text-sm font-normal leading-relaxed">
                      This is the core instruction—what you want the AI to do.
                    </p>
                  </div>
                </article>

                {/* Point 3 */}
                <article className="flex items-start gap-3 lg:gap-4">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#008A9D] rounded flex-shrink-0 mt-1" aria-hidden="true"></div>
                  <div>
                    <h3 className="text-[#008A9D] text-xs lg:text-sm font-bold mb-1">
                      The Context: Provide the Details
                    </h3>
                    <p className="text-white text-xs lg:text-sm font-normal leading-relaxed">
                      This gives the AI the 'who, what, where' to work with.
                    </p>
                  </div>
                </article>

                {/* Point 4 */}
                <article className="flex items-start gap-3 lg:gap-4">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#D50072] rounded flex-shrink-0 mt-1" aria-hidden="true"></div>
                  <div>
                    <h3 className="text-[#D50072] text-xs lg:text-sm font-bold mb-1">
                      The Constraint: Set the Rules
                    </h3>
                    <p className="text-white text-xs lg:text-sm font-normal leading-relaxed">
                      These are boundaries that guide the output.
                    </p>
                  </div>
                </article>
              </div>
            </div>

            {/* Image Column */}
            <div className="order-1 lg:order-2 relative h-full">
              {/* Background Grid Pattern */}
              <div className="absolute inset-0 flex justify-center items-center opacity-20 pointer-events-none">
                <img
                  src={`${baseUrl}assets/images/background-grid-pattern.png`}
                  alt=""
                  className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[700px] h-auto transform -rotate-45"
                  aria-hidden="true"
                />
              </div>
              
              {/* Main Illustration */}
              <div className="relative z-10 flex justify-center items-end h-full">
                <img
                  src={`${baseUrl}assets/images/prompting-guide/Group 226 1.png`}
                  alt="AI prompt breakdown illustration showing the components of effective prompting"
                  className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Your Learning Journey Section */}
      <section className="bg-white py-16 md:py-20 lg:py-24 xl:py-28 relative overflow-hidden" aria-labelledby="learning-journey-heading">
        {/* Full-width background image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            src={`${baseUrl}assets/images/prompting-guide/Group 216.png`}
            alt="Learning journey background illustration"
            className="w-full h-full object-contain opacity-80"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-8 md:mb-10 lg:mb-12">
            <h2 id="learning-journey-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight">
              <span className="text-ethos-gray">Start your </span>
              <span className="text-ethos-purple">learning journey</span>
            </h2>
          </header>

          {/* Learning Tiles */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6 xl:gap-8 max-w-4xl" role="list" aria-label="Learning paths">
              {/* Learn the Basics Tile */}
              <article className="group" role="listitem">
                <Link 
                  to="/basics" 
                  className="block transition-transform duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-ethos-purple focus:ring-offset-2 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]"
                  aria-label="Learn the basics of prompt engineering"
                >
                  <div className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 xl:p-10 shadow-[0_4px_4px_0_rgba(0,0,0,0.25),-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,30px_30px_50px_0_rgba(0,39,80,0.05)_inset] min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px] xl:min-h-[360px] w-full mx-auto relative">
                    <div className="absolute top-4 right-4 w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-[#A200FF] to-[#7938A4] rounded-full flex items-center justify-center" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    <div className="pt-6 sm:pt-8 lg:pt-12 text-center">
                      <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-medium mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                        <span className="text-ethos-gray">Learn the </span>
                        <span className="text-ethos-purple">Basics</span>
                      </h3>

                      <p className="text-ethos-gray text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
                        Learn the foundational skills of prompt engineering — how to craft clear, effective prompts to get accurate, creative, and useful responses from AI systems.
                      </p>
                    </div>
                  </div>
                </Link>
              </article>

              {/* Explore Techniques Tile */}
              <article className="group" role="listitem">
                <Link 
                  to="/techniques" 
                  className="block transition-transform duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-ethos-purple focus:ring-offset-2 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]"
                  aria-label="Explore advanced prompt engineering techniques"
                >
                  <div className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 xl:p-10 shadow-[0_4px_4px_0_rgba(0,0,0,0.25),-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,30px_30px_50px_0_rgba(0,39,80,0.05)_inset] min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[320px] xl:min-h-[360px] w-full mx-auto relative">
                    <div className="absolute top-4 right-4 w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-[#A200FF] to-[#7938A4] rounded-full flex items-center justify-center" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    <div className="pt-6 sm:pt-8 lg:pt-12 text-center">
                      <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-medium mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                        <span className="text-ethos-gray">Explore </span>
                        <span className="text-ethos-purple">Techniques</span>
                      </h3>

                      <p className="text-ethos-gray text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
                        Dive into practical techniques to enhance your prompt engineering skills.
                      </p>
                    </div>
                  </div>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </main>
    </div>
  );
};
