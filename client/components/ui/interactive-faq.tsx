import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
  tags?: string[];
}

interface InteractiveFAQProps {
  title?: string;
  description?: string;
  faqs: FAQItem[];
  categories?: string[];
  showSearch?: boolean;
  showCategories?: boolean;
  contactCTA?: {
    text: string;
    link: string;
  };
  className?: string;
}

export const InteractiveFAQ: React.FC<InteractiveFAQProps> = ({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services",
  faqs,
  categories = [],
  showSearch = true,
  showCategories = true,
  contactCTA,
  className = ""
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Filter FAQs based on search term and category
  const filteredFAQs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = searchTerm === '' || 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [faqs, searchTerm, selectedCategory]);

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // Auto-expand first result if searching
    if (e.target.value && filteredFAQs.length > 0) {
      setExpandedItems(new Set([filteredFAQs[0].id]));
    }
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-ethos-purple mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-ethos-navy">
              {title}
            </h2>
          </div>
          <p className="text-xl text-ethos-gray max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-ethos-purple focus:border-ethos-purple text-gray-900"
            />
          </div>
        )}

        {/* Category Filter */}
        {showCategories && categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-ethos-purple text-white'
                  : 'bg-gray-100 text-ethos-gray hover:bg-gray-200'
              }`}
            >
              All Questions
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-ethos-purple text-white'
                    : 'bg-gray-100 text-ethos-gray hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.length === 0 ? (
            <Card className="p-8 text-center">
              <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-ethos-navy mb-2">No questions found</h3>
              <p className="text-ethos-gray mb-4">
                Try adjusting your search terms or browse all categories.
              </p>
              {contactCTA && (
                <Button asChild className="bg-ethos-purple hover:bg-ethos-purple/90">
                  <a href={contactCTA.link}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {contactCTA.text}
                  </a>
                </Button>
              )}
            </Card>
          ) : (
            filteredFAQs.map((faq) => (
              <Card key={faq.id} className="overflow-hidden">
                <button
                  onClick={() => toggleExpanded(faq.id)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ethos-purple focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-ethos-navy pr-4">
                      {faq.question}
                    </h3>
                    {expandedItems.has(faq.id) ? (
                      <ChevronUp className="w-5 h-5 text-ethos-purple flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-ethos-gray flex-shrink-0" />
                    )}
                  </div>
                  {faq.category && (
                    <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-ethos-purple/10 text-ethos-purple rounded-full">
                      {faq.category}
                    </span>
                  )}
                </button>
                {expandedItems.has(faq.id) && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <div className="pt-4 text-ethos-gray leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </Card>
            ))
          )}
        </div>

        {/* Contact CTA */}
        {contactCTA && filteredFAQs.length > 0 && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-ethos-purple/10 to-ethos-navy/10 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-ethos-navy mb-2">
                Still have questions?
              </h3>
              <p className="text-ethos-gray mb-6">
                Our team is here to help you find the perfect solution for your business.
              </p>
              <Button asChild size="lg" className="bg-ethos-purple hover:bg-ethos-purple/90">
                <a href={contactCTA.link}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {contactCTA.text}
                </a>
              </Button>
            </div>
          </div>
        )}

        {/* Search Results Summary */}
        {searchTerm && (
          <div className="mt-6 text-center text-sm text-ethos-gray">
            Found {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} 
            {searchTerm && ` matching "${searchTerm}"`}
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </div>
        )}
      </div>
    </section>
  );
};

// Hook for FAQ analytics
export const useFAQAnalytics = () => {
  const trackFAQInteraction = (action: string, question: string, category?: string) => {
    // Google Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'faq_interaction', {
        event_category: 'FAQ',
        event_label: question,
        custom_parameter_1: action,
        custom_parameter_2: category || 'uncategorized'
      });
    }
  };

  const trackFAQSearch = (searchTerm: string, resultsCount: number) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'faq_search', {
        event_category: 'FAQ',
        event_label: searchTerm,
        value: resultsCount
      });
    }
  };

  return { trackFAQInteraction, trackFAQSearch };
};
