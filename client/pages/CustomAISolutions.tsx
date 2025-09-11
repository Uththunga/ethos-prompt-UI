import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Clock, 
  Target, 
  Calendar, 
  BarChart2, 
  CheckCircle,
  ArrowRight 
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

export default function CustomAISolutions() {
  // Problem points with icons
  const problemPoints: ProblemPoint[] = [
    {
      icon: <Clock className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Missed business opportunities when you're not available 24/7"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Inconsistent customer service quality across different team members"
    },
    {
      icon: <Users className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "High operational costs for round-the-clock staffing"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Lost sales from abandoned carts and unanswered inquiries"
    },
    {
      icon: <Shield className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Security concerns with handling sensitive customer data"
    },
    {
      icon: <Target className="w-6 h-6 text-ethos-purple mt-0.5 flex-shrink-0" />,
      text: "Difficulty scaling support during peak business hours"
    }
  ];

  // Solution features with icons and gradients
  const solutionFeatures: SolutionFeature[] = [
    {
      title: "24/7 Availability",
      description: "Your business never sleeps with our AI assistant handling customer inquiries around the clock.",
      icon: <Clock className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-blue-50 to-purple-50'
    },
    {
      title: "Sales & Support",
      description: "Convert more leads and provide instant support to boost customer satisfaction and sales.",
      icon: <TrendingUp className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-purple-50 to-pink-50'
    },
    {
      title: "Booking Management",
      description: "Seamlessly manage appointments and reservations with our integrated booking system.",
      icon: <Calendar className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-pink-50 to-blue-50'
    },
    {
      title: "Natural Conversations",
      description: "AI that understands and responds naturally, just like a human team member would.",
      icon: <MessageSquare className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-blue-50 to-indigo-50'
    },
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and focus on growing your business.",
      icon: <Zap className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-indigo-50 to-purple-50'
    },
    {
      title: "Continuous Learning",
      description: "The more it interacts, the better it gets at serving your business needs.",
      icon: <BarChart2 className="w-6 h-6 text-ethos-purple" />,
      gradient: 'from-purple-50 to-pink-50'
    }
  ];

  // Proof points with metrics
  const proofItems: ProofItem[] = [
    {
      metric: "24/7",
      description: "Round-the-clock customer support availability",
      icon: <Clock className="w-8 h-8 text-white" />,
      bgColor: 'bg-ethos-purple/90'
    },
    {
      metric: "10x",
      description: "Faster response times compared to human agents",
      icon: <Zap className="w-8 h-8 text-white" />,
      bgColor: 'bg-ethos-purple/80'
    },
    {
      metric: "98%",
      description: "Customer satisfaction rate with AI interactions",
      icon: <BarChart2 className="w-8 h-8 text-white" />,
      bgColor: 'bg-ethos-purple/70'
    }
  ];

  return (
    <ServicePageTemplate
      // Hero Section
      heroTitle={
        <>
          <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-ethos-navy -mt-2">
            Smart Business Assistant
          </span>
          <div className="-mt-1">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-ethos-purple/90 leading-tight">
              AI-Powered 24/7 Customer Service
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-ethos-navy/80 leading-tight">
              & Sales Support
            </p>
          </div>
        </>
      }
      heroSubtitle="Transform your business with AI"
      heroDescription={
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Our Smart Business Assistant handles daily operations, answers customer queries, and drives sales 
            around the clock, just like a skilled team member who never sleeps.
          </p>
          <ul className="space-y-2 text-left text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>24/7 customer support with instant responses</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Seamless booking and reservation management</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Natural, human-like conversations</span>
            </li>
          </ul>
        </div>
      }
      heroImage={
        <div className="w-full lg:w-4/5 xl:w-2/3 ml-auto mr-8">
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src="/assets/images/CAS.png" 
              alt="Smart Business Assistant in action" 
              className="w-full max-w-6xl h-auto border-0 outline-none"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
      }

      // Problem Statement Section
      problemTitle={
        <>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.02em] mb-6">
            <span className="text-ethos-navy">The High Cost of Not Having a </span>
            <span className="text-ethos-purple">Smart Business Assistant</span>
          </h2>
        </>
      }
      problemDescription="Businesses without 24/7 AI support face significant challenges in today's always-on economy. From missed opportunities to inconsistent customer experiences, the limitations of traditional support models are becoming increasingly apparent."
      problemPoints={problemPoints}

      // Solution Section
      solutionTitle={
        <>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.02em] mb-6">
            <span className="text-ethos-navy">Smart Business Assistant </span>
            <span className="text-ethos-purple">Features</span>
          </h2>
        </>
      }
      solutionDescription="Our AI-powered assistant is designed to handle all aspects of customer interaction, providing seamless support and driving business growth while you focus on what matters most."
      solutionFeatures={solutionFeatures}

      // Proof/Evidence Section
      proofTitle={
        <>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.02em] mb-6">
            <span className="text-ethos-navy">Real Business </span>
            <span className="text-ethos-purple">Impact</span>
          </h2>
        </>
      }
      proofDescription="Businesses using our Smart Business Assistant have seen remarkable improvements in their operations and customer satisfaction."
      proofItems={proofItems}

      // CTA Section
      ctaSection={
        <ServiceCTA
          titlePart1="Ready to Transform Your Business"
          titlePart2="with AI?"
          description="Get started with your Smart Business Assistant today and experience the future of customer engagement. No credit card required, get started in minutes with our 14-day free trial."
          buttonText="Talk to an AI Specialist"
          buttonLink="/contact?source=ai-solutions"
        />
      }
    />
  );
}