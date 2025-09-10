import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";

export const WaysWeCanHelp = () => {
  // Animation style for the floating effect
  const animationStyle = `
    @keyframes floatMole {
      0% { transform: translateY(0); }
      50% { transform: translateY(-1mm); }
      100% { transform: translateY(0); }
    }
    .animate-float-mole {
      animation: floatMole 4s ease-in-out infinite;
    }

    @keyframes star-border {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .animate-star-border {
      position: relative;
      z-index: 0;
      overflow: hidden;
    }
    .animate-star-border::before {
      content: '';
      position: absolute;
      z-index: -1;
      inset: -12px;
      background: conic-gradient(
        from 0deg,
        transparent,
        rgba(116, 9, 197, 0.4),
        rgba(116, 9, 197, 0.6),
        rgba(116, 9, 197, 0.6),
        transparent 180deg,
        rgba(116, 9, 197, 0.4),
        rgba(116, 9, 197, 0.6),
        rgba(116, 9, 197, 0.6),
        transparent 360deg
      );
      border-radius: inherit;
      opacity: 0;
      transform: rotate(0deg);
      transition: opacity 0.3s ease;
    }
    .animate-star-border:hover::before {
      opacity: 0.25;
      animation: star-border 12s linear infinite;
    }
    .animate-star-border::after {
      content: '';
      position: absolute;
      z-index: -1;
      inset: 1px;
      background: linear-gradient(to bottom, #f9fafb, #f3f4f6);
      border-radius: inherit;
    }
  `;
  
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  const moleImagePath = `${baseUrl}assets/images/mole1.png`;
  
  const services = [
    [
      {
        title: "Custom AI Solutions",
        subtitle: "Tailored AI systems for customer support, sales optimization, and operational automation."
      },
      {
        title: "System Integration & Automation",
        subtitle: "Seamlessly connect AI to your existing applications for automated workflow management."
      }
    ],
    [
      {
        title: "Intelligent Applications",
        subtitle: "Dynamic web and mobile applications that adapt intelligently to user behavior and preferences."
      },
      {
        title: "Digital Transformation",
        subtitle: "Modernize your digital presence with intelligent automation and enhanced user experiences."
      }
    ]
  ];


  const features = [
    {
      number: 1,
      title: "Natural, Human-Like Interactions",
      description: "Deliver exceptional customer experiences through AI that communicates naturally and personally. Our systems build trust and satisfaction by providing contextually aware, empathetic responses that feel genuinely human."
    },
    {
      number: 2,
      title: "Strategic Process Automation",
      description: "Enable your team to focus on high-value activities while AI handles routine operations like scheduling, confirmations, updates, and follow-ups. This strategic automation drives business growth and operational excellence."
    },
    {
      number: 3,
      title: "Real-Time Intelligence and Accuracy",
      description: "Deliver instant, precise information about products, services, availability, and policies. Our AI systems maintain current data to eliminate confusion, boost customer confidence, and increase conversion rates."
    },
    {
      number: 4,
      title: "Proactive Problem Resolution",
      description: "Our AI systems anticipate needs, identify issues early, and implement solutions autonomously. This proactive approach optimizes workflows, prevents bottlenecks, and maintains peak operational efficiency."
    }
  ];

  return (
    <section 
      className="w-full pt-8 md:pt-12 lg:pt-16 pb-6 md:pb-10 lg:pb-12" 
      style={{ background: 'linear-gradient(180deg, #FFF 37.11%, #E8E8E8 100%)' }} 
      aria-labelledby="ai-agent-heading"
    >
      {/* Mobile-only spacer */}
      <div className="block md:hidden h-8" />
      <style dangerouslySetInnerHTML={{ __html: animationStyle }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          {/* Left Side - AI Agent Image - Hidden on mobile and tablet */}
          <div className="hidden lg:flex justify-start items-start relative">
            <div className="relative -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 -ml-6 sm:-ml-10 md:-ml-14 lg:-ml-16">
              <img
                src={moleImagePath}
                alt="AI Agent"
                className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[560px] xl:max-w-[600px] h-auto object-contain animate-float-mole"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center w-full space-y-3 sm:space-y-4 lg:space-y-6">
            {/* Main Heading */}
            <header>
              <h2 
                id="ai-agent-heading" 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight tracking-tight mt-2 lg:mt-6 mb-2 lg:mb-3"
              >
                <span style={{ color: '#0F1345' }}>Enterprise AI Solutions for </span>
                <span style={{ color: '#7409C5' }}>Modern Business</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base font-normal leading-relaxed tracking-tight text-ethos-gray">
                Deploy intelligent AI systems that work continuously for your organization. 
                Our enterprise-grade solutions understand customer needs, automate complex workflows, 
                and deliver consistent, high-quality service around the clock — ensuring operational 
                excellence without human limitations.
              </p>
            </header>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 sm:space-x-5">
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                    <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-ethos-purple text-white text-xs sm:text-sm font-medium">
                      {feature.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mt-1.5">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ways We Can Help Section */}
        <section className="mb-16 md:mb-20 lg:mb-24" aria-labelledby="ways-help-heading">
          {/* Section Header */}
          <header className="text-center mb-12 md:mb-16 lg:mb-20">
            <h3 id="ways-help-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight">
              <span style={{ color: '#0F1345', fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Our comprehensive</span>
              <span style={{ color: '#7409C5', fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}> service offerings</span>
            </h3>
          </header>

          {/* Service Cards Grid */}
          <div className="w-full px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-8">
            {services.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                {row.map((service, index) => (
                  <div
                    key={`${rowIndex}-${index}`}
                    className="group w-full h-full flex flex-col bg-gradient-to-b from-white to-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 text-center transition-all duration-500 animate-star-border cursor-pointer"
                    role="article"
                    aria-labelledby={`service-${rowIndex}-${index}`}
                    style={{
                      boxShadow: "0 4px 4px rgba(116, 9, 197, 0.1), inset -30px -30px 50px rgba(255, 255, 255, 0.9), inset 30px 30px 50px rgba(116, 9, 197, 0.05)",
                      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                      transformStyle: "preserve-3d",
                      transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
                    }}
                    onMouseMove={(e) => {
                      const card = e.currentTarget;
                      const rect = card.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const rotateX = (y - centerY) / 20;
                      const rotateY = (centerX - x) / 20;
                      
                      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
                    }}
                  >
                    <h4 
                      id={`service-${rowIndex}-${index}`}
                      className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 bg-gradient-to-r from-ethos-purple-gradient-start to-ethos-purple-gradient-end bg-clip-text text-transparent tracking-tight leading-snug min-h-[2.5rem] flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105"
                    >
                      {service.title}
                    </h4>
                    <p className="text-sm sm:text-base font-normal text-gray-600 leading-relaxed tracking-tight flex-grow flex items-center transform transition-all duration-500 group-hover:text-gray-800">
                      {service.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16 lg:mt-20 mb-12 md:mb-16 lg:mb-20">
          <Link to="/solutions">
            <Button variant="cta" size="cta">
              Explore Our Solutions
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WaysWeCanHelp;