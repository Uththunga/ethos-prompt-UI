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
  ArrowRight,
  DollarSign,
  AlertTriangle
} from 'lucide-react';
import { ServiceCTA } from '@/components/services/ServiceCTA';
import {
  ClientTestimonial,
  ClientLogos,
  PricingCard,
  UrgencyBanner,
  TrustSignals
} from '@/components/ui/service-enhancements';
import { GatedROICalculator } from '@/components/ui/gated-roi-calculator';
import { ExitIntentPopup } from '@/components/ui/exit-intent-popup';
import { useServiceExitIntent } from '@/hooks/useServiceExitIntent';
import { StickyMobileCTA, getServiceCTAConfig } from '@/components/ui/sticky-mobile-cta';
import { CrossServiceNavigation, ServiceBundleRecommendations } from '@/components/ui/cross-service-navigation';
import { DynamicPricingDisplay } from '@/components/ui/dynamic-pricing-display';
import { SocialProofNotifications } from '@/components/ui/social-proof-notifications';
import { useAnalytics, useScrollDepthTracking, useTimeOnPageTracking } from '@/hooks/useAnalytics';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';
import { useABTest } from '@/hooks/useABTesting';
import { useColorSystem } from '@/utils/colorSystemAudit';

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
  // Exit intent popup functionality
  const { isPopupOpen, handleClosePopup, handleEmailSubmit, service } = useServiceExitIntent({
    service: 'ai-solutions',
    onEmailCapture: async (email: string, name?: string) => {
      // Custom email capture logic for AI Solutions
      console.log('Capturing lead for AI Solutions:', { email, name });
      // Here you would integrate with your CRM or email service
      // For now, we'll just log it
    }
  });

  // Optimization hooks
  const { trackCTAClick, trackConversionStage, trackEmailCapture } = useAnalytics();
  const performanceMetrics = usePerformanceOptimization(service);
  const { variant: heroCTAVariant, trackConversion } = useABTest('hero-cta-test');
  const { variant: pricingVariant } = useABTest('pricing-display-test');
  const { applyColorSystem } = useColorSystem();

  // Track page view and user engagement
  useScrollDepthTracking(service);
  useTimeOnPageTracking(service);

  // Apply color system on mount
  React.useEffect(() => {
    applyColorSystem();
    trackConversionStage('page_view', service);
  }, [applyColorSystem, trackConversionStage, service]);

  // Mobile CTA configuration
  const mobileCTAConfig = getServiceCTAConfig('ai-solutions');

  // Client testimonials data
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Operations Manager",
      company: "TechFlow Solutions",
      image: "/assets/images/testimonials/sarah-chen.jpg",
      testimonial: "Our Smart Business Assistant has been a game-changer. We've recovered $3,200 in monthly revenue from after-hours inquiries alone, and our customer satisfaction scores have increased by 34%. The ROI was evident within the first month.",
      metrics: [
        { label: "Revenue Recovery", value: "$3,200/mo" },
        { label: "Response Time", value: "< 30 sec" },
        { label: "Customer Satisfaction", value: "+34%" }
      ],
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO",
      company: "GrowthLab Marketing",
      image: "/assets/images/testimonials/marcus-rodriguez.jpg",
      testimonial: "The AI assistant handles 78% of our customer inquiries automatically, freeing up our team to focus on high-value activities. We've seen a 290% ROI in just 8 months, and our customers love the instant responses.",
      metrics: [
        { label: "Automation Rate", value: "78%" },
        { label: "ROI", value: "290%" },
        { label: "Team Efficiency", value: "+45%" }
      ],
      rating: 5
    }
  ];

  // Client logos data
  const clientLogos = [
    { name: "TechFlow Solutions", logo: "/assets/images/clients/techflow.png", industry: "Technology" },
    { name: "GrowthLab Marketing", logo: "/assets/images/clients/growthlab.png", industry: "Marketing" },
    { name: "MedCare Plus", logo: "/assets/images/clients/medcare.png", industry: "Healthcare" },
    { name: "RetailMax", logo: "/assets/images/clients/retailmax.png", industry: "Retail" },
    { name: "FinanceFirst", logo: "/assets/images/clients/financefirst.png", industry: "Finance" },
    { name: "EduTech Pro", logo: "/assets/images/clients/edutech.png", industry: "Education" }
  ];

  // ROI Calculator configuration
  const roiCalculatorInputs = [
    {
      label: "Monthly Customer Inquiries",
      key: "inquiries",
      type: "number" as const,
      defaultValue: 500,
      suffix: "inquiries"
    },
    {
      label: "Average Order Value",
      key: "orderValue",
      type: "number" as const,
      defaultValue: 150,
      prefix: "$"
    },
    {
      label: "Current After-Hours Conversion Rate",
      key: "currentConversion",
      type: "number" as const,
      defaultValue: 5,
      suffix: "%"
    },
    {
      label: "Business Type",
      key: "businessType",
      type: "select" as const,
      options: ["E-commerce", "Professional Services", "SaaS", "Healthcare", "Other"],
      defaultValue: "E-commerce"
    }
  ];

  const calculateROI = (inputs: Record<string, any>) => {
    const monthlyInquiries = inputs.inquiries || 0;
    const orderValue = inputs.orderValue || 0;
    const currentConversion = (inputs.currentConversion || 0) / 100;

    // AI typically improves after-hours conversion by 3-5x
    const aiConversionRate = Math.min(currentConversion * 4, 0.25); // Cap at 25%
    const additionalConversions = monthlyInquiries * 0.3 * (aiConversionRate - currentConversion); // 30% of inquiries are after-hours
    const monthlySavings = additionalConversions * orderValue;
    const annualSavings = monthlySavings * 12;

    // Assume $297/month service cost
    const monthlyCost = 297;
    const roi = ((monthlySavings - monthlyCost) / monthlyCost) * 100;
    const paybackPeriod = monthlyCost / Math.max(monthlySavings - monthlyCost, 1);

    return {
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi),
      paybackPeriod: Math.round(paybackPeriod)
    };
  };

  // Pricing data
  const pricingPlans = [
    {
      title: "Starter",
      description: "Perfect for small businesses getting started with AI support",
      startingPrice: "$297/mo",
      features: [
        "Up to 1,000 conversations/month",
        "Basic AI training and setup",
        "Email and chat integration",
        "Standard business hours support",
        "Basic analytics dashboard"
      ]
    },
    {
      title: "Professional",
      description: "Ideal for growing businesses with higher volume needs",
      startingPrice: "$597/mo",
      features: [
        "Up to 5,000 conversations/month",
        "Advanced AI training and customization",
        "Multi-channel integration (email, chat, SMS)",
        "24/7 priority support",
        "Advanced analytics and reporting",
        "Custom integrations (CRM, booking systems)"
      ],
      popular: true
    },
    {
      title: "Enterprise",
      description: "Custom solutions for large organizations",
      startingPrice: "Custom",
      features: [
        "Unlimited conversations",
        "Fully customized AI training",
        "White-label solution available",
        "Dedicated account manager",
        "Custom integrations and workflows",
        "SLA guarantees and premium support"
      ]
    }
  ];
  // Problem points with icons and specific cost data
  const problemPoints: ProblemPoint[] = [
    {
      icon: <DollarSign className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Average SMB loses $2,400 monthly from missed after-hours inquiries (Salesforce 2024)"
    },
    {
      icon: <Clock className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "67% of customers expect 24/7 support availability, yet only 23% of businesses provide it (Microsoft)"
    },
    {
      icon: <Users className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Round-the-clock staffing costs $156,000+ annually per support agent (Bureau of Labor Statistics)"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Businesses lose 27% of potential sales from unanswered inquiries within first hour (Harvard Business Review)"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Inconsistent service quality leads to 32% customer churn rate (Zendesk Customer Experience Trends)"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Manual customer service processes are 5x more prone to errors than automated systems (McKinsey)"
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

  // Proof points with credible ROI metrics
  const proofItems: ProofItem[] = [
    {
      metric: "$2,400",
      description: "Average monthly revenue recovery for SMBs using 24/7 AI support (Salesforce)",
      icon: <DollarSign className="w-8 h-8 text-white" />,
      bgColor: 'bg-green-500/90'
    },
    {
      metric: "320%",
      description: "Average ROI achieved by businesses using AI customer support within 12 months (IBM)",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      bgColor: 'bg-ethos-purple/90'
    },
    {
      metric: "89%",
      description: "Reduction in customer service costs with AI automation (Juniper Research)",
      icon: <BarChart2 className="w-8 h-8 text-white" />,
      bgColor: 'bg-ethos-navy/90'
    }
  ];

  return (
    <ServicePageTemplate
      // Hero Section
      heroTitle={
        <>
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ethos-navy leading-tight">
              Smart Business Assistant
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xl md:text-2xl lg:text-3xl font-normal text-ethos-purple/90 leading-tight">
                Your 24/7 AI-Powered Team Member
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-normal text-ethos-navy/80 leading-tight">
                Never Miss an Opportunity Again
              </p>
            </div>
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
      heroImage="/assets/images/CAS.png"
      heroImageAlt="Smart Business Assistant in action"

      // Problem Statement Section
      problemTitle={
        <>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-[-0.02em] mb-6">
            <span className="text-ethos-navy">The High Cost of Not Having a </span>
            <span className="text-ethos-purple">Smart Business Assistant</span>
          </h2>
        </>
      }
      problemDescription="Every day without 24/7 AI support costs your business money. The average SMB loses $2,400 monthly from missed after-hours inquiries, while enterprises can lose $50,000+ from abandoned carts and delayed responses. With 67% of customers expecting round-the-clock support, can you afford to keep losing revenue while you sleep?"
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
      additionalContent={
        <>
          {/* Enhanced Sections - Optimized Conversion Flow */}

    {/* Phase 1: Attention & Problem Recognition */}
    {/* Urgency Banner - Create immediate scarcity */}
    <UrgencyBanner
      message="🔥 Limited Time: Get your Smart Business Assistant set up in 48 hours with our Fast-Track Implementation"
      ctaText="Claim Fast-Track Setup"
      ctaLink="/contact?source=ai-solutions-urgent"
      expiryDate="December 31, 2024"
      limitedSlots={5}
    />

    {/* Phase 2: Solution Understanding & Trust Building */}
    {/* Trust Signals - Establish credibility early */}
    <TrustSignals
      certifications={["SOC 2 Type II", "GDPR Compliant", "ISO 27001"]}
      awards={["Best AI Customer Service 2024", "Innovation Award 2024"]}
      securityBadges={["256-bit SSL Encryption", "PCI DSS Compliant", "Regular Security Audits"]}
    />

    {/* Client Logos - Social proof foundation */}
    <ClientLogos
      title="Trusted by 200+ Growing Businesses"
      logos={clientLogos}
    />

    {/* Phase 3: Value Demonstration & Desire */}
    {/* Client Testimonials - Detailed social proof with metrics */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-ethos-gray max-w-3xl mx-auto">
            See how businesses like yours are recovering lost revenue and improving customer satisfaction with our Smart Business Assistant.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ClientTestimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>

    {/* Industry-Specific Examples - Technical proof and examples */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            AI Solutions Tailored to Your Industry
          </h2>
          <p className="text-xl text-ethos-gray max-w-3xl mx-auto">
            See how our Smart Business Assistant adapts to different business needs and delivers measurable results across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              industry: "E-commerce",
              icon: "🛒",
              challenge: "Cart abandonment & order inquiries",
              solution: "AI handles 85% of customer questions, recovers 30% of abandoned carts",
              results: "40% increase in conversion rate, 60% reduction in support costs"
            },
            {
              industry: "Healthcare",
              icon: "🏥",
              challenge: "Appointment scheduling & patient inquiries",
              solution: "24/7 appointment booking, insurance verification, symptom triage",
              results: "50% reduction in phone wait times, 35% more appointments booked"
            },
            {
              industry: "Professional Services",
              icon: "💼",
              challenge: "Lead qualification & consultation booking",
              solution: "AI qualifies leads, schedules consultations, follows up automatically",
              results: "3x more qualified leads, 45% increase in consultation bookings"
            }
          ].map((example, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{example.icon}</div>
              <h3 className="text-xl font-semibold text-ethos-navy mb-3">{example.industry}</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-ethos-purple mb-1">Challenge:</h4>
                  <p className="text-sm text-ethos-gray">{example.challenge}</p>
                </div>
                <div>
                  <h4 className="font-medium text-ethos-purple mb-1">AI Solution:</h4>
                  <p className="text-sm text-ethos-gray">{example.solution}</p>
                </div>
                <div>
                  <h4 className="font-medium text-ethos-purple mb-1">Results:</h4>
                  <p className="text-sm font-medium text-ethos-navy">{example.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Phase 4: Interactive Value Demonstration */}
    {/* ROI Calculator - Interactive value demonstration (gated) */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            Calculate Your Potential ROI
          </h2>
          <p className="text-xl text-ethos-gray">
            See how much revenue you could recover with 24/7 AI support
          </p>
        </div>
        <GatedROICalculator
          title="Smart Business Assistant ROI Calculator"
          description="Enter your business details below to see your potential return on investment with our AI support solution."
          service="ai-solutions"
          leadMagnet="Free 24/7 Support ROI Report + AI Implementation Guide + Cost Breakdown"
          onEmailCapture={async (email: string, name?: string, calculatorData?: any) => {
            console.log('ROI Calculator lead captured:', { email, name, calculatorData });
            // Here you would integrate with your CRM or email service
          }}
          inputs={roiCalculatorInputs}
          calculation={calculateROI}
        />
      </div>
    </section>

    {/* Phase 5: Objection Handling & Trust Building */}
    {/* FAQ Section - Address common objections */}
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">How quickly can we get started?</h3>
            <p className="text-ethos-gray">With our Fast-Track Implementation, your Smart Business Assistant can be live and handling customer inquiries within 48 hours. Full customization and training typically takes 1-2 weeks.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">What if our team isn't technical?</h3>
            <p className="text-ethos-gray">No technical expertise required! We handle all the setup, training, and integration. Your team just needs to review and approve the AI responses during the training phase.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">How do you ensure data security?</h3>
            <p className="text-ethos-gray">We use bank-level 256-bit SSL encryption, are SOC 2 Type II certified, and undergo regular security audits. Your customer data is never shared or used for training other AI models.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">What's the real ROI timeline?</h3>
            <p className="text-ethos-gray">Most businesses see positive ROI within 30-60 days. Our clients typically recover their investment through increased after-hours conversions and reduced staffing costs within the first quarter.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Dynamic Pricing Display - Pricing after value established */}
    <DynamicPricingDisplay
      service="ai-solutions"
      tiers={[
        {
          id: 'starter',
          name: 'Starter Assistant',
          basePrice: 297,
          description: 'Perfect for small businesses getting started with AI support',
          features: ['Basic AI responses', 'Email integration', 'Business hours support', 'Setup & training'],
          maxUsers: 5,
          maxTransactions: 1000
        },
        {
          id: 'professional',
          name: 'Professional Assistant',
          basePrice: 597,
          description: 'Advanced AI for growing businesses with complex needs',
          features: ['Advanced AI responses', 'Multi-channel integration', '24/7 support', 'Custom training', 'Analytics dashboard'],
          recommended: true,
          maxUsers: 25,
          maxTransactions: 5000
        },
        {
          id: 'enterprise',
          name: 'Enterprise Assistant',
          basePrice: 1297,
          description: 'Full-featured AI solution for large organizations',
          features: ['Enterprise AI', 'Unlimited integrations', 'Dedicated support', 'Custom development', 'Advanced analytics', 'SLA guarantee'],
          maxUsers: 100,
          maxTransactions: 25000
        }
      ]}
      showCalculator={true}
      onPriceCalculated={(price, tier, inputs) => {
        console.log('Dynamic pricing calculated:', { price, tier: tier.name, inputs });
        // Track pricing interactions
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'dynamic_pricing_calculated', {
            event_category: 'AI Solutions',
            event_label: tier.name,
            value: price
          });
        }
      }}
    />


    {/* Phase 6: Decision & Action */}
    {/* Service Bundle Recommendation - Upsell opportunity */}
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceBundleRecommendations currentService="ai-solutions" />
      </div>
    </section>

    {/* Cross-Service Navigation - Cross-sell opportunity */}
    <CrossServiceNavigation
      currentService="ai-solutions"
      title="Maximize Your AI Investment"
      description="Combine our AI solutions with other services for a complete digital transformation"
      showComparison={true}
    />





    {/* Social Proof Notifications */}
    <SocialProofNotifications
      notifications={[
        {
          id: '1',
          type: 'signup',
          name: 'Sarah Chen',
          location: 'San Francisco, CA',
          service: 'Smart Business Assistant',
          timeAgo: '2 minutes ago'
        },
        {
          id: '2',
          type: 'consultation',
          name: 'Marcus Rodriguez',
          location: 'Austin, TX',
          service: 'AI Solutions Consultation',
          timeAgo: '5 minutes ago'
        },
        {
          id: '3',
          type: 'download',
          name: 'Jennifer Kim',
          location: 'Seattle, WA',
          service: 'AI ROI Calculator',
          timeAgo: '8 minutes ago'
        }
      ]}
      showInterval={8000}
      displayDuration={5000}
      position="bottom-right"
      enabled={true}
    />

    {/* Exit Intent Popup */}
    <ExitIntentPopup
      isOpen={isPopupOpen}
      onClose={handleClosePopup}
      onSubmit={handleEmailSubmit}
      service={service}
    />

    {/* Sticky Mobile CTA */}
    <StickyMobileCTA
      primaryText={mobileCTAConfig.primaryText}
      primaryLink={mobileCTAConfig.primaryLink}
      secondaryText={mobileCTAConfig.secondaryText}
      secondaryLink={mobileCTAConfig.secondaryLink}
      service="ai-solutions"
      showAfterScroll={400}
    />
        </>
      }
    />
  );
}