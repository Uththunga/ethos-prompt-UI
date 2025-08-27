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
                <h1 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-poppins leading-tight tracking-tight">
                  <span className="bg-gradient-to-b from-[#262A57] to-[#717493] bg-clip-text text-transparent">Contact our </span>
                  <span className="text-ethos-purple">Sales Team </span>
                  <span className="bg-gradient-to-b from-[#262A57] to-[#717493] bg-clip-text text-transparent">Today</span>
                </h1>
                
                <p className="text-ethos-gray text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed tracking-tight max-w-4xl">
                  Experience how EthosPrompt's powerful AI automation platform helps businesses streamline operations, integrate tools, and unlock smarter workflows—seamlessly and securely.
                </p>
              </header>

              {/* Discussion Points */}
              <section className="space-y-6" aria-labelledby="discussion-heading">
                <h2 id="discussion-heading" className="text-ethos-gray text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-tight">
                  Lets connect to discuss;
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
                      <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight">
                        Maximizing ROI with EthosPrompt Agents
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
                      <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight">
                        Tailored solutions for your specific industry
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
                      <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight">
                        Finding the best plan for your business
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
                      <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight">
                        A live demo to see EthosPrompt in action
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section className="space-y-4" aria-labelledby="contact-info-heading">
                <h3 id="contact-info-heading" className="sr-only">Contact Information</h3>
                <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight">
                  Talk to an EthosPrompt expert today: <span className="font-medium">+1 (877) XXX-XXXX</span>
                </p>
                <p className="text-ethos-gray text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-tight">
                  Need help? For technical or billing support, visit our <span className="font-medium">Help Center</span> for FAQs and troubleshooting resources.
                </p>
              </section>
            </section>

            {/* Right Column - Contact Form */}
            <section className="w-full max-w-2xl xl:max-w-none" aria-labelledby="contact-form-heading">
              <div className="bg-gradient-to-b from-[#FBF9F9] to-[#F3F3F3] rounded-2xl md:rounded-3xl lg:rounded-[33px] p-4 sm:p-6 md:p-8 lg:p-12">
                <h2 id="contact-form-heading" className="sr-only">Contact Form</h2>
                <form className="space-y-4 md:space-y-6" aria-label="Contact sales team form">
                  {/* Form Grid */}
                  <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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
                          className="h-12 sm:h-14 md:h-16 px-4 sm:px-6 md:px-8 py-3 lg:py-4 text-sm sm:text-base md:text-lg font-normal placeholder:text-ethos-gray-light border-[#D7D7D7] rounded-xl md:rounded-2xl bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200"
                        />
                        <span className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 text-red-600 text-sm sm:text-base md:text-lg lg:text-xl" aria-label="required">*</span>
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
                          className="h-12 sm:h-14 md:h-16 px-4 sm:px-6 md:px-8 py-3 lg:py-4 text-sm sm:text-base md:text-lg font-normal placeholder:text-ethos-gray-light border-[#D7D7D7] rounded-xl md:rounded-2xl bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200"
                        />
                        <span className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 text-red-600 text-sm sm:text-base md:text-lg lg:text-xl" aria-label="required">*</span>
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
                          className="h-12 sm:h-14 md:h-16 px-4 sm:px-6 md:px-8 py-3 lg:py-4 text-sm sm:text-base md:text-lg font-normal placeholder:text-ethos-gray-light border-[#D7D7D7] rounded-xl md:rounded-2xl bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200"
                        />
                        <span className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 text-red-600 text-sm sm:text-base md:text-lg lg:text-xl" aria-label="required">*</span>
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
                          className="h-12 sm:h-14 md:h-16 px-4 sm:px-6 md:px-8 py-3 lg:py-4 text-sm sm:text-base md:text-lg font-normal placeholder:text-ethos-gray-light border-[#D7D7D7] rounded-xl md:rounded-2xl bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200"
                        />
                        <span className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 text-red-600 text-sm sm:text-base md:text-lg lg:text-xl" aria-label="required">*</span>
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
                          className="h-12 sm:h-14 md:h-16 px-4 sm:px-6 md:px-8 py-3 lg:py-4 text-sm sm:text-base md:text-lg font-normal placeholder:text-ethos-gray-light border-[#D7D7D7] rounded-xl md:rounded-2xl bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200"
                        />
                        <span className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 text-red-600 text-sm sm:text-base md:text-lg lg:text-xl" aria-label="required">*</span>
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
                          className="h-12 sm:h-14 md:h-16 px-4 sm:px-6 md:px-8 py-3 lg:py-4 text-sm sm:text-base md:text-lg font-normal placeholder:text-ethos-gray-light border-[#D7D7D7] rounded-xl md:rounded-2xl bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200"
                        />
                        <span className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-3 sm:right-4 text-red-600 text-sm sm:text-base md:text-lg lg:text-xl" aria-label="required">*</span>
                      </div>
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <label htmlFor="country" className="sr-only">Country (required)</label>
                      <div className="relative">
                        <Select name="country" required aria-required="true">
                          <SelectTrigger 
                            id="country"
                            className="h-12 sm:h-14 md:h-16 px-4 sm:px-6 md:px-8 py-3 lg:py-4 text-sm sm:text-base md:text-lg font-normal placeholder:text-ethos-gray-light border-[#D7D7D7] rounded-xl md:rounded-2xl bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6 [&>svg]:text-ethos-purple"
                            aria-label="Select country"
                          >
                            <SelectValue placeholder="Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                        <span className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-8 sm:right-10 md:right-12 text-red-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" aria-label="required">*</span>
                      </div>
                    </div>

                    {/* Company Size */}
                    <div className="space-y-2">
                      <label htmlFor="company-size" className="sr-only">Company Size (required)</label>
                      <div className="relative">
                        <Select name="companySize" required aria-required="true">
                          <SelectTrigger 
                            id="company-size"
                            className="h-12 sm:h-14 md:h-16 px-4 sm:px-6 md:px-8 py-3 lg:py-4 text-sm sm:text-base md:text-lg font-normal placeholder:text-ethos-gray-light border-[#D7D7D7] rounded-xl md:rounded-2xl bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6 [&>svg]:text-ethos-purple"
                            aria-label="Select company size"
                          >
                            <SelectValue placeholder="Company Size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-500">201-500 employees</SelectItem>
                            <SelectItem value="500+">500+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                        <span className="absolute top-3 sm:top-4 md:top-5 lg:top-6 right-8 sm:right-10 md:right-12 text-red-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" aria-label="required">*</span>
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
                      className="min-h-[120px] px-4 sm:px-6 md:px-8 py-3 lg:py-4 text-sm sm:text-base md:text-lg font-normal placeholder:text-ethos-gray-light border-[#D7D7D7] rounded-xl md:rounded-2xl bg-white focus:ring-2 focus:ring-ethos-purple focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Marketing Consent */}
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-ethos-gray text-sm sm:text-base font-normal leading-relaxed tracking-tight">
                      By selecting yes, you authorize EthosPrompt to contact you about product offerings, services, events, webinars, and other marketing materials. You may adjust your marketing preferences at any time by visiting <span className="underline">here</span>.
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
                        className="mt-1 sm:mt-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-md lg:rounded-lg border-[#909090] bg-[#D9D9D9] flex-shrink-0" 
                      />
                      <label htmlFor="terms-agreement" className="text-ethos-gray text-sm sm:text-base font-normal leading-relaxed tracking-tight cursor-pointer">
                        <span id="terms-description">
                          By checking this box, you agree to EthosPrompt's <span className="underline">Terms of Service</span> and confirm you have read EthosPrompt's <span className="underline">Privacy Policy</span>. You understand that the personal information you submit through this website may be stored and processed by EthosPrompt and its third party service providers in Australia and elsewhere to provide the services you requested and submission of this form indicates your consent to such transfer.
                        </span>
                      </label>
                    </div>
                  </fieldset>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-6 md:pt-8">
                    <Button 
                      type="submit"
                      className="bg-ethos-purple hover:bg-ethos-purple-dark text-white px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-normal h-12 sm:h-14 md:h-16 w-full sm:w-auto min-w-[200px] sm:min-w-[250px] transition-colors duration-200"
                      aria-label="Submit contact form to reach our sales team"
                    >
                      Contact Us
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
