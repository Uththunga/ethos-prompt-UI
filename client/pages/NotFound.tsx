import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50" role="main" id="main-content">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <section className="space-y-6 lg:space-y-8" aria-labelledby="error-heading">
          {/* 404 Number */}
          <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-ethos-purple" aria-hidden="true">
            404
          </div>
          
          {/* Error Message */}
          <h1 id="error-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-ethos-navy mb-4 lg:mb-6">
            Page Not Found
          </h1>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-ethos-gray leading-relaxed mb-6 lg:mb-8">
            The requested resource could not be located. This page may have been moved, removed, or the URL may be incorrect. Please verify the address or navigate back to our main platform.
          </p>
          
          {/* Action Button */}
          <Link to="/" aria-label="Return to home page">
            <Button variant="cta" size="cta">
              Return to Platform
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default NotFound;
