import { Button } from '@/components/ui/button';

export const Hero = () => {
  // Add animation style in a style tag to ensure it's scoped
  const animationStyle = `
    @keyframes float {
      0% { transform: translate(-50%, -50%) translateY(0); }
      50% { transform: translate(-50%, -50%) translateY(-1mm); }
      100% { transform: translate(-50%, -50%) translateY(0); }
    }
    .animate-float-slow {
      animation: float 4s ease-in-out infinite;
    }
  `;
  
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  const group282Path = `${baseUrl}assets/images/Group 282.png`;
  const botPath = `${baseUrl}assets/images/bot.png`;
  
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationStyle }} />
    
    <main
      className="relative w-full overflow-hidden min-h-screen bg-white"
      role="main"
      id="main-content"
    >
      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20">
        {/* Hero Banner */}
        <section className="text-center mb-4 -mt-2" aria-labelledby="hero-heading">
          <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-poppins leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-ethos-navy-light to-ethos-gray-light bg-clip-text text-transparent">
              Transform your Business
            </span>
            <br />
            <span className="bg-gradient-to-r from-ethos-navy-light to-ethos-gray-light bg-clip-text text-transparent">
              with{" "}
            </span>
            <span className="text-ethos-purple">AI Agents</span>
          </h1>
        </section>

        {/* Hero Image with Overlay */}
        <div className="relative flex justify-center -mt-4" role="img" aria-label="AI Agent interface demonstration">
          <div className="relative">
            <img
              src={group282Path}
              alt="Interactive AI agent dashboard interface showing workflow automation"
              className="w-full h-auto object-contain"
            />
            <img
              src={botPath}
              alt="Animated AI assistant character"
              className="absolute top-[calc(40.5%+2mm)] sm:top-[calc(42.5%+2mm)] md:top-[calc(52.5%+4mm)] lg:top-[calc(53.5%+4mm)] left-[56%] sm:left-[58%] md:left-[calc(59%+2mm)] lg:left-[calc(59%+2mm)] transform -translate-x-1/2 -translate-y-1/2 w-[44%] sm:w-[45%] md:w-[46%] h-auto animate-float-slow"
              style={{ top: 'calc(40.5% + 2.0mm)', left: 'calc(56% + 3.0mm)' }}
            />
          </div>
        </div>
      </div>

      {/* Proven Results Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 mt-16" aria-labelledby="results-heading">
        {/* Section Header */}
        <header className="mb-12 md:mb-16 lg:mb-20">
          <h2 id="results-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-snug tracking-tight">
            <span className="bg-gradient-to-r from-ethos-navy-light to-ethos-gray-light bg-clip-text text-transparent">
              Proven results for{" "}
            </span>
            <span className="text-ethos-purple">Your Business</span>
          </h2>
        </header>

        {/* Feature Cards and CTA - 4 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4" role="list" aria-label="Business results statistics">
          {/* Card 1 - 30% */}
          <article style={{ width: '100%', height: '100%', background: 'linear-gradient(319deg, white 0%, #EDEDED 100%)', boxShadow: '4px 14px 50.400001525878906px rgba(139, 113, 221, 0.26)', borderRadius: 30, position: 'relative' }} className="p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto" role="listitem">
            <div className="mb-6 flex justify-start w-full">
              <div className="flex justify-start pl-6 sm:pl-6 md:pl-6 lg:pl-6">
                <div style={{ display: 'inline-block', background: 'white', borderRadius: 70, padding: '10px 20px' }}>
                  <span
                    className="block text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-ethos-purple-gradient-start to-ethos-purple-gradient-end bg-clip-text text-transparent leading-none tracking-tight"
                  >
                    30%
                  </span>
                </div>
              </div>
            </div>
            <h3 className="text-ethos-gray text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-3 sm:mb-4 leading-snug tracking-tight">
              Increased sales rates
            </h3>
            <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight">
              Ai can ensures automatic task handling, scheduling optimizing lead to customer conversations
            </p>
          </article>

          {/* Card 2 - 80% */}
          <article style={{ width: '100%', height: '100%', background: 'linear-gradient(319deg, white 0%, #EDEDED 100%)', boxShadow: '4px 14px 50.400001525878906px rgba(139, 113, 221, 0.26)', borderRadius: 30, position: 'relative' }} className="p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto" role="listitem">
            <div className="mb-6 flex justify-start w-full">
              <div className="flex justify-start pl-6 sm:pl-6 md:pl-6 lg:pl-6">
                <div style={{ display: 'inline-block', background: 'white', borderRadius: 70, padding: '10px 20px' }}>
                  <span
                    className="block text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-ethos-purple-gradient-start to-ethos-purple-gradient-end bg-clip-text text-transparent leading-none tracking-tight"
                  >
                    80%
                  </span>
                </div>
              </div>
            </div>
            <h3 className="text-ethos-gray text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-3 sm:mb-4 leading-snug tracking-tight">
              Cutoff manual and repetitive work
            </h3>
            <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight">
              AI agents can massively reducing manual and repetitive work.
            </p>
          </article>

          {/* Card 3 - 40% */}
          <article style={{ width: '100%', height: '100%', background: 'linear-gradient(319deg, white 0%, #EDEDED 100%)', boxShadow: '4px 14px 50.400001525878906px rgba(139, 113, 221, 0.26)', borderRadius: 30, position: 'relative' }} className="p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto" role="listitem">
            <div className="mb-6 flex justify-start w-full">
              <div className="flex justify-start pl-6 sm:pl-6 md:pl-6 lg:pl-6">
                <div style={{ display: 'inline-block', background: 'white', borderRadius: 70, padding: '10px 20px' }}>
                  <span
                    className="block text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-ethos-purple-gradient-start to-ethos-purple-gradient-end bg-clip-text text-transparent leading-none tracking-tight"
                  >
                    40%
                  </span>
                </div>
              </div>
            </div>
            <h3 className="text-ethos-gray text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-3 sm:mb-4 leading-snug tracking-tight">
              Leverage your cost savings
            </h3>
            <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight">
              Increased sales, lowering your overheads will provide significant cost savings on your Business
            </p>
          </article>

          {/* CTA Card */}
          <aside style={{ width: '100%', height: '100%', background: 'linear-gradient(319deg, white 0%, #EDEDED 100%)', boxShadow: '4px 14px 50.400001525878906px rgba(139, 113, 221, 0.26)', borderRadius: 30 }} className="flex flex-col justify-center items-center text-center p-4 sm:p-6 lg:p-8 xl:p-10 w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto" role="listitem">
            <h3 className="text-ethos-gray text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-4 sm:mb-6 lg:mb-8 leading-snug tracking-tight">
              See how your Business can achieve these results
            </h3>
            <div className="w-full flex justify-center">
              <Button 
                variant="cta" 
                size="cta"
                aria-label="Schedule consultation to discuss business results"
              >
                Talk to Expert
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </main>
    </>
  );
};