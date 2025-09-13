import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { ChevronDown, ChevronUp, Search, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is EthosPrompt and what services do you offer?",
          answer: "EthosPrompt is an enterprise AI solutions company specializing in custom AI implementations, system integration, intelligent applications, and digital transformation. We help businesses automate processes, improve customer experiences, and optimize operations through advanced AI technologies."
        },
        {
          question: "How do I get started with EthosPrompt's AI solutions?",
          answer: "Getting started is simple: 1) Contact us for a free consultation, 2) We'll assess your business needs and current systems, 3) Our team will design a custom AI solution tailored to your requirements, 4) We implement and integrate the solution with full support and training."
        },
        {
          question: "What industries do you serve?",
          answer: "We serve businesses across various industries including retail, healthcare, finance, manufacturing, professional services, and technology. Our AI solutions are adaptable to any industry that can benefit from automation, improved customer service, or operational efficiency."
        },
        {
          question: "How long does it take to implement an AI solution?",
          answer: "Implementation timelines vary based on complexity and scope. Simple AI chatbots can be deployed in 2-4 weeks, while comprehensive system integrations may take 8-16 weeks. We provide detailed project timelines during the consultation phase."
        }
      ]
    },
    {
      category: "AI Solutions & Technology",
      questions: [
        {
          question: "What types of AI solutions do you develop?",
          answer: "We develop custom AI chatbots for customer service, sales automation systems, intelligent document processing, predictive analytics tools, workflow automation, and AI-powered web and mobile applications. All solutions are tailored to your specific business needs."
        },
        {
          question: "Can you integrate AI with our existing systems?",
          answer: "Yes, we specialize in seamless system integration. Our AI solutions can connect with your existing CRM, ERP, databases, websites, and other business applications through APIs and custom integrations, ensuring minimal disruption to your current workflows."
        },
        {
          question: "What AI technologies do you use?",
          answer: "We work with leading AI platforms including OpenAI GPT models, Google AI, Microsoft Azure AI, and other cutting-edge technologies. We select the best technology stack based on your specific requirements, budget, and performance needs."
        },
        {
          question: "How accurate and reliable are your AI solutions?",
          answer: "Our AI solutions are designed for enterprise-grade reliability with accuracy rates typically exceeding 95%. We implement continuous learning mechanisms, regular model updates, and comprehensive testing to ensure consistent performance and improvement over time."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "How much do your AI solutions cost?",
          answer: "Pricing varies based on solution complexity, features, and scale. We offer flexible pricing models including one-time development fees, monthly subscriptions, and usage-based pricing. Contact us for a personalized quote based on your specific requirements."
        },
        {
          question: "Do you offer different service packages?",
          answer: "Yes, we offer various service packages from basic AI chatbot implementation to comprehensive digital transformation programs. Each package includes development, integration, training, and ongoing support tailored to different business sizes and needs."
        },
        {
          question: "What's included in your ongoing support?",
          answer: "Our support includes system monitoring, regular updates, performance optimization, technical support during business hours, monthly performance reports, and access to our knowledge base and training resources."
        },
        {
          question: "Do you offer free trials or demos?",
          answer: "We provide free consultations and can create proof-of-concept demonstrations for qualified prospects. This allows you to see how our AI solutions would work with your specific use case before making a commitment."
        }
      ]
    },
    {
      category: "Security & Compliance",
      questions: [
        {
          question: "How do you ensure data security and privacy?",
          answer: "We implement enterprise-grade security measures including data encryption, secure APIs, access controls, and compliance with Australian Privacy Act 1988. All data is processed and stored according to strict security protocols and industry best practices."
        },
        {
          question: "Are your solutions compliant with Australian regulations?",
          answer: "Yes, all our solutions comply with Australian privacy laws, consumer protection regulations, and industry-specific requirements. We ensure GDPR compliance for international operations and can meet specific regulatory requirements for your industry."
        },
        {
          question: "Where is our data stored and processed?",
          answer: "Data can be stored in Australian data centers or your preferred location to meet compliance requirements. We offer flexible deployment options including cloud, on-premises, or hybrid solutions based on your security and compliance needs."
        },
        {
          question: "Can we maintain control over our data?",
          answer: "Absolutely. You retain full ownership and control of your data. We provide transparent data handling practices, clear data retention policies, and the ability to export or delete your data at any time."
        }
      ]
    },
    {
      category: "Support & Maintenance",
      questions: [
        {
          question: "What kind of support do you provide after implementation?",
          answer: "We provide comprehensive ongoing support including technical assistance, system monitoring, regular updates, performance optimization, user training, and access to our support team during Australian business hours."
        },
        {
          question: "How do you handle system updates and improvements?",
          answer: "We provide regular system updates, security patches, and feature enhancements. Major updates are scheduled with advance notice, and we continuously monitor and optimize performance to ensure your AI solutions evolve with your business needs."
        },
        {
          question: "What if we need changes or additional features?",
          answer: "We offer flexible modification and enhancement services. Our team can add new features, modify existing functionality, or scale your solution as your business grows. We provide transparent pricing for additional development work."
        },
        {
          question: "Do you provide training for our team?",
          answer: "Yes, we provide comprehensive training for your team including user guides, video tutorials, live training sessions, and ongoing support. We ensure your team is fully equipped to maximize the benefits of your AI solution."
        }
      ]
    }
  ];

  // Flatten all questions for search
  const allQuestions = faqCategories.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      categoryIndex,
      questionIndex,
      category: category.category
    }))
  );

  // Filter questions based on search term
  const filteredQuestions = searchTerm
    ? allQuestions.filter(
        q =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="w-full bg-white" role="main" id="main-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-poppins leading-tight tracking-tight mb-6">
              <span className="bg-gradient-to-r from-ethos-navy-light to-ethos-gray-light bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-ethos-gray text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Find quick answers to common questions about our AI solutions, services, and support. 
              Can't find what you're looking for? Contact our support team for personalized assistance.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ethos-purple focus:border-transparent text-lg"
                />
              </div>
            </div>
          </header>

          {/* Search Results */}
          {searchTerm && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-ethos-navy-light mb-6">
                Search Results ({filteredQuestions.length} found)
              </h2>
              {filteredQuestions.length > 0 ? (
                <div className="space-y-4">
                  {filteredQuestions.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-xs bg-ethos-purple text-white px-2 py-1 rounded-full">
                              {item.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-ethos-navy-light mb-3">
                            {item.question}
                          </h3>
                          <p className="text-ethos-gray leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-ethos-gray mb-4">No questions found matching your search.</p>
                  <button
                    onClick={() => setSearchTerm("")}
                    className="text-ethos-purple hover:underline"
                  >
                    Clear search and browse all questions
                  </button>
                </div>
              )}
            </section>
          )}

          {/* FAQ Categories */}
          {!searchTerm && (
            <section>
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-2xl font-semibold text-ethos-navy-light mb-6 pb-2 border-b border-gray-200">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => {
                      const globalIndex = categoryIndex * 100 + questionIndex;
                      const isOpen = openItems.includes(globalIndex);
                      
                      return (
                        <div key={questionIndex} className="border border-gray-200 rounded-xl overflow-hidden">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-ethos-navy-light pr-4">
                              {item.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-ethos-purple flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-ethos-purple flex-shrink-0" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <p className="text-ethos-gray leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* Contact Support CTA */}
          <section className="mt-16">
            <div className="bg-gradient-to-r from-ethos-purple to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-purple-200" />
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Still Have Questions?</h2>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Our expert support team is ready to help you find the perfect AI solution for your business. 
                Get personalized answers and guidance tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-white text-ethos-purple px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  Contact Support
                </Link>
                <Link 
                  to="/help-center"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Visit Help Center
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
