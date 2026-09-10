---
name: Kinetic Terminal
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#c2c6d8'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#8c90a1'
  outline-variant: '#424656'
  surface-tint: '#b3c5ff'
  primary: '#b3c5ff'
  on-primary: '#002b75'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#0054d6'
  secondary: '#89ceff'
  on-secondary: '#00344d'
  secondary-container: '#00a2e6'
  on-secondary-container: '#00344e'
  tertiary: '#4ae176'
  on-tertiary: '#003915'
  tertiary-container: '#00843a'
  on-tertiary-container: '#e7ffe5'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  space-4xl: 6rem
  gutter-mobile: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  max-width: 72rem
---

# Theme: Kinetic Terminal

## Brand & Style

This design system expresses a high-caliber technical narrative tailored for an emerging software engineer, AI practitioner, and cybersecurity researcher. It avoids generic tech tropes and exaggerated vaporwave aesthetics, opting instead for a synthesis of modern minimalism and precision-engineered glass-brutalist interfaces. 

The aesthetic centers on clarity, deliberate whitespace, and disciplined tactile interactions. Deep slate-charcoal surfaces anchor the canvas, allowing electric blue accents to slice through key focal areas like laser telemetry. The overall feeling evokes a mission control station or an elite developer tooling environment: calm under pressure, deeply analytical, and unapologetically modern. 

The intended audience includes hiring managers, engineering leaders, research advisors, and fellow developers who value architectural rigor over decorative noise. Interactions balance lightweight micro-feedback with generous breathing room, creating an airy, confident, and scholarly presentation of code, projects, and systems thinking.

## Colors

The foundation is built upon deep, blue-cast charcoal neutrals that replace muddy blacks with atmospheric depth. The color hierarchy provides clean, accessible contrast levels while preserving luminous accents for interactive and technical highlights.

- **Background & Base (`#0B0F17`):** The primary canvas surface. Dense, light-absorbing, and quiet.
- **Surface Elevation 1 (`#111827`):** Container background for structural cards and panels.
- **Surface Elevation 2 (`#1E293B`):** Elevated overlays, modals, and hover states.
- **Primary Electric Blue (`#0066FF`):** Reserved for high-priority calls-to-action, active navigational anchors, and vital state indicators.
- **Secondary Cyan Pulse (`#0EA5E9`):** Represents system diagnostics, live deployment badges, AI infrastructure, and telemetry markers.
- **Tertiary Terminal Mint (`#22C55E`):** Used exclusively for system status, online availability, and verified git commit timestamps.
- **Text & Grayscale:**
  - **High Contrast (`#F8FAFC`):** Display headers, key metrics, and primary body text.
  - **Muted Contrast (`#94A3B8`):** Secondary meta-information, dates, labels, and descriptions.
  - **Subtle Outline (`#334155` at 40% opacity):** Hairline layout boundaries and ghost borders.

## Typography

The typographic hierarchy establishes distinct roles across three complementary typefaces:

- **Headlines (`Space Grotesk`):** Delivers a technical, sharp, and modern presence. Its geometric construction reinforces software architecture and algorithmic thinking without becoming illegible or overly futuristic.
- **Body Text (`Inter`):** Selected for its neutral neutrality and legibility across long-form case studies, project narratives, and technical explanations.
- **Monospaced Accents (`JetBrains Mono`):** Deployed for structural metadata, git hashes, technology tags, code snippets, execution metrics, and date ranges.

Letter spacing is intentionally tightened on large display headers to maintain optical weight, while monospaced labels receive expanded tracking for immediate identification in compact UI elements.

## Layout & Spacing

This design system uses a centered, restrained 12-column grid system capped at a maximum width of `72rem` (1152px), creating a focused editorial container with abundant exterior margins. 

The rhythm is intentionally airy, rejecting claustrophobic dashboards in favor of spacious project walk-throughs:
- **Desktop (>= 1024px):** 12 columns with 32px gutters and 64px section padding. Complex projects span 8 columns, while project meta/timelines occupy a 4-column rail.
- **Tablet (768px - 1023px):** 8 columns with 24px gutters and 48px section padding. Content collapses into balanced half-and-half or full-width layouts.
- **Mobile (< 768px):** 4 columns with 16px gutters and 24px section margins. All grids collapse to a single vertical column with strictly enforced horizontal margins.

Section-to-section flow relies on generous vertical intervals (`space-3xl` to `space-4xl`), giving each case study and skill module room to stand on its own merits.

## Elevation & Depth

Depth is established through low-contrast translucent overlays, micro-borders, and targeted electric glows rather than heavy drop shadows.

- **Base Canvas:** The raw background (`#0B0F17`) acts as the anchor floor.
- **Card Containers:** Backed by `#111827` at 70% opacity with a `backdrop-blur(12px)` filter, creating subtle separation from background ambient glows.
- **Hairline Outlines:** Containers feature a crisp 1px solid border colored `#334155` at 30% opacity. 
- **Active State Glow:** On hover or focus, cards and interactive targets transition their border to `#0066FF` at 60% opacity, paired with an ambient outer glow of `0 0 24px rgba(0, 102, 255, 0.15)`.
- **Modals and Flyouts:** Surfaces rise to `#1E293B` with a sharp 1px border (`#0EA5E9` at 40%) and a directional drop shadow: `0 20px 40px -15px rgba(0, 0, 0, 0.8)`.

## Shapes

The design system employs a refined, semi-sharp corner radius (Level 1) to convey precision, mechanical discipline, and structural integrity. 

- Standard interactive controls, inline badges, and code snippets use an exact corner radius of `0.25rem` (4px).
- Structural containers, portfolio project cards, and code preview terminals scale to `0.5rem` (8px).
- High-level modal sheets and hero feature boxes cap at `0.75rem` (12px).
- Status indicator pills and circular avatar frames are set to `9999px` full radius.

This restrained approach eliminates round, overly playful forms, ensuring the system feels technical and purposeful.

## Components

### Primary and Secondary Buttons
- **Primary Action:** Solid electric blue background (`#0066FF`) with high-contrast text (`#F8FAFC`). Typography set to `body-sm` bold. Height: 40px with `space-lg` horizontal padding. Subtle inset top highlight (`1px solid rgba(255, 255, 255, 0.2)`). Hover effect: Brightness increase to `#2563EB` and an ambient glow of `0 0 16px rgba(0, 102, 255, 0.4)`.
- **Secondary / Ghost Action:** Translucent dark background (`rgba(17, 24, 39, 0.6)`) with a hairline border (`rgba(51, 65, 85, 0.6)`). Hover effect: Border illuminates to electric blue with crisp white text.

### Badges & Technical Chips
- Constructed with `JetBrains Mono` at `label-badge`. Height: 24px.
- Subtle background tint (`rgba(14, 165, 233, 0.08)`) with a matching border (`rgba(14, 165, 233, 0.25)`).
- Prefix icon or status dot: 6px solid circle (e.g., `#22C55E` for live status, `#0EA5E9` for AI/ML frameworks).

### Project Showcase Cards
- Background: `#111827` at 70% opacity with a 1px border in `#334155` (30% opacity).
- Inner layout: Vertical stack featuring a 16:9 contextual preview or live terminal embed, followed by an airy padding area (`space-xl`).
- Displays a prominent title in `headline-sm`, a concise problem-solution summary in `body-sm`, an array of technical tags, and an external repository or live demo link at the bottom.

### Terminal & Code Blocks
- Emulates a minimalist CLI. Header bar contains three subtle status dots (6px) and an active directory breadcrumb rendered in `label-code`.
- Monospaced code surfaces feature full syntax illumination with electric blue parameters, cyan function declarations, and muted charcoal line numbers.

### Input Fields & Search Bars
- Background: `#0B0F17` with a 1px border in `#334155`.
- Typographic style: `body-md` in `#F8FAFC`.
- Focus state: Border transitions to `#0066FF` with a gentle `0 0 0 3px rgba(0, 102, 255, 0.2)` glow ring. No heavy default browser outlines.

### Learning Logs & Timeline Feeds
- Left-aligned continuous vertical hairline (`1px solid #1E293B`).
- Milestones feature an offset node with a hollow electric blue ring (`#0066FF`), displaying the timestamp in `label-code` and the achievement description in `body-md`.