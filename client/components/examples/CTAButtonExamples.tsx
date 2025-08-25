import React from 'react';
import { Button } from '@/components/ui/button';

/**
 * CTA Button Examples and Documentation
 * 
 * This component demonstrates how to use the standardized CTA (Call-to-Action) button
 * that follows the "Get Started Now" button design pattern used throughout the application.
 * 
 * Design Features:
 * - Purple gradient background (ethos-purple-light -> ethos-purple on hover)
 * - White text with responsive sizing
 * - Full rounded corners (rounded-full)
 * - Responsive padding and text sizes
 * - Smooth transition effects
 * - Consistent accessibility features
 */

export const CTAButtonExamples = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          CTA Button Component Examples
        </h1>

        {/* Basic CTA Button */}
        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Basic CTA Button
          </h2>
          <p className="text-gray-600">
            The standard CTA button using the predefined variant and size:
          </p>
          <div className="p-6 bg-white rounded-lg border">
            <Button variant="cta" size="cta">
              Get Started Now
            </Button>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
            <code>{`<Button variant="cta" size="cta">
  Get Started Now
</Button>`}</code>
          </pre>
        </section>

        {/* Common CTA Text Variations */}
        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Common CTA Text Variations
          </h2>
          <p className="text-gray-600">
            Examples of different CTA text content using the same styling:
          </p>
          <div className="p-6 bg-white rounded-lg border space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="cta">
                Get Started Now
              </Button>
              <Button variant="cta" size="cta">
                Schedule Demo
              </Button>
              <Button variant="cta" size="cta">
                Download Now
              </Button>
              <Button variant="cta" size="cta">
                Contact Us
              </Button>
              <Button variant="cta" size="cta">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Custom Sizing */}
        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Custom Sizing (Advanced)
          </h2>
          <p className="text-gray-600">
            For special cases, you can override the default CTA sizing:
          </p>
          <div className="p-6 bg-white rounded-lg border space-y-4">
            <div className="space-y-4">
              {/* Smaller CTA */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Compact CTA:</p>
                <Button 
                  variant="cta" 
                  className="px-6 py-2 text-sm"
                >
                  Get Started
                </Button>
              </div>
              
              {/* Larger CTA */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Large CTA:</p>
                <Button 
                  variant="cta" 
                  className="px-16 py-5 text-xl lg:text-2xl"
                >
                  Get Started Now
                </Button>
              </div>
              
              {/* Full Width CTA */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Full Width CTA:</p>
                <Button 
                  variant="cta" 
                  size="cta"
                  className="w-full"
                >
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
            <code>{`{/* Compact */}
<Button variant="cta" className="px-6 py-2 text-sm">
  Get Started
</Button>

{/* Large */}
<Button variant="cta" className="px-16 py-5 text-xl lg:text-2xl">
  Get Started Now
</Button>

{/* Full Width */}
<Button variant="cta" size="cta" className="w-full">
  Get Started Now
</Button>`}</code>
          </pre>
        </section>

        {/* Usage Guidelines */}
        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Usage Guidelines
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-800">✅ Do:</h3>
              <ul className="list-disc list-inside space-y-1 text-blue-700">
                <li>Use the CTA variant for primary call-to-action buttons</li>
                <li>Use consistent text like "Get Started Now", "Schedule Demo", etc.</li>
                <li>Apply the button in hero sections, landing pages, and conversion points</li>
                <li>Maintain the purple brand color scheme</li>
                <li>Use appropriate aria-labels for accessibility</li>
              </ul>
              
              <h3 className="font-semibold text-red-800 mt-4">❌ Don't:</h3>
              <ul className="list-disc list-inside space-y-1 text-red-700">
                <li>Override the purple color scheme with custom colors</li>
                <li>Use for secondary actions (use other button variants instead)</li>
                <li>Add complex hover effects that conflict with the built-in transitions</li>
                <li>Use multiple CTA buttons in the same section (maintain hierarchy)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Migration Guide */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Migration Guide
          </h2>
          <p className="text-gray-600">
            Replace existing custom "Get Started Now" buttons with the standardized component:
          </p>
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-semibold text-gray-800 mb-2">Before:</h4>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
              <code>{`<button className="bg-ethos-purple-light hover:bg-ethos-purple transition-colors duration-300 text-white px-8 lg:px-12 py-3 lg:py-4 rounded-full text-base sm:text-lg lg:text-xl font-medium">
  Get Started Now
</button>`}</code>
            </pre>
            
            <h4 className="font-semibold text-gray-800 mb-2 mt-4">After:</h4>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
              <code>{`<Button variant="cta" size="cta">
  Get Started Now
</Button>`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CTAButtonExamples;