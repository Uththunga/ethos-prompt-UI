import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { Smartphone, Monitor, Brain, Users, Zap, BarChart3, Sparkles, Layers, Clock, TrendingUp, Shield, Target, MessageSquare, CheckCircle } from 'lucide-react';
import { ServiceCTA } from '@/components/services/ServiceCTA';

export default function IntelligentApplications() {
  return (
    <ServicePageTemplate
      // Hero Section
      heroTitle={
        <>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-ethos-navy -mt-2">
            Web & Mobile Solutions
          </span>
          <div className="-mt-1">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-ethos-purple/90 leading-tight">
              The Digital Foundation of Modern Business
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-ethos-navy/80 leading-tight">
              Where 85% of Customer Journeys Begin
            </p>
          </div>
        </>
      }
      heroSubtitle="Your Business, Anytime, Anywhere"
      heroDescription={
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            In today's mobile-first world, having a robust web and mobile presence isn't optional—it's essential for survival. 
            With 6.92 billion smartphone users globally (85% of the world's population), businesses without mobile-optimized 
            solutions risk losing up to 60% of potential customers.
          </p>
          <ul className="space-y-2 text-left text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>AI-driven personalization that increases customer engagement by up to 150%</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Seamless integration with your existing business systems</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Proactive features that anticipate user needs and boost conversions</span>
            </li>
          </ul>
        </div>
      }
      heroImage={
        <div className="w-full lg:w-3/4 xl:w-2/3 ml-auto -mr-8">
          <div className="relative w-full h-full flex items-center justify-end pr-0">
            <img 
              src={`${process.env.PUBLIC_URL || ''}/assets/images/integrationapp.png`} 
              alt="Intelligent Applications in action" 
              className="w-full max-w-4xl h-auto border-0 outline-none"
              style={{ background: 'transparent', maxHeight: '700px', objectFit: 'contain' }}
            />
          </div>
        </div>
      }

      // Problem Statement Section
      problemTitle={
        <>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.02em] mb-6">
            <span className="text-ethos-navy">The High Cost of </span>
            <span className="text-ethos-purple">Digital Obsolescence</span>
          </h2>
        </>
      }
      problemDescription="Businesses without modern web and mobile solutions face an uphill battle in today's digital economy. Consider these eye-opening statistics that highlight the cost of inaction:"
      problemPoints={[
        {
          icon: <Clock className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
          text: "53% of mobile site visits are abandoned if pages take longer than 3 seconds to load, directly impacting your bottom line"
        },
        {
          icon: <TrendingUp className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
          text: "Businesses with mobile-optimized sites see 62% higher conversion rates than those without (Google)"
        },
        {
          icon: <Users className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
          text: "74% of users are more likely to return to mobile-friendly websites, directly affecting customer retention"
        },
        {
          icon: <MessageSquare className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
          text: "57% of users won't recommend a business with a poorly designed mobile site, damaging your brand reputation"
        },
        {
          icon: <Shield className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
          text: "85% of adults think a company's mobile website should be as good or better than their desktop version"
        },
        {
          icon: <Target className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
          text: "Mobile commerce now accounts for 72.9% of total e-commerce sales, making mobile optimization a revenue imperative"
        }
      ]}

      // Solution Section
      solutionTitle={
        <>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.02em] mb-6">
            <span className="text-ethos-navy">Future-Proof Digital Solutions </span>
            <span className="text-ethos-purple">for Maximum Impact</span>
          </h2>
        </>
      }
      solutionDescription="Our comprehensive web and mobile solutions are engineered to deliver measurable business outcomes. We don't just build applications—we create digital experiences that drive growth, efficiency, and customer loyalty through:"
      solutionFeatures={[
        {
          title: "Mobile-First Development",
          description: "Responsive designs that deliver flawless experiences across all devices, with mobile load times under 2 seconds and 100% Google PageSpeed scores.",
          icon: <Smartphone className="w-6 h-6 text-ethos-purple" />,
          gradient: 'from-blue-50 to-purple-50'
        },
        {
          title: "Performance Optimization",
          description: "Lightning-fast applications with optimized assets, code splitting, and advanced caching strategies that achieve 95+ performance scores.",
          icon: <Zap className="w-6 h-6 text-ethos-purple" />,
          gradient: 'from-purple-50 to-pink-50'
        },
        {
          title: "Progressive Web Apps (PWA)",
          description: "App-like experiences that work offline, load instantly, and can be installed on any device—no app store required.",
          icon: <Layers className="w-6 h-6 text-ethos-purple" />,
          gradient: 'from-pink-50 to-blue-50'
        },
        {
          title: "Cross-Platform Compatibility",
          description: "Seamless functionality across iOS, Android, and web platforms with a single codebase, reducing development time by 50%.",
          icon: <Monitor className="w-6 h-6 text-ethos-purple" />,
          gradient: 'from-blue-50 to-indigo-50'
        },
        {
          title: "Enterprise-Grade Security",
          description: "Bank-level encryption, regular security audits, and compliance with GDPR, CCPA, and other global data protection regulations.",
          icon: <Shield className="w-6 h-6 text-ethos-purple" />,
          gradient: 'from-indigo-50 to-purple-50'
        },
        {
          title: "Scalable Cloud Infrastructure",
          description: "Auto-scaling solutions that handle traffic spikes without performance degradation, ensuring 99.99% uptime.",
          icon: <TrendingUp className="w-6 h-6 text-ethos-purple" />,
          gradient: 'from-purple-50 to-pink-50'
        }
      ]}

      // Proof/Evidence Section
      proofTitle={
        <>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.02em] mb-6">
            <span className="text-ethos-navy">The ROI of Digital Excellence: </span>
            <span className="text-ethos-purple">By the Numbers</span>
          </h2>
        </>
      }
      proofDescription="The impact of our web and mobile solutions is measurable and significant. Here's what our clients typically experience:"
      proofItems={[
        {
          metric: "3.5x",
          description: "Higher conversion rates with mobile-optimized experiences (Google)",
          icon: <TrendingUp className="w-8 h-8 text-white" />,
          bgColor: 'bg-ethos-purple/90'
        },
        {
          metric: "70%",
          description: "Of digital media time spent on mobile devices (eMarketer)",
          icon: <Smartphone className="w-8 h-8 text-white" />,
          bgColor: 'bg-ethos-purple/80'
        },
        {
          metric: "$4.9T",
          description: "Projected mobile commerce sales by 2025 (Statista)",
          icon: <BarChart3 className="w-8 h-8 text-white" />,
          bgColor: 'bg-ethos-purple/70'
        }
      ]}

      // CTA Section
      ctaSection={
        <ServiceCTA
          titlePart1="Is Your Business Ready for the"
          titlePart2="Mobile-First Future?"
          description="The mobile revolution isn't coming—it's already here. With 8 out of 10 consumers using mobile devices to shop and engage with brands, can you afford to be left behind? Get a free 30-minute consultation, a comprehensive audit of your current digital presence, and a custom roadmap for digital transformation tailored to your business goals."
          buttonText="Talk to a Mobile Solutions Specialist"
          buttonLink="/contact?source=mobile-solutions"
        />
      }
    />
  );
}