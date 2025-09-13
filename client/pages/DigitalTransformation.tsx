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
  Calendar,
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
import { SecurityScanner } from '@/components/ui/security-scanner';
import { InteractiveFAQ } from '@/components/ui/interactive-faq';
import { SocialProofNotifications } from '@/components/ui/social-proof-notifications';

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
  // Exit intent popup functionality
  const { isPopupOpen, handleClosePopup, handleEmailSubmit, service } = useServiceExitIntent({
    service: 'digital-transformation',
    onEmailCapture: async (email: string, name?: string) => {
      console.log('Capturing lead for Digital Transformation:', { email, name });
    }
  });

  // Mobile CTA configuration
  const mobileCTAConfig = getServiceCTAConfig('digital-transformation');

  // Client testimonials data
  const testimonials = [
    {
      name: "Michael Rodriguez",
      role: "CEO",
      company: "LegalPro Associates",
      image: "/assets/images/testimonials/michael-rodriguez.jpg",
      testimonial: "Our WordPress site was costing us $3,000 monthly in maintenance and lost opportunities. The new modern platform reduced our costs by 75% and increased lead generation by 180%. We've recovered our investment in just 4 months.",
      metrics: [
        { label: "Cost Reduction", value: "75%" },
        { label: "Lead Generation", value: "+180%" },
        { label: "ROI Timeline", value: "4 months" }
      ],
      rating: 5
    },
    {
      name: "Amanda Foster",
      role: "Operations Director",
      company: "MedTech Solutions",
      image: "/assets/images/testimonials/amanda-foster.jpg",
      testimonial: "Migrating from our legacy system to a modern cloud platform was the best decision we made. We've eliminated 90% of our IT headaches, improved security, and our team productivity increased by 45%. The transformation was seamless.",
      metrics: [
        { label: "IT Issues Reduced", value: "90%" },
        { label: "Team Productivity", value: "+45%" },
        { label: "Security Incidents", value: "Zero" }
      ],
      rating: 5
    }
  ];

  // Client logos data
  const clientLogos = [
    { name: "LegalPro Associates", logo: "/assets/images/clients/legalpro.png", industry: "Legal Services" },
    { name: "MedTech Solutions", logo: "/assets/images/clients/medtech.png", industry: "Healthcare Technology" },
    { name: "BuildCorp", logo: "/assets/images/clients/buildcorp.png", industry: "Construction" },
    { name: "EduAcademy", logo: "/assets/images/clients/eduacademy.png", industry: "Education" },
    { name: "RetailPlus", logo: "/assets/images/clients/retailplus.png", industry: "Retail" },
    { name: "ConsultingEdge", logo: "/assets/images/clients/consultingedge.png", industry: "Consulting" }
  ];

  // ROI Calculator configuration
  const roiCalculatorInputs = [
    {
      label: "Current Monthly IT/Maintenance Costs",
      key: "currentCosts",
      type: "number" as const,
      defaultValue: 2500,
      prefix: "$"
    },
    {
      label: "Hours Lost to Technical Issues (per month)",
      key: "lostHours",
      type: "number" as const,
      defaultValue: 40,
      suffix: "hours"
    },
    {
      label: "Average Hourly Rate of Affected Staff",
      key: "hourlyRate",
      type: "number" as const,
      defaultValue: 50,
      prefix: "$"
    },
    {
      label: "Current Platform",
      key: "platform",
      type: "select" as const,
      options: ["WordPress", "Legacy Custom System", "Outdated CMS", "Multiple Disconnected Systems", "Other"],
      defaultValue: "WordPress"
    }
  ];

  const calculateROI = (inputs: Record<string, any>) => {
    const currentCosts = inputs.currentCosts || 0;
    const lostHours = inputs.lostHours || 0;
    const hourlyRate = inputs.hourlyRate || 0;

    // Calculate current waste
    const monthlyProductivityLoss = lostHours * hourlyRate;
    const totalMonthlyCost = currentCosts + monthlyProductivityLoss;

    // Modern platforms typically reduce costs by 60-80% and productivity loss by 90%
    const costReduction = 0.7; // 70% cost reduction
    const productivityImprovement = 0.9; // 90% reduction in lost time

    const newMonthlyCosts = currentCosts * (1 - costReduction);
    const newProductivityLoss = monthlyProductivityLoss * (1 - productivityImprovement);
    const newTotalMonthlyCost = newMonthlyCosts + newProductivityLoss;

    const monthlySavings = totalMonthlyCost - newTotalMonthlyCost;
    const annualSavings = monthlySavings * 12;

    // Assume $8,000 one-time migration cost
    const migrationCost = 8000;
    const roi = ((annualSavings - migrationCost) / migrationCost) * 100;
    const paybackPeriod = migrationCost / monthlySavings;

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
      title: "Platform Migration",
      description: "Perfect for businesses moving from WordPress or legacy systems",
      startingPrice: "$7,997",
      features: [
        "Complete data migration",
        "Modern platform setup",
        "Security hardening",
        "Performance optimization",
        "3 months support included"
      ]
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive modernization for growing businesses",
      startingPrice: "$19,997",
      features: [
        "Full system modernization",
        "Cloud infrastructure setup",
        "Advanced integrations",
        "Staff training included",
        "6 months support included",
        "Ongoing optimization"
      ],
      popular: true
    },
    {
      title: "Enterprise Modernization",
      description: "Complete transformation for large organizations",
      startingPrice: "Custom",
      features: [
        "Multi-system integration",
        "Enterprise security implementation",
        "Custom workflow development",
        "Dedicated project manager",
        "12 months support included",
        "Change management support"
      ]
    }
  ];
  // Problem points with specific cost data
  const problemPoints: ProblemPoint[] = [
    {
      icon: <DollarSign className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Legacy WordPress sites cost businesses $2,500+ monthly in maintenance, security patches, and downtime (WP Engine Study 2024)"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "43% of cyberattacks target small businesses using outdated CMS platforms, with average breach costs of $4.45M (IBM Security)"
    },
    {
      icon: <Clock className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Legacy systems cause 67% more downtime than modern platforms, costing $5,600 per minute for mid-size businesses (Gartner)"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Businesses using outdated technology grow 40% slower than competitors with modern systems (McKinsey Digital)"
    },
    {
      icon: <Users className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Technical debt reduces developer productivity by 42%, costing enterprises $85 billion annually (Stripe Developer Survey)"
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500 mt-0.5 flex-shrink-0" />,
      text: "Delayed modernization increases total transformation costs by 200-300% when businesses are forced to upgrade (Forrester)"
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
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ethos-navy leading-tight">
            Technology Migration
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-ethos-purple/90 leading-tight">
              Seamless Transition to the Future
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-ethos-navy/80 leading-tight">
              Your Business, Future-Proofed
            </p>
          </div>
        </div>
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
      heroImage="/assets/images/digitaltransformation.png"
      heroImageAlt="Business technology modernization"

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
      additionalContent={
        <>
          {/* Enhanced Sections */}

    {/* Urgency Banner */}
    <UrgencyBanner
      message="⚠️ Critical: WordPress 6.4 End-of-Life Approaching - Free Migration Assessment Available"
      ctaText="Get Free Assessment"
      ctaLink="/contact?source=transformation-urgent"
      expiryDate="December 31, 2024"
      limitedSlots={5}
    />

    {/* Client Testimonials */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            Successful Digital Transformations
          </h2>
          <p className="text-xl text-ethos-gray max-w-3xl mx-auto">
            See how businesses eliminated technical debt, reduced costs, and accelerated growth with our transformation services.
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
      title="Trusted by 100+ Forward-Thinking Organizations"
      logos={clientLogos}
    />

    {/* ROI Calculator */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            Calculate Your Transformation ROI
          </h2>
          <p className="text-xl text-ethos-gray">
            See how much you could save by modernizing your legacy systems
          </p>
        </div>
        <GatedROICalculator
          title="Digital Transformation ROI Calculator"
          description="Enter your current technology costs to see your potential savings from modernization."
          service="digital-transformation"
          leadMagnet="Free Security Assessment + Migration Roadmap + Cost Savings Analysis"
          onEmailCapture={async (email: string, name?: string, calculatorData?: any) => {
            console.log('Digital Transformation ROI Calculator lead captured:', { email, name, calculatorData });
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
            Transformation Investment Options
          </h2>
          <p className="text-xl text-ethos-gray mb-8">
            From simple migrations to complete digital transformations. All projects include planning, execution, and post-launch support.
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Free transformation assessment included</span>
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
      certifications={["AWS Advanced Partner", "Microsoft Gold Partner", "Google Cloud Partner"]}
      awards={["Digital Transformation Leader 2024", "Migration Excellence Award"]}
      securityBadges={["Enterprise Security", "Zero Downtime Guarantee", "Data Protection Certified"]}
    />

    {/* Service Bundle Recommendation */}
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceBundleRecommendations currentService="digital-transformation" />
      </div>
    </section>

    {/* Cross-Service Navigation */}
    <CrossServiceNavigation
      currentService="digital-transformation"
      title="Complete Your Transformation Journey"
      description="Modernize your systems and enhance them with AI automation and seamless integrations"
      showComparison={true}
    />

    {/* Migration Process */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            Our Proven Migration Process
          </h2>
          <p className="text-xl text-ethos-gray">
            A systematic approach that minimizes risk and ensures business continuity
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-ethos-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">Assessment</h3>
            <p className="text-ethos-gray">Comprehensive audit of your current systems, identifying risks and opportunities</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-ethos-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">Planning</h3>
            <p className="text-ethos-gray">Detailed migration strategy with timelines, milestones, and risk mitigation</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-ethos-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">Migration</h3>
            <p className="text-ethos-gray">Phased implementation with continuous testing and zero-downtime deployment</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-ethos-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">4</span>
            </div>
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">Optimization</h3>
            <p className="text-ethos-gray">Performance tuning, staff training, and ongoing support for maximum ROI</p>
          </div>
        </div>
      </div>
    </section>

    {/* Security Scanner Tool */}
    <SecurityScanner
      title="Free Security Assessment"
      description="Get a comprehensive security scan of your current digital infrastructure before transformation"
      onScanComplete={(result) => {
        console.log('Security scan completed:', result);
        // Track security scan completion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'security_scan_complete', {
            event_category: 'Digital Transformation',
            event_label: 'Security Assessment',
            value: result.overallScore
          });
        }
      }}
      onEmailCapture={(email, result) => {
        console.log('Security report email captured:', { email, score: result.overallScore });
        // Here you would integrate with your CRM or email service
      }}
    />

    {/* FAQ Section */}
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            Transformation Questions Answered
          </h2>
        </div>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">How long does a typical migration take?</h3>
            <p className="text-ethos-gray">Simple WordPress migrations take 2-4 weeks, while complex enterprise transformations take 8-16 weeks. We provide detailed timelines during your free assessment.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">Will there be any downtime during migration?</h3>
            <p className="text-ethos-gray">We guarantee zero downtime for most migrations using our parallel deployment strategy. Your current site remains live until the new platform is fully tested and ready.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">What happens to our SEO rankings?</h3>
            <p className="text-ethos-gray">We preserve and often improve SEO rankings through proper URL mapping, meta data migration, and performance optimization. Most clients see SEO improvements within 3 months.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-ethos-navy mb-2">Do you provide training for our team?</h3>
            <p className="text-ethos-gray">Yes! All transformation projects include comprehensive training for your team, documentation, and ongoing support to ensure you can manage the new platform effectively.</p>
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
      service="digital-transformation"
      showAfterScroll={400}
    />
        </>
      }
    />
  );
}