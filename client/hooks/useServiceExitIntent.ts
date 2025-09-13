import { useState, useCallback } from 'react';
import { useExitIntent, useScrollExitIntent } from '@/components/ui/exit-intent-popup';

interface UseServiceExitIntentProps {
  service: 'ai-solutions' | 'system-integration' | 'web-mobile' | 'digital-transformation';
  onEmailCapture?: (email: string, name?: string, service?: string) => void;
}

export const useServiceExitIntent = ({ service, onEmailCapture }: UseServiceExitIntentProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleExitIntent = useCallback(() => {
    if (!hasShown) {
      setIsPopupOpen(true);
      setHasShown(true);
      
      // Track exit intent event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exit_intent_triggered', {
          event_category: 'engagement',
          event_label: service,
          service_type: service
        });
      }
    }
  }, [hasShown, service]);

  const handleClosePopup = useCallback(() => {
    setIsPopupOpen(false);
    
    // Track popup close event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exit_intent_closed', {
        event_category: 'engagement',
        event_label: service,
        service_type: service
      });
    }
  }, [service]);

  const handleEmailSubmit = useCallback(async (email: string, name?: string) => {
    try {
      // Track email capture event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exit_intent_email_capture', {
          event_category: 'conversion',
          event_label: service,
          service_type: service,
          value: 1
        });
      }

      // Call the provided callback
      if (onEmailCapture) {
        await onEmailCapture(email, name, service);
      } else {
        // Default email capture logic
        const response = await fetch('/api/capture-lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            name,
            service,
            source: 'exit_intent',
            timestamp: new Date().toISOString(),
            leadMagnet: getLeadMagnetForService(service)
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to capture lead');
        }
      }
    } catch (error) {
      console.error('Error capturing exit intent email:', error);
      
      // Track error event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exit_intent_error', {
          event_category: 'error',
          event_label: service,
          service_type: service
        });
      }
      
      throw error;
    }
  }, [service, onEmailCapture]);

  // Enable both desktop and mobile exit intent detection
  useExitIntent(handleExitIntent, 500);
  useScrollExitIntent(handleExitIntent, 0.6);

  return {
    isPopupOpen,
    handleClosePopup,
    handleEmailSubmit,
    service
  };
};

// Helper function to get lead magnet for service
const getLeadMagnetForService = (service: string): string => {
  const leadMagnets = {
    'ai-solutions': 'Free 24/7 Support ROI Calculator + Implementation Guide',
    'system-integration': 'Free Integration Audit Tool + Cost Savings Calculator',
    'web-mobile': 'Free Mobile Optimization Audit + Performance Checklist',
    'digital-transformation': 'Free Security Assessment + Migration Roadmap'
  };
  
  return leadMagnets[service as keyof typeof leadMagnets] || 'Free Consultation';
};

// Type declarations for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: {
        event_category?: string;
        event_label?: string;
        service_type?: string;
        value?: number;
      }
    ) => void;
  }
}
