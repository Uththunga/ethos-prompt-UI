# LearningMaterialSection Component

## Overview
The `LearningMaterialSection` component is a standardized, mobile-responsive section for promoting learning materials across different pages of the application. It ensures consistency in design, messaging, and functionality.

## Features
- Mobile-responsive design following the project's design system guidelines
- Consistent typography scaling across device sizes
- Proper spacing and padding for all screen sizes
- Accessible markup with semantic HTML
- Standardized call-to-action button
- Background image with opacity effect

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `baseUrl` | string | Yes | - | Base URL for asset paths |

## Usage

### Basic Usage
```tsx
import { LearningMaterialSection } from '@/components/LearningMaterialSection';

<LearningMaterialSection baseUrl={baseUrl} />
```

## Design System Compliance

This component follows the project's design system guidelines:

### Responsive Design
- Uses progressive text scaling (`text-base sm:text-lg md:text-xl lg:text-2xl`)
- Implements standard container patterns (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)
- Follows section padding guidelines (`py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24`)

### Background Style
- Background color: `bg-ethos-navy`
- Background image with `opacity-20` for subtlety
- Image positioning: `object-center sm:object-right`
- Responsive sizing: `w-full h-full object-cover`

### Typography
- Proper font weights and sizes for headings
- Consistent line heights and letter spacing
- Responsive text scaling for all device sizes

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Sufficient color contrast
- Focus management for interactive elements

### Mobile Optimization
- Content alignment optimized for mobile (centered)
- Appropriate touch targets for buttons
- Optimized spacing for small screens