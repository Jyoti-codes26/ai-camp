---
theme: Kinetic Terminal
---

# Theme: Kinetic Terminal — Implementation Phases

## Current Progress & Status Tracker

| Stage | Description | Status | Gate Requirement |
| :--- | :--- | :--- | :--- |
| **Stage 0** | **Setup & Documentation** (Theme headers, PRD, Rules, Phases) | **Completed** | Ready for Stage 1 confirmation |
| **Stage 1** | **Page Structure Only** (Scaffold, Headings & Placeholders) | **Completed** | Scaffold created in index.html |
| **Stage 2** | **Visual Design** (Colours, Typography, Spacing & Hierarchy) | **Completed** | Applied Kinetic Terminal tokens to index.html |
| **Stage 3** | **Real Content** (Strictly from `Profile.pdf`, Missing data reported) | **Completed** | Integrated profile data; reported missing projects |
| **Stage 4** | **Components & Interactivity** (Filters, Responsive Navigation) | **Pending Approval** | Awaiting user confirmation to begin |
| **Stage 5** | **Polish & Responsive Verification** (Mobile/Desktop check, Links) | **Queued** | Final delivery validation |

---

## Stage 1: Page Structure Only

- **Objective:** Create the semantic HTML scaffold following the exact section order specified in [prd.md](file:///c:/Users/HP/OneDrive/Desktop/AI%20CYBERBOOTCAMP/prd.md).
- **Exact Section Order to Scaffold:**
  1. `<header>` / `<nav>`: Header & Navigation Bar
  2. `<section id="hero">`: Hero / Overview Block
  3. `<section id="about">`: About / Profile Summary Block
  4. `<section id="skills">`: Skills Block
  5. `<section id="projects">`: Projects Showcase Block
  6. `<section id="education">`: Education Block
  7. `<section id="certifications">`: Certifications Block
  8. `<section id="contact">`: Contact Block
  9. `<footer>`: Engineering Footnote & Footer Block
- **Strict Constraints:**
  - Headings (`<h1>` to `<h3>`) and unstyled placeholder blocks only.
  - **NO CSS styling.**
  - **NO real content.**
  - **NO interactive components or scripts.**
- **Gate:** STOP and wait for explicit confirmation from the user before proceeding to Stage 2.

---

## Stage 2: Visual Design

- **Objective:** Apply visual design tokens and hierarchy from [DESIGN.md](file:///c:/Users/HP/OneDrive/Desktop/AI%20CYBERBOOTCAMP/DESIGN.md) (Theme: Kinetic Terminal) to the unstyled scaffold created in Stage 1.
- **Design Tokens to Apply:**
  - **Colors:**
    - Background canvas: `#0B0F17` / `#0F131C`
    - Surface containers: `#111827`, `#181C24`, `#1E293B`
    - Accents: Electric Blue `#0066FF`, Cyan Pulse `#0EA5E9`, Terminal Mint `#22C55E`
    - Text: High contrast `#F8FAFC`, Muted `#94A3B8`, Hairline borders `#334155`
  - **Typography:**
    - Display & Headlines: `Space Grotesk` (weights 600, 700)
    - Body: `Inter` (weights 400, 500)
    - Code & Badges: `JetBrains Mono` (weights 500, 600)
  - **Spacing & Layout:**
    - Max container width: `72rem` (1152px)
    - Desktop 12-column grid, tablet 8-column, mobile 4-column
    - Responsive gutters (`space-md`, `space-lg`, `space-xl`, `space-3xl`)
  - **Elevation & Shapes:**
    - Hairline borders (1px `#334155` at 30–40% opacity)
    - Semi-sharp radius (`0.25rem` to `0.5rem`)
    - Glass-brutalist card backdrops (`backdrop-blur`)
- **Strict Constraints:**
  - Do **NOT** add real content. Placeholders must remain placeholder text / wireframe blocks.
  - Do **NOT** add interactive JavaScript components.
- **Gate:** STOP and wait for explicit confirmation from the user before proceeding to Stage 3.

---

## Stage 3: Real Content Integration

- **Objective:** Populate the visually designed scaffold with real profile data extracted strictly from [Profile.pdf](file:///c:/Users/HP/OneDrive/Desktop/AI%20CYBERBOOTCAMP/Profile.pdf).
- **Profile Data Mapping:**
  - **Name:** Jyotirmayee Mahapatra
  - **Headline / Title:** Student at GIET University Gunupur
  - **Location:** Gunupur, Odisha, India
  - **Contact Details:** Email (`jio1jyoti@gmail.com`), LinkedIn (`www.linkedin.com/in/jyotirmayee-mahapatra-79577937b`)
  - **Top Skills:** Cybersecurity, Communication, C (Programming Language)
  - **Certifications:**
    - Cybersecurity Virtual Internship
    - Getting Started with Artificial Intelligence
  - **Education:**
    - GIET University Gunupur (July 2025 - March 2029)
    - GIET University Gunupur CSE Ai ML (July 2025)
    - GIET University Gunupur (2025)
    - GIET University Gunupur (2025)
- **Strict Missing Data Protocol:**
  - **Missing Items:** [Profile.pdf](file:///c:/Users/HP/OneDrive/Desktop/AI%20CYBERBOOTCAMP/Profile.pdf) contains **NO projects**, project descriptions, or code repository URLs.
  - **Rule:** The Projects section will be left completely empty.
  - **Rule:** The user will be notified immediately of all missing data.
  - **Strictly Prohibited:** No fabricated data, no filler text, no lorem ipsum.
- **Gate:** STOP and wait for explicit confirmation from the user before proceeding to Stage 4.

---

## Stage 4: Components & Interactivity

- **Objective:** Implement interactive components and UI behaviors.
- **Scope:**
  - Category filter pills (All, AI & ML, Cybersecurity, Software Dev)
  - Active telemetry indicators and live status indicators
  - Mobile bottom navigation bar and desktop top navigation bar
  - Interactive CTAs, copy-to-clipboard, or link anchors
- **Gate:** STOP and wait for explicit confirmation from the user before proceeding to Stage 5.

---

## Stage 5: Polish & Quality Verification

- **Objective:** Audit and finalize the portfolio experience across devices.
- **Scope:**
  - Verify layout responsiveness across small mobile screens (< 768px), tablets, and desktops (>= 1024px)
  - Verify color contrast and accessibility
  - Validate all external links (LinkedIn, email mailto)
  - Optimize page load and asset rendering
