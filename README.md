# HostFlow AI - Landing Page

A high-converting, professional landing page for hotel lobby chatbot built with Next.js 14, Tailwind CSS, and Framer Motion.

## Design Theme: Bold & Dynamic

- Vibrant orange/yellow color palette conveying warmth and energy
- Extensive animations and interactive elements
- Floating particles and icons
- Glassmorphism effects with translucent cards
- Smooth scroll animations and hover effects
- Premium, modern aesthetic

### Color Palette
- **Cream**: #FEF3E2 (Soft Warm Cream)
- **Yellow**: #FAB12F (Golden Yellow)
- **Orange**: #FA812F (Vibrant Orange)
- **Red**: #DD0303 (Bold Accent Red)

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **TypeScript** (Type safety)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section with animated chat
│   ├── Features.tsx     # Bento grid feature showcase
│   ├── Comparison.tsx   # Before/After comparison
│   ├── Pricing.tsx      # Pricing cards
│   └── Footer.tsx       # Footer with final CTA
└── package.json
```

## Features

- **Hero Section**: Full viewport height with animated chat demo
- **Bento Grid**: Responsive 3x2 feature showcase
- **Comparison Marquee**: Before/After visual comparison
- **Pricing**: Two-card layout with launch offer highlight
- **Scroll Animations**: Smooth fade-up effects throughout
- **Fully Responsive**: Mobile-first design

## Build for Production

```bash
npm run build
npm start
```

## Customization

All colors, gradients, and content can be easily customized in the component files. The design system uses Tailwind's utility classes for rapid iteration.
