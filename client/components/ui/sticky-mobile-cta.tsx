import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, X, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StickyMobileCTAProps {
  primaryText: string;
  primaryLink: string;
  secondaryText?: string;
  secondaryLink?: string;
  phoneNumber?: string;
  service: 'ai-solutions' | 'system-integration' | 'web-mobile' | 'digital-transformation';
  showAfterScroll?: number; // Show after scrolling X pixels
}

const serviceColors = {
  'ai-solutions': 'bg-ethos-purple hover:bg-ethos-purple/90',
  'system-integration': 'bg-ethos-navy hover:bg-ethos-navy/90',
  'web-mobile': 'bg-gradient-to-r from-ethos-purple to-ethos-navy hover:from-ethos-purple/90 hover:to-ethos-navy/90',
  'digital-transformation': 'bg-red-600 hover:bg-red-700'
};

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
  phoneNumber = "+1 (555) 123-4567",
  service,
  showAfterScroll = 300
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > showAfterScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll]);

  const handlePrimaryClick = () => {
    // Track CTA click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'sticky_cta_click', {
        event_category: 'conversion',
        event_label: service,
        service_type: service,
        cta_type: 'primary'
      });
    }
  };

  const handleSecondaryClick = () => {
    // Track secondary CTA click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'sticky_cta_secondary_click', {
        event_category: 'engagement',
        event_label: service,
        service_type: service,
        cta_type: 'secondary'
      });
    }
  };

  const handlePhoneClick = () => {
    // Track phone click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_click', {
        event_category: 'conversion',
        event_label: service,
        service_type: service,
        cta_type: 'phone'
      });
    }
  };

  if (!isVisible || isMinimized) {
    return isMinimized ? (
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button
          onClick={() => setIsMinimized(false)}
          className="w-12 h-12 rounded-full bg-ethos-purple hover:bg-ethos-purple/90 text-white shadow-lg"
          aria-label="Show contact options"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      </div>
    ) : null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Backdrop for expanded state */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        />
      )}
      
      {/* Main CTA Bar */}
      <div className="relative bg-white border-t border-gray-200 shadow-lg">
        {/* Expanded Options */}
        {isExpanded && (
          <div className="absolute bottom-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="p-4 space-y-3">
              {/* Phone Option */}
              <a
                href={`tel:${phoneNumber}`}
                onClick={handlePhoneClick}
                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Call Now</div>
                  <div className="text-sm text-gray-600">{phoneNumber}</div>
                </div>
              </a>

              {/* Secondary CTA */}
              {secondaryText && secondaryLink && (
                <Link
                  to={secondaryLink}
                  onClick={handleSecondaryClick}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{secondaryText}</div>
                    <div className="text-sm text-gray-600">Get instant answers</div>
                  </div>
                </Link>
              )}

              {/* Minimize Option */}
              <button
                onClick={() => setIsMinimized(true)}
                className="w-full text-center text-sm text-gray-500 py-2"
              >
                Hide for now
              </button>
            </div>
          </div>
        )}

        {/* Main CTA Content */}
        <div className="flex items-center p-3">
          {/* Primary CTA Button */}
          <Link to={primaryLink} className="flex-1 mr-3" onClick={handlePrimaryClick}>
            <Button 
              className={`w-full h-12 text-white font-semibold text-base ${serviceColors[service]} shadow-lg`}
              size="lg"
            >
              {primaryText}
            </Button>
          </Link>

          {/* More Options Button */}
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="w-12 h-12 border-2 border-gray-300 hover:border-ethos-purple hover:bg-ethos-purple/5"
            aria-label="More contact options"
          >
            {isExpanded ? (
              <X className="w-5 h-5" />
            ) : (
              <div className="flex flex-col space-y-0.5">
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

// Hook to manage sticky CTA visibility and behavior
export const useStickyMobileCTA = (service: string) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollProgress };
};

// Service-specific CTA configurations
export const getServiceCTAConfig = (service: string) => {
  const configs = {
    'ai-solutions': {
      primaryText: "Get AI Assistant",
      primaryLink: "/contact?source=ai-solutions-mobile",
      secondaryText: "Free ROI Calculator",
      secondaryLink: "/contact?source=ai-calculator-mobile"
    },
    'system-integration': {
      primaryText: "Free Integration Audit",
      primaryLink: "/contact?source=integration-mobile",
      secondaryText: "View Integrations",
      secondaryLink: "/contact?source=integration-info-mobile"
    },
    'web-mobile': {
      primaryText: "Get Mobile Audit",
      primaryLink: "/contact?source=mobile-audit",
      secondaryText: "View Portfolio",
      secondaryLink: "/contact?source=portfolio-mobile"
    },
    'digital-transformation': {
      primaryText: "Free Security Scan",
      primaryLink: "/contact?source=security-scan-mobile",
      secondaryText: "Migration Guide",
      secondaryLink: "/contact?source=migration-mobile"
    }
  };

  return configs[service as keyof typeof configs] || configs['ai-solutions'];
};
