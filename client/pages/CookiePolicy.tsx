import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="w-full bg-white" role="main" id="main-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-poppins leading-tight tracking-tight mb-6">
              <span className="bg-gradient-to-r from-ethos-navy-light to-ethos-gray-light bg-clip-text text-transparent">
                Cookie Policy
              </span>
            </h1>
            <p className="text-ethos-gray text-lg leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-AU', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ethos-navy-light mb-4">What Are Cookies</h2>
              <p className="text-ethos-gray leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better browsing experience by remembering your preferences 
                and understanding how you use our site.
              </p>
              <p className="text-ethos-gray leading-relaxed">
                This Cookie Policy explains how EthosPrompt uses cookies and similar tracking technologies 
                on our website in compliance with Australian privacy laws, including the Privacy Act 1988 
                and guidance from the Office of the Australian Information Commissioner (OAIC).
              </p>
            </section>

            {/* Types of Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ethos-navy-light mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium text-ethos-purple mb-3">Essential Cookies</h3>
              <p className="text-ethos-gray leading-relaxed mb-4">
                These cookies are necessary for our website to function properly and cannot be disabled. They include:
              </p>
              <ul className="list-disc pl-6 text-ethos-gray space-y-2 mb-6">
                <li>Session management cookies</li>
                <li>Security and authentication cookies</li>
                <li>Load balancing cookies</li>
                <li>Accessibility preference cookies</li>
              </ul>

              <h3 className="text-xl font-medium text-ethos-purple mb-3">Performance and Analytics Cookies</h3>
              <p className="text-ethos-gray leading-relaxed mb-4">
                These cookies help us understand how visitors interact with our website by collecting 
                anonymous information. We use this data to improve our services:
              </p>
              <ul className="list-disc pl-6 text-ethos-gray space-y-2 mb-6">
                <li>Google Analytics cookies (anonymized)</li>
                <li>Page performance monitoring</li>
                <li>Error tracking and debugging</li>
                <li>User journey analysis</li>
              </ul>

              <h3 className="text-xl font-medium text-ethos-purple mb-3">Functional Cookies</h3>
              <p className="text-ethos-gray leading-relaxed mb-4">
                These cookies enable enhanced functionality and personalization:
              </p>
              <ul className="list-disc pl-6 text-ethos-gray space-y-2 mb-6">
                <li>Language and region preferences</li>
                <li>Theme and display preferences</li>
                <li>Form data retention</li>
                <li>Chat and support features</li>
              </ul>

              <h3 className="text-xl font-medium text-ethos-purple mb-3">Marketing and Advertising Cookies</h3>
              <p className="text-ethos-gray leading-relaxed mb-4">
                With your consent, we may use cookies for marketing purposes:
              </p>
              <ul className="list-disc pl-6 text-ethos-gray space-y-2">
                <li>Tracking conversion from marketing campaigns</li>
                <li>Personalizing content and advertisements</li>
                <li>Social media integration</li>
                <li>Remarketing and retargeting</li>
              </ul>
            </section>

            {/* Third-Party Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ethos-navy-light mb-4">Third-Party Cookies and Services</h2>
              <p className="text-ethos-gray leading-relaxed mb-4">
                We use trusted third-party services that may set their own cookies:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-ethos-navy-light mb-3">Google Analytics</h4>
                <p className="text-ethos-gray text-sm mb-2">
                  We use Google Analytics to understand website usage patterns. Data is anonymized and 
                  aggregated to protect your privacy.
                </p>
                <p className="text-ethos-gray text-sm">
                  <strong>Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" 
                  className="text-ethos-purple hover:underline">Google Analytics Opt-out Browser Add-on</a>
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-ethos-navy-light mb-3">Social Media Platforms</h4>
                <p className="text-ethos-gray text-sm mb-2">
                  Our website may include social media buttons and widgets from platforms like LinkedIn, 
                  Twitter, and Facebook. These services may set their own cookies.
                </p>
                <p className="text-ethos-gray text-sm">
                  Please refer to each platform's privacy policy for more information about their cookie practices.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-ethos-navy-light mb-3">Customer Support Tools</h4>
                <p className="text-ethos-gray text-sm">
                  We use customer support and chat tools that may set cookies to maintain conversation 
                  history and provide better service.
                </p>
              </div>
            </section>

            {/* Tracking Pixels */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ethos-navy-light mb-4">Tracking Pixels and Web Beacons</h2>
              <p className="text-ethos-gray leading-relaxed mb-4">
                In addition to cookies, we may use tracking pixels (also called web beacons) in our 
                emails and on our website. These are small, invisible images that help us:
              </p>
              <ul className="list-disc pl-6 text-ethos-gray space-y-2 mb-4">
                <li>Track email open rates and engagement</li>
                <li>Understand which content is most valuable</li>
                <li>Measure the effectiveness of our communications</li>
                <li>Provide personalized content recommendations</li>
              </ul>
              <p className="text-ethos-gray leading-relaxed">
                This usage complies with OAIC guidance on tracking pixels and privacy obligations.
              </p>
            </section>

            {/* Managing Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ethos-navy-light mb-4">Managing Your Cookie Preferences</h2>
              
              <h3 className="text-xl font-medium text-ethos-purple mb-3">Browser Settings</h3>
              <p className="text-ethos-gray leading-relaxed mb-4">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc pl-6 text-ethos-gray space-y-2 mb-6">
                <li>View and delete existing cookies</li>
                <li>Block all cookies or specific types</li>
                <li>Set preferences for different websites</li>
                <li>Receive notifications when cookies are set</li>
              </ul>

              <h3 className="text-xl font-medium text-ethos-purple mb-3">Cookie Consent Management</h3>
              <p className="text-ethos-gray leading-relaxed mb-4">
                When you first visit our website, you'll see a cookie consent banner. You can:
              </p>
              <ul className="list-disc pl-6 text-ethos-gray space-y-2 mb-4">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your preferences by cookie category</li>
                <li>Change your preferences at any time</li>
              </ul>
              <p className="text-ethos-gray leading-relaxed">
                <strong>Note:</strong> Disabling certain cookies may affect website functionality and your user experience.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ethos-navy-light mb-4">Cookie Data Retention</h2>
              <p className="text-ethos-gray leading-relaxed mb-4">
                Different cookies have different lifespans:
              </p>
              <ul className="list-disc pl-6 text-ethos-gray space-y-2">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain for a set period (typically 30 days to 2 years)</li>
                <li><strong>Analytics cookies:</strong> Usually expire after 2 years</li>
                <li><strong>Marketing cookies:</strong> Typically expire after 30-90 days</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ethos-navy-light mb-4">Your Privacy Rights</h2>
              <p className="text-ethos-gray leading-relaxed mb-4">
                Under Australian privacy law, you have rights regarding the personal information 
                collected through cookies:
              </p>
              <ul className="list-disc pl-6 text-ethos-gray space-y-2 mb-4">
                <li>Right to know what information is collected</li>
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to request deletion of your information</li>
                <li>Right to withdraw consent for marketing cookies</li>
              </ul>
              <p className="text-ethos-gray leading-relaxed">
                To exercise these rights or for questions about our cookie practices, please contact us 
                using the information provided below.
              </p>
            </section>

            {/* Updates */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ethos-navy-light mb-4">Updates to This Policy</h2>
              <p className="text-ethos-gray leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or applicable laws. We will notify you of any material changes by posting the updated 
                policy on our website and updating the "Last updated" date.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-ethos-navy-light mb-4">Contact Us</h2>
              <p className="text-ethos-gray leading-relaxed mb-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-ethos-gray mb-2"><strong>Email:</strong> privacy@ethosprompt.com</p>
                <p className="text-ethos-gray mb-2"><strong>Phone:</strong> +61 (0) 123 456 789</p>
                <p className="text-ethos-gray mb-4"><strong>Address:</strong> 123 AI Street, Tech Valley, Sydney NSW 2000</p>
                <p className="text-ethos-gray text-sm">
                  For privacy complaints, you may also contact the Office of the Australian Information 
                  Commissioner (OAIC) at <a href="https://www.oaic.gov.au" className="text-ethos-purple hover:underline">www.oaic.gov.au</a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
