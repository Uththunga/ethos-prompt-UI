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
  Code,
  DollarSign,
  AlertTriangle,
  Clock
} from 'lucide-react';
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
  // Exit intent popup functionality
  const { isPopupOpen, handleClosePopup, handleEmailSubmit, service } = useServiceExitIntent({
    service: 'system-integration',
    onEmailCapture: async (email: string, name?: string) => {
      console.log('Capturing lead for System Integration:', { email, name });
    }
  });

  // Mobile CTA configuration
  const mobileCTAConfig = getServiceCTAConfig('system-integration');

  // Client testimonials data
  const testimonials = [
    {
      name: "David Kim",
      role: "IT Director",
      company: "ManufacturingPro Inc",
      image: "/assets/images/testimonials/david-kim.jpg",
      testimonial: "Our 'Connect Everything' implementation eliminated 85% of manual data entry across our organization. We've saved over $180,000 annually in operational costs and our team can now focus on strategic initiatives instead of data reconciliation.",
      metrics: [
        { label: "Manual Work Reduced", value: "85%" },
        { label: "Annual Savings", value: "$180K" },
        { label: "Process Efficiency", value: "+67%" }
      ],
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Operations Manager",
      company: "ServiceFlow Solutions",
      image: "/assets/images/testimonials/lisa-thompson.jpg",
      testimonial: "The integration between our CRM, email marketing, and customer support systems has been transformational. We've seen a 45% improvement in customer satisfaction and our sales team is 60% more productive with automated lead nurturing.",
      metrics: [
        { label: "Customer Satisfaction", value: "+45%" },
        { label: "Sales Productivity", value: "+60%" },
        { label: "Lead Conversion", value: "+38%" }
      ],
      rating: 5
    }
  ];

  // Client logos data
  const clientLogos = [
    { name: "ManufacturingPro", logo: "/assets/images/clients/manufacturingpro.png", industry: "Manufacturing" },
    { name: "ServiceFlow", logo: "/assets/images/clients/serviceflow.png", industry: "Professional Services" },
    { name: "DataCorp", logo: "/assets/images/clients/datacorp.png", industry: "Technology" },
    { name: "HealthSystem Plus", logo: "/assets/images/clients/healthsystem.png", industry: "Healthcare" },
    { name: "RetailChain", logo: "/assets/images/clients/retailchain.png", industry: "Retail" },
    { name: "FinanceHub", logo: "/assets/images/clients/financehub.png", industry: "Finance" }
  ];

  // ROI Calculator configuration
  const roiCalculatorInputs = [
    {
      label: "Number of Employees",
      key: "employees",
      type: "number" as const,
      defaultValue: 50,
      suffix: "employees"
    },
    {
      label: "Average Hourly Rate",
      key: "hourlyRate",
      type: "number" as const,
      defaultValue: 35,
      prefix: "$"
    },
    {
      label: "Hours Spent on Manual Data Tasks (per employee/week)",
      key: "manualHours",
      type: "number" as const,
      defaultValue: 8,
      suffix: "hours"
    },
    {
      label: "Industry Type",
      key: "industry",
      type: "select" as const,
      options: ["Manufacturing", "Professional Services", "Healthcare", "Finance", "Technology", "Retail"],
      defaultValue: "Professional Services"
    }
  ];

  const calculateROI = (inputs: Record<string, any>) => {
    const employees = inputs.employees || 0;
    const hourlyRate = inputs.hourlyRate || 0;
    const manualHours = inputs.manualHours || 0;

    // Calculate current waste
    const weeklyWaste = employees * manualHours * hourlyRate;
    const monthlyWaste = weeklyWaste * 4.33; // Average weeks per month
    const annualWaste = monthlyWaste * 12;

    // Integration typically reduces manual work by 75-85%
    const efficiencyGain = 0.8; // 80% reduction
    const monthlySavings = monthlyWaste * efficiencyGain;
    const annualSavings = annualWaste * efficiencyGain;

    // Assume $2,500/month service cost for mid-size business
    const monthlyCost = 2500;
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
      title: "Essential",
      description: "Perfect for small teams getting started with integration",
      startingPrice: "$1,497/mo",
      features: [
        "Up to 10 app integrations",
        "Basic workflow automation",
        "Standard support",
        "Monthly reporting",
        "Email and chat support"
      ]
    },
    {
      title: "Professional",
      description: "Ideal for growing businesses with complex workflows",
      startingPrice: "$2,997/mo",
      features: [
        "Up to 50 app integrations",
        "Advanced workflow automation",
        "Custom API integrations",
        "Real-time monitoring",
        "Priority support",
        "Dedicated integration specialist"
      ],
      popular: true
    },
    {
      title: "Enterprise",
      description: "Custom solutions for large organizations",
      startingPrice: "Custom",
      features: [
        "Unlimited integrations",
        "Enterprise-grade security",
        "Custom development",
        "24/7 dedicated support",
        "SLA guarantees",
        "On-premise deployment options"
      ]
    }
  ];
  // Problem points with specific cost data
  const problemPoints: ProblemPoint[] = [
    {
      icon: <DollarSign className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Average enterprise wastes $15,000 per employee annually on manual data tasks (McKinsey Global Institute)"
    },
    {
      icon: <Clock className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Employees spend 21% of their time on manual data entry and reconciliation (Zapier State of Business Automation)"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Data silos cause 23% of revenue opportunities to be missed due to incomplete customer insights (Salesforce)"
    },
    {
      icon: <Database className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Manual data processes are 10x more prone to errors, costing businesses $3.1 trillion annually (IBM)"
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Disconnected systems increase security breach risk by 67% due to inconsistent access controls (Ponemon Institute)"
    },
    {
      icon: <Network className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Companies with poor system integration see 40% slower growth rates than integrated competitors (Deloitte)"
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
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ethos-navy leading-tight">
              Connect Everything
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xl md:text-2xl lg:text-3xl font-normal text-ethos-purple/90 leading-tight">
                Unify Your Business Ecosystem
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-normal text-ethos-navy/80 leading-tight">
                Seamless Integration, Endless Possibilities
              </p>
            </div>
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
      problemDescription="Disconnected systems are costing your business more than you realize. The average enterprise wastes 21% of employee time on manual data tasks, costing $15,000 per employee annually. Meanwhile, data silos cause 23% of revenue opportunities to be missed due to incomplete customer insights. Can you afford to keep hemorrhaging money on inefficient processes?"
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
      additionalContent={
        <>
          {/* Enhanced Sections - Optimized Conversion Flow */}

    {/* Phase 1: Attention & Problem Recognition */}
    {/* Urgency Banner - Create immediate scarcity */}
    <UrgencyBanner
      message="⚡ Limited Time: Free Integration Audit + 50% Off First Month Implementation"
      ctaText="Claim Free Audit"
      ctaLink="/contact?source=integration-urgent"
      expiryDate="December 31, 2024"
      limitedSlots={3}
    />

    {/* Phase 2: Solution Understanding & Trust Building */}
    {/* Trust Signals - Establish credibility early */}
    <TrustSignals
      certifications={["SOC 2 Type II", "ISO 27001", "NIST Cybersecurity Framework"]}
      awards={["Best Integration Platform 2024", "Enterprise Security Excellence"]}
      securityBadges={["End-to-End Encryption", "Zero-Trust Architecture", "24/7 Security Monitoring"]}
    />

    {/* Client Logos - Social proof foundation */}
    <ClientLogos
      title="Trusted by Enterprise Leaders"
      logos={clientLogos}
    />

    {/* Phase 3: Value Demonstration & Desire */}
    {/* Client Testimonials - Detailed social proof with metrics */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            Transformational Results from System Integration
          </h2>
          <p className="text-xl text-ethos-gray max-w-3xl mx-auto">
            See how businesses eliminated manual work and recovered thousands in operational costs with our Connect Everything service.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ClientTestimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>

    {/* Client Logos */}
    <ClientLogos
      title="Trusted by 150+ Data-Driven Organizations"
      logos={clientLogos}
    />

    {/* ROI Calculator */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            Calculate Your Integration ROI
          </h2>
          <p className="text-xl text-ethos-gray">
            See how much you could save by eliminating manual data tasks
          </p>
        </div>
        <GatedROICalculator
          title="System Integration ROI Calculator"
          description="Enter your organization details below to see your potential savings from connecting your business systems."
          service="system-integration"
          leadMagnet="Free Integration Audit Tool + Cost Savings Calculator + Implementation Roadmap"
          onEmailCapture={async (email: string, name?: string, calculatorData?: any) => {
            console.log('Integration ROI Calculator lead captured:', { email, name, calculatorData });
          }}
          inputs={roiCalculatorInputs}
          calculation={calculateROI}
        />
      </div>
    </section>

    {/* Pricing Section */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            Integration Plans That Scale With You
          </h2>
          <p className="text-xl text-ethos-gray mb-8">
            From simple automations to enterprise-wide integrations. All plans include setup, training, and ongoing support.
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Free integration audit included</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>

    {/* Trust Signals */}
    <TrustSignals
      certifications={["SOC 2 Type II", "ISO 27001", "GDPR Compliant"]}
      awards={["Best Integration Platform 2024", "Enterprise Choice Award"]}
      securityBadges={["Enterprise Security", "Data Encryption", "Compliance Ready"]}
    />

    {/* Service Bundle Recommendation */}
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceBundleRecommendations currentService="system-integration" />
      </div>
    </section>

    {/* Cross-Service Navigation */}
    <CrossServiceNavigation
      currentService="system-integration"
      title="Complete Your Digital Ecosystem"
      description="Enhance your integrations with AI automation and modern applications"
      showComparison={true}
    />

    {/* Integration Examples */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            Popular Integration Workflows
          </h2>
          <p className="text-xl text-ethos-gray">
            See how we connect your favorite business tools
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-ethos-navy mb-4">Sales & Marketing Automation</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <span className="text-ethos-gray">Lead captured in website form</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">2</span>
                </div>
                <span className="text-ethos-gray">Automatically added to CRM with lead scoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">3</span>
                </div>
                <span className="text-ethos-gray">Triggers personalized email sequence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">4</span>
                </div>
                <span className="text-ethos-gray">Creates follow-up task for sales team</span>
              </div>
            </div>
            <div className="mt-6 text-sm text-ethos-purple font-medium">
              Saves 15 hours/week per sales rep
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-ethos-navy mb-4">Customer Support Integration</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">1</span>
                </div>
                <span className="text-ethos-gray">Support ticket created</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">2</span>
                </div>
                <span className="text-ethos-gray">Customer data pulled from CRM</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">3</span>
                </div>
                <span className="text-ethos-gray">Updates customer record with issue details</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">4</span>
                </div>
                <span className="text-ethos-gray">Sends resolution notification via preferred channel</span>
              </div>
            </div>
            <div className="mt-6 text-sm text-ethos-purple font-medium">
              Improves resolution time by 60%
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            Integration Questions Answered
          </h2>
        </div>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">How long does a typical integration take?</h3>
            <p className="text-ethos-gray">Simple integrations (2-3 apps) can be completed in 1-2 weeks. Complex enterprise integrations typically take 4-8 weeks. We provide detailed timelines during your free audit.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">What if we use custom or legacy systems?</h3>
            <p className="text-ethos-gray">We specialize in connecting legacy systems to modern platforms. Our team has experience with custom APIs, database integrations, and even mainframe connections.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">How do you ensure data security during integration?</h3>
            <p className="text-ethos-gray">All data transfers use enterprise-grade encryption. We're SOC 2 Type II certified and follow strict security protocols. Your data never leaves your approved systems without proper authorization.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">What happens if one of our integrated systems changes?</h3>
            <p className="text-ethos-gray">We monitor all integrations 24/7 and provide automatic updates when systems change. Our support team proactively manages any required adjustments to keep your workflows running smoothly.</p>
          </div>
        </div>
      </div>
    </section>

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
      service="system-integration"
      showAfterScroll={400}
    />
        </>
      }
    />
  );
}