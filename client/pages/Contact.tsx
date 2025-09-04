import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Contact = () => {
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Main Contact Section */}
      <main className="w-full bg-white" role="main" id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
            
            {/* Left Column - Content */}
            <section className="space-y-6 md:space-y-8 lg:space-y-10" aria-labelledby="contact-heading">
              {/* Main Heading */}
              <header className="space-y-6">
                <h1 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold font-poppins leading-tight tracking-tight">
                  <span className="bg-gradient-to-b from-[#262A57] to-[#717493] bg-clip-text text-transparent">Connect with our </span>
                  <span className="text-ethos-purple">Solutions Experts </span>
                  <span className="bg-gradient-to-b from-[#262A57] to-[#717493] bg-clip-text text-transparent">Today</span>
                </h1>
                
                <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight max-w-4xl">
                  Discover how EthosPrompt's enterprise AI platform transforms organizational efficiency through intelligent automation, seamless integrations, and strategic workflow optimization—delivered with enterprise-grade security.
                </p>
              </header>

              {/* Discussion Points */}
              <section className="space-y-6" aria-labelledby="discussion-heading">
                <h2 id="discussion-heading" className="text-ethos-gray text-base md:text-lg lg:text-xl font-medium leading-relaxed tracking-tight">
                  Let's schedule a consultation to discuss:
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8" role="list">
                  {/* Left Column Points */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4" role="listitem">
                      <div className="relative w-9 h-9 flex-shrink-0 mt-1">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#D94581] to-[#FFD395]"></div>
                        <img
                          src={`${baseUrl}assets/images/check-icon.png`}
                          alt=""
                          className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="text-ethos-gray text-xs sm:text-sm md:text-base font-normal leading-relaxed tracking-tight">
                        Maximizing ROI with enterprise AI solutions
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4" role="listitem">
                      <div className="relative w-9 h-9 flex-shrink-0 mt-1">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#D94581] to-[#FFD395]"></div>
                        <img
                          src={`${baseUrl}assets/images/check-icon.png`}
                          alt=""
                          className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="text-ethos-gray text-xs sm:text-sm md:text-base font-normal leading-relaxed tracking-tight">
                        Industry-specific AI implementation strategies
                      </p>
                    </div>
                  </div>
                  
                  {/* Right Column Points */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4" role="listitem">
                      <div className="relative w-9 h-9 flex-shrink-0 mt-1">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#D94581] to-[#FFD395]"></div>
                        <img
                          src={`${baseUrl}assets/images/check-icon.png`}
                          alt=""
                          className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="text-ethos-gray text-xs sm:text-sm md:text-base font-normal leading-relaxed tracking-tight">
                        Optimal deployment plans for your organization
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4" role="listitem">
                      <div className="relative w-9 h-9 flex-shrink-0 mt-1">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#D94581] to-[#FFD395]"></div>
                        <img
                          src={`${baseUrl}assets/images/check-icon.png`}
                          alt=""
                          className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="text-ethos-gray text-xs sm:text-sm md:text-base font-normal leading-relaxed tracking-tight">
                        Live demonstration of our enterprise platform
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section className="space-y-4" aria-labelledby="contact-info-heading">
                <h3 id="contact-info-heading" className="sr-only">Contact Information</h3>
                <p className="text-ethos-gray text-xs sm:text-sm md:text-base font-normal leading-relaxed tracking-tight">
                  Speak with an EthosPrompt solutions specialist: <span className="font-medium">+1 (877) XXX-XXXX</span>
                </p>
                <p className="text-ethos-gray text-xs sm:text-sm md:text-base font-normal leading-relaxed tracking-tight">
                  Need assistance? For technical support or billing inquiries, visit our <span className="font-medium">Support Center</span> for comprehensive resources and expert guidance.
                </p>
              </section>
            </section>

            {/* Right Column - Contact Form */}
            <section className="w-full max-w-2xl xl:max-w-none" aria-labelledby="contact-form-heading">
              <div className="bg-gradient-to-b from-[#FBF9F9] to-[#F3F3F3] rounded-2xl md:rounded-3xl lg:rounded-[33px] p-4 sm:p-6 md:p-8 lg:p-12">
                <h2 id="contact-form-heading" className="sr-only">Contact Form</h2>
                <form className="space-y-6" aria-label="Contact sales team form" noValidate>
                  {/* Form Grid */}
                  <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <legend className="sr-only">Personal and Business Information</legend>
                    
                    {/* First Name */}
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="sr-only">First Name (required)</label>
                      <div className="relative">
                        <Input
                          id="first-name"
                          name="firstName"
                          required
                          aria-required="true"
                          aria-describedby="first-name-error"
                          placeholder="First Name"
                          className="h-12 px-4 py-2 text-base font-normal placeholder:text-ethos-gray-light border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200 w-full"
                        />
                        <span className="absolute top-1/2 right-3 -translate-y-1/2 text-red-600 text-lg" aria-hidden="true">*</span>
                      </div>
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="sr-only">Last Name (required)</label>
                      <div className="relative">
                        <Input
                          id="last-name"
                          name="lastName"
                          required
                          aria-required="true"
                          aria-describedby="last-name-error"
                          placeholder="Last Name"
                          className="h-12 px-4 py-2 text-base font-normal placeholder:text-ethos-gray-light border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200 w-full"
                        />
                        <span className="absolute top-1/2 right-3 -translate-y-1/2 text-red-600 text-lg" aria-hidden="true">*</span>
                      </div>
                    </div>

                    {/* Business Email */}
                    <div className="space-y-2 sm:col-span-2 md:col-span-1">
                      <label htmlFor="business-email" className="sr-only">Business Email (required)</label>
                      <div className="relative">
                        <Input
                          id="business-email"
                          name="businessEmail"
                          type="email"
                          required
                          aria-required="true"
                          aria-describedby="business-email-error"
                          placeholder="Business Email"
                          className="h-12 px-4 py-2 text-base font-normal placeholder:text-ethos-gray-light border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200 w-full"
                        />
                        <span className="absolute top-1/2 right-3 -translate-y-1/2 text-red-600 text-lg" aria-hidden="true">*</span>
                      </div>
                    </div>

                    {/* Business Phone */}
                    <div className="space-y-2 sm:col-span-2 md:col-span-1">
                      <label htmlFor="business-phone" className="sr-only">Business Phone (required)</label>
                      <div className="relative">
                        <Input
                          id="business-phone"
                          name="businessPhone"
                          type="tel"
                          required
                          aria-required="true"
                          aria-describedby="business-phone-error"
                          placeholder="Business Phone"
                          className="h-12 px-4 py-2 text-base font-normal placeholder:text-ethos-gray-light border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200 w-full"
                        />
                        <span className="absolute top-1/2 right-3 -translate-y-1/2 text-red-600 text-lg" aria-hidden="true">*</span>
                      </div>
                    </div>

                    {/* Job Title */}
                    <div className="space-y-2">
                      <label htmlFor="job-title" className="sr-only">Job Title (required)</label>
                      <div className="relative">
                        <Input
                          id="job-title"
                          name="jobTitle"
                          required
                          aria-required="true"
                          aria-describedby="job-title-error"
                          placeholder="Job Title"
                          className="h-12 px-4 py-2 text-base font-normal placeholder:text-ethos-gray-light border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200 w-full"
                        />
                        <span className="absolute top-1/2 right-3 -translate-y-1/2 text-red-600 text-lg" aria-hidden="true">*</span>
                      </div>
                    </div>

                    {/* Company Name */}
                    <div className="space-y-2">
                      <label htmlFor="company-name" className="sr-only">Company Name (required)</label>
                      <div className="relative">
                        <Input
                          id="company-name"
                          name="companyName"
                          required
                          aria-required="true"
                          aria-describedby="company-name-error"
                          placeholder="Company Name"
                          className="h-12 px-4 py-2 text-base font-normal placeholder:text-ethos-gray-light border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200 w-full"
                        />
                        <span className="absolute top-1/2 right-3 -translate-y-1/2 text-red-600 text-lg" aria-hidden="true">*</span>
                      </div>
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <label htmlFor="country" className="sr-only">Country (required)</label>
                      <div className="relative">
                        <Select name="country" required aria-required="true">
                          <SelectTrigger 
                            id="country"
                            className="h-12 px-4 py-2 text-sm sm:text-sm md:text-sm font-normal text-ethos-gray-light placeholder:text-ethos-gray-light border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200 w-full text-left"
                            aria-label="Select country"
                          >
                            <SelectValue placeholder="Country" className="text-ethos-gray-light" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="nz">New Zealand</SelectItem>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="cn">China</SelectItem>
                            <SelectItem value="jp">Japan</SelectItem>
                            <SelectItem value="kr">South Korea</SelectItem>
                            <SelectItem value="sg">Singapore</SelectItem>
                            <SelectItem value="my">Malaysia</SelectItem>
                            <SelectItem value="th">Thailand</SelectItem>
                            <SelectItem value="vn">Vietnam</SelectItem>
                            <SelectItem value="id">Indonesia</SelectItem>
                            <SelectItem value="in">India</SelectItem>
                            <SelectItem value="de">Germany</SelectItem>
                            <SelectItem value="fr">France</SelectItem>
                            <SelectItem value="it">Italy</SelectItem>
                            <SelectItem value="es">Spain</SelectItem>
                            <SelectItem value="nz">New Zealand</SelectItem>
                            <SelectItem value="ae">United Arab Emirates</SelectItem>
                            <SelectItem value="sa">Saudi Arabia</SelectItem>
                            <SelectItem value="za">South Africa</SelectItem>
                            <SelectItem value="br">Brazil</SelectItem>
                            <SelectItem value="mx">Mexico</SelectItem>
                            <SelectItem value="pe">Peru</SelectItem>
                            <SelectItem value="cl">Chile</SelectItem>
                            <SelectItem value="ar">Argentina</SelectItem>
                            <SelectItem value="ru">Russia</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <span className="absolute top-1/2 right-3 -translate-y-1/2 text-red-600 text-lg" aria-hidden="true">*</span>
                      </div>
                    </div>

                    {/* Company Size */}
                    <div className="space-y-2">
                      <label htmlFor="company-size" className="sr-only">Company Size (required)</label>
                      <div className="relative">
                        <Select name="companySize" required aria-required="true">
                          <SelectTrigger 
                            id="company-size"
                            className="h-12 px-4 py-2 text-sm sm:text-sm md:text-sm font-normal text-ethos-gray-light placeholder:text-ethos-gray-light border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200 w-full text-left"
                            aria-label="Select company size"
                          >
                            <SelectValue placeholder="Company Size" className="text-ethos-gray-light" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-500">201-500 employees</SelectItem>
                            <SelectItem value="500+">500+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                        <span className="absolute top-1/2 right-3 -translate-y-1/2 text-red-600 text-lg" aria-hidden="true">*</span>
                      </div>
                    </div>
                  </fieldset>

                  {/* How can we help you */}
                  <div className="space-y-2">
                    <label htmlFor="help-message" className="sr-only">How can we help you</label>
                    <Textarea
                      id="help-message"
                      name="helpMessage"
                      placeholder="How can we help you"
                      className="min-h-[120px] px-4 py-3 text-base font-normal placeholder:text-ethos-gray-light border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200 resize-none w-full"
                    />
                  </div>

                  {/* Marketing Consent */}
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-ethos-gray text-sm sm:text-base font-normal leading-relaxed tracking-tight">
                      By proceeding, you authorize EthosPrompt to contact you regarding our enterprise solutions, services, industry events, educational webinars, and relevant business communications. You may update your communication preferences at any time by visiting <span className="underline">our preference center</span>.
                    </p>
                  </div>

                  {/* Terms and Conditions */}
                  <fieldset className="space-y-4 md:space-y-6">
                    <legend className="sr-only">Terms and Conditions Agreement</legend>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Checkbox 
                        id="terms-agreement"
                        name="termsAgreement"
                        required
                        aria-required="true"
                        aria-describedby="terms-description"
                        className="mt-1 w-5 h-5 rounded border-gray-400 bg-white flex-shrink-0 focus:ring-2 focus:ring-ethos-purple focus:ring-offset-2" 
                      />
                      <label htmlFor="terms-agreement" className="text-ethos-gray text-sm sm:text-base font-normal leading-relaxed tracking-tight cursor-pointer">
                        <span id="terms-description">
                          By selecting this option, you acknowledge agreement to EthosPrompt's <span className="underline">Terms of Service</span> and confirm you have reviewed our <span className="underline">Privacy Policy</span>. You understand that information submitted may be processed by EthosPrompt and authorized service providers globally to deliver requested services, and form submission constitutes consent to such processing.
                        </span>
                      </label>
                    </div>
                  </fieldset>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-6 md:pt-8">
                    <Button 
                      type="submit"
                      className="bg-ethos-purple hover:bg-ethos-purple-dark text-white px-8 py-3 rounded-full text-base font-medium h-12 w-full sm:w-auto min-w-[200px] transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-ethos-purple"
                      aria-label="Submit contact form to reach our sales team"
                    >
                      Request Consultation
                    </Button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
