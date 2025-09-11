import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { Link } from 'react-router-dom';
import { ServiceCTA } from '@/components/services/ServiceCTA';
import { 
  Database, 
  Workflow, 
  RefreshCw, 
  GitBranch, 
  Shield, 
  Gauge, 
  Network, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Cpu,
  Server,
  Lock,
  BarChart2,
  Cloud,
  Code
} from 'lucide-react';

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

export default function SystemIntegration() {
  // Problem points with icons
  const problemPoints: ProblemPoint[] = [
    {
      icon: <Database className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Critical data trapped in isolated systems, making it impossible to get a complete view of your business"
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Employees wasting hours on manual data entry and reconciliation between different platforms"
    },
    {
      icon: <Workflow className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Inconsistent customer experiences due to information silos across sales, support, and marketing systems"
    },
    {
      icon: <Zap className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Missed opportunities because your tools don't share insights or trigger actions automatically"
    },
    {
      icon: <Shield className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Growing security and compliance risks from managing multiple disconnected systems"
    },
    {
      icon: <Network className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Difficulty scaling operations when your systems can't communicate effectively"
    }
  ];

  // Solution features with icons and gradients
  const solutionFeatures: SolutionFeature[] = [
    {
      title: "600+ App Integrations",
      description: "Seamlessly connect with all the tools you use daily, from email and calendar to CRM and marketing automation platforms.",
      icon: <Network className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-blue-50 to-purple-50'
    },
    {
      title: "Automated Data Flow",
      description: "Eliminate manual data entry with real-time synchronization between email, calendar, CRM, and other critical business systems.",
      icon: <RefreshCw className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-purple-50 to-pink-50'
    },
    {
      title: "Unified Workflows",
      description: "Create powerful automated workflows that span multiple applications, triggered by events or scheduled actions.",
      icon: <Workflow className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-pink-50 to-blue-50'
    },
    {
      title: "Centralized Control",
      description: "Manage all your integrations from a single dashboard with complete visibility and control over your connected systems.",
      icon: <Server className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-blue-50 to-indigo-50'
    },
    {
      title: "Process Automation",
      description: "From simple task management to complex process orchestration, we automate it with precision and reliability.",
      icon: <Cpu className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-indigo-50 to-purple-50'
    },
    {
      title: "Enterprise Security",
      description: "Bank-level encryption and strict access controls ensure your data remains secure across all integrated platforms.",
      icon: <Lock className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-purple-50 to-pink-50'
    }
  ];

  // Proof points with metrics
  const proofItems: ProofItem[] = [
    {
      metric: "85%",
      description: "Reduction in manual data entry, freeing up teams to focus on high-value work",
      icon: <Gauge className="w-8 h-8 text-white" />,
      bgColor: 'bg-ethos-purple/90'
    },
    {
      metric: "95%",
      description: "Improvement in data consistency across all business platforms",
      icon: <Database className="w-8 h-8 text-white" />,
      bgColor: 'bg-ethos-purple/80'
    },
    {
      metric: "60%",
      description: "Faster process completion through automated, cross-platform workflows",
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
            Connect Everything
          </span>
          <div className="-mt-1">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-ethos-purple/90 leading-tight">
              Seamless Business Integration
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-ethos-navy/80 leading-tight">
              & Automation
            </p>
          </div>
        </>
      }
      heroSubtitle="Transform your business with connected systems"
      heroDescription={
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Our integration solutions eliminate the chaos of disconnected business tools by creating seamless connections between all your platforms, automating data flow, and creating unified workflows that drive efficiency and growth.
          </p>
          <ul className="space-y-2 text-left text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Connect 600+ business applications in minutes</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Automate data flow between all your business tools</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Eliminate manual work and reduce errors</span>
            </li>
          </ul>
        </div>
      }
      heroImage="/assets/images/sysrem-integration.png"
      heroImageAlt="Business tools and platforms connected in a unified system"

      // Problem Statement Section
      problemTitle={
        <>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.02em] mb-6">
            <span className="text-ethos-navy">The High Cost of </span>
            <span className="text-ethos-purple">Disconnected Systems</span>
          </h2>
        </>
      }
      problemDescription="Your business runs on multiple platforms, but when they don't work together, you're losing time, money, opportunities, and most importantly - your competitive edge."
      problemPoints={problemPoints}

      // Solution Section
      solutionTitle={
        <>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.02em] mb-6">
            <span className="text-ethos-navy">Connect Everything, </span>
            <span className="text-ethos-purple">Work Smarter</span>
          </h2>
        </>
      }
      solutionDescription="Our 'Connect Everything' service transforms your disconnected tools into a unified business ecosystem. We make sure the right information reaches the right place at the right time, automatically."
      solutionFeatures={solutionFeatures}

      // Proof/Evidence Section
      proofTitle="The Power of Connected Systems"
      proofDescription="Businesses using our integration solutions experience transformative results that directly impact their bottom line."
      proofItems={proofItems}

      // CTA Section
      ctaSection={
        <ServiceCTA
          titlePart1="Ready to Connect"
          titlePart2="Everything?"
          description="Stop wasting time and money on disconnected systems. Let us show you how our 'Connect Everything' service can transform your business operations, improve efficiency, and give you back the time to focus on what really matters."
          buttonText="Talk to an Integration Specialist"
          buttonLink="/contact?source=system-integration"
        />
      }
    />
  );
}