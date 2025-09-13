import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Service-specific tabbed section component
interface ServiceTabsProps {
  tabs: Array<{
    id: string;
    label: string;
    content: React.ReactNode;
    badge?: string;
  }>;
  defaultTab?: string;
  className?: string;
  variant?: 'default' | 'pills' | 'underline';
}

export function ServiceTabs({ tabs, defaultTab, className, variant = 'default' }: ServiceTabsProps) {
  const getTabsListStyles = () => {
    switch (variant) {
      case 'pills':
        return 'bg-gray-100 p-1 rounded-lg';
      case 'underline':
        return 'bg-transparent border-b border-gray-200 rounded-none p-0 h-auto';
      default:
        return 'bg-ethos-purple/5 p-1 rounded-lg border border-ethos-purple/10';
    }
  };

  const getTabTriggerStyles = () => {
    switch (variant) {
      case 'pills':
        return 'data-[state=active]:bg-white data-[state=active]:text-ethos-navy data-[state=active]:shadow-sm text-gray-600 hover:text-ethos-navy';
      case 'underline':
        return 'data-[state=active]:bg-transparent data-[state=active]:text-ethos-purple data-[state=active]:border-b-2 data-[state=active]:border-ethos-purple data-[state=active]:shadow-none rounded-none border-b-2 border-transparent text-gray-600 hover:text-ethos-purple pb-3';
      default:
        return 'data-[state=active]:bg-white data-[state=active]:text-ethos-purple data-[state=active]:shadow-sm text-ethos-navy/70 hover:text-ethos-purple';
    }
  };

  return (
    <div className={cn('w-full', className)}>
      <Tabs defaultValue={defaultTab || tabs[0]?.id} className="w-full">
        <TabsList className={cn('grid w-full gap-1', getTabsListStyles())} style={{ gridTemplateColumns: tabs.length > 3 ? 'repeat(auto-fit, minmax(120px, 1fr))' : `repeat(${tabs.length}, 1fr)` }}>
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={cn('relative text-sm sm:text-base px-2 sm:px-4 py-2', getTabTriggerStyles())}
            >
              {tab.label}
              {tab.badge && (
                <span className="ml-2 px-2 py-0.5 text-xs bg-ethos-purple text-white rounded-full">
                  {tab.badge}
                </span>
              )}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="mt-6">
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

// Service-specific accordion component
interface ServiceAccordionProps {
  items: Array<{
    id: string;
    title: string;
    content: React.ReactNode;
    defaultOpen?: boolean;
  }>;
  type?: 'single' | 'multiple';
  className?: string;
  variant?: 'default' | 'bordered' | 'minimal';
}

export function ServiceAccordion({ items, type = 'single', className, variant = 'default' }: ServiceAccordionProps) {
  const getAccordionStyles = () => {
    switch (variant) {
      case 'bordered':
        return 'border border-gray-200 rounded-lg overflow-hidden';
      case 'minimal':
        return 'space-y-2';
      default:
        return 'bg-white rounded-lg shadow-sm border border-gray-100';
    }
  };

  const getItemStyles = () => {
    switch (variant) {
      case 'bordered':
        return 'border-b border-gray-200 last:border-b-0 px-6';
      case 'minimal':
        return 'bg-gray-50 rounded-lg px-6 border-0';
      default:
        return 'px-6 border-b border-gray-100 last:border-b-0';
    }
  };

  const defaultOpenItems = items.filter(item => item.defaultOpen).map(item => item.id);

  return (
    <Accordion
      type={type}
      defaultValue={type === 'single' ? defaultOpenItems[0] : defaultOpenItems}
      className={cn(getAccordionStyles(), className)}
    >
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id} className={getItemStyles()}>
          <AccordionTrigger className="text-left text-lg font-semibold text-ethos-navy hover:text-ethos-purple">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// Horizontal scrolling container
interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  showControls?: boolean;
  itemWidth?: string;
  gap?: string;
}

export function HorizontalScroll({ children, className, showControls = false, itemWidth = 'auto', gap = '1rem' }: HorizontalScrollProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={cn('relative', className)}>
      {showControls && (
        <>
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-ethos-navy" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-ethos-navy" />
          </button>
        </>
      )}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide pb-4"
        style={{ gap, scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: itemWidth }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

// Multi-column grid component
interface MultiColumnGridProps {
  children: React.ReactNode;
  columns?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: string;
  className?: string;
}

export function MultiColumnGrid({ children, columns = { default: 1 }, gap = '1.5rem', className }: MultiColumnGridProps) {
  const getGridClasses = () => {
    const { default: defaultCols, sm, md, lg, xl } = columns;
    let classes = `grid-cols-${defaultCols}`;

    if (sm) classes += ` sm:grid-cols-${sm}`;
    if (md) classes += ` md:grid-cols-${md}`;
    if (lg) classes += ` lg:grid-cols-${lg}`;
    if (xl) classes += ` xl:grid-cols-${xl}`;

    return classes;
  };

  return (
    <div
      className={cn('grid', getGridClasses(), className)}
      style={{ gap }}
    >
      {children}
    </div>
  );
}

// Compact feature grid (2 rows instead of 3)
interface CompactFeatureGridProps {
  features: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    gradient?: string;
  }>;
  className?: string;
}

export function CompactFeatureGrid({ features, className }: CompactFeatureGridProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6', className)}>
      {features.map((feature, index) => (
        <div
          key={index}
          className={cn(
            'bg-gradient-to-br rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1',
            feature.gradient || 'from-gray-50 to-gray-100'
          )}
        >
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

// Horizontal testimonials carousel
interface HorizontalTestimonialsProps {
  testimonials: Array<{
    name: string;
    role: string;
    company: string;
    testimonial: string;
    image?: string;
    rating?: number;
    metrics?: Array<{ label: string; value: string }>;
  }>;
  className?: string;
}

export function HorizontalTestimonials({ testimonials, className }: HorizontalTestimonialsProps) {
  return (
    <HorizontalScroll
      className={className}
      showControls={true}
      itemWidth="400px"
      gap="1.5rem"
    >
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
          <div className="flex items-start space-x-4 mb-4">
            {testimonial.image && (
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
            <div>
              <h4 className="font-semibold text-ethos-navy">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="text-sm text-ethos-purple">{testimonial.company}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4 text-sm leading-relaxed">{testimonial.testimonial}</p>
          {testimonial.metrics && (
            <div className="grid grid-cols-2 gap-2">
              {testimonial.metrics.map((metric, idx) => (
                <div key={idx} className="text-center p-2 bg-gray-50 rounded">
                  <div className="font-semibold text-ethos-purple text-sm">{metric.value}</div>
                  <div className="text-xs text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </HorizontalScroll>
  );
}

// Horizontal metrics/proof points
interface HorizontalMetricsProps {
  metrics: Array<{
    metric: string;
    description: string;
    icon: React.ReactNode;
    bgColor?: string;
  }>;
  className?: string;
}

export function HorizontalMetrics({ metrics, className }: HorizontalMetricsProps) {
  return (
    <HorizontalScroll
      className={className}
      showControls={false}
      itemWidth="280px"
      gap="1rem"
    >
      {metrics.map((item, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center h-full">
          <div className={cn('w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4', item.bgColor || 'bg-ethos-purple/10')}>
            {item.icon}
          </div>
          <div className="text-2xl font-bold text-ethos-navy mb-2">{item.metric}</div>
          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </HorizontalScroll>
  );
}

// Service testimonials and pricing tabbed section
interface ServiceShowcaseTabsProps {
  testimonials: Array<{
    name: string;
    role: string;
    company: string;
    testimonial: string;
    image?: string;
    rating?: number;
    metrics?: Array<{ label: string; value: string }>;
  }>;
  pricing: Array<{
    title: string;
    description: string;
    startingPrice: string;
    features: string[];
    popular?: boolean;
  }>;
  trustSignals?: {
    certifications: string[];
    awards: string[];
    securityBadges: string[];
  };
  className?: string;
}

export function ServiceShowcaseTabs({ testimonials, pricing, trustSignals, className }: ServiceShowcaseTabsProps) {
  const tabs = [
    {
      id: 'testimonials',
      label: 'Success Stories',
      badge: testimonials.length.toString(),
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-4">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <h4 className="font-semibold text-ethos-navy">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-ethos-purple">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.testimonial}</p>
              {testimonial.metrics && (
                <div className="grid grid-cols-3 gap-2">
                  {testimonial.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-2 bg-gray-50 rounded">
                      <div className="font-semibold text-ethos-purple text-sm">{metric.value}</div>
                      <div className="text-xs text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'pricing',
      label: 'Investment',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((plan, index) => (
            <div key={index} className={cn(
              'bg-white rounded-xl p-6 shadow-sm border',
              plan.popular ? 'border-ethos-purple ring-2 ring-ethos-purple/20' : 'border-gray-100'
            )}>
              {plan.popular && (
                <div className="bg-ethos-purple text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-ethos-navy mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="text-2xl font-bold text-ethos-purple mb-4">{plan.startingPrice}</div>
              <ul className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    }
  ];

  if (trustSignals) {
    tabs.push({
      id: 'trust',
      label: 'Security & Trust',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-ethos-navy mb-4">Certifications</h4>
            <div className="space-y-2">
              {trustSignals.certifications.map((cert, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg border border-gray-100 text-sm">
                  {cert}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-ethos-navy mb-4">Awards</h4>
            <div className="space-y-2">
              {trustSignals.awards.map((award, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg border border-gray-100 text-sm">
                  {award}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-ethos-navy mb-4">Security</h4>
            <div className="space-y-2">
              {trustSignals.securityBadges.map((badge, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg border border-gray-100 text-sm">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    });
  }

  return (
    <section className={cn('py-12 bg-gray-50', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceTabs tabs={tabs} variant="underline" />
      </div>
    </section>
  );
}

// Compact FAQ accordion
interface CompactFAQProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  title?: string;
  className?: string;
  maxHeight?: string;
}

export function CompactFAQ({ faqs, title = "Frequently Asked Questions", className, maxHeight = "400px" }: CompactFAQProps) {
  const accordionItems = faqs.map((faq, index) => ({
    id: `faq-${index}`,
    title: faq.question,
    content: <p className="text-gray-700 leading-relaxed">{faq.answer}</p>,
    defaultOpen: index === 0 // Open first item by default
  }));

  return (
    <section className={cn('py-12 bg-white', className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-ethos-navy mb-4">
            {title}
          </h2>
        </div>
        <div className="max-h-96 overflow-y-auto">
          <ServiceAccordion
            items={accordionItems}
            type="single"
            variant="minimal"
          />
        </div>
      </div>
    </section>
  );
}

// Expandable feature cards
interface ExpandableFeatureCardsProps {
  features: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    details?: string;
    gradient?: string;
  }>;
  className?: string;
}

export function ExpandableFeatureCards({ features, className }: ExpandableFeatureCardsProps) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6', className)}>
      {features.map((feature, index) => (
        <div
          key={index}
          className={cn(
            'bg-gradient-to-br rounded-2xl p-6 hover:shadow-lg transition-all duration-300',
            feature.gradient || 'from-gray-50 to-gray-100'
          )}
        >
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">{feature.description}</p>
          {feature.details && (
            <details className="group">
              <summary className="cursor-pointer text-ethos-purple text-sm font-medium hover:text-ethos-purple-dark transition-colors">
                Learn more
              </summary>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{feature.details}</p>
            </details>
          )}
        </div>
      ))}
    </div>
  );
}
