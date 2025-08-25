# Theme Implementation Guidelines

## Quick Start Guide

### 1. Setting Up a New Page

When creating a new page, follow these steps to ensure consistency with the homepage design:

```tsx
import React from 'react';
import { StandardPageTemplate } from '@/components/templates/PageTemplates';
import { SectionContainer, SectionHeader } from '@/components/templates/SectionTemplates';
import { Button } from '@/components/ui/button';

export const NewPage = () => {
  return (
    <StandardPageTemplate
      pageTitle="Your Page Title"
      pageTitleAccent="Accent Text"
      pageSubtitle="Optional subtitle for context"
    >
      <SectionContainer background="white" padding="large">
        {/* Your content here */}
      </SectionContainer>
    </StandardPageTemplate>
  );
};
```

### 2. Using Design System Components

```tsx
// Import enhanced components
import { 
  EnhancedCard, 
  ResponsiveGrid, 
  StatisticCard,
  ServiceCard,
  GradientText 
} from '@/components/ui/enhanced-components';

// Use pre-styled components
<ResponsiveGrid cols={3} gap="lg">
  <ServiceCard 
    title="Service Title"
    description="Service description"
  />
  <StatisticCard 
    value="95%"
    title="Success Rate"
    description="Customer satisfaction"
  />
</ResponsiveGrid>
```

## Component Selection Guidelines

### Page Templates

Choose the appropriate template based on your page type:

| Template | Use Case | Example |
|----------|----------|---------|
| `HeroPageTemplate` | Landing pages with hero section | Homepage, Product pages |
| `StandardPageTemplate` | Regular content pages | About, Services, Blog posts |
| `ContentPageTemplate` | Pages with sidebar content | Documentation, Guides |
| `SectionBasedPageTemplate` | Multi-section pages | Feature comparisons |
| `LandingPageTemplate` | Marketing landing pages | Campaign pages |
| `FeaturePageTemplate` | Feature-rich pages | Product features |

### Card Components

Choose cards based on content type:

```tsx
// Statistics and numbers
<StatisticCard value="30%" title="Increase" description="In sales" />

// Services and offerings
<ServiceCard title="AI Agents" description="24/7 automation" />

// General content with custom styling
<EnhancedCard variant="hero" size="lg" radius="xlarge">
  {/* Custom content */}
</EnhancedCard>

// Colored cards for special sections
<ColoredCard backgroundColor="#6D6AED">
  {/* Content with custom background */}
</ColoredCard>
```

## Responsive Design Implementation

### Typography Scaling

Always use progressive text scaling:

```tsx
// ✅ Correct - Progressive scaling
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
  Responsive Title
</h1>

// ❌ Incorrect - Fixed size
<h1 className="text-5xl">
  Fixed Title
</h1>
```

### Container Patterns

Use standardized containers:

```tsx
// ✅ Correct - Standard container
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>

// ✅ Alternative - CSS utility class
<div className="standard-container">
  {/* Content */}
</div>

// ❌ Incorrect - Custom widths
<div className="max-w-5xl mx-auto px-2">
  {/* Content */}
</div>
```

### Grid Layouts

Use responsive grid patterns:

```tsx
// ✅ Correct - Responsive grid
<ResponsiveGrid cols={4} gap="lg">
  {items.map(item => <Card key={item.id} {...item} />)}
</ResponsiveGrid>

// ✅ Alternative - Manual classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
  {/* Grid items */}
</div>
```

## Color Usage Guidelines

### Primary Colors

```tsx
// Brand purple for CTAs and highlights
<Button variant="cta" size="cta">Action Button</Button>

// Navy for primary text
<h2 className="text-ethos-navy">Primary Heading</h2>

// Gray for body text
<p className="text-ethos-gray">Body content text</p>
```

### Gradient Usage

```tsx
// For statistics and emphasis
<GradientText variant="purple-pink">
  Important Number or Text
</GradientText>

// For hero titles
<GradientText variant="navy-gray">
  Hero Title Text
</GradientText>
```

### Background Patterns

```tsx
// Section backgrounds
<SectionContainer background="gray">        {/* #F2F2F2 */}
<SectionContainer background="gradient-ways"> {/* WaysWeCanHelp gradient */}
<SectionContainer background="gradient-testimonials"> {/* Testimonials gradient */}
```

## Animation Best Practices

### Floating Animations

```tsx
// For hero images or special elements
<FloatingImage 
  src="/image.png" 
  alt="Description"
  animation="float"
/>

// For secondary images
<FloatingImage 
  src="/image.png" 
  alt="Description"
  animation="float-mole"
/>
```

### Hover Effects

```tsx
// Standard hover lift
<div className="hover-lift">
  {/* Content that lifts on hover */}
</div>

// Hover with shadow
<div className="hover-shadow">
  {/* Content with shadow on hover */}
</div>

// Combined effects
<EnhancedCard variant="service" className="hover-lift hover-shadow">
  {/* Card with multiple hover effects */}
</EnhancedCard>
```

## Accessibility Implementation

### Keyboard Navigation

```tsx
// Proper focus management
<button 
  className="focus-ring"
  onKeyDown={handleKeyDown}
  aria-label="Descriptive label"
>
  Button Text
</button>
```

### ARIA Patterns

```tsx
// Section landmarks
<section 
  role="region" 
  aria-labelledby="section-title"
>
  <h2 id="section-title">Section Title</h2>
  {/* Section content */}
</section>

// Interactive elements
<button
  aria-expanded={isOpen}
  aria-controls="menu-content"
  aria-label="Toggle menu"
>
  Menu
</button>
```

### Color Contrast

All color combinations in the design system meet WCAG AA standards:
- Text on white backgrounds: ≥4.5:1 ratio
- Large text: ≥3:1 ratio
- Interactive elements: ≥3:1 ratio for borders

## Performance Guidelines

### Hardware Acceleration

```tsx
// For animated elements
<div className="gpu-accelerated animate-float-slow">
  {/* Animated content */}
</div>

// Or manual styles
<div style={{
  transform: 'translate3d(0, 0, 0)',
  backfaceVisibility: 'hidden',
  willChange: 'transform'
}}>
  {/* Content */}
</div>
```

### Reduced Motion Support

The design system automatically respects `prefers-reduced-motion`:

```css
/* Automatically applied */
@media (prefers-reduced-motion: reduce) {
  .animate-float-slow,
  .animate-float-mole {
    animation: none;
  }
}
```

## Common Patterns

### Section Header Pattern

```tsx
// Standard section header
<SectionHeader
  title="Main Title"
  titleAccent="Accent Part"
  subtitle="Supporting description text"
  alignment="center"
/>
```

### Content with Image Pattern

```tsx
// Image and content side by side
<ContentWithImageSection
  imageSrc="/image.png"
  imageAlt="Description"
  imageAnimation={true}
  reverse={false}
>
  <SectionHeader
    title="Content Title"
    subtitle="Description"
    alignment="left"
  />
  <FeatureGrid features={featureList} />
</ContentWithImageSection>
```

### Card Grid Pattern

```tsx
// Grid of service cards
<CardGrid
  cards={serviceCards}
  gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
  cardType="service"
/>
```

### CTA Section Pattern

```tsx
// Call to action section
<CTASection
  title="Ready to get started?"
  buttonText="Start Now"
  onButtonClick={handleCTAClick}
/>
```

## Quality Checklist

Before deploying a page, verify:

### Visual Consistency
- [ ] Colors match the design system palette
- [ ] Typography uses progressive scaling
- [ ] Spacing follows standard patterns
- [ ] Cards use established patterns

### Responsive Design
- [ ] Mobile view (320px - 640px) works correctly
- [ ] Tablet view (640px - 1024px) is optimized
- [ ] Desktop view (1024px+) displays properly
- [ ] Text remains readable at all sizes

### Accessibility
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible and clear
- [ ] ARIA labels are provided where needed
- [ ] Color contrast meets WCAG AA standards
- [ ] Content structure uses proper headings (h1, h2, h3)

### Performance
- [ ] Animations use hardware acceleration
- [ ] Images are optimized and have alt text
- [ ] No layout shift during loading
- [ ] Reduced motion preferences are respected

### Code Quality
- [ ] Components follow naming conventions
- [ ] Props have proper TypeScript types
- [ ] No hardcoded colors outside the palette
- [ ] Consistent spacing using design tokens

## Troubleshooting Common Issues

### Typography Not Scaling
```tsx
// ❌ Problem: Fixed sizes
<h1 className="text-4xl">Title</h1>

// ✅ Solution: Progressive scaling
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Title</h1>
```

### Cards Looking Inconsistent
```tsx
// ❌ Problem: Custom styling
<div className="bg-gray-100 rounded-lg p-4">Content</div>

// ✅ Solution: Use design system components
<EnhancedCard variant="service" size="lg" radius="xlarge">Content</EnhancedCard>
```

### Spacing Issues
```tsx
// ❌ Problem: Random spacing values
<div className="mb-7 px-3">Content</div>

// ✅ Solution: Use standard patterns
<div className="mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-6 lg:px-8">Content</div>
```

### Animation Performance Issues
```tsx
// ❌ Problem: No hardware acceleration
<div className="hover:scale-105">Content</div>

// ✅ Solution: Use optimized classes
<div className="gpu-accelerated hover-lift">Content</div>
```

## Getting Help

1. **Design System Documentation**: Refer to `DESIGN_SYSTEM.md` for complete specifications
2. **Component Examples**: Check existing homepage components for implementation patterns
3. **Template Usage**: Use page templates as starting points for new pages
4. **Color Reference**: Use only colors defined in the ethos palette
5. **Spacing Reference**: Follow the 8px-based spacing scale

This theme system ensures consistent, accessible, and performant pages across the entire zen-home application.