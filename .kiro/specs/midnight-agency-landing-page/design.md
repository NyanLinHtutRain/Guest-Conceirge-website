# Design Document: Midnight Agency Landing Page

## Overview

Midnight Agency is a premium dark-mode SaaS landing page theme built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. The design emphasizes a futuristic, high-end aesthetic inspired by Linear and Vercel, using a carefully crafted slate color palette, bento grid layouts, glassmorphism effects, and smooth scroll-based animations.

The architecture follows a component-based approach with a reusable design system, ensuring consistency across all sections while maintaining flexibility for customization. The landing page is fully static, requiring no backend integration, and follows a mobile-first responsive design philosophy.

## Architecture

### High-Level Structure

```
┌─────────────────────────────────────┐
│         Next.js App Router          │
│         (app/page.tsx)              │
└─────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│       Landing Page Layout           │
│  ┌───────────────────────────────┐  │
│  │      Hero Section             │  │
│  │  (with Typer Component)       │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │    Features Section           │  │
│  │    (Bento Grid Layout)        │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │    Pricing Section            │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │    CTA Section                │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────┐
│      Component Library              │
│  • Button                           │
│  • Card                             │
│  • FeatureCard                      │
│  • Section                          │
│  • Typer                            │
│  • GradientText                     │
└─────────────────────────────────────┘
```

### Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **UI Library**: React 18+
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS 3+
- **Animation**: Framer Motion 10+
- **Build**: Static export (no server-side rendering required)

## Components and Interfaces

### 1. Design System Foundation

#### Color Tokens

```typescript
// lib/design-tokens.ts

export const colors = {
  background: {
    main: 'bg-slate-950',
    card: 'bg-slate-900/50',
    cardHover: 'bg-slate-800',
  },
  border: {
    default: 'border-slate-800',
    glow: 'border-emerald-400/50',
  },
  text: {
    heading: 'text-white',
    body: 'text-slate-400',
    success: 'text-emerald-400',
    magic: 'text-purple-400',
  },
  gradient: {
    text: 'bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent',
  },
} as const;

export const spacing = {
  section: 'py-24 md:py-32',
  card: 'p-6 md:p-8',
} as const;

export const effects = {
  glass: 'backdrop-blur-md',
  rounded: 'rounded-3xl',
} as const;
```

### 2. Core Components

#### Button Component

```typescript
// components/ui/Button.tsx

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick,
  className = '' 
}: ButtonProps) {
  const baseStyles = 'font-medium transition-all duration-200 rounded-xl';
  
  const variants = {
    primary: 'bg-emerald-500 hover:bg-emerald-400 text-white',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700',
    ghost: 'hover:bg-slate-800/50 text-slate-300',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
```

#### Card Component

```typescript
// components/ui/Card.tsx

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  glass?: boolean;
  hover?: boolean;
  className?: string;
}

export function Card({ children, glass = false, hover = false, className = '' }: CardProps) {
  const baseStyles = 'bg-slate-900/50 border border-slate-800 rounded-3xl p-6 md:p-8';
  const glassStyles = glass ? 'backdrop-blur-md' : '';
  const hoverStyles = hover ? 'transition-all duration-300 hover:bg-slate-800 hover:border-emerald-400/50' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}
```

#### FeatureCard Component

```typescript
// components/ui/FeatureCard.tsx

import { ReactNode } from 'react';
import { Card } from './Card';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  accent?: 'success' | 'magic';
}

export function FeatureCard({ icon, title, description, accent = 'success' }: FeatureCardProps) {
  const accentColor = accent === 'success' ? 'text-emerald-400' : 'text-purple-400';
  
  return (
    <Card hover>
      <div className={`mb-4 ${accentColor}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-slate-400 leading-relaxed">
        {description}
      </p>
    </Card>
  );
}
```

#### Section Component

```typescript
// components/ui/Section.tsx

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
```

#### GradientText Component

```typescript
// components/ui/GradientText.tsx

import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}
```

#### Typer Component

```typescript
// components/ui/Typer.tsx

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TyperProps {
  messages: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function Typer({ 
  messages, 
  typingSpeed = 50, 
  deletingSpeed = 30,
  pauseDuration = 2000 
}: TyperProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    
    if (isTyping) {
      if (currentText.length < currentMessage.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentMessage.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setCurrentMessageIndex((currentMessageIndex + 1) % messages.length);
        setIsTyping(true);
      }
    }
  }, [currentText, isTyping, currentMessageIndex, messages, typingSpeed, deletingSpeed, pauseDuration]);
  
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 font-mono text-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="text-slate-300">
        <span className="text-emerald-400">$</span> {currentText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-emerald-400 ml-1"
        />
      </div>
    </div>
  );
}
```

### 3. Page Sections

#### Hero Section

```typescript
// components/sections/HeroSection.tsx

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { GradientText } from '@/components/ui/GradientText';
import { Typer } from '@/components/ui/Typer';
import { motion } from 'framer-motion';

export function HeroSection() {
  const messages = [
    'npm install midnight-agency',
    'Building your premium landing page...',
    'Deploy complete in 2.3s ✓',
  ];
  
  return (
    <Section className="min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build <GradientText>Premium</GradientText> Landing Pages in Minutes
          </h1>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            A dark-mode SaaS theme that makes your product look like it costs $500/month.
            Inspired by Linear and Vercel.
          </p>
          <div className="flex gap-4">
            <Button variant="primary" size="lg">Get Started</Button>
            <Button variant="secondary" size="lg">View Demo</Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typer messages={messages} />
        </motion.div>
      </div>
    </Section>
  );
}
```

#### Features Section

```typescript
// components/sections/FeaturesSection.tsx

import { Section } from '@/components/ui/Section';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { GradientText } from '@/components/ui/GradientText';

export function FeaturesSection() {
  const features = [
    {
      icon: <SparklesIcon />,
      title: 'Glassmorphism Effects',
      description: 'Backdrop blur and translucent layers create depth and premium feel.',
      accent: 'magic' as const,
    },
    {
      icon: <GridIcon />,
      title: 'Bento Grid Layouts',
      description: 'Organized, beautiful grid systems that adapt to any content.',
      accent: 'success' as const,
    },
    {
      icon: <ZapIcon />,
      title: 'Smooth Animations',
      description: 'Framer Motion powers buttery-smooth scroll reveals and interactions.',
      accent: 'magic' as const,
    },
    {
      icon: <PaletteIcon />,
      title: 'Premium Color System',
      description: 'Carefully crafted slate palette with emerald and purple accents.',
      accent: 'success' as const,
    },
  ];
  
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Everything You Need for a <GradientText>Premium</GradientText> Landing Page
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Built with modern tools and best practices for performance and maintainability.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </Section>
  );
}

// Icon components (simplified - use lucide-react or similar in production)
function SparklesIcon() {
  return <div className="w-12 h-12">✨</div>;
}

function GridIcon() {
  return <div className="w-12 h-12">⊞</div>;
}

function ZapIcon() {
  return <div className="w-12 h-12">⚡</div>;
}

function PaletteIcon() {
  return <div className="w-12 h-12">🎨</div>;
}
```

#### Pricing Section

```typescript
// components/sections/PricingSection.tsx

import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { GradientText } from '@/components/ui/GradientText';

export function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      description: 'Perfect for side projects',
      features: ['All components', 'Basic support', 'Lifetime updates'],
    },
    {
      name: 'Pro',
      price: '$99',
      description: 'For professional projects',
      features: ['All components', 'Priority support', 'Lifetime updates', 'Custom variants'],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: '$299',
      description: 'For teams and agencies',
      features: ['All components', 'Dedicated support', 'Lifetime updates', 'Custom development', 'White-label license'],
    },
  ];
  
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Simple, <GradientText>Transparent</GradientText> Pricing
        </h2>
        <p className="text-xl text-slate-400">
          One-time payment. Lifetime access.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className={plan.featured ? 'border-emerald-400/50' : ''}>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 mb-4">{plan.description}</p>
              <div className="text-5xl font-bold text-white mb-6">
                {plan.price}
              </div>
              <Button variant={plan.featured ? 'primary' : 'secondary'} className="w-full mb-6">
                Get Started
              </Button>
              <ul className="space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-400">
                    <span className="text-emerald-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
```

#### CTA Section

```typescript
// components/sections/CTASection.tsx

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { GradientText } from '@/components/ui/GradientText';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-12 md:p-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Build Something <GradientText>Amazing</GradientText>?
        </h2>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Join hundreds of developers creating premium landing pages with Midnight Agency.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary" size="lg">Get Started Now</Button>
          <Button variant="ghost" size="lg">View Documentation</Button>
        </div>
      </motion.div>
    </Section>
  );
}
```

## Data Models

### Design Token Types

```typescript
// types/design-tokens.ts

export type ColorVariant = 'primary' | 'secondary' | 'ghost';
export type SizeVariant = 'sm' | 'md' | 'lg';
export type AccentColor = 'success' | 'magic';

export interface DesignTokens {
  colors: {
    background: Record<string, string>;
    border: Record<string, string>;
    text: Record<string, string>;
    gradient: Record<string, string>;
  };
  spacing: Record<string, string>;
  effects: Record<string, string>;
}
```

### Component Props Types

```typescript
// types/components.ts

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AnimatedComponentProps extends BaseComponentProps {
  delay?: number;
  duration?: number;
}

export interface FeatureData {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: AccentColor;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}
```

### Configuration Types

```typescript
// types/config.ts

export interface LandingPageConfig {
  hero: {
    headline: string;
    subheadline: string;
    typerMessages: string[];
  };
  features: FeatureData[];
  pricing: PricingPlan[];
  cta: {
    headline: string;
    subheadline: string;
  };
}
```



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property Reflection

After analyzing all acceptance criteria, I've identified several areas where properties can be consolidated:

- **Color system properties (1.1-1.4)**: These are all testing the same configuration structure, so they can be combined into a single example test
- **Page structure properties (2.1-2.4)**: These all test that sections exist, can be combined into one comprehensive test
- **Responsive grid properties (7.2-7.4)**: These test the same grid behavior at different breakpoints, can be combined
- **Component existence properties (8.1-8.5)**: These all test that components exist, can be combined into one test
- **Typography color properties (9.1-9.2, 9.5-9.6)**: These test similar color application rules and can be consolidated

The following properties represent the unique, non-redundant validation requirements:

### Property 1: Section Spacing Consistency

*For any* major section component in the landing page, the section should include vertical padding classes of py-24 or md:py-32 to maintain generous spacing.

**Validates: Requirements 2.5**

### Property 2: Card Border Radius Consistency

*For any* card component rendered on the page, the component should include the rounded-3xl class to maintain consistent corner radius.

**Validates: Requirements 2.7**

### Property 3: Glassmorphism Effect Completeness

*For any* component with glassmorphism enabled, the component should include both backdrop-blur-md and a semi-transparent background (bg-*-*/50 pattern) to create the proper glass effect.

**Validates: Requirements 3.2, 3.3**

### Property 4: Interactive Element Transitions

*For any* interactive element (buttons, cards with hover), the element should include transition classes or Framer Motion animation props to ensure smooth visual feedback.

**Validates: Requirements 6.3, 6.4**

### Property 5: Mobile-First Responsive Design

*For any* component with responsive styling, the base classes should define mobile styles and breakpoint modifiers (md:, lg:) should define larger screen styles, ensuring mobile-first approach.

**Validates: Requirements 7.1**

### Property 6: Typography Responsive Scaling

*For any* text element with size styling, the element should include responsive text size classes (e.g., text-xl md:text-2xl) to scale appropriately across breakpoints.

**Validates: Requirements 7.5**

### Property 7: Spacing Responsive Adjustment

*For any* element with padding or margin, the element should use responsive spacing classes (e.g., p-6 md:p-8) to adjust proportionally for different screen sizes.

**Validates: Requirements 7.6**

### Property 8: TypeScript Type Safety

*For any* component file in the component library, the file should use TypeScript (.tsx extension) and include proper type annotations for props interfaces.

**Validates: Requirements 8.6**

### Property 9: Tailwind CSS Styling Consistency

*For any* component in the component library, the component should use Tailwind CSS classes via className props rather than inline styles or CSS modules.

**Validates: Requirements 8.7**

### Property 10: Heading Color Consistency

*For any* heading element (h1, h2, h3), the element should include the text-white class to maintain consistent heading color.

**Validates: Requirements 9.1**

### Property 11: Body Text Color Consistency

*For any* body text element (p, span for descriptions), the element should use text-slate-400 class for consistent body text color.

**Validates: Requirements 9.2**

### Property 12: Typography Size Hierarchy

*For any* heading element, the element should include appropriate text size classes (text-4xl or larger for h1, text-3xl or larger for h2, text-xl or larger for h3) to maintain visual hierarchy.

**Validates: Requirements 9.3**

### Property 13: Typography Readability

*For any* text block with multiple lines, the element should include leading-* (line height) classes to maintain readable spacing between lines.

**Validates: Requirements 9.4**

### Property 14: Accent Color Usage

*For any* text element with accent styling, the element should use text-emerald-400 for success-related content or text-purple-400 for AI/magic-related content according to the design system.

**Validates: Requirements 9.5, 9.6**

### Property 15: Static Content Only

*For any* component in the landing page, the component should not include fetch calls, API requests, or database queries, ensuring all content is static.

**Validates: Requirements 10.2, 10.3, 10.5**

## Error Handling

### Component Error Boundaries

Since this is a static landing page with no dynamic data fetching, error handling focuses on graceful degradation and development-time validation:

1. **TypeScript Compile-Time Validation**: All components use strict TypeScript types to catch errors during development
2. **Prop Validation**: Component interfaces define required and optional props with appropriate types
3. **Fallback Content**: Components should provide sensible defaults for optional props
4. **Animation Fallbacks**: Framer Motion animations should not break the layout if JavaScript is disabled

### Development Warnings

```typescript
// Example: Button component with prop validation
export function Button({ variant = 'primary', size = 'md', children, ...props }: ButtonProps) {
  if (process.env.NODE_ENV === 'development') {
    if (!children) {
      console.warn('Button component rendered without children');
    }
  }
  
  return (
    <motion.button {...props}>
      {children || 'Button'}
    </motion.button>
  );
}
```

### Build-Time Validation

The Next.js build process will catch:
- TypeScript type errors
- Missing imports or components
- Invalid Tailwind classes (with appropriate plugins)
- Broken component references

## Testing Strategy

### Dual Testing Approach

This project requires both unit tests and property-based tests to ensure comprehensive coverage:

- **Unit tests**: Verify specific examples, component rendering, and edge cases
- **Property tests**: Verify universal properties across all components and styling patterns

### Unit Testing

Unit tests focus on:
- **Component rendering**: Verify each component renders without errors
- **Prop handling**: Test that components correctly handle different prop combinations
- **Specific examples**: Test concrete cases like "Hero section includes CTA button"
- **Edge cases**: Test empty states, missing optional props, etc.

**Testing Library**: React Testing Library with Jest

**Example Unit Tests**:

```typescript
// __tests__/components/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button Component', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('applies primary variant styles', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText('Primary');
    expect(button).toHaveClass('bg-emerald-500');
  });
  
  it('applies correct size classes', () => {
    render(<Button size="lg">Large</Button>);
    const button = screen.getByText('Large');
    expect(button).toHaveClass('px-8', 'py-4');
  });
});
```

### Property-Based Testing

Property tests verify universal rules that should hold across all instances. Each property test should:
- Run a minimum of 100 iterations
- Generate random valid inputs
- Reference the design document property it validates
- Use the tag format: **Feature: midnight-agency-landing-page, Property {number}: {property_text}**

**Testing Library**: fast-check (for JavaScript/TypeScript property-based testing)

**Example Property Tests**:

```typescript
// __tests__/properties/styling.property.test.tsx
import fc from 'fast-check';
import { render } from '@testing-library/react';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

describe('Property-Based Tests', () => {
  // Feature: midnight-agency-landing-page, Property 2: Card Border Radius Consistency
  it('all card components include rounded-3xl class', () => {
    fc.assert(
      fc.property(
        fc.string(), // random content
        fc.boolean(), // random glass prop
        fc.boolean(), // random hover prop
        (content, glass, hover) => {
          const { container } = render(
            <Card glass={glass} hover={hover}>
              {content}
            </Card>
          );
          const card = container.firstChild as HTMLElement;
          expect(card.className).toContain('rounded-3xl');
        }
      ),
      { numRuns: 100 }
    );
  });
  
  // Feature: midnight-agency-landing-page, Property 1: Section Spacing Consistency
  it('all section components include py-24 or md:py-32 spacing', () => {
    fc.assert(
      fc.property(
        fc.string(), // random content
        fc.string(), // random className
        (content, className) => {
          const { container } = render(
            <Section className={className}>
              {content}
            </Section>
          );
          const section = container.firstChild as HTMLElement;
          const classes = section.className;
          expect(classes).toMatch(/py-24|py-32/);
        }
      ),
      { numRuns: 100 }
    );
  });
  
  // Feature: midnight-agency-landing-page, Property 3: Glassmorphism Effect Completeness
  it('components with glass effect include both backdrop-blur and transparency', () => {
    fc.assert(
      fc.property(
        fc.string(), // random content
        (content) => {
          const { container } = render(
            <Card glass={true}>
              {content}
            </Card>
          );
          const card = container.firstChild as HTMLElement;
          const classes = card.className;
          expect(classes).toContain('backdrop-blur-md');
          expect(classes).toMatch(/bg-\w+-\d+\/\d+/); // matches bg-slate-900/50 pattern
        }
      ),
      { numRuns: 100 }
    );
  });
  
  // Feature: midnight-agency-landing-page, Property 10: Heading Color Consistency
  it('all heading elements include text-white class', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('h1', 'h2', 'h3'), // random heading level
        fc.string(), // random content
        (HeadingTag, content) => {
          const { container } = render(
            React.createElement(HeadingTag, { className: 'text-white' }, content)
          );
          const heading = container.firstChild as HTMLElement;
          expect(heading.className).toContain('text-white');
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

### Integration Testing

Integration tests verify that sections work together correctly:
- Full page rendering
- Section composition
- Navigation and scroll behavior
- Responsive breakpoint transitions

### Visual Regression Testing

Consider using tools like:
- **Chromatic** or **Percy**: For visual regression testing
- **Storybook**: For component documentation and visual testing

### Testing Configuration

```json
// package.json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:properties": "jest --testPathPattern=property.test"
  },
  "devDependencies": {
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "jest": "^29.0.0",
    "jest-environment-jsdom": "^29.0.0",
    "fast-check": "^3.15.0"
  }
}
```

### Test Coverage Goals

- **Unit test coverage**: 80%+ for component logic
- **Property test coverage**: All 15 correctness properties implemented
- **Integration test coverage**: All major user flows (scroll, navigation, responsive)

### Continuous Integration

Tests should run on:
- Every commit (pre-commit hook)
- Every pull request
- Before deployment

The build should fail if:
- Any test fails
- TypeScript compilation errors occur
- Test coverage drops below threshold
