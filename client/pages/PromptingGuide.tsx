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
                  Master Enterprise
                </span>
                <br />
                <span className="text-ethos-purple">
                  AI Prompt Engineering
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
                Master the strategic art of AI communication to unlock unprecedented business value. Transform complex requirements into precise, actionable AI instructions that drive measurable outcomes.
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
                  <span className="text-ethos-gray">Your Path to </span>
                  <span className="text-ethos-purple">AI Mastery</span>
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
                      Master Core Principles
                    </h3>
                    <p className="text-ethos-gray text-xs sm:text-sm lg:text-base xl:text-lg font-normal leading-relaxed">
                      Understand how enterprise AI systems process and respond to strategic business requirements.
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
                      Apply Advanced Methodologies
                    </h3>
                    <p className="text-ethos-gray text-xs sm:text-sm lg:text-base xl:text-lg font-normal leading-relaxed">
                      Implement sophisticated techniques including zero-shot learning, few-shot optimization, and chain-of-thought reasoning for complex business scenarios.
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
                      Drive Business Innovation
                    </h3>
                    <p className="text-ethos-gray text-xs sm:text-sm lg:text-base xl:text-lg font-normal leading-relaxed">
                      Apply advanced prompt engineering to solve strategic challenges and deliver transformative business solutions.
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
                      <span className="text-ethos-purple">Strategic Prompting?</span>
                    </h2>
                  </header>
                  
                  {/* Content */}
                  <div className="space-y-4 md:space-y-5 lg:space-y-6">
                    <p className="text-ethos-gray text-sm lg:text-base xl:text-lg font-normal leading-relaxed">
                      Strategic prompting is the discipline of crafting precise, context-aware instructions that guide AI systems toward optimal business outcomes. It's the bridge between complex organizational requirements and actionable AI responses—essentially programming intelligence through strategic communication.
                    </p>
                    
                    <p className="text-ethos-gray text-sm lg:text-base xl:text-lg font-normal leading-relaxed">
                      Effective enterprise prompting combines domain expertise, clear objectives, and structured methodology to consistently deliver high-quality, business-relevant AI outputs that drive measurable value.
                    </p>
                  
                    {/* CTA Button */}
                    <div className="pt-6 md:pt-8 lg:pt-10">
                      <Button className="bg-ethos-purple-light hover:bg-ethos-purple text-white px-6 lg:px-8 xl:px-10 py-3 lg:py-4 rounded-full text-sm lg:text-base xl:text-lg font-normal h-auto transition-colors duration-300">
                        Explore AI Platform
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
              <span className="text-ethos-gray">Enterprise AI vs. Human </span>
              <span className="text-ethos-purple">Communication</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
            {/* Talking to Human */}
            <div className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-center mb-6 lg:mb-8">
                <span className="text-ethos-gray">Human </span>
                <span className="text-ethos-purple">Communication</span>
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-ethos-gray text-sm lg:text-base xl:text-lg font-normal leading-relaxed">
                  Human colleagues leverage contextual understanding, organizational knowledge, and shared business experiences to interpret ambiguous requests and deliver appropriate responses.
                </p>
                
                <p className="text-ethos-gray text-sm lg:text-base xl:text-lg font-bold leading-relaxed">
                  "Can you prepare a market analysis? Make it comprehensive but accessible."
                </p>
              </div>
            </div>

            {/* Talking to AI */}
            <div className="bg-white rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-[30px_30px_50px_0_rgba(0,39,80,0.05)_inset,-30px_-30px_50px_0_rgba(255,255,255,0.70)_inset,0_4px_4px_0_rgba(0,0,0,0.25)] min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-center mb-6 lg:mb-8">
                <span className="text-ethos-gray">Enterprise AI </span>
                <span className="text-ethos-purple">Communication</span>
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-ethos-gray text-sm lg:text-base xl:text-lg font-normal leading-relaxed">
                  Enterprise AI systems require structured, detailed instructions with explicit context, objectives, and constraints. Without organizational intuition, they depend on comprehensive specifications to deliver optimal business outcomes.
                </p>
                
                <p className="text-ethos-gray text-sm lg:text-base xl:text-lg font-bold leading-relaxed">
                  "Generate a comprehensive market analysis for Q4 2024, focusing on SaaS competitors in the mid-market segment, including market share data, pricing strategies, and growth projections. Format as executive summary with supporting charts."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Break Down a Prompt Section */}
      <section className="bg-ethos-navy" aria-labelledby="prompt-breakdown-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-end">
            {/* Text Content Column - Always on top on mobile, left on desktop */}
            <div className="order-1 lg:order-1 my-12 lg:my-16">
              {/* Section Header - Left Aligned */}
              <header className="mb-8 md:mb-10 lg:mb-12">
                <h2 id="prompt-breakdown-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-[#717493] bg-clip-text text-transparent">
                  Enterprise Prompt Architecture
                </h2>
                <p className="text-white text-sm lg:text-base xl:text-lg font-normal leading-relaxed mt-4 md:mt-5 lg:mt-6">
                  Strategic business prompts require structured components that work synergistically to deliver precise, actionable results. Let's examine the essential architecture.
                </p>
              </header>

              {/* Content Points */}
              <div className="space-y-4 md:space-y-5 lg:space-y-6">
                {/* Point 1 */}
                <article className="flex items-start gap-3 lg:gap-4">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#E16D00] rounded flex-shrink-0 mt-1" aria-hidden="true"></div>
                  <div>
                    <h3 className="text-[#E16D00] text-xs lg:text-sm font-bold mb-1">
                      Role Definition: Strategic Context
                    </h3>
                    <p className="text-white text-xs lg:text-sm font-normal leading-relaxed">
                      Establishes the AI's expertise domain, perspective, and communication style aligned with business objectives.
                    </p>
                  </div>
                </article>

                {/* Point 2 */}
                <article className="flex items-start gap-3 lg:gap-4">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#399703] rounded flex-shrink-0 mt-1" aria-hidden="true"></div>
                  <div>
                    <h3 className="text-[#399703] text-xs lg:text-sm font-bold mb-1">
                      Objective Specification: Clear Deliverable
                    </h3>
                    <p className="text-white text-xs lg:text-sm font-normal leading-relaxed">
                      Precisely defines the desired outcome, deliverable format, and success criteria.
                    </p>
                  </div>
                </article>

                {/* Point 3 */}
                <article className="flex items-start gap-3 lg:gap-4">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#008A9D] rounded flex-shrink-0 mt-1" aria-hidden="true"></div>
                  <div>
                    <h3 className="text-[#008A9D] text-xs lg:text-sm font-bold mb-1">
                      Business Context: Strategic Framework
                    </h3>
                    <p className="text-white text-xs lg:text-sm font-normal leading-relaxed">
                      Provides essential business context, stakeholder requirements, and operational parameters.
                    </p>
                  </div>
                </article>

                {/* Point 4 */}
                <article className="flex items-start gap-3 lg:gap-4">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#D50072] rounded flex-shrink-0 mt-1" aria-hidden="true"></div>
                  <div>
                    <h3 className="text-[#D50072] text-xs lg:text-sm font-bold mb-1">
                      Parameters: Quality Controls
                    </h3>
                    <p className="text-white text-xs lg:text-sm font-normal leading-relaxed">
                      Establishes quality standards, compliance requirements, and output specifications.
                    </p>
                  </div>
                </article>
              </div>
            </div>

            {/* Image Column - Always below text on mobile, right on desktop */}
            <div className="order-2 lg:order-2 relative h-full min-h-[40vh] lg:min-h-[70vh] bg-gradient-to-br from-ethos-navy/50 via-ethos-navy/30 to-ethos-navy/10 rounded-2xl overflow-visible">
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
              <div className="relative z-50 flex justify-center items-end h-full w-full p-0 overflow-visible">
                <img
                  src={`${baseUrl}assets/images/prompting-guide/Group%20281.png`}
                  alt="AI prompt breakdown illustration showing the components of effective prompting"
                  className="h-auto w-auto max-h-[50vh] max-w-[90vw] md:max-h-[60vh] md:max-w-[70vw] object-contain object-bottom"
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
              <span className="text-ethos-gray">Begin Your </span>
              <span className="text-ethos-purple">AI Mastery Journey</span>
            </h2>
          </header>

          {/* Learning Tiles */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6 xl:gap-8 max-w-4xl" role="list" aria-label="Learning paths">
              {/* Learn the Basics Tile */}
              <article className="group" role="listitem">
                <Link 
                  to={{ pathname: "/basics", hash: "#hero-heading" }} 
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
                        <span className="text-ethos-gray">Master </span>
                        <span className="text-ethos-purple">Fundamentals</span>
                      </h3>

                      <p className="text-ethos-gray text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
                        Build essential prompt engineering competencies—master the strategic principles for crafting precise, business-focused prompts that consistently deliver high-value AI responses.
                      </p>
                    </div>
                  </div>
                </Link>
              </article>

              {/* Explore Techniques Tile */}
              <article className="group" role="listitem">
                <Link 
                  to={{ pathname: "/techniques", hash: "#hero-heading" }} 
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
                        <span className="text-ethos-gray">Advanced </span>
                        <span className="text-ethos-purple">Methodologies</span>
                      </h3>

                      <p className="text-ethos-gray text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
                        Explore sophisticated prompt engineering methodologies and enterprise-grade techniques for complex business applications and strategic AI implementations.
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
