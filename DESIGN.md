# Design System: Deisy Mavares | Liderazgo Consciente

## 1. Overview & Creative North Star
**Creative North Star: "The Conscious Catalyst"**

This design system is a bridge between the high-stakes world of corporate strategy and the profound depth of human consciousness. It is designed to feel authoritative yet empathetic—moving away from the sterile, rigid grids of traditional business software toward a "High-End Editorial" experience.

To break the "template" look, we utilize:
- **Intentional Asymmetry:** Off-center typography and staggered image placements to mimic the organic nature of human growth.
- **Tonal Depth:** Replacing harsh lines with soft background shifts and glassmorphism.
- **Sophisticated Scale:** High-contrast typography ratios where large, elegant serifs command attention, supported by clean, hyper-legible sans-serifs for complex data and body text.

---

## 2. Colors: The Palette of Wisdom & Integrity

The palette balances the regal authority of Purple and Gold with the grounding influence of Sage Greens and Deep Leadership Blues.

### Core Tones
- **Primary (`#533a7a`):** Deep Wisdom Purple. Use for primary actions and signature moments.
- **Secondary (`#775a19`):** Refined Gold. Used for accents, highlighting "optimization" and "value."
- **Tertiary (`#2b4969`):** Integrity Blue. Provides a corporate anchor, used for strategic sections.
- **Background (`#f2fcf3`):** Wellness Sage. A soft, off-white green that reduces eye strain and signals a holistic environment.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. Define boundaries through:
- **Background Shifts:** Transitioning from `surface` to `surface-container-low` to signal a new content area.
- **Tonal Nesting:** A `surface-container-lowest` card placed atop a `surface-container` background creates an elegant, physical distinction without the "clutter" of lines.

### Glass & Gradient Rule
To ensure a premium feel:
- **Glassmorphism:** Use `surface` colors at 70% opacity with a `20px` backdrop-blur for floating navigation or overlays.
- **Signature Gradients:** Use subtle linear gradients (e.g., `primary` to `primary_container`) for Hero backgrounds to add "soul" and depth.

---

## 3. Typography: Editorial Authority

The interplay between **Noto Serif** and **Manrope** creates a conversation between "Wisdom" and "Professionalism."

- **Display & Headline (Noto Serif):** Used for large-scale statements. The serif represents the "Wisdom" attribute—traditional, trustworthy, and sophisticated.
  - *Display-lg (3.5rem):* For high-impact hero statements.
- **Title & Body (Manrope):** A clean, modern sans-serif that represents "Optimization." It is efficient, legible, and highly corporate.
  - *Body-lg (1rem):* Optimized for long-form reading on leadership strategies.
- **Label (Manrope Bold):** Used for small metadata or "KPI" indicators to maintain a professional, data-driven feel.

---

## 4. Elevation & Depth: Tonal Layering

We avoid "floating" elements with generic drop shadows. Instead, we use the **Layering Principle.**

- **Surface Tiers:**
  - `surface-container-lowest`: Use for the primary content canvas.
  - `surface-container-high`: Use for elevated interactive cards.
- **Ambient Shadows:** When shadows are required (e.g., for modals), use a 0px 20px 40px spread with 5% opacity, tinted with the `on-surface` color. Avoid pure black shadows; light should feel like it is passing through a holistic space.
- **The Ghost Border Fallback:** If a container requires a border for accessibility, use `outline-variant` at **15% opacity**. It should be felt rather than seen.

---

## 5. Components

### Buttons
- **Primary:** Filled with `primary` color, `on-primary` text. Use `full` roundedness (pill shape) to lean into the "human warmth" attribute.
- **Secondary:** `outline-variant` Ghost Border with `primary` text. No fill.
- **Tertiary:** Text-only with an underline that appears on hover, utilizing the `secondary` (Gold) color.

### Cards & Lists
- **The "No Divider" Rule:** Forbid the use of horizontal rules (`<hr>`). Separate list items using `1.5rem` of vertical white space or alternating backgrounds between `surface` and `surface-container-low`.
- **Content Cards:** Use `xl` (0.75rem) corner radius. Content should be padded generously (min 32px) to provide "breathing room."

### Input Fields
- **Styling:** Soft `surface-container` fills instead of white boxes.
- **States:** On focus, the "Ghost Border" transitions to a 2px `primary` border to signal intent and optimization.

### Chips (Badges)
- **Style:** Small, `full` rounded elements using `secondary_fixed` for a "gold-leaf" highlight effect on key traits or categories.

---

## 6. Do's and Don'ts

### Do
- **Do** use generous whitespace. White space is a tool for "optimization" and mental clarity.
- **Do** overlap elements. Having an image slightly overlap a background container adds a custom, editorial feel.
- **Do** use the `secondary` (Gold) sparingly. It is a highlighter for "value" and "wisdom," not a background color.

### Don't
- **Don't** use 100% black text. Use `on-surface` or `on-background` for a softer, more sophisticated contrast.
- **Don't** use sharp 90-degree corners. Even for "corporate" components, use at least the `md` (0.375rem) radius to maintain "human warmth."
- **Don't** use standard "system" shadows. Always tint shadows with the theme's base colors to maintain the "Holistic" brand attribute.