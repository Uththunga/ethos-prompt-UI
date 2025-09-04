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
  `;
  
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  const moleImagePath = `${baseUrl}assets/images/Mole.png`;
  
  const services = [
    {
      title: "Custom AI Solutions",
      subtitle: "Tailored AI systems for customer support, sales optimization, and operational automation."
    },
    {
      title: "System Integration & Automation",
      subtitle: "Seamlessly connect AI to your existing applications for automated workflow management."
    },
    {
      title: "Prompt Management",
      subtitle: "Simple tools to organize your AI prompts for better results."
    },
    {
      title: "Intelligent Applications",
      subtitle: "Dynamic web and mobile applications that adapt intelligently to user behavior and preferences."
    },
    {
      title: "Digital Transformation",
      subtitle: "Modernize your digital presence with intelligent automation and enhanced user experiences."
    }
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
    <section className="w-full py-8 md:py-12 lg:py-16" style={{ background: 'linear-gradient(180deg, #FFF 37.11%, #E8E8E8 100%)' }} aria-labelledby="ai-agent-heading">
      <style dangerouslySetInnerHTML={{ __html: animationStyle }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 md:gap-8 lg:gap-12 mb-16 md:mb-20 lg:mb-24">
          {/* Left Side - AI Agent Image */}
          <div className="flex justify-start items-start relative">
            <div className="relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 -ml-8 sm:-ml-12 md:-ml-16 lg:-ml-20">
              <img
                src={moleImagePath}
                alt="AI Agent"
                className="w-full max-w-[360px] sm:max-w-[440px] md:max-w-[520px] lg:max-w-[600px] xl:max-w-[650px] h-auto object-contain animate-float-mole"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center w-full space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Main Heading */}
            <header>
              <h2 id="ai-agent-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight tracking-tight mb-3 lg:mb-4">
                <span style={{ color: '#0F1345' }}>Enterprise AI Solutions for </span>
                <span style={{ color: '#7409C5' }}>Modern Business</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight text-ethos-gray">
                Deploy intelligent AI systems that work continuously for your organization. Our enterprise-grade solutions understand customer needs, automate complex workflows, and deliver consistent, high-quality service around the clock — ensuring operational excellence without human limitations.
              </p>
            </header>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm lg:text-base bg-ethos-purple">
                    {feature.number}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-ethos-navy mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-ethos-gray leading-relaxed">
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
              <span style={{ color: '#0F1345', fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Ways that we can</span>
              <span style={{ color: '#7409C5', fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}> help you</span>
            </h3>
          </header>

          {/* Service Cards Grid */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-4 lg:gap-5 xl:gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-gradient-to-b from-gray-50 to-gray-100 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 xl:p-10 text-center hover:shadow-xl transition-shadow duration-300"
                  role="article"
                  aria-labelledby={`service-${index}`}
                  style={{
                    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25), inset -30px -30px 50px rgba(255, 255, 255, 0.7), inset 30px 30px 50px rgba(0, 39, 80, 0.05)"
                  }}
                >
                  <h4 id={`service-${index}`} className="text-base sm:text-lg lg:text-xl font-normal mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-ethos-purple-gradient-start to-ethos-purple-gradient-end bg-clip-text text-transparent tracking-tight leading-snug">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm lg:text-base font-normal bg-gradient-to-r from-ethos-gray to-ethos-gray-lighter bg-clip-text text-transparent leading-relaxed tracking-tight">
                    {service.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16 lg:mt-20">
          <Link to="/solutions">
            <Button variant="cta" size="cta">
              Read more
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WaysWeCanHelp;