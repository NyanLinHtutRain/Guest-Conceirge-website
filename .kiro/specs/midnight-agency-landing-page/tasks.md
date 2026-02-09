# Implementation Plan: Midnight Agency Landing Page

## Overview

This implementation plan breaks down the Midnight Agency landing page into discrete, incremental coding tasks. Each task builds on previous work, starting with the foundation (design tokens and core components) and progressing through page sections, testing, and final integration. The approach ensures that functionality is validated early and often through both unit tests and property-based tests.

## Tasks

- [ ] 1. Set up project structure and dependencies
  - Initialize Next.js 14+ project with TypeScript and App Router
  - Install and configure Tailwind CSS 3+
  - Install Framer Motion 10+ for animations
  - Install testing dependencies (Jest, React Testing Library, fast-check)
  - Configure TypeScript with strict mode
  - Set up Tailwind config with custom colors and utilities
  - _Requirements: 8.6, 8.7, 10.1_

- [ ] 2. Create design system foundation
  - [ ] 2.1 Implement design tokens module
    - Create `lib/design-tokens.ts` with color, spacing, and effects constants
    - Export typed design token objects for colors, spacing, and effects
    - _Requirements: 1.1, 1.2, 1.3, 1.4_
  
  - [ ]* 2.2 Write unit tests for design tokens
    - Test that all required color tokens exist (backgrounds, borders, text, gradients)
    - Test that spacing and effects tokens are defined
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [ ] 3. Implement core UI components
  - [ ] 3.1 Create Button component
    - Implement `components/ui/Button.tsx` with variant and size props
    - Add Framer Motion whileHover and whileTap animations
    - Support primary, secondary, and ghost variants
    - Support sm, md, lg sizes
    - _Requirements: 6.4, 8.1, 8.6, 8.7_
  
  - [ ]* 3.2 Write unit tests for Button component
    - Test rendering with different variants
    - Test rendering with different sizes
    - Test onClick handler
    - _Requirements: 8.1_
  
  - [ ] 3.3 Create Card component
    - Implement `components/ui/Card.tsx` with glass and hover props
    - Add scroll reveal animation using Framer Motion
    - Apply rounded-3xl border radius
    - Support glassmorphism effect when glass prop is true
    - _Requirements: 2.7, 3.2, 3.3, 5.3, 8.2, 8.6, 8.7_
  
  - [ ]* 3.4 Write property test for Card component
    - **Property 2: Card Border Radius Consistency**
    - **Property 3: Glassmorphism Effect Completeness**
    - **Validates: Requirements 2.7, 3.2, 3.3**
  
  - [ ] 3.5 Create Section component
    - Implement `components/ui/Section.tsx` with consistent spacing
    - Apply py-24 md:py-32 spacing classes
    - Include container with max-width and responsive padding
    - _Requirements: 2.5, 7.6, 8.4, 8.6, 8.7_
  
  - [ ]* 3.6 Write property test for Section component
    - **Property 1: Section Spacing Consistency**
    - **Validates: Requirements 2.5**

- [ ] 4. Checkpoint - Ensure core components render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Implement specialized UI components
  - [ ] 5.1 Create GradientText component
    - Implement `components/ui/GradientText.tsx` with gradient text effect
    - Apply bg-gradient-to-b from-white to-slate-400 with bg-clip-text
    - _Requirements: 1.4, 4.5, 8.6, 8.7_
  
  - [ ] 5.2 Create FeatureCard component
    - Implement `components/ui/FeatureCard.tsx` extending Card
    - Accept icon, title, description, and accent props
    - Support success (emerald) and magic (purple) accent colors
    - Apply hover effects (border glow and background transition)
    - _Requirements: 6.1, 6.2, 8.3, 8.6, 8.7, 9.5, 9.6_
  
  - [ ]* 5.3 Write unit tests for FeatureCard component
    - Test rendering with different accent colors
    - Test that hover classes are present
    - _Requirements: 6.1, 6.2, 8.3_
  
  - [ ] 5.4 Create Typer component
    - Implement `components/ui/Typer.tsx` with typing animation
    - Accept messages array and timing configuration props
    - Implement typing, pausing, and deleting animation logic
    - Style as terminal window with colored dots
    - Add blinking cursor using Framer Motion
    - _Requirements: 4.2, 8.5, 8.6, 8.7_
  
  - [ ]* 5.5 Write unit tests for Typer component
    - Test component renders with messages prop
    - Test terminal window styling is applied
    - _Requirements: 4.2, 8.5_

- [ ] 6. Implement typography system
  - [ ] 6.1 Create TypeScript types for typography
    - Define types in `types/design-tokens.ts`
    - _Requirements: 8.6_
  
  - [ ]* 6.2 Write property tests for typography system
    - **Property 10: Heading Color Consistency**
    - **Property 11: Body Text Color Consistency**
    - **Property 12: Typography Size Hierarchy**
    - **Property 13: Typography Readability**
    - **Property 14: Accent Color Usage**
    - **Validates: Requirements 9.1, 9.2, 9.3, 9.4, 9.5, 9.6**

- [ ] 7. Implement Hero section
  - [ ] 7.1 Create HeroSection component
    - Implement `components/sections/HeroSection.tsx`
    - Include headline with GradientText for emphasis
    - Include subheadline with text-slate-400
    - Include Typer component with demo messages
    - Include primary and secondary CTA buttons
    - Use two-column grid layout (responsive)
    - Add Framer Motion initial animations
    - _Requirements: 2.1, 4.1, 4.2, 4.4, 4.5, 7.1, 8.6, 8.7, 9.1, 9.2_
  
  - [ ]* 7.2 Write unit tests for Hero section
    - Test that headline is rendered
    - Test that Typer component is included
    - Test that CTA buttons are present
    - Test that GradientText is used
    - _Requirements: 4.1, 4.2, 4.4, 4.5_

- [ ] 8. Implement Features section
  - [ ] 8.1 Create FeaturesSection component
    - Implement `components/sections/FeaturesSection.tsx`
    - Include section heading with GradientText
    - Create bento grid layout with md:grid-cols-2 configuration
    - Map over features array to render FeatureCard components
    - Include placeholder icon components
    - _Requirements: 2.2, 2.6, 7.2, 7.3, 8.6, 8.7_
  
  - [ ]* 8.2 Write unit tests for Features section
    - Test that section heading is rendered
    - Test that grid layout classes are present
    - Test that FeatureCard components are rendered
    - _Requirements: 2.2, 2.6_
  
  - [ ]* 8.3 Write property test for responsive grid
    - **Property 5: Mobile-First Responsive Design**
    - **Validates: Requirements 7.1, 7.2, 7.3, 7.4**

- [ ] 9. Implement Pricing section
  - [ ] 9.1 Create PricingSection component
    - Implement `components/sections/PricingSection.tsx`
    - Include section heading with GradientText
    - Create three-column grid layout (md:grid-cols-3)
    - Map over pricing plans array to render Card components
    - Highlight featured plan with emerald border
    - Include feature lists with checkmarks
    - _Requirements: 2.3, 7.2, 7.3, 7.4, 8.6, 8.7_
  
  - [ ]* 9.2 Write unit tests for Pricing section
    - Test that three pricing plans are rendered
    - Test that featured plan has special border styling
    - Test that feature lists are rendered
    - _Requirements: 2.3_

- [ ] 10. Implement CTA section
  - [ ] 10.1 Create CTASection component
    - Implement `components/sections/CTASection.tsx`
    - Use Card component with glass effect
    - Include headline with GradientText
    - Include subheadline with text-slate-400
    - Include primary and ghost CTA buttons
    - Center all content
    - _Requirements: 2.4, 3.1, 8.6, 8.7_
  
  - [ ]* 10.2 Write unit tests for CTA section
    - Test that glassmorphism effect is applied
    - Test that CTA buttons are present
    - _Requirements: 2.4, 3.1_

- [ ] 11. Checkpoint - Ensure all sections render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 12. Create main landing page
  - [ ] 12.1 Implement main page component
    - Create `app/page.tsx` with all sections
    - Import and compose HeroSection, FeaturesSection, PricingSection, CTASection
    - Apply bg-slate-950 background to page
    - Ensure proper section ordering
    - _Requirements: 1.1, 2.1, 2.2, 2.3, 2.4, 10.1_
  
  - [ ]* 12.2 Write integration tests for full page
    - Test that all sections are present in correct order
    - Test that page renders without errors
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [ ] 13. Implement responsive design properties
  - [ ]* 13.1 Write property tests for responsive design
    - **Property 6: Typography Responsive Scaling**
    - **Property 7: Spacing Responsive Adjustment**
    - **Validates: Requirements 7.5, 7.6**

- [ ] 14. Implement styling consistency properties
  - [ ]* 14.1 Write property tests for styling consistency
    - **Property 4: Interactive Element Transitions**
    - **Property 8: TypeScript Type Safety**
    - **Property 9: Tailwind CSS Styling Consistency**
    - **Validates: Requirements 6.3, 6.4, 8.6, 8.7**

- [ ] 15. Implement static content validation
  - [ ]* 15.1 Write property test for static content
    - **Property 15: Static Content Only**
    - **Validates: Requirements 10.2, 10.3, 10.5**

- [ ] 16. Configure static export
  - [ ] 16.1 Configure Next.js for static export
    - Add `output: 'export'` to next.config.js
    - Verify build produces static files
    - Test that build completes without errors
    - _Requirements: 10.1, 10.4_
  
  - [ ]* 16.2 Write build validation test
    - Test that static HTML files are generated
    - Test that no server-side code is included
    - _Requirements: 10.4_

- [ ] 17. Final checkpoint - Run all tests and verify build
  - Run full test suite (unit + property tests)
  - Run production build
  - Verify all correctness properties pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property tests validate universal correctness properties with 100+ iterations
- Unit tests validate specific examples and component behavior
- Checkpoints ensure incremental validation throughout development
- The implementation follows mobile-first responsive design principles
- All components use TypeScript for type safety and Tailwind CSS for styling
