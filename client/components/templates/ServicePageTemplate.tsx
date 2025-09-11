import React, { memo } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicePageTemplateProps {
  // Hero Section
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  heroDescription: React.ReactNode;
  heroImage?: string | React.ReactNode;
  heroImageAlt?: string;
  heroImageClassName?: string;

  // Problem Statement Section
  problemTitle: React.ReactNode;
  problemDescription: string;
  problemPoints: Array<{
    icon: React.ReactNode;
    text: string;
  }>;

  // Solution Section
  solutionTitle: React.ReactNode;
  solutionDescription: string;
  solutionFeatures: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    gradient?: string;
  }>;

  // Proof/Evidence Section
  proofTitle: React.ReactNode;
  proofDescription: string;
  proofItems: Array<{
    metric: string;
    description: string;
    icon: React.ReactNode;
    bgColor?: string;
  }>;

  // CTA Section
  ctaTitle?: React.ReactNode;
  ctaDescription?: React.ReactNode;
  ctaButtonText?: string;
  ctaButtonLink?: string;
  ctaSection?: React.ReactNode;
}

export const ServicePageTemplate = memo(function ServicePageTemplate({
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroImage,
  heroImageAlt,
  heroImageClassName,
  problemTitle,
  ctaSection,
  problemDescription,
  problemPoints,
  solutionTitle,
  solutionDescription,
  solutionFeatures,
  proofTitle,
  proofDescription,
  proofItems,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink = "/contact"
}: ServicePageTemplateProps) {
  const baseUrl = import.meta.env.BASE_URL || '/';
  const withBase = (path: string) => {
    const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    return `${base}${path.replace(/^\/+/, '')}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main role="main" id="main-content" className="font-sans antialiased">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FEFEFE] to-[#FEFEFE] py-16 md:py-20 lg:py-24 xl:py-28" aria-labelledby="service-hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

              {/* Left Column - Content */}
              <div className="space-y-6 relative z-10">
                <header>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-ethos-purple/10 text-ethos-purple text-sm font-medium rounded-full">
                      {heroSubtitle}
                    </span>
                  </div>
                  <h1 id="service-hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7.5xl font-semibold font-poppins leading-tight tracking-[-0.02em]">
                    <span className="bg-gradient-to-r from-ethos-navy-light to-ethos-gray-light bg-clip-text text-transparent">
                      {heroTitle}
                    </span>
                  </h1>
                </header>
                <p className="text-ethos-gray text-base sm:text-lg lg:text-xl font-light leading-relaxed tracking-normal max-w-2xl">
                  {heroDescription}
                </p>
                <div className="pt-4">
                  <Link to={ctaButtonLink}>
                    <Button
                      variant="cta"
                      size="cta"
                      className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                    >
                      <span className="relative z-10 flex items-center">
                        Get Started Today
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column - Image */}
              {heroImage && (
                <div className={`relative w-full ${heroImageClassName ? '' : 'lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:mr-[-50px] xl:mr-[-80px]'} z-0`}>
                  {typeof heroImage === 'string' ? (
                    <img
                      src={withBase(heroImage)}
                      alt={heroImageAlt || "Service illustration"}
                      className={`${heroImageClassName || 'w-full h-auto max-w-md lg:max-w-2xl xl:max-w-3xl ml-auto'} mix-blend-multiply`}
                      loading="eager"
                      fetchPriority="high"
                      style={{ background: 'transparent' }}
                    />
                  ) : (
                    heroImage
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50" aria-labelledby="problem-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <header className="mb-12">
                <div className="mb-8">
                  {problemTitle}
                </div>
                {problemDescription && (
                  <p className="text-ethos-gray text-lg sm:text-xl lg:text-2xl font-light leading-relaxed">
                    {problemDescription}
                  </p>
                )}
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {problemPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-start">
                      {point.icon}
                      <p className="text-gray-700 text-sm leading-relaxed ml-3">{point.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-white" aria-labelledby="solution-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <div className="mb-8">
                {solutionTitle}
              </div>
              {solutionDescription && (
                <p className="text-ethos-gray text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
                  {solutionDescription}
                </p>
              )}
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutionFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${feature.gradient || 'from-gray-50 to-gray-100'} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proof/Evidence Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50" aria-labelledby="proof-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <div className="mb-8">
                {proofTitle}
              </div>
              {proofDescription && (
                <p className="text-ethos-gray text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
                  {proofDescription}
                </p>
              )}
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {proofItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`${item.bgColor || 'bg-ethos-purple/10'} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    {item.icon}
                  </div>
                  <div className="text-4xl font-bold text-ethos-navy mb-3">{item.metric}</div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {ctaSection || (
          <section className="py-16 bg-gradient-to-br from-ethos-light-gray to-ethos-light-gray/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-ethos-navy rounded-3xl p-8 md:p-12 lg:p-16 text-center">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-8">
                    {ctaTitle}
                    {ctaDescription && (
                      <div className="mt-6 text-xl text-white/80">
                        {ctaDescription}
                      </div>
                    )}
                  </div>
                  {ctaButtonText && ctaButtonLink && (
                    <Link to={ctaButtonLink}>
                      <Button
                        className="group bg-gradient-to-r from-ethos-purple to-ethos-purple-dark hover:from-ethos-purple-dark hover:to-ethos-purple-darker text-white px-8 py-6 text-lg font-medium rounded-full transition-all duration-300"
                        size="lg"
                      >
                        <span className="flex items-center">
                          {ctaButtonText}
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
        <Footer />
      </main>
    </div>
  );
});