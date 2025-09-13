import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TestimonialAvatar, ClientLogo } from '@/components/ui/image-with-fallback';
import {
  Star,
  Quote,
  Calculator,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Shield,
  Award,
  CheckCircle,
  X,
  ArrowRight,
  AlertCircle,
  Timer
} from 'lucide-react';

// Client Testimonial Component
interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  image: string;
  testimonial: string;
  metrics: {
    label: string;
    value: string;
  }[];
  rating: number;
}

export const ClientTestimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  company,
  image,
  testimonial,
  metrics,
  rating
}) => {
  return (
    <Card className="p-6 md:p-8 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start space-x-4 mb-6">
        <TestimonialAvatar
          src={image}
          name={name}
          className="w-16 h-16 border-2 border-ethos-purple/20"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-semibold text-ethos-navy text-lg">{name}</h4>
            <div className="flex space-x-1">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-ethos-gray text-sm">{role} at {company}</p>
        </div>
        <Quote className="w-8 h-8 text-ethos-purple/30" />
      </div>

      <blockquote className="text-ethos-gray-dark text-base leading-relaxed mb-6 italic">
        "{testimonial}"
      </blockquote>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-bold text-ethos-purple mb-1">{metric.value}</div>
            <div className="text-xs text-ethos-gray">{metric.label}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

// Client Logos Section
interface ClientLogosProps {
  title?: string;
  logos: {
    name: string;
    logo: string;
    industry: string;
  }[];
}

export const ClientLogos: React.FC<ClientLogosProps> = ({
  title = "Trusted by Industry Leaders",
  logos
}) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-2xl font-semibold text-ethos-navy mb-8">
          {title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {logos.map((client, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <ClientLogo
                src={client.logo}
                name={client.name}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
              <span className="text-xs text-ethos-gray text-center">{client.industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ROI Calculator Component
interface ROICalculatorProps {
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
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({
  title,
  description,
  inputs,
  calculation
}) => {
  const [inputValues, setInputValues] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    inputs.forEach(input => {
      initial[input.key] = input.defaultValue || (input.type === 'number' ? 0 : '');
    });
    return initial;
  });

  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (key: string, value: any) => {
    setInputValues(prev => ({ ...prev, [key]: value }));
  };

  const calculateROI = () => {
    const results = calculation(inputValues);
    setShowResults(true);
    return results;
  };

  const results = showResults ? calculateROI() : null;

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

      <Button
        onClick={calculateROI}
        className="w-full mb-8"
        variant="default"
        size="lg"
      >
        Calculate Your ROI
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>

      {results && (
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
      )}
    </Card>
  );
};

// Pricing Card Component
interface PricingCardProps {
  title: string;
  description: string;
  startingPrice: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  startingPrice,
  features,
  popular = false,
  ctaText = "Get Started",
  ctaLink = "/contact"
}) => {
  return (
    <Card className={`p-6 md:p-8 relative ${
      popular
        ? 'border-2 border-ethos-purple shadow-xl scale-105'
        : 'border border-gray-200 shadow-lg'
    }`}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-ethos-purple text-white px-4 py-1">
          Most Popular
        </Badge>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-ethos-navy mb-2">{title}</h3>
        <p className="text-ethos-gray mb-4">{description}</p>
        <div className="text-4xl font-bold text-ethos-purple mb-1">{startingPrice}</div>
        <div className="text-sm text-ethos-gray">Starting from</div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-ethos-gray-dark">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className="w-full"
        variant={popular ? "default" : "outline"}
        size="lg"
        asChild
      >
        <a href={ctaLink}>{ctaText}</a>
      </Button>
    </Card>
  );
};

// Urgency Banner Component
interface UrgencyBannerProps {
  message: string;
  ctaText: string;
  ctaLink: string;
  expiryDate?: string;
  limitedSlots?: number;
}

export const UrgencyBanner: React.FC<UrgencyBannerProps> = ({
  message,
  ctaText,
  ctaLink,
  expiryDate,
  limitedSlots
}) => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AlertCircle className="w-5 h-5" />
          <span className="font-medium">{message}</span>
          {expiryDate && (
            <span className="text-red-100">Expires: {expiryDate}</span>
          )}
          {limitedSlots && (
            <span className="text-red-100">Only {limitedSlots} slots remaining</span>
          )}
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="bg-white text-red-600 hover:bg-red-50"
          asChild
        >
          <a href={ctaLink}>{ctaText}</a>
        </Button>
      </div>
    </div>
  );
};

// Trust Signals Component
interface TrustSignalsProps {
  certifications: string[];
  awards: string[];
  securityBadges: string[];
}

export const TrustSignals: React.FC<TrustSignalsProps> = ({
  certifications,
  awards,
  securityBadges
}) => {
  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Shield className="w-8 h-8 text-ethos-purple mx-auto mb-4" />
            <h4 className="font-semibold text-ethos-navy mb-2">Certifications</h4>
            <div className="space-y-1">
              {certifications.map((cert, index) => (
                <div key={index} className="text-sm text-ethos-gray">{cert}</div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Award className="w-8 h-8 text-ethos-purple mx-auto mb-4" />
            <h4 className="font-semibold text-ethos-navy mb-2">Awards</h4>
            <div className="space-y-1">
              {awards.map((award, index) => (
                <div key={index} className="text-sm text-ethos-gray">{award}</div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Shield className="w-8 h-8 text-ethos-purple mx-auto mb-4" />
            <h4 className="font-semibold text-ethos-navy mb-2">Security</h4>
            <div className="space-y-1">
              {securityBadges.map((badge, index) => (
                <div key={index} className="text-sm text-ethos-gray">{badge}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};