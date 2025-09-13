import React, { useState } from 'react';
import { Calculator, ArrowRight, Mail, Download, CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface GatedROICalculatorProps {
  title: string;
  description: string;
  inputs: {
    label: string;
    key: string;
    type: 'number' | 'select';
    options?: string[];
    defaultValue?: string | number;
    prefix?: string;
    suffix?: string;
  }[];
  calculation: (inputs: Record<string, any>) => {
    monthlySavings: number;
    annualSavings: number;
    roi: number;
    paybackPeriod: number;
  };
  service: 'ai-solutions' | 'system-integration' | 'web-mobile' | 'digital-transformation';
  leadMagnet?: string;
  onEmailCapture?: (email: string, name?: string, calculatorData?: any) => Promise<void>;
}

export const GatedROICalculator: React.FC<GatedROICalculatorProps> = ({
  title,
  description,
  inputs,
  calculation,
  service,
  leadMagnet,
  onEmailCapture
}) => {
  const [inputValues, setInputValues] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    inputs.forEach(input => {
      initial[input.key] = input.defaultValue || (input.type === 'number' ? 0 : '');
    });
    return initial;
  });

  const [showEmailGate, setShowEmailGate] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (key: string, value: any) => {
    setInputValues(prev => ({ ...prev, [key]: value }));
  };

  const handleCalculateClick = () => {
    // Track calculator engagement
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'roi_calculator_engage', {
        event_category: 'engagement',
        event_label: service,
        service_type: service
      });
    }
    
    setShowEmailGate(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const calculatorData = {
        inputs: inputValues,
        results: calculation(inputValues),
        service,
        timestamp: new Date().toISOString()
      };

      if (onEmailCapture) {
        await onEmailCapture(email, name, calculatorData);
      } else {
        // Default email capture logic
        const response = await fetch('/api/capture-calculator-lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            name,
            service,
            source: 'roi_calculator',
            calculatorData,
            leadMagnet: leadMagnet || `${service} ROI Calculator Results`
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to capture lead');
        }
      }

      // Track successful email capture
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'roi_calculator_email_capture', {
          event_category: 'conversion',
          event_label: service,
          service_type: service,
          value: 1
        });
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setShowResults(true);
        setShowEmailGate(false);
      }, 1500);
    } catch (error) {
      console.error('Error capturing calculator lead:', error);
      
      // Track error
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'roi_calculator_error', {
          event_category: 'error',
          event_label: service,
          service_type: service
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const results = showResults ? calculation(inputValues) : null;

  return (
    <Card className="p-6 md:p-8 bg-gradient-to-br from-ethos-purple/5 to-ethos-navy/5 border border-ethos-purple/20">
      <div className="flex items-center space-x-3 mb-6">
        <Calculator className="w-8 h-8 text-ethos-purple" />
        <h3 className="text-2xl font-semibold text-ethos-navy">{title}</h3>
      </div>

      <p className="text-ethos-gray mb-8">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {inputs.map((input, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-ethos-navy mb-2">
              {input.label}
            </label>
            {input.type === 'number' ? (
              <div className="relative">
                {input.prefix && (
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ethos-gray">
                    {input.prefix}
                  </span>
                )}
                <input
                  type="number"
                  value={inputValues[input.key]}
                  onChange={(e) => handleInputChange(input.key, Number(e.target.value))}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ethos-purple focus:border-transparent ${
                    input.prefix ? 'pl-8' : ''
                  } ${input.suffix ? 'pr-12' : ''}`}
                />
                {input.suffix && (
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-ethos-gray">
                    {input.suffix}
                  </span>
                )}
              </div>
            ) : (
              <select
                value={inputValues[input.key]}
                onChange={(e) => handleInputChange(input.key, e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ethos-purple focus:border-transparent"
              >
                {input.options?.map((option, optIndex) => (
                  <option key={optIndex} value={option}>{option}</option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>

      {!showEmailGate && !showResults && (
        <Button
          onClick={handleCalculateClick}
          className="w-full mb-8"
          variant="default"
          size="lg"
        >
          Calculate Your ROI
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      )}

      {/* Email Gate Modal */}
      {showEmailGate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <Card className="relative w-full max-w-md mx-auto bg-white shadow-2xl">
            <button
              onClick={() => setShowEmailGate(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-ethos-navy mb-2">Almost There!</h3>
                  <p className="text-ethos-gray">Preparing your personalized ROI report...</p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-ethos-purple/10 rounded-full flex items-center justify-center">
                      <Mail className="w-8 h-8 text-ethos-purple" />
                    </div>
                    <h3 className="text-xl font-semibold text-ethos-navy mb-3">
                      Get Your Detailed ROI Report
                    </h3>
                    <p className="text-ethos-gray text-sm">
                      Enter your email to receive your personalized ROI calculation plus bonus resources.
                    </p>
                  </div>

                  <div className="bg-ethos-purple/5 rounded-lg p-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <Download className="w-5 h-5 text-ethos-purple mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-ethos-navy text-sm">You'll Get:</h4>
                        <p className="text-ethos-gray text-sm">
                          {leadMagnet || `Detailed ${service} ROI report + implementation guide`}
                        </p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleEmailSubmit} className="space-y-4">
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
                      {isSubmitting ? 'Sending...' : 'Get My ROI Report'}
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
      )}

      {/* Results Display */}
      {results && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-lg border border-ethos-purple/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">
                ${results.monthlySavings.toLocaleString()}
              </div>
              <div className="text-sm text-ethos-gray">Monthly Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">
                ${results.annualSavings.toLocaleString()}
              </div>
              <div className="text-sm text-ethos-gray">Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ethos-purple mb-1">
                {results.roi}%
              </div>
              <div className="text-sm text-ethos-gray">ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ethos-navy mb-1">
                {results.paybackPeriod}
              </div>
              <div className="text-sm text-ethos-gray">Months to Payback</div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => window.location.href = '/contact?source=roi-calculator'}
              className="bg-ethos-purple hover:bg-ethos-purple/90 text-white px-8 py-3"
              size="lg"
            >
              Schedule Your Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};
