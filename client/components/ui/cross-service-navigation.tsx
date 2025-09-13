import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Network, Smartphone, Rocket, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  benefits: string[];
  popular?: boolean;
  complementary?: boolean;
}

interface CrossServiceNavigationProps {
  currentService: 'ai-solutions' | 'system-integration' | 'web-mobile' | 'digital-transformation';
  title?: string;
  description?: string;
  showComparison?: boolean;
}

const allServices: Record<string, ServiceCard> = {
  'ai-solutions': {
    id: 'ai-solutions',
    title: 'Smart Business Assistant',
    description: '24/7 AI-powered customer support that never sleeps',
    icon: <Bot className="w-8 h-8" />,
    link: '/services/custom-ai-solutions',
    benefits: ['24/7 availability', 'Instant responses', 'Scalable support'],
    popular: true
  },
  'system-integration': {
    id: 'system-integration',
    title: 'Connect Everything',
    description: 'Seamlessly integrate all your business systems',
    icon: <Network className="w-8 h-8" />,
    link: '/services/system-integration',
    benefits: ['Eliminate data silos', 'Automate workflows', 'Real-time sync'],
    complementary: true
  },
  'web-mobile': {
    id: 'web-mobile',
    title: 'Web & Mobile Solutions',
    description: 'Modern, high-converting websites and mobile apps',
    icon: <Smartphone className="w-8 h-8" />,
    link: '/services/intelligent-applications',
    benefits: ['Mobile-first design', 'High performance', 'Conversion optimized']
  },
  'digital-transformation': {
    id: 'digital-transformation',
    title: 'Technology Migration',
    description: 'Modernize your legacy systems safely and efficiently',
    icon: <Rocket className="w-8 h-8" />,
    link: '/services/digital-transformation',
    benefits: ['Risk-free migration', 'Zero downtime', 'Enhanced security']
  }
};

const serviceRelationships = {
  'ai-solutions': {
    related: ['system-integration', 'web-mobile'],
    complementary: ['system-integration'],
    upgrade: ['digital-transformation']
  },
  'system-integration': {
    related: ['ai-solutions', 'digital-transformation'],
    complementary: ['ai-solutions'],
    upgrade: ['web-mobile']
  },
  'web-mobile': {
    related: ['ai-solutions', 'system-integration'],
    complementary: ['digital-transformation'],
    upgrade: ['system-integration']
  },
  'digital-transformation': {
    related: ['system-integration', 'web-mobile'],
    complementary: ['web-mobile'],
    upgrade: ['ai-solutions']
  }
};

export const CrossServiceNavigation: React.FC<CrossServiceNavigationProps> = ({
  currentService,
  title = "Complete Your Digital Transformation",
  description = "Maximize your ROI by combining our services for a comprehensive solution",
  showComparison = false
}) => {
  const relationships = serviceRelationships[currentService];
  const relatedServices = relationships.related.map(id => allServices[id]);
  const complementaryService = relationships.complementary[0] ? allServices[relationships.complementary[0]] : null;

  const handleServiceClick = (serviceId: string, type: 'related' | 'complementary' | 'comparison') => {
    // Track cross-service navigation
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cross_service_navigation', {
        event_category: 'engagement',
        event_label: `${currentService}_to_${serviceId}`,
        service_from: currentService,
        service_to: serviceId,
        navigation_type: type
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-ethos-purple/5 to-ethos-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy mb-4">
            {title}
          </h2>
          <p className="text-xl text-ethos-gray max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Complementary Service Highlight */}
        {complementaryService && (
          <div className="mb-12">
            <Card className="p-6 md:p-8 bg-gradient-to-r from-ethos-purple/10 to-ethos-navy/10 border-2 border-ethos-purple/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-ethos-purple/20 rounded-full flex items-center justify-center text-ethos-purple">
                    {complementaryService.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-semibold text-ethos-navy">
                        {complementaryService.title}
                      </h3>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        Perfect Match
                      </span>
                    </div>
                    <p className="text-ethos-gray mb-3">
                      {complementaryService.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {complementaryService.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-1 text-sm text-ethos-gray">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-ethos-gray mb-2">Bundle & Save</div>
                  <div className="text-2xl font-bold text-green-600 mb-3">20% Off</div>
                  <Link
                    to={complementaryService.link}
                    onClick={() => handleServiceClick(complementaryService.id, 'complementary')}
                  >
                    <Button className="bg-ethos-purple hover:bg-ethos-purple/90 text-white">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Related Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {relatedServices.map((service) => (
            <Card key={service.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-ethos-purple/10 rounded-lg flex items-center justify-center text-ethos-purple flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-ethos-navy">
                      {service.title}
                    </h3>
                    {service.popular && (
                      <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                        <Star className="w-3 h-3" />
                        <span>Popular</span>
                      </div>
                    )}
                  </div>
                  <p className="text-ethos-gray mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-ethos-gray">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={service.link}
                    onClick={() => handleServiceClick(service.id, 'related')}
                  >
                    <Button variant="outline" className="w-full border-ethos-purple text-ethos-purple hover:bg-ethos-purple hover:text-white">
                      Explore {service.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Service Comparison CTA */}
        {showComparison && (
          <div className="text-center">
            <Card className="p-6 bg-white border-2 border-ethos-purple/20">
              <h3 className="text-xl font-semibold text-ethos-navy mb-3">
                Not sure which service is right for you?
              </h3>
              <p className="text-ethos-gray mb-6">
                Get a personalized recommendation based on your business needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact?source=service-comparison">
                  <Button 
                    className="bg-ethos-purple hover:bg-ethos-purple/90 text-white"
                    onClick={() => handleServiceClick('comparison', 'comparison')}
                  >
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-ethos-navy text-ethos-navy hover:bg-ethos-navy hover:text-white">
                    Compare All Services
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

// Service Bundle Recommendations Component
interface ServiceBundleProps {
  currentService: string;
  showPricing?: boolean;
}

export const ServiceBundleRecommendations: React.FC<ServiceBundleProps> = ({
  currentService,
  showPricing = true
}) => {
  const bundles = {
    'ai-solutions': {
      title: 'AI + Integration Bundle',
      description: 'Smart AI assistant with seamless system integration',
      services: ['ai-solutions', 'system-integration'],
      savings: '25%',
      price: '$2,999/month'
    },
    'system-integration': {
      title: 'Complete Digital Suite',
      description: 'Integration + modern web presence + AI support',
      services: ['system-integration', 'web-mobile', 'ai-solutions'],
      savings: '30%',
      price: '$4,499/month'
    },
    'web-mobile': {
      title: 'Modern Web + AI Bundle',
      description: 'High-converting website with AI-powered support',
      services: ['web-mobile', 'ai-solutions'],
      savings: '20%',
      price: '$2,299/month'
    },
    'digital-transformation': {
      title: 'Full Transformation Package',
      description: 'Complete modernization with ongoing support',
      services: ['digital-transformation', 'system-integration', 'ai-solutions'],
      savings: '35%',
      price: '$5,999/month'
    }
  };

  const bundle = bundles[currentService as keyof typeof bundles];
  if (!bundle) return null;

  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold text-ethos-navy mb-2">
            💡 Recommended Bundle: {bundle.title}
          </h4>
          <p className="text-ethos-gray mb-3">{bundle.description}</p>
          <div className="flex items-center space-x-4">
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              Save {bundle.savings}
            </span>
            {showPricing && (
              <span className="text-lg font-bold text-ethos-navy">
                Starting at {bundle.price}
              </span>
            )}
          </div>
        </div>
        <Link to="/contact?source=bundle-recommendation">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Get Bundle Quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
