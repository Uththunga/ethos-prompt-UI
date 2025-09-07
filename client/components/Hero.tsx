import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ShinyText from './ShinyText';
const groupHeroPath = process.env.NODE_ENV === 'production' 
    ? '/ethos-prompt-UI/assets/images/Group%20hero.png' 
    : '/assets/images/Group%20hero.png';

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

    @keyframes hero-star-border {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    /* Specific to Hero section cards */
    .animate-star-border {
      position: relative;
      z-index: 0;
      overflow: hidden;
    }
    [role="list"][aria-label="Business results statistics"] .animate-star-border::before {
      content: '';
      position: absolute;
      z-index: -1;
      inset: -10px;
      background: conic-gradient(
        from 0deg,
        rgba(139, 92, 246, 0.1),
        rgba(139, 92, 246, 0.4),
        rgba(168, 85, 247, 0.6),
        rgba(192, 132, 252, 0.7),
        rgba(216, 180, 254, 0.6),
        rgba(139, 92, 246, 0.1) 180deg,
        rgba(139, 92, 246, 0.4),
        rgba(168, 85, 247, 0.6),
        rgba(192, 132, 252, 0.7),
        rgba(216, 180, 254, 0.6),
        rgba(139, 92, 246, 0.1) 360deg
      );
      border-radius: inherit;
      animation: hero-star-border 12s linear infinite;
      opacity: 0.8;
      filter: blur(2.5px);
    }
    [role="list"][aria-label="Business results statistics"] .animate-star-border::after {
      content: '';
      position: absolute;
      z-index: -1;
      inset: 1.5px;
      background: linear-gradient(to bottom, #f9fafb, #f3f4f6);
      border-radius: inherit;
      box-shadow: inset 0 0 25px rgba(139, 92, 246, 0.08);
    }
  `;
  
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  const group282Path = `${baseUrl}assets/images/Group 288.png`;
  const botPath = `${baseUrl}assets/images/bot.png`;
    const group287Path = `${baseUrl}assets/images/Group 287.svg`;
  
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
       <section className="relative z-10 text-center mb-12 -mt-2" aria-labelledby="hero-heading">
          <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-poppins leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-ethos-navy-light to-ethos-gray-light bg-clip-text text-transparent">
            Accelerate Your Business Growth
          </span>
            <br />
            <span className="bg-gradient-to-r from-ethos-navy-light to-ethos-gray-light bg-clip-text text-transparent">
            with {" "}
          </span>
            <ShinyText className="bg-gradient-to-r from-purple-500 to-purple-500" speedInMs={10000}>Intelligent AI Solutions</ShinyText>
          </h1>
        </section>

        {/* Hero Image with Overlay */}
        <div className="relative z-1 flex justify-center -mt-4" role="img" aria-label="AI Agent interface demonstration">
          <div className="relative">
            {/* Desktop Image - shown on lg screens and up */}
            <img
              src={group282Path}
              alt="Interactive AI agent dashboard interface showing workflow automation"
              className="hidden lg:block w-full h-auto object-contain"
              width={1090}
              height={642}
            />
              {/* Inserted SVG between Group 288.png and bot.png for large screens */}
              <img
                src={group287Path}
                alt="Decorative SVG graphic"
                className="hidden lg:block absolute top-[54%] left-[54%] transform -translate-x-1/2 -translate-y-1/2 w-[67%] h-auto"
                style={{ zIndex: 25 }}
              />
            {/* Mobile/Tablet Image - shown on screens smaller than lg */}
            <img
              src={groupHeroPath}
              alt="Interactive AI agent dashboard interface"
              className="lg:hidden w-full h-auto object-contain"
              width={1090}
              height={642}
            />
            <img
              src={botPath}
              alt="Animated AI assistant character"
              className="hidden lg:block absolute top-[calc(52.5%-26.5mm)] lg:top-[calc(53.5%-26.5mm)] left-[calc(59%-1.8mm)] lg:left-[calc(59%-1.8mm)] transform -translate-x-1/2 -translate-y-1/2 w-[46%] h-auto animate-float-slow"
              style={{ zIndex: 20 }}
            />
          </div>
        </div>
      </div>

      {/* Proven Results Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 mt-16" aria-labelledby="results-heading">
        {/* Section Header */}
        <header className="mb-8 md:mb-10 lg:mb-12 text-left">
          <h2 id="results-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.13] tracking-[-0.03em] max-w-7xl">
            <span className="text-ethos-navy-light">
              Measurable Impact for
            </span>
            <ShinyText className="bg-gradient-to-r from-ethos-purple to-ethos-purple ml-4" speedInMs={10000}>Forward-Thinking Companies</ShinyText>
          </h2>
        </header>

        {/* Feature Cards and CTA - 4 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4" role="list" aria-label="Business results statistics">
          {/* Card 1 - 30% */}
          <div 
            className="w-full h-full flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 transition-all duration-300 animate-star-border"
            role="article"
            style={{
              boxShadow: '0 15px 35px -5px rgba(128, 128, 128, 0.25)'
            }}
          >
            <div className="mb-4 flex justify-start w-full">
              <div className="bg-white rounded-full px-3 py-1 sm:px-4 sm:py-1.5">
                <span
                  className="block text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-ethos-purple-gradient-start to-ethos-purple-gradient-end bg-clip-text text-transparent"
                >
                  30%
                </span>
              </div>
            </div>
            <h3 className="text-ethos-gray text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-3 sm:mb-4 leading-snug tracking-tight">
              Revenue Growth
            </h3>
            <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight">
              AI-powered automation streamlines lead qualification and customer engagement, driving higher conversion rates
            </p>
          </div>

          {/* Card 2 - 80% */}
          <div 
            className="w-full h-full flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 transition-all duration-300 animate-star-border"
            role="article"
            style={{
              boxShadow: '0 15px 35px -5px rgba(128, 128, 128, 0.25)'
            }}
          >
            <div className="mb-4 flex justify-start w-full">
              <div className="bg-white rounded-full px-3 py-1 sm:px-4 sm:py-1.5">
                <span
                  className="block text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-ethos-purple-gradient-start to-ethos-purple-gradient-end bg-clip-text text-transparent"
                >
                  80%
                </span>
              </div>
            </div>
            <h3 className="text-ethos-gray text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-3 sm:mb-4 leading-snug tracking-tight">
              Operational Efficiency
            </h3>
            <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight">
              Intelligent automation eliminates repetitive tasks, allowing your team to focus on strategic initiatives
            </p>
          </div>

          {/* Card 3 - 40% */}
          <div 
            className="w-full h-full flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 transition-all duration-300 animate-star-border"
            role="article"
            style={{
              boxShadow: '0 15px 35px -5px rgba(128, 128, 128, 0.25)'
            }}
          >
            <div className="mb-4 flex justify-start w-full">
              <div className="bg-white rounded-full px-3 py-1 sm:px-4 sm:py-1.5">
                <span
                  className="block text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-ethos-purple-gradient-start to-ethos-purple-gradient-end bg-clip-text text-transparent"
                >
                  40%
                </span>
              </div>
            </div>
            <h3 className="text-ethos-gray text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-3 sm:mb-4 leading-snug tracking-tight">
              Cost Reduction
            </h3>
            <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight">
              Automated processes and improved resource allocation significantly lower operational expenses
            </p>
          </div>

          {/* CTA Card */}
          <aside style={{ width: '100%', height: '100%', background: 'transparent', boxShadow: 'none', borderRadius: 30 }} className="flex flex-col justify-center items-center text-center p-4 sm:p-6 lg:p-8 xl:p-10 w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto" role="listitem">
            <h3 className="text-ethos-gray text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-4 sm:mb-6 lg:mb-8 leading-snug tracking-tight">
              Discover how your organization can achieve these outcomes
            </h3>
            <div className="w-full flex justify-center">
              <Link to="/contact">
                <Button 
                  variant="cta" 
                  size="cta"
                  aria-label="Schedule consultation to discuss business results"
                >
                  Talk to Expert
                </Button>
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
    </>
  );
};