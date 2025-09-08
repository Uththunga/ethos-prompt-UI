import { Link } from "react-router-dom";
import { FaArrowUp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const Footer = () => {
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  const footerBackgroundPath = `${baseUrl}assets/images/footer-background.jpg`;
  const ethosBrainPath = `${baseUrl}assets/images/ethosbrain.svg`;
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-ethos-navy relative overflow-x-hidden" role="contentinfo" aria-labelledby="footer-heading">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={footerBackgroundPath}
          alt="Footer Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">Footer Navigation and Information</h2>
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src={ethosBrainPath}
                alt=""
                className="w-5 h-5 self-center filter brightness-0 invert"
                aria-hidden="true"
              />
              <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold">EthosPrompt</h3>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              Premium engineered prompts designed by experts to unlock the full potential of AI for professionals, creators, and innovators worldwide.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Follow us on Twitter">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Connect on LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="View our GitHub">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav>
            <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3" role="list">
              <li><Link to="/solutions" className="block text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">Solutions</Link></li>
              <li><Link to="/prompt-library" className="block text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">Prompt Library</Link></li>
              <li><Link to="/prompting-guide" className="block text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">Prompting Guide</Link></li>
              <li><Link to="/contact" className="block text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">Contact Us</Link></li>
            </ul>
          </nav>

          {/* Support */}
          <nav>
            <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg mb-4">Support</h4>
            <ul className="space-y-3" role="list">
              <li><Link to="/help-center" className="block text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">Help Center</Link></li>
              <li><Link to="/faq" className="block text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">FAQs</Link></li>
              <li><Link to="/tutorials" className="block text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">Tutorials</Link></li>
              <li><Link to="/contact" className="block text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base">Contact Us</Link></li>
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="space-y-4 not-italic">
            <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-ethos-purple-light mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm md:text-base">123 AI Street, Tech Valley, CA 94025</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-ethos-purple-light" />
                <a href="mailto:info@ethosprompt.com" className="text-gray-300 hover:text-white text-xs sm:text-sm md:text-base">info@ethosprompt.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-ethos-purple-light" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-white text-xs sm:text-sm md:text-base">+1 (123) 456-7890</a>
              </div>
            </div>
          </address>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
              &copy; {currentYear} EthosPrompt. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-xs sm:text-sm md:text-base">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-xs sm:text-sm md:text-base">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-xs sm:text-sm md:text-base">Cookie Policy</Link>
              {/* Back to top button - now part of footer */}
              <Button
                onClick={scrollToTop}
                className="ml-4 p-2 rounded-full shadow transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                variant="outline"
                size="sm"
                aria-label="Back to top"
              >
                <FaArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};