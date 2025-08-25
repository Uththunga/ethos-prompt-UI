# Zen-Home Design System

## Overview
This design system documents the visual language, patterns, and components used throughout the zen-home application, extracted from the homepage design to ensure consistency across all pages.

## Color Palette

### Primary Colors
```css
--ethos-purple: #7409C5          /* Primary brand purple */
--ethos-purple-light: #8235F4    /* Lighter purple for hover states */
--ethos-navy: #030823            /* Dark navy for primary text */
--ethos-navy-light: #0D1144      /* Lighter navy variant */
```

### Secondary Colors
```css
--ethos-gray: #484848            /* Body text and secondary content */
--ethos-gray-light: #717493      /* Light gray for subtle text */
--ethos-gray-lighter: #9E9898    /* Lightest gray for muted content */
```

### Gradient Colors
```css
--ethos-purple-gradient-start: #7471E0    /* Gradient start for cards/text */
--ethos-purple-gradient-end: #EA73D4      /* Gradient end for cards/text */
```

### Background Colors
- **White**: `#FFFFFF` - Primary background
- **Light Gray**: `#F2F2F2` - Section backgrounds (ServiceFailures)
- **Gradient Backgrounds**: Used in WaysWeCanHelp and Testimonials sections

### Usage Guidelines

#### Brand Purple (`#7409C5`)
- Primary CTAs and action buttons
- Brand accents and highlights
- Active states and focus indicators
- Key text elements that need emphasis

#### Navy (`#030823`)
- Primary headings and titles
- Navigation text
- High-contrast text content

#### Gray Hierarchy
- `#484848`: Body text, descriptions, secondary content
- `#717493`: Subtle text, captions, metadata
- `#9E9898`: Muted text, placeholder content

## Semantic Color Usage

### Interactive Elements
- **Default Button**: `bg-ethos-purple-light` with `hover:bg-ethos-purple`
- **Text Links**: `text-ethos-purple` with hover effects
- **Focus States**: Purple ring with `focus:ring-ethos-purple`

### Text Hierarchy
- **Hero Titles**: Gradient from `ethos-navy-light` to `ethos-gray-light`
- **Section Titles**: `ethos-navy` (#0F1345) with `ethos-purple` accents
- **Body Text**: `ethos-gray` (#484848)
- **Captions/Meta**: `ethos-gray-light` (#717493)

### Card Elements
- **Card Backgrounds**: White to light gray gradients
- **Card Shadows**: Purple-tinted shadows (`rgba(116, 113, 224, 0.08)`)
- **Card Accents**: Purple gradients and highlights

## Color Accessibility
- All color combinations meet WCAG 2.1 AA standards
- Text colors provide sufficient contrast ratios
- Interactive elements have clear visual states
- Color is not the only means of conveying information

## Typography System

### Font Family
- **Primary**: `Poppins` - Used for all text elements
- **Fallbacks**: `-apple-system, Roboto, Helvetica, sans-serif`

### Responsive Text Scale
The design system uses progressive text scaling for optimal readability across devices:

#### Hero/Display Text
```css
/* Large hero headings */
text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
/* font-size: 36px → 48px → 60px → 72px */

/* Section headings */
text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
/* font-size: 24px → 30px → 36px → 48px → 60px */
```

#### Body Text
```css
/* Primary body text */
text-sm sm:text-base lg:text-lg
/* font-size: 14px → 16px → 18px */

/* Large body text */
text-base sm:text-lg md:text-xl lg:text-2xl
/* font-size: 16px → 18px → 20px → 24px */
```

#### Button Text
```css
/* CTA buttons */
text-base sm:text-lg lg:text-xl
/* font-size: 16px → 18px → 20px */
```

### Font Weight System
- **Light**: `font-light (300)` - Subtle text, captions
- **Normal**: `font-normal (400)` - Body text, descriptions
- **Medium**: `font-medium (500)` - Section headings, emphasis
- **Semibold**: `font-semibold (600)` - Card titles, navigation
- **Bold**: `font-bold (700)` - Brand name, strong emphasis

### Line Height & Spacing
- **Display Text**: `leading-tight (1.1)` - Large headings
- **Headings**: `leading-snug (1.2)` - Section titles
- **Body Text**: `leading-relaxed (1.4)` - Paragraphs, descriptions
- **Loose Text**: `leading-loose (1.6)` - Extended reading content

### Letter Spacing (Tracking)
- **Tight**: `tracking-tight (-0.03em)` - Large headings, display text
- **Normal**: `tracking-normal (0)` - Body text
- **Wide**: `tracking-wide (0.025em)` - Buttons, navigation

### Typography Usage Examples

#### Hero Section
```tsx
// Main hero title
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight">
  Transform your Business with AI Agents
</h1>

// Hero subtitle/description
<p className="text-base md:text-lg font-normal leading-relaxed tracking-tight">
  Description text here
</p>
```

#### Section Headings
```tsx
// Primary section heading
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-snug tracking-tight">
  Section Title
</h2>

// Secondary heading
<h3 className="text-lg md:text-xl lg:text-2xl font-normal leading-snug tracking-tight">
  Subsection Title
</h3>
```

#### Body Content
```tsx
// Standard body text
<p className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed tracking-tight text-ethos-gray">
  Body content with proper scaling
</p>

// Emphasized body text
<p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed tracking-tight">
  Larger body content
</p>
```

## Layout and Container System

### Container Patterns
Standardized container structure ensures consistent layout and spacing across all sections:

#### Standard Container
```tsx
// Primary container pattern - used in all sections
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content goes here */}
</div>
```

#### Container Specifications
- **Max Width**: `max-w-7xl` (~1280px) - Optimal reading width
- **Centering**: `mx-auto` - Center content horizontally
- **Horizontal Padding**: Progressive padding for responsive design
  - Mobile: `px-4` (16px)
  - Small: `sm:px-6` (24px) 
  - Large: `lg:px-8` (32px)

### Section Padding Patterns
Consistent vertical spacing creates rhythm and hierarchy:

#### Standard Section Padding
```css
/* Most sections */
py-16 md:py-20 lg:py-24 xl:py-28
/* 64px → 80px → 96px → 112px */

/* Reduced padding for tight layouts */
py-8 md:py-12 lg:py-16
/* 32px → 48px → 64px */

/* Hero/Feature sections */
py-12 lg:py-20
/* 48px → 80px */
```

#### Section Background Patterns
- **White**: Default background (`bg-white`)
- **Light Gray**: `style={{ background: '#F2F2F2' }}` (ServiceFailures)
- **Gradient**: `linear-gradient(180deg, #FFF 37.11%, #E8E8E8 100%)` (WaysWeCanHelp)
- **Gradient**: `linear-gradient(180deg, #FFF 60.69%, #DDD 100%)` (Testimonials)

### Grid Systems

#### Responsive Grid Patterns
```css
/* 4-column feature grid (Hero section) */
grid-cols-1 md:grid-cols-2 lg:grid-cols-4

/* 3-column layout with center focus */
lg:grid-cols-[minmax(300px,1fr)_auto_minmax(300px,1fr)]

/* Service cards grid */
grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5

/* 2-column content layout */
grid-cols-1 lg:grid-cols-2
```

#### Grid Gap Patterns
```css
/* Standard gaps */
gap-6 md:gap-8 lg:gap-10 xl:gap-12
/* 24px → 32px → 40px → 48px */

/* Tight gaps for cards */
gap-4 sm:gap-6 lg:gap-8
/* 16px → 24px → 32px */

/* Minimal gaps for testimonials */
lg:gap-1 xl:gap-2
/* 4px → 8px */
```

### Spacing System

#### Margin Patterns
```css
/* Section margins */
mb-12 md:mb-16 lg:mb-20
/* 48px → 64px → 80px */

/* Element margins */
mb-6 sm:mb-8 lg:mb-10
/* 24px → 32px → 40px */

/* Tight margins */
mb-3 sm:mb-4 lg:mb-6
/* 12px → 16px → 24px */
```

#### Padding Patterns
```css
/* Card padding */
p-4 sm:p-6 lg:p-8 xl:p-10
/* 16px → 24px → 32px → 40px */

/* Button padding */
px-8 lg:px-12 py-3 lg:py-4
/* Horizontal: 32px → 48px, Vertical: 12px → 16px */
```

### Layout Examples

#### Standard Section Layout
```tsx
<section className="w-full py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section header */}
    <div className="mb-12 md:mb-16 lg:mb-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
        Section Title
      </h2>
    </div>
    
    {/* Section content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
      {/* Content grid items */}
    </div>
  </div>
</section>
```

#### Hero Section Layout
```tsx
<section className="relative w-full overflow-hidden min-h-screen bg-white">
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20">
    {/* Hero content */}
  </div>
</section>
```

## Button Component System

### CTA Button Variant
The primary call-to-action button follows the standardized design pattern:

#### Button Styling
```tsx
// CTA variant configuration
cta: "bg-ethos-purple-light hover:bg-ethos-purple text-white rounded-full font-medium transition-colors duration-300"
```

#### Button Sizing
```tsx
// CTA size configuration
cta: "h-auto px-8 lg:px-12 py-3 lg:py-4 text-base sm:text-lg lg:text-xl"
```

### Button Specifications

#### Visual Properties
- **Background**: `bg-ethos-purple-light` (#8235F4)
- **Hover**: `hover:bg-ethos-purple` (#7409C5)
- **Text Color**: `text-white`
- **Border Radius**: `rounded-full`
- **Font Weight**: `font-medium (500)`
- **Transition**: `transition-colors duration-300`

#### Responsive Sizing
- **Padding Horizontal**: 
  - Base: `px-8` (32px)
  - Large: `lg:px-12` (48px)
- **Padding Vertical**: 
  - Base: `py-3` (12px)
  - Large: `lg:py-4` (16px)
- **Font Size**: 
  - Base: `text-base` (16px)
  - Small: `sm:text-lg` (18px)
  - Large: `lg:text-xl` (20px)

### Button Usage Examples

#### Standard CTA Button
```tsx
import { Button } from '@/components/ui/button';

<Button variant="cta" size="cta">
  Get Started Now
</Button>
```

#### Button in Different Contexts
```tsx
// Hero section CTA
<Button variant="cta" size="cta">
  Talk to Expert
</Button>

// Service section CTA
<Button variant="cta" size="cta">
  Schedule your Demo
</Button>

// Testimonials CTA
<Button variant="cta" size="cta">
  Send Feedback
</Button>
```

### Button States

#### Default State
- Background: Purple light (#8235F4)
- Text: White
- Border: None

#### Hover State
- Background: Purple dark (#7409C5)
- Smooth color transition (300ms)
- No scale or shadow effects

#### Focus State
- Maintains accessibility with proper focus rings
- Uses theme focus styling

#### Disabled State
- Reduced opacity (50%)
- Pointer events disabled

### Accessibility Features
- Proper ARIA labels when needed
- Keyboard navigation support
- Sufficient color contrast (4.5:1 minimum)
- Clear focus indicators

## Card Component Patterns

### Card Design System
Cards follow consistent styling patterns across all sections for visual harmony:

#### Border Radius Patterns
```css
/* Progressive border radius */
rounded-[40px] sm:rounded-[50px] lg:rounded-[57px]
/* 40px → 50px → 57px */

/* Alternative smaller radius */
rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]
/* 24px → 28px → 32px */
```

#### Padding Patterns
```css
/* Standard card padding */
p-4 sm:p-6 lg:p-8 xl:p-10
/* 16px → 24px → 32px → 40px */

/* Compact card padding */
p-4 sm:p-5 md:p-6 lg:p-7
/* 16px → 20px → 24px → 28px */
```

#### Card Width Constraints
```css
/* Progressive width constraints */
max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
/* 320px → 384px → 448px → 512px → 576px */

/* Optimized width constraints */
max-w-[240px] sm:max-w-[280px] md:max-w-sm lg:max-w-md xl:max-w-lg
/* 240px → 280px → 384px → 448px → 512px */
```

### Card Types

#### 1. Feature Cards (Hero Section)
```tsx
// Gradient background with statistics
<div className="bg-gradient-to-br from-white via-white to-gray-200 rounded-[40px] sm:rounded-[50px] lg:rounded-[57px] p-4 sm:p-6 lg:p-8 xl:p-10 shadow-lg shadow-purple-200 flex flex-col w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
  {/* Card content */}
</div>
```

**Features:**
- Gradient background: `from-white via-white to-gray-200`
- Purple shadow: `shadow-lg shadow-purple-200`
- Full responsive sizing
- Center alignment: `mx-auto`

#### 2. Service Cards (ServiceFailures Section)
```tsx
// Colored background with hover effects
<div className="relative group w-full lg:max-w-md xl:max-w-lg mx-auto">
  <div className="absolute inset-0 rounded-[40px] sm:rounded-[50px] lg:rounded-[57px] transition-all duration-300 group-hover:scale-[1.02] shadow-lg hover:shadow-xl" style={{ background: '#6D6AED' }}>
  </div>
  <div className="relative z-10 p-6 sm:p-6 lg:p-8 xl:p-10">
    {/* Content */}
  </div>
</div>
```

**Features:**
- Absolute positioned background for hover effects
- Subtle hover scale: `group-hover:scale-[1.02]`
- Shadow enhancement on hover: `hover:shadow-xl`
- Custom background colors via style prop

#### 3. Service Grid Cards (WaysWeCanHelp)
```tsx
// Neumorphic style cards
<div className="w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-gradient-to-b from-gray-50 to-gray-100 rounded-[40px] sm:rounded-[50px] lg:rounded-[57px] p-4 sm:p-6 lg:p-8 xl:p-10 text-center hover:shadow-xl transition-shadow duration-300" style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25), inset -30px -30px 50px rgba(255, 255, 255, 0.7), inset 30px 30px 50px rgba(0, 39, 80, 0.05)" }}>
  {/* Content */}
</div>
```

**Features:**
- Neumorphic shadow effect (inset + outer shadows)
- Gradient background: `from-gray-50 to-gray-100`
- Center text alignment: `text-center`
- Hover shadow transition: `hover:shadow-xl transition-shadow duration-300`

#### 4. Testimonial Cards
```tsx
// Glass-morphism style cards
<div className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-sm lg:max-w-md xl:max-w-lg min-h-[240px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[300px] xl:min-h-[280px] rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] border border-white/20 p-4 sm:p-5 md:p-6 lg:p-7 mx-2 sm:mx-3 lg:mx-4 flex-shrink-0 transition-all duration-300 hover:scale-[1.02] focus-within:scale-[1.02]" style={{ background: 'linear-gradient(180deg, #FEFEFE 0%, #F8F7F7 100%)', boxShadow: '0 8px 32px rgba(116, 113, 224, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)' }}>
  {/* Content */}
</div>
```

**Features:**
- Glass-morphism effect with border: `border-white/20`
- Complex layered shadows
- Minimum height constraints for consistent grid
- Hover and focus scale effects
- Hardware acceleration: `transform: translate3d(0, 0, 0)`

### Card Shadow Systems

#### Standard Shadow
```css
/* Basic card shadow */
shadow-lg
/* 0 10px 15px rgba(0, 0, 0, 0.1) */
```

#### Purple-tinted Shadow
```css
/* Hero section cards */
shadow-lg shadow-purple-200
```

#### Custom Neumorphic Shadow
```css
/* Inline style for neumorphic effect */
boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25), inset -30px -30px 50px rgba(255, 255, 255, 0.7), inset 30px 30px 50px rgba(0, 39, 80, 0.05)"
```

#### Glass-morphism Shadow
```css
/* Multi-layer shadow for testimonials */
boxShadow: '0 8px 32px rgba(116, 113, 224, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
```

### Card Interaction Patterns

#### Hover Effects
```css
/* Subtle scale on hover */
hover:scale-[1.02]

/* Shadow enhancement */
hover:shadow-xl

/* Opacity changes */
hover:opacity-90
```

#### Focus Effects
```css
/* Focus within cards */
focus-within:scale-[1.02]

/* Keyboard navigation */
tabIndex={0}
```

### Responsive Card Behavior

#### Mobile Optimization
- Full width on mobile: `w-full`
- Reduced maximum widths for better mobile UX
- Progressive margin spacing: `mx-2 sm:mx-3 lg:mx-4`

#### Desktop Optimization
- Maximum width constraints prevent cards from becoming too wide
- Consistent center alignment: `mx-auto`
- Optimal aspect ratios maintained across screen sizes

## Animation and Interaction Patterns

### Keyframe Animations

#### Floating Animation (Hero Section)
```css
@keyframes float {
  0% { transform: translate(-50%, -50%) translateY(0); }
  50% { transform: translate(-50%, -50%) translateY(-1mm); }
  100% { transform: translate(-50%, -50%) translateY(0); }
}
.animate-float-slow {
  animation: float 4s ease-in-out infinite;
}
```

**Usage:**
- Applied to hero bot image for subtle movement
- Creates engaging visual interest without distraction
- 4-second duration with ease-in-out timing

#### Floating Animation (WaysWeCanHelp Section)
```css
@keyframes floatMole {
  0% { transform: translateY(0); }
  50% { transform: translateY(-1mm); }
  100% { transform: translateY(0); }
}
.animate-float-mole {
  animation: floatMole 4s ease-in-out infinite;
}
```

**Usage:**
- Applied to Mole image in WaysWeCanHelp section
- Simpler transform without translate positioning
- Same timing for consistency across sections

### Hover Effects

#### Subtle Scale Effects
```css
/* Card hover effects */
hover:scale-[1.02]

/* Group-based hover (for nested elements) */
group-hover:scale-[1.02]

/* Focus-based effects */
focus-within:scale-[1.02]
```

**Specifications:**
- **Scale Factor**: 1.02 (2% increase)
- **Trigger**: Mouse hover, keyboard focus
- **Duration**: Uses CSS transition defaults (usually 150ms)

#### Shadow Enhancement
```css
/* Standard to enhanced shadow */
shadow-lg hover:shadow-xl

/* Custom shadow transitions */
transition-shadow duration-300
```

#### Opacity Changes
```css
/* Subtle opacity reduction */
hover:opacity-90

/* Interactive element opacity */
group-hover/item:opacity-90
```

### Transition Patterns

#### Standard Transitions
```css
/* Color transitions (buttons) */
transition-colors duration-300

/* Transform transitions (hover effects) */
transition-all duration-300

/* Shadow-only transitions */
transition-shadow duration-300

/* Opacity transitions */
transition-opacity duration-200
```

#### Motion Preferences
```css
/* Hardware acceleration for smooth animations */
transform: translate3d(0, 0, 0);
backface-visibility: hidden;
will-change: transform;
```

### Framer Motion Integration

#### Testimonials Scroll Animation
```tsx
// Infinite scrolling with motion controls
const controls = useAnimationControls();

// Animation configuration
controls.start({
  x: to,
  transition: {
    duration: 80,
    ease: 'linear',
    repeat: Infinity,
    repeatType: 'loop',
  },
});
```

**Features:**
- Pause on hover/focus for accessibility
- Linear easing for consistent scroll speed
- Infinite loop with seamless transitions
- Hardware-accelerated transforms

#### Performance Optimizations
```tsx
// Performance-focused animation setup
<motion.div
  style={{
    willChange: 'transform',
    transform: 'translate3d(0, 0, 0)',
    backfaceVisibility: 'hidden',
  }}
  animate={controls}
>
```

### Interaction States

#### Hover State Management
```tsx
// React hover state patterns
const [isHovered, setIsHovered] = useState(false);

// Event handlers
const handleMouseEnter = () => setIsHovered(true);
const handleMouseLeave = () => setIsHovered(false);
```

#### Focus State Management
```tsx
// Accessibility-focused interaction
const handleFocus = () => setPaused(true);
const handleBlur = () => setPaused(false);

// Keyboard navigation
onKeyDown={(e) => {
  if (e.key === 'Escape') {
    // Handle escape key
  }
}}
```

### Animation Guidelines

#### Performance Best Practices
1. **Use `transform` and `opacity`** for smooth animations
2. **Enable hardware acceleration** with `translate3d()`
3. **Set `will-change` property** for complex animations
4. **Use `backface-visibility: hidden`** to prevent flickering

#### Accessibility Considerations
1. **Respect `prefers-reduced-motion`** media query
2. **Provide pause/play controls** for infinite animations
3. **Include keyboard interaction** for all hover effects
4. **Maintain focus indicators** during animations

#### Timing Guidelines
- **Micro-interactions**: 150-200ms
- **Button hovers**: 300ms
- **Card transitions**: 300ms
- **Page transitions**: 500ms
- **Floating animations**: 4s (slow, subtle)

### Custom Animation Utilities

#### CSS Custom Properties
```css
:root {
  --animation-duration-fast: 150ms;
  --animation-duration-normal: 300ms;
  --animation-duration-slow: 500ms;
  --animation-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### Utility Classes
```css
.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
}
```

## Responsive Breakpoints

### Tailwind CSS Breakpoints
```css
/* Default Tailwind breakpoints used throughout the design */
sm: 640px   /* Small devices (landscape phones) */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (desktops) */
xl: 1280px  /* Extra large devices (large desktops) */
2xl: 1536px /* 2x extra large devices (larger desktops) */
```

### Responsive Design Strategy

#### Mobile-First Approach
- Base styles target mobile devices (320px+)
- Progressive enhancement for larger screens
- Touch-friendly interfaces on mobile
- Optimized content hierarchy for small screens

#### Breakpoint Usage Patterns
```css
/* Typography scaling */
text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl

/* Spacing progression */
py-16 md:py-20 lg:py-24 xl:py-28

/* Grid layouts */
grid-cols-1 md:grid-cols-2 lg:grid-cols-4

/* Container padding */
px-4 sm:px-6 lg:px-8
```

## Spacing Scale

### Standard Spacing System
Based on 8px (0.5rem) base unit for consistent rhythm:

```css
/* Tailwind spacing scale used in design */
1 = 4px    /* 0.25rem */
2 = 8px    /* 0.5rem */
3 = 12px   /* 0.75rem */
4 = 16px   /* 1rem */
6 = 24px   /* 1.5rem */
8 = 32px   /* 2rem */
10 = 40px  /* 2.5rem */
12 = 48px  /* 3rem */
16 = 64px  /* 4rem */
20 = 80px  /* 5rem */
24 = 96px  /* 6rem */
28 = 112px /* 7rem */
```

### Spacing Usage Guidelines

#### Section Spacing
- **Large sections**: `py-16 md:py-20 lg:py-24 xl:py-28`
- **Medium sections**: `py-12 md:py-16 lg:py-20`
- **Small sections**: `py-8 md:py-12 lg:py-16`

#### Element Spacing
- **Between major elements**: `mb-12 md:mb-16 lg:mb-20`
- **Between related elements**: `mb-6 sm:mb-8 lg:mb-10`
- **Between tight elements**: `mb-3 sm:mb-4 lg:mb-6`

#### Grid Gaps
- **Large grids**: `gap-6 md:gap-8 lg:gap-10 xl:gap-12`
- **Medium grids**: `gap-4 sm:gap-6 lg:gap-8`
- **Tight grids**: `gap-2 sm:gap-3 lg:gap-4`

## Accessibility Patterns

### Keyboard Navigation

#### Focus Management
```tsx
// Proper focus indicators
focus:outline-none focus-visible:ring-2 focus-visible:ring-ethos-purple focus-visible:ring-offset-2

// Tab order management
tabIndex={0}  // Focusable
tabIndex={-1} // Programmatically focusable only
```

#### Keyboard Event Handling
```tsx
// Standard keyboard patterns
const handleKeyDown = (e: React.KeyboardEvent) => {
  switch (e.key) {
    case 'Enter':
    case ' ':
      // Activate button/link
      break;
    case 'Escape':
      // Close modal/menu
      break;
    case 'ArrowDown':
    case 'ArrowUp':
      // Navigate lists
      break;
  }
};
```

### ARIA Patterns

#### Semantic HTML
```tsx
// Proper heading hierarchy
<h1> // Page title
<h2> // Section titles
<h3> // Subsection titles

// Landmark roles
<header role="banner">
<nav role="navigation" aria-label="Main navigation">
<main role="main" id="main-content">
<section role="region" aria-labelledby="section-title">
```

#### Interactive Elements
```tsx
// Button accessibility
<button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  aria-controls="dialog-content"
>

// Link accessibility
<a
  aria-current={isActive ? 'page' : undefined}
  aria-label="Navigate to Solutions page"
>
```

### Color Accessibility

#### Contrast Ratios
- **Normal text**: 4.5:1 minimum (WCAG AA)
- **Large text**: 3:1 minimum (WCAG AA)
- **Interactive elements**: 3:1 minimum for borders/focus indicators

#### Color-blind Considerations
- Never rely solely on color to convey information
- Use patterns, icons, or text alongside color
- Test with color-blindness simulators

### Motion Accessibility

#### Reduced Motion Support
```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

#### Animation Controls
- Provide pause/play controls for infinite animations
- Keep animations under 5 seconds for WCAG compliance
- Avoid flashing content (3+ flashes per second)

## Usage Guidelines

### Implementation Checklist

#### Before Starting a New Page
1. ✅ Review color palette and semantic usage
2. ✅ Choose appropriate typography scale
3. ✅ Plan responsive layout using standard containers
4. ✅ Select appropriate card patterns
5. ✅ Consider animation and interaction needs
6. ✅ Ensure accessibility compliance

#### Component Selection
- Use standardized Button component with `cta` variant
- Follow card patterns for consistent visual language
- Apply standard container structure (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)
- Use progressive text scaling patterns
- Implement proper spacing rhythm

#### Consistency Rules
1. **Always use theme colors** - No hardcoded colors outside the palette
2. **Follow typography scale** - No arbitrary font sizes
3. **Maintain spacing rhythm** - Use standard spacing patterns
4. **Implement proper responsive behavior** - Mobile-first approach
5. **Ensure accessibility** - Follow ARIA patterns and keyboard navigation

### Quality Assurance

#### Visual Consistency Check
- Color usage matches design system
- Typography follows progressive scaling
- Spacing maintains consistent rhythm
- Cards follow established patterns

#### Responsive Testing
- Mobile (320px - 640px)
- Tablet (640px - 1024px) 
- Desktop (1024px+)
- Large Desktop (1280px+)

#### Accessibility Testing
- Keyboard navigation works completely
- Screen reader compatibility
- Color contrast meets WCAG AA standards
- Motion respects user preferences

This design system ensures consistent, accessible, and maintainable UI patterns across all pages in the zen-home application.

## Typography System

### Font Family
- **Primary**: `Poppins` - Used for all text elements
- **Fallbacks**: `-apple-system, Roboto, Helvetica, sans-serif`

### Responsive Text Scale
The design system uses progressive text scaling for optimal readability across devices:

#### Hero/Display Text
```css
/* Large hero headings */
text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
/* font-size: 36px → 48px → 60px → 72px */

/* Section headings */
text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
/* font-size: 24px → 30px → 36px → 48px → 60px */
```

#### Body Text
```css
/* Primary body text */
text-sm sm:text-base lg:text-lg
/* font-size: 14px → 16px → 18px */

/* Large body text */
text-base sm:text-lg md:text-xl lg:text-2xl
/* font-size: 16px → 18px → 20px → 24px */
```

#### Button Text
```css
/* CTA buttons */
text-base sm:text-lg lg:text-xl
/* font-size: 16px → 18px → 20px */
```

### Font Weight System
- **Light**: `font-light (300)` - Subtle text, captions
- **Normal**: `font-normal (400)` - Body text, descriptions
- **Medium**: `font-medium (500)` - Section headings, emphasis
- **Semibold**: `font-semibold (600)` - Card titles, navigation
- **Bold**: `font-bold (700)` - Brand name, strong emphasis

### Line Height & Spacing
- **Display Text**: `leading-tight (1.1)` - Large headings
- **Headings**: `leading-snug (1.2)` - Section titles
- **Body Text**: `leading-relaxed (1.4)` - Paragraphs, descriptions
- **Loose Text**: `leading-loose (1.6)` - Extended reading content

### Letter Spacing (Tracking)
- **Tight**: `tracking-tight (-0.03em)` - Large headings, display text
- **Normal**: `tracking-normal (0)` - Body text
- **Wide**: `tracking-wide (0.025em)` - Buttons, navigation

### Typography Usage Examples

#### Hero Section
```tsx
// Main hero title
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight">
  Transform your Business with AI Agents
</h1>

// Hero subtitle/description
<p className="text-base md:text-lg font-normal leading-relaxed tracking-tight">
  Description text here
</p>
```

#### Section Headings
```tsx
// Primary section heading
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-snug tracking-tight">
  Section Title
</h2>

// Secondary heading
<h3 className="text-lg md:text-xl lg:text-2xl font-normal leading-snug tracking-tight">
  Subsection Title
</h3>
```

#### Body Content
```tsx
// Standard body text
<p className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed tracking-tight text-ethos-gray">
  Body content with proper scaling
</p>

// Emphasized body text
<p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed tracking-tight">
  Larger body content
</p>
```