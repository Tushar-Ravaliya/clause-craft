---
name: ClauseCraft
description: Professional agreements, without starting from a blank page.
colors:
  primary: "#09090b"
  primary-hover: "#27272a"
  background: "#ffffff"
  surface-subtle: "#f4f4f5"
  surface-card: "#ffffff"
  border-subtle: "#e4e4e7"
  text-primary: "#09090b"
  text-secondary: "#52525b"
  text-muted: "#71717a"
  accent-green: "#10b981"
  accent-indigo: "#6366f1"
  accent-amber: "#f59e0b"
  accent-rose: "#e11d48"
typography:
  display:
    fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "#ffffff"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "10px 20px"
---

## Overview

ClauseCraft delivers high-clarity, jurisdiction-aware legal document assembly. The visual identity draws inspiration from precision typography, clean monochrome palettes with purposeful accents (emerald for verified states, indigo for AI assists, amber/rose for advisories), and tactile card surfaces that mimic high-grade stationery and modern legal tech platforms.

## Colors

- **Core Ink (`#09090b`)**: Used for authoritative titles, primary action buttons, and dominant monograms.
- **Pure Paper (`#ffffff`)**: Core page and document card background.
- **Subtle Gray (`#f4f4f5` / `#fafafa`)**: Application chrome, table backdrops, and dot grid patterns.
- **Zinc Borders (`#e4e4e7`)**: Fine 1px framing for cards, input controls, and divider rules.
- **State Accents**:
  - `Emerald (#10b981)`: Completed stepper stages and verified credentials.
  - `Indigo (#6366f1)`: AI clause suggestions and intelligent drafting tips.
  - `Amber / Rose (#f59e0b` / `#e11d48)`: Jurisdiction warnings and legal compliance advisories.

## Typography

Built entirely on the geometric, ultra-clean Geist font family.
- **Display / H1**: 700 weight, tight -0.03em tracking, high-contrast black.
- **Section Headings**: 700 weight, -0.02em tracking, paired with uppercase 11px tracking-widest kicker eyebrows.
- **Body & Controls**: 400-500 weight, 13px to 15px with generous line height for effortless legal readability.

## Layout

- Desktop maximum width constraint of 1280px (`max-w-7xl`).
- Asymmetric 5/7 column split in the Hero section pairing high-converting copy with a live interactive builder card.
- Symmetrical 3-card and 4-column pipelines for Problem, How It Works, and Document Types.
- Connected horizontal workflow chain with directional chevron indicators.

## Elevation & Depth

- Cards utilize subtle hairline borders (`1px solid #e4e4e7`) paired with soft ambient diffusion (`box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05)`).
- Layered interactive builder mockup uses elevated shadow (`shadow-2xl shadow-zinc-200/60`).

## Shapes

- Pill geometries (`rounded-full`) for badges and primary navigation CTAs.
- Squircle rounding (`rounded-xl` and `rounded-2xl`) for content modules and interactive form surfaces.

## Components

- **Navbar**: Sticky backdrop-blurred header with monogram logo, desktop nav, and primary CTA.
- **Interactive Builder**: Live drafting simulator with stepper navigation, milestone editor, and AI recommendation pane.
- **Jurisdiction Inspector**: Dynamic two-column card adapting governing law, clause sets, and advisory warnings per country/region.
- **Document Cards**: Physical-document aesthetic with stylized miniature text lines and quick creation triggers.

## Do's and Don'ts

### Do's
- Pair every technical legal term with plain-English contextual explanations.
- Keep primary action buttons high-contrast black with crisp white typography.
- Use hairline borders and subtle hover lift effects to convey tactile precision.

### Don'ts
- Do not use garish primary colors or heavy neon gradients.
- Do not hide jurisdiction constraints in small print; elevate jurisdiction to a first-class selector.
- Do not use generic placeholder text; provide realistic contract clauses and terms.
