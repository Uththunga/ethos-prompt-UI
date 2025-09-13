import React from 'react';
import { ServicePageTemplate } from '@/components/templates/ServicePageTemplate';
import { Smartphone, Monitor, Brain, Users, Zap, BarChart3, Sparkles, Layers, Clock, TrendingUp, Shield, Target, MessageSquare, CheckCircle, DollarSign, AlertTriangle } from 'lucide-react';
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
import { PortfolioFilter } from '@/components/ui/portfolio-filter';
import { InteractiveFAQ } from '@/components/ui/interactive-faq';
import { SocialProofNotifications } from '@/components/ui/social-proof-notifications';

export default function IntelligentApplications() {
  // Exit intent popup functionality
  const { isPopupOpen, handleClosePopup, handleEmailSubmit, service } = useServiceExitIntent({
    service: 'web-mobile',
    onEmailCapture: async (email: string, name?: string) => {
      console.log('Capturing lead for Web & Mobile Solutions:', { email, name });
    }
  });

  // Mobile CTA configuration
  const mobileCTAConfig = getServiceCTAConfig('web-mobile');

  // Client testimonials data
  const testimonials = [
    {
      name: "Jennifer Walsh",
      role: "Marketing Director",
      company: "StyleHub Boutique",
      image: "/assets/images/testimonials/jennifer-walsh.jpg",
      testimonial: "Our new e-commerce platform increased online sales by 340% in the first six months. The mobile-first design and AI-powered recommendations have transformed our customer experience. We're now processing $50K+ in monthly online revenue.",
      metrics: [
        { label: "Online Sales Growth", value: "+340%" },
        { label: "Mobile Conversion", value: "+89%" },
        { label: "Monthly Revenue", value: "$50K+" }
      ],
      rating: 5
    },
    {
      name: "Robert Chen",
      role: "CEO",
      company: "TechConsult Pro",
      image: "/assets/images/testimonials/robert-chen.jpg",
      testimonial: "The custom web application streamlined our entire client onboarding process. What used to take 3 weeks now takes 3 days. Our client satisfaction scores increased by 67% and we've reduced operational costs by $25,000 annually.",
      metrics: [
        { label: "Process Speed", value: "7x Faster" },
        { label: "Client Satisfaction", value: "+67%" },
        { label: "Cost Savings", value: "$25K/year" }
      ],
      rating: 5
    }
  ];

  // Client logos data
  const clientLogos = [
    { name: "StyleHub Boutique", logo: "/assets/images/clients/stylehub.png", industry: "E-commerce" },
    { name: "TechConsult Pro", logo: "/assets/images/clients/techconsult.png", industry: "Professional Services" },
    { name: "HealthFirst Clinic", logo: "/assets/images/clients/healthfirst.png", industry: "Healthcare" },
    { name: "EduLearn Platform", logo: "/assets/images/clients/edulearn.png", industry: "Education" },
    { name: "FoodieDelight", logo: "/assets/images/clients/foodiedelight.png", industry: "Food & Beverage" },
    { name: "FitnessPro", logo: "/assets/images/clients/fitnesspro.png", industry: "Fitness" }
  ];

  // ROI Calculator configuration
  const roiCalculatorInputs = [
    {
      label: "Current Monthly Website Visitors",
      key: "visitors",
      type: "number" as const,
      defaultValue: 5000,
      suffix: "visitors"
    },
    {
      label: "Current Conversion Rate",
      key: "conversionRate",
      type: "number" as const,
      defaultValue: 2.5,
      suffix: "%"
    },
    {
      label: "Average Order Value",
      key: "orderValue",
      type: "number" as const,
      defaultValue: 125,
      prefix: "$"
    },
    {
      label: "Business Type",
      key: "businessType",
      type: "select" as const,
      options: ["E-commerce", "Professional Services", "SaaS", "Healthcare", "Education", "Other"],
      defaultValue: "E-commerce"
    }
  ];

  const calculateROI = (inputs: Record<string, any>) => {
    const visitors = inputs.visitors || 0;
    const currentConversion = (inputs.conversionRate || 0) / 100;
    const orderValue = inputs.orderValue || 0;

    // Modern web/mobile apps typically improve conversion by 2-3x
    const improvedConversion = currentConversion * 2.5;
    const additionalConversions = visitors * (improvedConversion - currentConversion);
    const monthlySavings = additionalConversions * orderValue;
    const annualSavings = monthlySavings * 12;

    // Assume $5,000/month for professional web/mobile development
    const monthlyCost = 5000;
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
      title: "Essential Web",
      description: "Perfect for small businesses establishing their online presence",
      startingPrice: "$4,997",
      features: [
        "Responsive website design",
        "Mobile optimization",
        "Basic SEO setup",
        "Contact forms and analytics",
        "3 months support included"
      ]
    },
    {
      title: "Professional Platform",
      description: "Ideal for growing businesses needing advanced functionality",
      startingPrice: "$12,997",
      features: [
        "Custom web application",
        "Mobile app development",
        "Advanced integrations",
        "User authentication system",
        "6 months support included",
        "Performance optimization"
      ],
      popular: true
    },
    {
      title: "Enterprise Solution",
      description: "Custom solutions for large organizations",
      startingPrice: "Custom",
      features: [
        "Fully custom development",
        "Scalable architecture",
        "Advanced security features",
        "Dedicated development team",
        "12 months support included",
        "White-label options available"
      ]
    }
  ];
  return (
    <ServicePageTemplate
      // Hero Section
      heroTitle={
        <>
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ethos-navy leading-tight">
              Web & Mobile Solutions
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xl md:text-2xl lg:text-3xl font-normal text-ethos-purple/90 leading-tight">
                Modern Business Foundation
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-normal text-ethos-navy/80 leading-tight">
                Where 85% of Customer Journeys Begin
              </p>
            </div>
          </div>
        </>
      }
      heroSubtitle="Your Business, Anytime, Anywhere"
      heroDescription={
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            In today's mobile-first world, a strong web and mobile presence is essential. With 6.92 billion smartphone users 
            worldwide, businesses without mobile-optimized solutions risk losing up to 60% of potential customers.
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
      heroImage="/assets/images/integrationapp.png"
      heroImageAlt="Intelligent Applications in action"
      heroImageClassName="w-full max-w-none"

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
      additionalContent={
        <>
          {/* Enhanced Sections */}

    {/* Urgency Banner */}
    <UrgencyBanner
      message="🚀 Limited Time: Free Mobile Audit + 25% Off Your First Project"
      ctaText="Claim Free Audit"
      ctaLink="/contact?source=mobile-urgent"
      expiryDate="December 31, 2024"
      limitedSlots={8}
    />

    {/* Client Testimonials */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            Real Results from Modern Applications
          </h2>
          <p className="text-xl text-ethos-gray max-w-3xl mx-auto">
            See how businesses transformed their operations and increased revenue with our web and mobile solutions.
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
      title="Powering 300+ Modern Businesses"
      logos={clientLogos}
    />

    {/* ROI Calculator */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            Calculate Your Digital ROI
          </h2>
          <p className="text-xl text-ethos-gray">
            See how much additional revenue you could generate with a modern web/mobile solution
          </p>
        </div>
        <GatedROICalculator
          title="Web & Mobile Solutions ROI Calculator"
          description="Enter your current website metrics to see your potential revenue increase with a modern, conversion-optimized platform."
          service="web-mobile"
          leadMagnet="Free Mobile Optimization Audit + Performance Checklist + Revenue Projection Report"
          onEmailCapture={async (email: string, name?: string, calculatorData?: any) => {
            console.log('Web & Mobile ROI Calculator lead captured:', { email, name, calculatorData });
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
            Investment Options for Every Business
          </h2>
          <p className="text-xl text-ethos-gray mb-8">
            From simple websites to complex applications. All projects include design, development, testing, and launch support.
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Free consultation and project audit included</span>
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
      certifications={["Google Partner", "AWS Certified", "React Certified"]}
      awards={["Best Web Development 2024", "Mobile Excellence Award"]}
      securityBadges={["SSL Secured", "GDPR Compliant", "PCI DSS Ready"]}
    />

    {/* Service Bundle Recommendation */}
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceBundleRecommendations currentService="web-mobile" />
      </div>
    </section>

    {/* Cross-Service Navigation */}
    <CrossServiceNavigation
      currentService="web-mobile"
      title="Power Your Applications with AI"
      description="Enhance your web and mobile solutions with intelligent automation and seamless integrations"
      showComparison={true}
    />

    {/* Portfolio Showcase */}
    <PortfolioFilter
      title="Our Web & Mobile Portfolio"
      description="Explore our successful projects across web and mobile development"
      items={[
        {
          id: '1',
          title: 'E-commerce Mobile App',
          description: 'Full-featured mobile shopping app with AI recommendations and seamless checkout',
          image: '/assets/images/portfolio/ecommerce-app.jpg',
          category: 'mobile',
          industry: 'E-commerce',
          technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
          features: ['AI Recommendations', 'Push Notifications', 'Offline Mode', 'Payment Integration'],
          liveUrl: 'https://app.example.com',
          caseStudyUrl: '/case-studies/ecommerce-app',
          rating: 4.9,
          completionDate: '2024-01',
          projectDuration: '4 months',
          clientSize: 'medium'
        },
        {
          id: '2',
          title: 'Healthcare Management Platform',
          description: 'Comprehensive web platform for patient management and telemedicine',
          image: '/assets/images/portfolio/healthcare-platform.jpg',
          category: 'web',
          industry: 'Healthcare',
          technologies: ['React', 'Python', 'PostgreSQL', 'WebRTC'],
          features: ['Video Consultations', 'Patient Records', 'Appointment Scheduling', 'HIPAA Compliant'],
          liveUrl: 'https://healthplatform.example.com',
          caseStudyUrl: '/case-studies/healthcare-platform',
          rating: 4.8,
          completionDate: '2023-12',
          projectDuration: '6 months',
          clientSize: 'enterprise'
        },
        {
          id: '3',
          title: 'FinTech Mobile & Web App',
          description: 'Cross-platform financial management solution with real-time analytics',
          image: '/assets/images/portfolio/fintech-app.jpg',
          category: 'both',
          industry: 'Financial Services',
          technologies: ['Flutter', 'React', 'Go', 'Redis', 'Kubernetes'],
          features: ['Real-time Analytics', 'Secure Transactions', 'Multi-platform', 'API Integration'],
          liveUrl: 'https://fintech.example.com',
          caseStudyUrl: '/case-studies/fintech-app',
          rating: 4.7,
          completionDate: '2024-02',
          projectDuration: '8 months',
          clientSize: 'startup'
        }
      ]}
      showSearch={true}
      showFilters={true}
      itemsPerPage={6}
    />

    {/* Technology Stack */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-xl text-ethos-gray">
            We use the latest, most reliable technologies to ensure your applications are fast, secure, and scalable
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 font-bold text-lg">React</span>
            </div>
            <span className="text-sm text-ethos-gray">Frontend Framework</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 font-bold text-lg">Node</span>
            </div>
            <span className="text-sm text-ethos-gray">Backend Runtime</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-600 font-bold text-lg">AWS</span>
            </div>
            <span className="text-sm text-ethos-gray">Cloud Platform</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-600 font-bold text-lg">Swift</span>
            </div>
            <span className="text-sm text-ethos-gray">iOS Development</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 font-bold text-lg">Kotlin</span>
            </div>
            <span className="text-sm text-ethos-gray">Android Development</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 font-bold text-lg">SQL</span>
            </div>
            <span className="text-sm text-ethos-gray">Database</span>
          </div>
        </div>
      </div>
    </section>

    {/* Interactive FAQ Section */}
    <InteractiveFAQ
      title="Development Questions Answered"
      description="Find answers to common questions about web and mobile development"
      faqs={[
        {
          id: '1',
          question: 'How long does development typically take?',
          answer: 'Simple websites take 2-4 weeks, while complex web applications take 8-16 weeks. Mobile apps typically require 12-20 weeks. We provide detailed timelines during your free consultation.',
          category: 'Timeline',
          tags: ['development', 'timeline', 'duration']
        },
        {
          id: '2',
          question: 'Do you provide ongoing maintenance and support?',
          answer: 'Yes! All projects include 3-12 months of support depending on the package. We also offer ongoing maintenance plans for updates, security patches, and feature enhancements.',
          category: 'Support',
          tags: ['maintenance', 'support', 'updates']
        },
        {
          id: '3',
          question: 'Can you integrate with our existing systems?',
          answer: 'Absolutely. We specialize in integrating new applications with existing CRMs, databases, payment systems, and third-party APIs. We\'ll audit your current systems during the consultation.',
          category: 'Integration',
          tags: ['integration', 'systems', 'api']
        },
        {
          id: '4',
          question: 'What about mobile app store approval?',
          answer: 'We handle the entire app store submission process for both iOS and Android. Our apps are built to meet all store guidelines, and we manage the approval process from start to finish.',
          category: 'Mobile',
          tags: ['mobile', 'app store', 'approval']
        },
        {
          id: '5',
          question: 'What technologies do you use?',
          answer: 'We use modern, proven technologies including React, React Native, Node.js, Python, and cloud platforms like AWS. We choose the best tech stack for each project based on your specific requirements.',
          category: 'Technology',
          tags: ['technology', 'react', 'mobile', 'web']
        },
        {
          id: '6',
          question: 'How do you ensure quality and testing?',
          answer: 'We follow rigorous testing protocols including unit testing, integration testing, and user acceptance testing. All applications undergo security audits and performance optimization before launch.',
          category: 'Quality',
          tags: ['testing', 'quality', 'security']
        }
      ]}
      categories={['Timeline', 'Support', 'Integration', 'Mobile', 'Technology', 'Quality']}
      showSearch={true}
      showCategories={true}
      contactCTA={{
        text: 'Get Free Consultation',
        link: '/contact?source=web-mobile-faq'
      }}
    />

    {/* Social Proof Notifications */}
    <SocialProofNotifications
      notifications={[
        {
          id: '1',
          type: 'signup',
          name: 'Sarah Chen',
          location: 'San Francisco, CA',
          service: 'Mobile App Development',
          timeAgo: '2 minutes ago'
        },
        {
          id: '2',
          type: 'consultation',
          name: 'Marcus Rodriguez',
          location: 'Austin, TX',
          service: 'Web Application',
          timeAgo: '5 minutes ago'
        },
        {
          id: '3',
          type: 'download',
          name: 'Jennifer Kim',
          location: 'Seattle, WA',
          service: 'Development Guide',
          timeAgo: '8 minutes ago'
        }
      ]}
      showInterval={10000}
      displayDuration={6000}
      position="bottom-left"
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
      service="web-mobile"
      showAfterScroll={400}
    />
        </>
      }
    />
  );
}