---
name: SignalShelf Mini
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45474c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#545f73'
  primary: '#091426'
  on-primary: '#ffffff'
  primary-container: '#1e293b'
  on-primary-container: '#8590a6'
  inverse-primary: '#bcc7de'
  secondary: '#4648d4'
  on-secondary: '#ffffff'
  secondary-container: '#6063ee'
  on-secondary-container: '#fffbff'
  tertiary: '#1e1200'
  on-tertiary: '#ffffff'
  tertiary-container: '#35260c'
  on-tertiary-container: '#a38c6a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e3fb'
  primary-fixed-dim: '#bcc7de'
  on-primary-fixed: '#111c2d'
  on-primary-fixed-variant: '#3c475a'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#fadfb8'
  tertiary-fixed-dim: '#ddc39d'
  on-tertiary-fixed: '#271902'
  on-tertiary-fixed-variant: '#564427'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
  mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  gutter: 12px
  margin: 16px
---

## Brand & Style

The design system is engineered for high-density operational environments where clarity and speed are paramount. The brand personality is **utilitarian, precise, and stoic**, functioning as a high-fidelity tool rather than a marketing surface. It targets power users who require a high information-density interface that remains calm under heavy data loads.

The visual style is **Corporate / Modern** with a strong emphasis on **Functional Minimalism**. It avoids decorative elements, instead using subtle tonal shifts and precise geometry to establish hierarchy. The interface should feel like a reliable instrument—tactile yet unobtrusive—favoring "data-first" layouts over "aesthetic-first" white space.

## Colors

The palette is anchored by **Deep Navy (Slate 900)** to provide a sense of authority and stability. The system utilizes a "Signal" logic:
- **Primary:** Used for core navigation and primary actions to anchor the user's focus.
- **Surface & Neutrals:** A range of Slate and Cool Greys define the structure. `#F8FAFC` is the standard background for secondary containers to provide subtle contrast against the white primary surface.
- **Semantic Signals:** Emerald, Amber, and Crimson are used sparingly but with high saturation to ensure status changes are immediately recognizable without overwhelming the user.

## Typography

This design system uses **Inter** for its exceptional legibility at small sizes and its neutral, systematic character. To support the high-density requirement, the base body size is set to **13px**, allowing for more rows of data and tighter control groups. 

For technical strings or ID values, **JetBrains Mono** is utilized to ensure character distinction (e.g., distinguishing between '0' and 'O'). All labels for data points should use the uppercase `label-md` style to differentiate metadata from content.

## Layout & Spacing

The layout follows a strict **4px/8px incremental grid**. This "Mini" system prioritizes vertical density, utilizing narrow gutters to maximize the "at-a-glance" data capacity.

- **Grid Model:** A 12-column fluid grid for main dashboards, switching to fixed-width detail drawers (320px - 480px) for inspecting individual records.
- **Sectioning:** Use `1px` solid borders in Slate-200 rather than large gaps to define sections.
- **Responsive Behavior:** 
  - **Desktop:** Multi-pane view with persistent sidebars and secondary drawers.
  - **Tablet:** Collapsed sidebar (icon only), drawers become full-screen overlays.
  - **Mobile:** Single column stack; table views transition to condensed card lists.

## Elevation & Depth

This system avoids heavy shadows to maintain a clean, flat aesthetic. Depth is communicated through **Tonal Layering** and **Low-contrast Outlines**:

- **Level 0 (Base):** `#F8FAFC` for the main application background.
- **Level 1 (Surface):** `#FFFFFF` for cards, tables, and primary content areas, defined by a `1px` border in `#E2E8F0`.
- **Level 2 (Overlays):** Used for menus and tooltips. A very soft, diffused shadow (`0px 4px 6px -1px rgba(0,0,0,0.05)`) is used only when an element physically overlaps another to provide a necessary "lift" for focus.
- **Drawers:** Slide-in drawers use a backdrop dim (10% opacity) to focus the user on the operational task at hand.

## Shapes

The shape language is **Soft**, using a **4px (0.25rem)** standard radius. This provides just enough softness to feel modern and professional without sacrificing the precision of a grid-based tool. Larger components like cards or drawers use the `rounded-lg` (8px) token, while small elements like checkboxes and status badges strictly adhere to the 4px base.

## Components

- **Buttons:** Use a fixed height of `32px` for standard and `28px` for compact. Primary buttons use a subtle gradient or solid Deep Navy. Secondary buttons use a Slate-100 background with Slate-900 text.
- **Table Rows:** Condensed height of `36px`. Use zebra-striping (Slate-50) for readability in data-heavy views. Hover states should trigger a subtle `#F1F5F9` background change.
- **Status Badges:** Small, non-pill shapes with a light tinted background (10% opacity of the semantic color) and high-contrast text. 
- **Input Fields:** `1px` border with a `#F8FAFC` fill. Focus state is a `2px` ring in Primary/Indigo.
- **Detail Drawers:** Right-aligned containers for deep-dives. They should contain "Key-Value" pairs using the `label-md` and `body-sm` typography styles.
- **Filter Selects:** Compact, borderless triggers that open small, focused dropdowns for quick data slicing.