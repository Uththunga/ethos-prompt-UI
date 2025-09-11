import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Globe, 
  Cpu, 
  Users, 
  TrendingUp, 
  Shield, 
  Lightbulb, 
  RefreshCw, 
  Zap, 
  BarChart2 as BarChart, 
  Cloud, 
  Lock, 
  Clock,
  CheckCircle,
  ArrowRight,
  Target,
  Calendar
} from 'lucide-react';
import { ServiceCTA } from '@/components/services/ServiceCTA';

// Extend the problem point type to include icon
type ProblemPoint = {
  icon: React.ReactNode;
  text: string;
};

// Extend the solution feature type to include gradient
type SolutionFeature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient?: string;
};

// Extend the proof item type to include bgColor
type ProofItem = {
  metric: string;
  description: string;
  icon: React.ReactNode;
  bgColor?: string;
};

export default function DigitalTransformation() {
  // Problem points with icons
  const problemPoints: ProblemPoint[] = [
    {
      icon: <Clock className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Legacy systems like WordPress become increasingly difficult to maintain, with 60% of businesses reporting security vulnerabilities and performance issues"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Migration projects often face 30-40% cost overruns without proper planning and execution strategies in place"
    },
    {
      icon: <Shield className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Outdated CMS platforms are 5x more likely to experience security breaches compared to modern React-based solutions"
    },
    {
      icon: <Users className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Content teams struggle with rigid legacy systems, reducing publishing efficiency by up to 50% compared to modern headless CMS options"
    },
    {
      icon: <Cpu className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Technical debt from outdated technology can slow down feature development by 3-4x compared to modern frameworks"
    },
    {
      icon: <BarChart className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Businesses that delay modernization see 2-3x higher costs when they're eventually forced to upgrade under pressure"
    }
  ];

  // Solution features with icons and gradients
  const solutionFeatures: SolutionFeature[] = [
    {
      title: "Legacy to React Migration",
      description: "Seamless transition from WordPress and other legacy systems to modern React architectures, preserving content while improving performance by 3-5x.",
      icon: <RefreshCw className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-blue-50 to-purple-50'
    },
    {
      title: "Headless CMS Integration",
      description: "Decouple your frontend from the backend with headless CMS solutions, enabling faster content updates and omnichannel publishing.",
      icon: <Cpu className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-purple-50 to-pink-50'
    },
    {
      title: "Incremental Migration",
      description: "Adopt a phased migration approach, allowing business continuity while gradually replacing legacy components with modern alternatives.",
      icon: <TrendingUp className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-pink-50 to-blue-50'
    },
    {
      title: "Performance Optimization",
      description: "Achieve 2-3x faster page loads by optimizing and modernizing your technology stack with the latest web performance techniques.",
      icon: <Zap className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-blue-50 to-indigo-50'
    },
    {
      title: "Content Migration",
      description: "Automated tools and strategies to migrate content from legacy systems while maintaining SEO value and URL structures.",
      icon: <Cloud className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-indigo-50 to-purple-50'
    },
    {
      title: "Training & Documentation",
      description: "Comprehensive training programs to ensure your team is proficient with the new technology stack post-migration.",
      icon: <Users className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-purple-50 to-pink-50'
    }
  ];

  // Proof points with metrics
  const proofItems: ProofItem[] = [
    {
      metric: "6-9",
      description: "Months typical migration timeline for mid-sized businesses moving from legacy to modern stacks",
      icon: <Calendar className="w-8 h-8 text-white" />,
      bgColor: 'bg-ethos-purple/90'
    },
    {
      metric: "70%",
      description: "Reduction in maintenance costs after migrating from traditional CMS to modern JAMstack architecture",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      bgColor: 'bg-ethos-purple/80'
    },
    {
      metric: "5x",
      description: "Faster page loads achieved by businesses after migrating to React-based solutions",
      icon: <Zap className="w-8 h-8 text-white" />,
      bgColor: 'bg-ethos-purple/70'
    }
  ];

  return (
    <ServicePageTemplate
      // Hero Section
      heroTitle={
        <>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-ethos-navy -mt-2">
            Technology Migration
          </span>
          <div className="-mt-1">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-ethos-purple/90 leading-tight">
              From Legacy to Modern Web
            </p>
          </div>
        </>
      }
      heroSubtitle="Seamless transition to future-proof technology"
      heroDescription={
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Upgrade from outdated platforms to modern, scalable solutions with our proven migration framework. 
            We specialize in transforming legacy systems into high-performance digital experiences.
          </p>
          <ul className="space-y-2 text-left text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Migrate from WordPress, Drupal, and other legacy CMS</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Modern React architecture for better performance</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Minimal business disruption during transition</span>
            </li>
          </ul>
        </div>
      }
      heroImage={
        <div className="w-full lg:w-3/4 xl:w-2/3 ml-auto">
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src="/assets/images/digitaltransformation.png" 
              alt="Business technology modernization" 
              className="w-full max-w-3xl h-auto border-0 outline-none"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
      }

      // Problem Statement Section
      problemTitle={
        <>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.02em] mb-6">
            <span className="text-ethos-navy">The Risks of Sticking with </span>
            <span className="text-ethos-purple">Outdated Technology</span>
          </h2>
        </>
      }
      problemDescription="Maintaining legacy systems comes with hidden costs and risks that can hinder your business growth. Modernization isn't just an option—it's a necessity for staying competitive in today's digital landscape."
      problemPoints={problemPoints}

      // Solution Section
      solutionTitle={
        <>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.02em] mb-6">
            <span className="text-ethos-navy">Proven Migration </span>
            <span className="text-ethos-purple">Strategies</span>
          </h2>
        </>
      }
      solutionDescription="Our comprehensive approach to technology migration ensures a smooth transition with minimal business disruption while maximizing the benefits of modern web technologies."
      solutionFeatures={solutionFeatures}

      // Proof/Evidence Section
      proofTitle={
        <>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.02em] mb-6">
            <span className="text-ethos-navy">Migration Success </span>
            <span className="text-ethos-purple">By The Numbers</span>
          </h2>
        </>
      }
      proofDescription="Real results from our migration projects show the tangible benefits of modernizing your technology stack."
      proofItems={proofItems}

      // CTA Section
      ctaSection={
        <ServiceCTA
          titlePart1="Start Your Digital"
          titlePart2="Migration Journey"
          description="Ready to leave behind the limitations of legacy technology? Our migration experts will create a customized plan to modernize your digital presence with minimal disruption to your business."
          buttonText="Talk to a Digital Transformation Specialist"
          buttonLink="/contact?source=digital-transformation"
        />
      }
    />
  );
}