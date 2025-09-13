import React, { useState, useEffect } from 'react';
import { X, Download, Calculator, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string, name?: string) => void;
  service: 'ai-solutions' | 'system-integration' | 'web-mobile' | 'digital-transformation';
  title?: string;
  description?: string;
  leadMagnet?: string;
  buttonText?: string;
}

const serviceConfig = {
  'ai-solutions': {
    icon: <Zap className="w-8 h-8 text-ethos-purple" />,
    title: "Don't Miss Out on 24/7 Revenue!",
    description: "Get our free ROI calculator and see exactly how much revenue you're losing after hours.",
    leadMagnet: "Free 24/7 Support ROI Calculator + Implementation Guide",
    buttonText: "Get My Free Calculator",
    bgGradient: "from-purple-50 to-blue-50"
  },
  'system-integration': {
    icon: <Calculator className="w-8 h-8 text-ethos-purple" />,
    title: "Stop Wasting Money on Manual Work!",
    description: "Download our free integration audit tool and discover how much you could save by automating your workflows.",
    leadMagnet: "Free Integration Audit Tool + Cost Savings Calculator",
    buttonText: "Get My Free Audit",
    bgGradient: "from-blue-50 to-indigo-50"
  },
  'web-mobile': {
    icon: <Download className="w-8 h-8 text-ethos-purple" />,
    title: "Is Your Website Losing Mobile Customers?",
    description: "Get our free mobile optimization checklist and see how your site performs on mobile devices.",
    leadMagnet: "Free Mobile Optimization Audit + Performance Checklist",
    buttonText: "Get My Free Audit",
    bgGradient: "from-indigo-50 to-purple-50"
  },
  'digital-transformation': {
    icon: <Shield className="w-8 h-8 text-ethos-purple" />,
    title: "Your Website May Be at Risk!",
    description: "Get our free security assessment and migration checklist before it's too late.",
    leadMagnet: "Free Security Assessment + Migration Roadmap",
    buttonText: "Get My Free Assessment",
    bgGradient: "from-red-50 to-purple-50"
  }
};

export const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({
  isOpen,
  onClose,
  onSubmit,
  service,
  title,
  description,
  leadMagnet,
  buttonText
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const config = serviceConfig[service];
  const finalTitle = title || config.title;
  const finalDescription = description || config.description;
  const finalLeadMagnet = leadMagnet || config.leadMagnet;
  const finalButtonText = buttonText || config.buttonText;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await onSubmit(email, name);
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setEmail('');
        setName('');
      }, 2000);
    } catch (error) {
      console.error('Error submitting exit intent form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <Card className={`relative w-full max-w-md mx-auto bg-gradient-to-br ${config.bgGradient} border-2 border-ethos-purple/20 shadow-2xl`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ethos-navy mb-2">Thank You!</h3>
              <p className="text-ethos-gray">Check your email for your free resources.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/80 rounded-full flex items-center justify-center">
                  {config.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-ethos-navy mb-3">
                  {finalTitle}
                </h3>
                <p className="text-ethos-gray text-sm sm:text-base leading-relaxed">
                  {finalDescription}
                </p>
              </div>

              <div className="bg-white/80 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Download className="w-5 h-5 text-ethos-purple mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-ethos-navy text-sm">You'll Get:</h4>
                    <p className="text-ethos-gray text-sm">{finalLeadMagnet}</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={!email || isSubmitting}
                  className="w-full bg-ethos-purple hover:bg-ethos-purple/90 text-white font-semibold py-3"
                >
                  {isSubmitting ? 'Sending...' : finalButtonText}
                </Button>
              </form>

              <p className="text-xs text-ethos-gray text-center mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

// Hook for exit intent detection
export const useExitIntent = (onExitIntent: () => void, delay: number = 1000) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let hasTriggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggered) return;
      
      // Only trigger if mouse is leaving from the top of the page
      if (e.clientY <= 0) {
        hasTriggered = true;
        timeoutId = setTimeout(() => {
          onExitIntent();
        }, delay);
      }
    };

    // Add a small delay before enabling exit intent detection
    const enableTimeout = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 3000); // Wait 3 seconds before enabling

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutId);
      clearTimeout(enableTimeout);
    };
  }, [onExitIntent, delay]);
};

// Hook for scroll-based exit intent (mobile-friendly)
export const useScrollExitIntent = (onExitIntent: () => void, threshold: number = 0.7) => {
  useEffect(() => {
    let hasTriggered = false;
    let maxScroll = 0;

    const handleScroll = () => {
      if (hasTriggered) return;

      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      maxScroll = Math.max(maxScroll, scrollPercent);

      // If user scrolled past threshold and then scrolls back up significantly
      if (maxScroll > threshold && scrollPercent < maxScroll - 0.1) {
        hasTriggered = true;
        onExitIntent();
      }
    };

    // Add delay before enabling
    const enableTimeout = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, 5000); // Wait 5 seconds before enabling

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(enableTimeout);
    };
  }, [onExitIntent, threshold]);
};
