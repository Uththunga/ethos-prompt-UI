import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Main Contact Section */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
            
            {/* Left Column - Content */}
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-poppins leading-tight">
                  <span className="bg-gradient-to-b from-[#262A57] to-[#717493] bg-clip-text text-transparent">Contact our </span>
                  <span className="text-ethos-purple">Sales Team </span>
                  <span className="bg-gradient-to-b from-[#262A57] to-[#717493] bg-clip-text text-transparent">Today</span>
                </h1>
                
                <p className="text-ethos-gray text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl">
                  Experience how EthosPrompt's powerful AI automation platform helps businesses streamline operations, integrate tools, and unlock smarter workflows—seamlessly and securely.
                </p>
              </div>

              {/* Discussion Points */}
              <div className="space-y-6">
                <p className="text-[#313131] text-lg md:text-xl lg:text-2xl leading-relaxed">
                  Lets connect to discuss;
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                  {/* Left Column Points */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="relative w-9 h-9 flex-shrink-0 mt-1">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#D94581] to-[#FFD395]"></div>
                        <img
                          src="/assets/images/check-icon.png"
                          alt="Check"
                          className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                      </div>
                      <p className="text-ethos-gray text-base md:text-lg lg:text-xl leading-relaxed">
                        Maximizing ROI with EthosPrompt Agents
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="relative w-9 h-9 flex-shrink-0 mt-1">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#D94581] to-[#FFD395]"></div>
                        <img
                          src="/assets/images/check-icon.png"
                          alt="Check"
                          className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                      </div>
                      <p className="text-ethos-gray text-base md:text-lg lg:text-xl leading-relaxed">
                        Tailored solutions for your specific industry
                      </p>
                    </div>
                  </div>
                  
                  {/* Right Column Points */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="relative w-9 h-9 flex-shrink-0 mt-1">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#D94581] to-[#FFD395]"></div>
                        <img
                          src="/assets/images/check-icon.png"
                          alt="Check"
                          className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                      </div>
                      <p className="text-ethos-gray text-base md:text-lg lg:text-xl leading-relaxed">
                        Finding the best plan for your business
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="relative w-9 h-9 flex-shrink-0 mt-1">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#D94581] to-[#FFD395]"></div>
                        <img
                          src="/assets/images/check-icon.png"
                          alt="Check"
                          className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                      </div>
                      <p className="text-ethos-gray text-base md:text-lg lg:text-xl leading-relaxed">
                        A live demo to see EthosPrompt in action
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <p className="text-ethos-gray text-base md:text-lg lg:text-xl leading-relaxed">
                  Talk to an EthosPrompt expert today: <span className="font-bold">+1 (877) XXX-XXXX</span>
                </p>
                <p className="text-ethos-gray text-base md:text-lg lg:text-xl leading-relaxed">
                  Need help? For technical or billing support, visit our <span className="font-bold">Help Center</span> for FAQs and troubleshooting resources.
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full max-w-xl">
              <div className="bg-gradient-to-b from-[#FBF9F9] to-[#F3F3F3] rounded-[33px] p-8 lg:p-12">
                <form className="space-y-6">
                  {/* Form Grid */}
                  <div className="grid grid-cols-1 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <div className="relative">
                        <Input
                          id="firstName"
                          placeholder="First Name"
                          className="h-9 px-3 py-2 text-base placeholder:text-[#656565] border-[#D7D7D7] rounded-md bg-white"
                        />
                        <span className="absolute top-2 right-2 text-red-600 text-sm">*</span>
                      </div>
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                      <div className="relative">
                        <Input
                          id="lastName"
                          placeholder="Last Name"
                          className="h-9 px-3 py-2 text-base placeholder:text-[#656565] border-[#D7D7D7] rounded-md bg-white"
                        />
                        <span className="absolute top-2 right-2 text-red-600 text-sm">*</span>
                      </div>
                    </div>

                    {/* Business Email */}
                    <div className="space-y-2">
                      <div className="relative">
                        <Input
                          id="businessEmail"
                          type="email"
                          placeholder="Business Email"
                          className="h-9 px-3 py-2 text-base placeholder:text-[#656565] border-[#D7D7D7] rounded-md bg-white"
                        />
                        <span className="absolute top-2 right-2 text-red-600 text-sm">*</span>
                      </div>
                    </div>

                    {/* Business Phone */}
                    <div className="space-y-2">
                      <div className="relative">
                        <Input
                          id="businessPhone"
                          type="tel"
                          placeholder="Business Phone"
                          className="h-9 px-3 py-2 text-base placeholder:text-[#656565] border-[#D7D7D7] rounded-md bg-white"
                        />
                        <span className="absolute top-2 right-2 text-red-600 text-sm">*</span>
                      </div>
                    </div>

                    {/* Job Title */}
                    <div className="space-y-2">
                      <div className="relative">
                        <Input
                          id="jobTitle"
                          placeholder="Job Title"
                          className="h-9 px-3 py-2 text-base placeholder:text-[#656565] border-[#D7D7D7] rounded-md bg-white"
                        />
                        <span className="absolute top-2 right-2 text-red-600 text-sm">*</span>
                      </div>
                    </div>

                    {/* Company Name */}
                    <div className="space-y-2">
                      <div className="relative">
                        <Input
                          id="companyName"
                          placeholder="Company Name"
                          className="h-9 px-3 py-2 text-base placeholder:text-[#656565] border-[#D7D7D7] rounded-md bg-white"
                        />
                        <span className="absolute top-2 right-2 text-red-600 text-sm">*</span>
                      </div>
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <div className="relative">
                        <Select>
                          <SelectTrigger className="h-9 px-3 py-2 text-base text-[#656565] border-[#D7D7D7] rounded-md bg-white [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-ethos-purple">
                            <SelectValue placeholder="Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                        <span className="absolute top-2 right-6 text-red-600 text-sm">*</span>
                      </div>
                    </div>

                    {/* Company Size */}
                    <div className="space-y-2">
                      <div className="relative">
                        <Select>
                          <SelectTrigger className="h-9 px-3 py-2 text-base text-[#656565] border-[#D7D7D7] rounded-md bg-white [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-ethos-purple">
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
                        <span className="absolute top-2 right-6 text-red-600 text-sm">*</span>
                      </div>
                    </div>
                  </div>

                  {/* How can we help you */}
                  <div className="space-y-2">
                    <Textarea
                      placeholder="How can we help you"
                      className="min-h-[100px] px-3 py-2 text-base placeholder:text-[#656565] border-[#D7D7D7] rounded-md bg-white resize-none"
                    />
                  </div>

                  {/* Marketing Consent */}
                  <div className="space-y-6">
                    <p className="text-ethos-gray text-sm md:text-base leading-relaxed">
                      By selecting yes, you authorize Box to contact you about product offerings, services, events, webinars, and other marketing materials. You may adjust your marketing preferences at any time by visiting <span className="underline">here</span>.
                    </p>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Checkbox className="mt-1 w-5 h-5 rounded border-[#909090] bg-[#D9D9D9]" />
                      <p className="text-ethos-gray text-sm md:text-base leading-relaxed">
                        By checking this box, you agree to EthosPrompt's <span className="underline">Terms of Service</span> and confirm you have read EthosPrompt's <span className="underline">Privacy Policy</span>. You understand that the personal information you submit through this website may be stored and processed by EthosPrompt and its third party service providers in Australia and elsewhere to provide the services you requested and submission of this form indicates your consent to such transfer.
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-10">
                    <Button className="bg-[#8235F4] hover:bg-ethos-purple text-white px-8 py-3 rounded-full text-base md:text-lg font-normal">
                      Contact Us
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
