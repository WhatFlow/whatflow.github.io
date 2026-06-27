---
version: alpha
name: WhatsApp Public Website
description: Design system summary inferred from the current WhatsApp marketing website at whatsapp.com.
colors:
  primary: "#25D366"
  primary-dark: "#075E54"
  primary-mid: "#128C7E"
  accent-blue: "#34B7F1"
  chat-green: "#D9FDD3"
  chat-cream: "#FCF5EB"
  surface: "#FFFFFF"
  surface-warm: "#FCF5EB"
  surface-muted: "#F7F1E8"
  ink: "#111B21"
  ink-soft: "#1C1E21"
  text-muted: "#3B4A54"
  border: "#DAD7D0"
  footer-dark: "#111B21"
  on-primary: "#111B21"
  on-dark: "#FFFFFF"
  on-surface: "#111B21"
typography:
  display-xl:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 80px
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -0.035em
  headline-lg:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: -0.01em
  body-md:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.45
  body-sm:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.45
  label-md:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1
  caption:
    fontFamily: Helvetica Neue, Helvetica, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  section-y: 112px
  page-margin-mobile: 20px
  page-margin-desktop: 40px
  max-width: 1440px
  content-width: 1180px
rounded:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  pill: 9999px
  hero: 40px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    typography: "{typography.label-md}"
    rounded: "{rounded.pill}"
    padding: 16px 28px
    borderColor: "{colors.ink}"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label-md}"
    rounded: "{rounded.pill}"
    padding: 16px 28px
    borderColor: "{colors.ink}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label-md}"
    padding: 8px 12px
  hero-card:
    backgroundColor: "{colors.surface-warm}"
    rounded: "{rounded.hero}"
    padding: 40px
  chat-bubble-incoming:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 12px 16px
  chat-bubble-outgoing:
    backgroundColor: "{colors.chat-green}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 12px 16px
  footer:
    backgroundColor: "{colors.footer-dark}"
    textColor: "{colors.on-dark}"
    padding: 64px 40px
---

# WhatsApp DESIGN.md

## Overview

WhatsApp’s public website design is warm, human, simple, and globally accessible. The brand expression centers on private communication: real people, friendly message bubbles, natural photography, and plainspoken copy. The UI should feel reliable and safe, but never corporate-heavy. It balances a consumer-friendly visual language with enough polish to support business, privacy, security, and app download flows.

The core mood is **private, close, expressive, and effortless**. Designs should use generous negative space, rounded shapes, large human-centered imagery, soft cream surfaces, and WhatsApp green as a confident but approachable action color.

The visual system should prioritize clarity over decoration. Let content, people, and messaging moments carry the emotion. Use iconography and chat UI fragments as supporting storytelling devices, not as dense dashboards.

## Colors

The palette is built around WhatsApp green, deep ink, and a warm cream background. The marketing site does not feel pure white or cold; it uses a soft off-white cream as a signature page foundation.

- **Primary Green (`#25D366`):** The most recognizable WhatsApp brand color. Use for primary calls to action, selected states, small highlights, and brand moments.
- **Primary Dark Green (`#075E54`):** A deeper WhatsApp green for brand anchoring, contrast, and darker UI accents.
- **Primary Mid Green (`#128C7E`):** A secondary brand green useful for gradients, illustrations, and supportive accents.
- **Accent Blue (`#34B7F1`):** A supporting communication accent, best used sparingly in illustrated or chat-adjacent contexts.
- **Warm Cream (`#FCF5EB`):** The dominant page background. It creates a soft, friendly, human tone.
- **Ink (`#111B21`):** Main text and dark surface color. Use for headings, body copy, button borders, and footer backgrounds.
- **Chat Green (`#D9FDD3`):** Outgoing message bubble color. Use only when representing WhatsApp chat UI or lightweight conversational elements.
- **White (`#FFFFFF`):** Use for cards, incoming bubbles, image overlays, and high-contrast content surfaces.

Avoid overusing saturated green across full sections. The site’s look comes from the contrast between warm cream, dark ink, real imagery, and selective green.

## Typography

Typography is simple, rounded by feel, and highly readable. Use a Helvetica-like sans-serif stack: **Helvetica Neue, Helvetica, Arial, sans-serif**. The brand voice is clear and direct; the type should not feel overly technical or ornamental.

- **Display headings:** Very large, lightweight, tightly tracked, and expressive. Use for hero statements such as “Message privately.”
- **Section headlines:** Large, plainspoken, and broken across lines when helpful. Line breaks can add rhythm and friendliness.
- **Body copy:** Medium-to-large body sizes with comfortable line height. Copy should feel conversational and accessible.
- **Navigation and labels:** Simple sentence case labels, regular weight, and enough spacing to feel tappable.

Do not use heavy all-caps labels or overly condensed type. WhatsApp’s tone is personal and approachable, so typography should feel natural and calm.

## Layout

The layout uses spacious editorial sections with strong visual storytelling. Desktop layouts often pair large text blocks with tall device screenshots, chat bubbles, or lifestyle photography. Mobile layouts should stack sections cleanly and preserve generous spacing.

Use a **max-width page container** around 1440px, with desktop side margins around 40px and mobile margins around 20px. Sections should breathe; avoid cramming multiple product messages into one viewport.

Recommended layout patterns:

- Hero section with a large rounded image container and overlaid/adjacent chat UI fragments.
- Alternating two-column sections: text on one side, product or human image on the other.
- Full-width warm cream background for most pages.
- Dark footer with structured link columns and high contrast.
- Large vertical spacing between sections, typically 96–112px on desktop.

The grid should feel fluid rather than rigid. Align content carefully, but allow imagery and chat bubbles to create a playful, organic rhythm.

## Elevation & Depth

Depth is subtle. WhatsApp’s website does not rely on heavy shadows or glass effects. Hierarchy is created through scale, spacing, color contrast, rounded containers, and layered imagery.

Use shadows sparingly and softly, mostly for floating chat bubbles or device mockups. Prefer tonal separation: cream page background, white bubbles/cards, dark footer, green action buttons. When layering chat elements over photography, ensure shadows are soft and realistic.

Avoid dramatic drop shadows, neon glows, glossy gradients, or 3D skeuomorphic surfaces. The design should remain calm and trustworthy.

## Shapes

Shapes are friendly and highly rounded. Buttons use full pill radii. Cards and image containers use large rounded corners. Chat bubbles use rounded rectangles with conversational softness.

- **Buttons:** Fully rounded pills.
- **Hero imagery:** Large rounded rectangles, around 32–40px radius.
- **Cards and content blocks:** Soft rounded corners, usually 16–32px.
- **Chat bubbles:** Rounded corners with a friendly bubble-like silhouette.
- **Avatars and reaction elements:** Circular or pill-based forms.

Sharp corners should be avoided except for layout edges or invisible grid boundaries.

## Components

**Navigation**  
Use a clean top navigation with the WhatsApp logo on the left, feature/product links in the center, and actions like “Log in” and “Download” on the right. Navigation links should be regular weight, sentence case, and calm. Keep spacing generous and avoid dense menus.

**Buttons**  
Primary buttons are green pills with dark text and a dark border. They should feel tactile and friendly. Secondary buttons can be outlined pills or simple text links with arrow affordances. Hover states may invert to dark backgrounds with light text.

**Hero sections**  
Hero sections should combine a large emotional headline, short supporting copy, and a clear download action. Use lifestyle imagery and chat/message fragments to show the product in context. The hero should feel personal rather than like a software dashboard.

**Chat bubbles**  
Incoming bubbles are white; outgoing bubbles use soft chat green. Keep text short, conversational, and natural. Bubbles should float lightly and can overlap imagery, but should not obscure faces or key content.

**Feature sections**  
Feature sections should use short headings, warm body copy, and one strong visual. Each section should communicate one idea: calling, privacy, groups, expression, or business. Avoid mixing too many screenshots in one component.

**Links**  
Use simple “Learn more” links with subtle directional arrows when needed. Links should feel understated; primary conversion belongs to the Download button.

**Footer**  
The footer uses a dark ink background with white text. Structure links into clear columns such as “What we do,” “Who we are,” “Use WhatsApp,” and “Need help?” Keep it functional and high contrast.

## Do's and Don'ts

- Do use warm cream as the default background instead of stark white.
- Do reserve WhatsApp green for primary actions and meaningful brand highlights.
- Do use real human imagery and conversational UI elements to create emotional warmth.
- Do keep copy short, direct, and globally understandable.
- Do use large rounded corners and pill-shaped actions consistently.
- Do create hierarchy with scale, whitespace, and contrast rather than heavy shadows.
- Don’t make the interface look like a dense SaaS dashboard.
- Don’t overuse green as a full-page background unless it has a specific brand purpose.
- Don’t use sharp, corporate, or overly technical visual language.
- Don’t combine too many feature messages in one section.
- Don’t use heavy gradients, glassmorphism, or decorative effects that compete with the core message.
- Don’t reduce chat UI to generic messaging visuals; keep bubbles, reactions, and privacy cues recognizably WhatsApp-like.
