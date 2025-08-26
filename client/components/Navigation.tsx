import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants/navItems';
import { NavItem } from '../types/navigation';

// Constants
const MOBILE_BREAKPOINT = 768; // md breakpoint - matches useIsMobile hook

/**
 * Main Navigation component with responsive design and accessibility features
 */
export const Navigation = ({ className = '', onNavigate }: { className?: string; onNavigate?: () => void }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  
  // For assets in the public directory, we should use the Vite base URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  const ethosBrainPath = `${baseUrl}assets/images/ethosbrain.svg`;
  
  // Refs
  const navRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  
  // Check if current route matches nav item
  const isActive = useCallback((path: string, exact: boolean = false) => {
    return exact 
      ? location.pathname === path 
      : location.pathname.startsWith(path);
  }, [location.pathname]);
  
  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobileView(isMobile);
      if (!isMobile) {
        setIsMobileMenuOpen(false);
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    onNavigate?.();
  }, [location, onNavigate]);

  // Handle click outside to close mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    if (!isMobileMenuOpen) return;

    const lastIndex = NAV_ITEMS.length - 1;
    
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (index < lastIndex) {
          navItemsRef.current[index + 1]?.focus();
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (index > 0) {
          navItemsRef.current[index - 1]?.focus();
        } else {
          menuButtonRef.current?.focus();
        }
        break;
      case 'Home':
        e.preventDefault();
        navItemsRef.current[0]?.focus();
        break;
      case 'End':
        e.preventDefault();
        navItemsRef.current[lastIndex]?.focus();
        break;
      default:
        break;
    }
  }, [isMobileMenuOpen]);

  // Handle navigation with proper focus management
  const handleNavigation = useCallback((e: React.MouseEvent, path: string) => {
    if (e.ctrlKey || e.metaKey) return; // Allow default behavior for cmd/ctrl+click
    
    e.preventDefault();
    navigate(path);
    onNavigate?.();
  }, [navigate, onNavigate]);

  // Memoize the navigation items to prevent unnecessary re-renders
  const navItems = useMemo(() => NAV_ITEMS.map((item, index) => ({
    ...item,
    isActive: isActive(item.path, item.exact),
    key: `nav-item-${index}`,
  })), [isActive]);

  return (
    <header className={`relative ${className}`} role="banner">
      {/* Skip to main content link - Only visible when focused */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-white focus:px-4 focus:py-2 focus:z-50 focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ethos-purple transition-all duration-200"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Skip to main content
      </a>

      <div className="w-full bg-white/95 backdrop-blur-sm flex justify-between items-center py-4 md:py-5 border-b border-gray-100 sticky top-0 z-40">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 z-10">
            <Link
              to="/"
              className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ethos-purple focus-visible:ring-offset-2 rounded transition-transform hover:scale-105"
              aria-label="EthosPrompt Home"
              onClick={(e) => handleNavigation(e, '/')}
            >
              <div className="flex items-center" aria-hidden="true">
                <img
                  src={ethosBrainPath}
                  alt=""
                  className="w-5 h-5 md:w-6 md:h-6 transition-all duration-200"
                />
              </div>
              <h1 className="text-ethos-navy text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-poppins">
                EthosPrompt
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex items-center justify-center flex-1 mx-12" 
            aria-label="Main navigation"
            role="navigation"
          >
            <ul className="flex items-center justify-center gap-6 xl:gap-8">
              {navItems.map((item, index) => (
                <li key={item.key} className="relative">
                  <Link
                    to={item.path}
                    className="text-sm md:text-base lg:text-base font-semibold px-3 py-2 rounded-md transition-all duration-200 text-ethos-navy hover:text-ethos-navy/80 hover:bg-gray-50"
                    aria-current={item.isActive ? 'page' : undefined}
                    aria-label={item.ariaLabel || `Navigate to ${item.label}`}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    tabIndex={0}
                    id={item.key}
                    ref={(el) => navItemsRef.current[index] = el}
                    onClick={(e) => handleNavigation(e, item.path)}
                  >
                    {item.label}
                    <span 
                      className={`absolute -bottom-1 left-1/2 w-4/5 h-0.5 bg-ethos-purple rounded-full transform -translate-x-1/2 transition-all duration-200 ${
                        item.isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          

          {/* Mobile Menu Button */}
          <div className="md:hidden z-20">
            <button
              ref={menuButtonRef}
              className="p-2 -mr-2 rounded-md text-ethos-navy hover:text-ethos-purple focus:outline-none focus:ring-2 focus:ring-ethos-purple focus:ring-offset-2 transition-colors"
              onClick={() => {
                const newState = !isMobileMenuOpen;
                setIsMobileMenuOpen(newState);
                if (!newState) {
                  menuButtonRef.current?.focus();
                }
              }}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <div className="w-6 h-6 relative">
                <span 
                  className={`block absolute left-1/2 top-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'
                  }`}
                  aria-hidden="true"
                />
                <span 
                  className={`block absolute left-1/2 top-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                  aria-hidden="true"
                />
                <span 
                  className={`block absolute left-1/2 top-1/2 w-6 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'
                  }`}
                  aria-hidden="true"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-30 transition-opacity duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 visible bg-black/30 backdrop-blur-sm' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Mobile Menu Panel */}
        <div 
          ref={navRef}
          id="mobile-menu"
          className={`absolute right-0 top-0 h-full w-full max-w-[280px] sm:max-w-[320px] md:max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full flex flex-col overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-base sm:text-lg font-medium text-ethos-navy">Menu</h2>
            </div>
            
            <nav 
              className="flex-1 px-4 py-6 space-y-2" 
              aria-label="Mobile navigation"
            >
              {navItems.map((item, index) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg transition-colors text-sm sm:text-base md:text-lg text-ethos-navy ${
                    item.isActive
                      ? 'bg-ethos-purple/10 font-semibold'
                      : 'hover:bg-gray-50'
                  } focus:outline-none focus:ring-2 focus:ring-ethos-purple/50`}
                  aria-current={item.isActive ? 'page' : undefined}
                  aria-label={item.ariaLabel || item.label}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  id={`mobile-${item.key}`}
                  ref={(el) => navItemsRef.current[index] = el}
                  onClick={(e) => {
                    handleNavigation(e, item.path);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <div className="flex items-center">
                    {item.icon && <span className="mr-3" aria-hidden="true">{item.icon}</span>}
                    <span>{item.label}</span>
                    {item.isActive && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-ethos-purple" aria-hidden="true" />
                    )}
                  </div>
                </Link>
              ))}
            </nav>
            
            <div className="p-4 border-t border-gray-100 mt-auto">
              <div className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} EthosPrompt. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Add display name for better debugging
Navigation.displayName = 'Navigation';

export default Navigation;