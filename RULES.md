---
theme: Kinetic Terminal
---

# Theme: Kinetic Terminal — Project Rules & Guidelines

## 1. Staged Implementation Protocol

- **Strict Staging:** Development must proceed strictly one stage at a time as outlined in [phases.md](file:///c:/Users/HP/OneDrive/Desktop/AI%20CYBERBOOTCAMP/phases.md).
- **Explicit Confirmation Required:** Do NOT begin implementation or move to the next stage until the user explicitly confirms.
- **No Unapproved Leaps:** Never mix stages (e.g., do not add styles during the structure stage; do not add content during the visual design stage).

---

## 2. Stage-Specific Rules

### Stage 1: Page Structure Only
- Create the section scaffold in the exact order given in [prd.md](file:///c:/Users/HP/OneDrive/Desktop/AI%20CYBERBOOTCAMP/prd.md).
- Use headings and placeholder blocks only.
- **Strictly Prohibited:** No styling, no CSS, no real content, no interactive components.

### Stage 2: Visual Design
- Apply the colors, typography, spacing, and hierarchy specified in [DESIGN.md](file:///c:/Users/HP/OneDrive/Desktop/AI%20CYBERBOOTCAMP/DESIGN.md) to the page structure scaffold.
- **Strictly Prohibited:** Do NOT add real content. Do NOT add interactive JavaScript components.

### Stage 3: Real Content
- Replace the placeholders strictly with the content found in [Profile.pdf](file:///c:/Users/HP/OneDrive/Desktop/AI%20CYBERBOOTCAMP/Profile.pdf).
- **Exclusive Source:** Use ONLY content from [Profile.pdf](file:///c:/Users/HP/OneDrive/Desktop/AI%20CYBERBOOTCAMP/Profile.pdf).
- **Missing Information Policy:** If any section lacks data in [Profile.pdf](file:///c:/Users/HP/OneDrive/Desktop/AI%20CYBERBOOTCAMP/Profile.pdf) (e.g. specific project details, repositories, or descriptions), **leave the section empty** and clearly notify the user what is missing.
- **Strictly Prohibited:** Do NOT fill gaps, do NOT fabricate data, and do NOT write filler / lorem ipsum text.

### Stage 4: Components & Interactivity
- Implement interactive components (filters, navigation toggles, tabs, CTA handlers).
- Maintain responsiveness across mobile and desktop.

### Stage 5: Quality & Polish
- Validate cross-device responsiveness, accessibility contrast, font rendering, and link states.

---

## 3. Theme & Design Consistency
- All outputs must align with the **Kinetic Terminal** theme defined in [DESIGN.md](file:///c:/Users/HP/OneDrive/Desktop/AI%20CYBERBOOTCAMP/DESIGN.md).
- Colors: Deep canvas (`#0B0F17`), container (`#111827`), electric blue primary (`#0066FF`), cyan pulse (`#0EA5E9`), terminal mint (`#22C55E`).
- Fonts: `Space Grotesk` (Headings), `Inter` (Body), `JetBrains Mono` (Badges/Code).
