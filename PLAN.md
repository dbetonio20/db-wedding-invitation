# 💍 Dominique & Bianca — Wedding Invitation Website Plan

---

## 1. Project Overview

A responsive, single-page wedding invitation website for **Dominique Betonio** and **Bianca Alegado**. The site serves as both a digital invitation and a prenup photo gallery, designed with a romantic, elegant, and minimal aesthetic.

- **Tech Stack:** HTML5, CSS3 (custom properties + media queries), Vanilla JavaScript
- **Approach:** Mobile-first, progressively enhanced for tablet and desktop
- **Hosting-ready:** Static files — deployable to GitHub Pages, Netlify, or Vercel

---

## 2. Site Map & Section Breakdown

The website is a single scrollable page with a fixed navigation bar. Sections appear in this order:

| #  | Section            | Purpose                                                     |
|----|--------------------|-------------------------------------------------------------|
| 1  | **Navigation**     | Sticky/fixed top nav with smooth-scroll anchor links        |
| 2  | **Hero**           | Full-viewport intro with couple names, date & scroll cue    |
| 3  | **Our Story**      | Brief narrative about the couple with a timeline feel       |
| 4  | **Countdown**      | Live countdown timer to January 25, 2027                    |
| 5  | **Invitation**     | Formal invitation card with all wedding details             |
| 6  | **Gallery**        | Prenup photo grid with lightbox/fullscreen preview          |
| 7  | **Venue**          | Google Maps embed + address & directions                    |
| 8  | **RSVP**           | Interactive RSVP form                                       |
| 9  | **Footer**         | Closing message, social links, copyright                    |

---

## 3. Detailed Section Design

### 3.1 Navigation

```
┌──────────────────────────────────────────────────────┐
│  D & B     Our Story  Gallery  Details  RSVP         │
└──────────────────────────────────────────────────────┘
```

- **Desktop:** Horizontal link bar, fixed at top, semi-transparent background that becomes solid on scroll.
- **Mobile:** Hamburger icon → slide-in overlay menu with full-screen links.
- Active section highlighted via Intersection Observer.
- Smooth scroll behavior on all anchor links.

---

### 3.2 Hero Section

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│              ✦  We're Getting Married  ✦             │
│                                                      │
│               Dominique  &  Bianca                   │
│                                                      │
│              January 25, 2027 · Cebu                 │
│                                                      │
│                    ↓ Scroll                           │
└──────────────────────────────────────────────────────┘
```

- Full viewport height (`100dvh`).
- Background: soft gradient overlay on top of a blurred prenup hero image.
- Couple names in a large serif display font.
- Subtle fade-in entrance animation on load.
- Animated scroll-down indicator (bouncing chevron).
- Optional: floating petal / particle animation (lightweight canvas or CSS-only).

---

### 3.3 Our Story

```
┌──────────────────────────────────────────────────────┐
│                    Our Story                         │
│                                                      │
│  ○── 2019 ── First met at...                         │
│  │                                                   │
│  ○── 2021 ── Started dating...                       │
│  │                                                   │
│  ○── 2025 ── The proposal...                         │
│  │                                                   │
│  ♥── 2027 ── The wedding!                            │
└──────────────────────────────────────────────────────┘
```

- Vertical timeline layout (centered on desktop, left-aligned on mobile).
- Each milestone has a date badge, short text, and optional small photo.
- Entries animate in on scroll (fade-up with stagger).
- Placeholder content — couple can fill in their real story later.

---

### 3.4 Countdown Timer

```
┌──────────────────────────────────────────────────────┐
│              Counting Down to Forever                │
│                                                      │
│        ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐              │
│        │ 350 │ │  06 │ │  42 │ │  18 │              │
│        │Days │ │Hours│ │Mins │ │Secs │              │
│        └─────┘ └─────┘ └─────┘ └─────┘              │
└──────────────────────────────────────────────────────┘
```

- Four card-style counters: Days, Hours, Minutes, Seconds.
- Updates every second via `setInterval`.
- Cards have a subtle flip or fade transition on digit change.
- After the wedding date, displays a celebratory message instead.

---

### 3.5 Invitation Details

```
┌──────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────┐    │
│  │                                              │    │
│  │     Together with their families,            │    │
│  │                                              │    │
│  │       Dominique Betonio                      │    │
│  │              &                               │    │
│  │        Bianca Alegado                         │    │
│  │                                              │    │
│  │   request the pleasure of your company       │    │
│  │       at the celebration of their            │    │
│  │              marriage                        │    │
│  │                                              │    │
│  │   📅  January 25, 2027                       │    │
│  │   🕓  4:00 PM                                │    │
│  │   📍  Chateau de Busay, Cebu                 │    │
│  │                                              │    │
│  │         [ RSVP Now ]                         │    │
│  │                                              │    │
│  └──────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────┘
```

- Styled as a formal invitation card (cream/ivory background, decorative border).
- Centered text with elegant serif typography.
- Icon + text pairs for date, time, venue.
- CTA button scrolls to RSVP section.
- Optional: dress code or reception details below.

---

### 3.6 Prenup Photo Gallery

```
┌──────────────────────────────────────────────────────┐
│                    Our Moments                       │
│                                                      │
│   ┌────────┐  ┌────────┐  ┌────────┐                │
│   │  img1  │  │  img2  │  │  img3  │                │
│   └────────┘  └────────┘  └────────┘                │
│   ┌─────────────┐  ┌─────────────┐                   │
│   │    img4     │  │    img5     │                   │
│   └─────────────┘  └─────────────┘                   │
│   ┌────────┐  ┌────────┐  ┌────────┐                │
│   │  img6  │  │  img7  │  │  img8  │                │
│   └────────┘  └────────┘  └────────┘                │
└──────────────────────────────────────────────────────┘
```

- **Desktop:** Masonry-style CSS grid (3 columns, varying row spans).
- **Tablet:** 2-column grid.
- **Mobile:** Single column, full-width cards.
- Click/tap any photo → fullscreen lightbox overlay:
  - Dark backdrop with centered image.
  - Left/right arrows for navigation.
  - Close button (× or tap outside).
  - Swipe gesture support on mobile (via touch events).
  - Keyboard navigation (← → Esc).
- Images lazy-loaded with `loading="lazy"` and `decoding="async"`.
- Placeholder shimmer effect while images load.
- Photos use `<picture>` + `srcset` for responsive image serving.

---

### 3.7 Venue — Google Maps

```
┌──────────────────────────────────────────────────────┐
│                  The Venue                           │
│           Chateau de Busay, Cebu                     │
│                                                      │
│   ┌──────────────────────────────────────────────┐   │
│   │                                              │   │
│   │           [ Google Maps Embed ]              │   │
│   │                                              │   │
│   └──────────────────────────────────────────────┘   │
│                                                      │
│   📍 Address text + "Get Directions" link            │
└──────────────────────────────────────────────────────┘
```

- Embedded Google Maps `<iframe>` (lazy-loaded).
- Full address text below the map.
- "Get Directions" link opens Google Maps in a new tab.
- Map uses a grayscale/muted style to match site palette.

---

### 3.8 RSVP Form

```
┌──────────────────────────────────────────────────────┐
│                 Kindly Respond                       │
│                                                      │
│     Full Name:     [___________________________]     │
│     Email:         [___________________________]     │
│     Attending?     ○ Joyfully Accept                 │
│                    ○ Regretfully Decline              │
│     No. of Guests: [ 1 ▾ ]                           │
│     Message:       [___________________________]     │
│                    [___________________________]     │
│                                                      │
│                  [ Send RSVP ]                       │
└──────────────────────────────────────────────────────┘
```

- Client-side validation (required fields, email format).
- On submit: success animation (checkmark + thank-you message).
- **Backend options (future):**
  - Formspree / Getform (zero-backend solution)
  - Google Forms embedded or API
  - Simple serverless function (Netlify Functions / Vercel Edge)
- For now: form submits to Formspree endpoint (or stores locally for demo).

---

### 3.9 Footer

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│         Dominique & Bianca · January 2027            │
│           Made with ♥ in Cebu, Philippines           │
│                  #DomAndBianca                        │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- Minimal, centered text.
- Wedding hashtag (if any).
- Optional: social media icons linking to the couple's pages.

---

## 4. Color Palette & Typography

### Color Palette — *"Dusty Rose & Sage"*

| Role               | Color                          | Hex       |
|--------------------|--------------------------------|-----------|
| **Primary**        | Dusty Rose                     | `#C9A4A0` |
| **Secondary**      | Sage Green                     | `#A3B18A` |
| **Accent**         | Champagne Gold                 | `#D4AF37` |
| **Background**     | Ivory / Cream                  | `#FDF8F4` |
| **Surface/Card**   | Soft White                     | `#FFFFFF` |
| **Text Primary**   | Charcoal                       | `#2C2C2C` |
| **Text Secondary** | Warm Gray                      | `#6B6B6B` |
| **Overlay**        | Black 60%                      | `rgba(0,0,0,0.6)` |

### Typography

| Usage           | Font                        | Weight     | Fallback             |
|-----------------|-----------------------------|------------|----------------------|
| **Display/H1**  | *Playfair Display*          | 700        | Georgia, serif       |
| **Headings**    | *Cormorant Garamond*        | 500 / 600  | Georgia, serif       |
| **Script/Accent** | *Great Vibes*            | 400        | cursive              |
| **Body**        | *Montserrat*                | 300 / 400  | Arial, sans-serif    |

Loaded via Google Fonts with `display=swap` for performance.

---

## 5. Responsive Breakpoints

| Breakpoint | Target          | Layout Adjustments                              |
|------------|-----------------|------------------------------------------------|
| `< 480px`  | Small phones    | Single column, stacked everything, larger tap targets |
| `480–768px`| Large phones    | Single column, slightly more breathing room     |
| `768–1024px`| Tablets        | 2-column gallery, side-by-side story items      |
| `1024–1440px`| Laptops/Desktop | 3-column gallery, max-width container (1200px) |
| `> 1440px` | Large screens   | Centered content, generous whitespace           |

---

## 6. Animations & Interactions

| Element               | Animation                                | Trigger          |
|-----------------------|------------------------------------------|-------------------|
| Hero text             | Fade-in + rise from bottom               | Page load         |
| Section headings      | Fade-up                                  | Scroll into view  |
| Timeline items        | Staggered fade-in from left/right        | Scroll into view  |
| Gallery thumbnails    | Scale-up on hover, fade-in on scroll     | Hover / Scroll    |
| Lightbox              | Fade backdrop + scale image              | Click             |
| Countdown digits      | Subtle flip / crossfade                  | Every second      |
| RSVP success          | Checkmark draw + confetti burst          | Form submit       |
| Scroll indicator      | Infinite bounce                          | Always (hero)     |
| Navigation            | Background opacity transition on scroll  | Scroll            |
| Floating petals       | CSS keyframe drift (optional)            | Always (bg)       |

All animations will respect `prefers-reduced-motion: reduce`.

---

## 7. File Structure

```
wedding-website/
├── index.html                 # Single-page HTML
├── PLAN.md                    # This planning document
│
├── css/
│   ├── styles.css             # Main stylesheet (custom properties, base, layout)
│   ├── components.css         # Section-specific styles
│   └── animations.css         # All keyframes and transitions
│
├── js/
│   ├── main.js                # App initialization, nav, scroll observer
│   ├── countdown.js           # Countdown timer logic
│   ├── gallery.js             # Gallery grid + lightbox logic
│   └── rsvp.js                # Form validation + submission
│
├── images/
│   ├── hero.jpg               # Hero background (compressed)
│   ├── prenup/                # Prenup photos (optimized, multiple sizes)
│   │   ├── photo-01.jpg
│   │   ├── photo-01-thumb.jpg
│   │   ├── photo-02.jpg
│   │   └── ...
│   ├── favicon.ico
│   └── og-image.jpg           # Open Graph preview image
│
└── fonts/                     # (optional, if self-hosting)
    └── ...
```

---

## 8. Performance Best Practices

| Practice                          | Implementation                                          |
|-----------------------------------|---------------------------------------------------------|
| **Image optimization**            | WebP format with JPEG fallback; compressed to < 200KB each |
| **Lazy loading**                  | `loading="lazy"` on all images below the fold           |
| **Responsive images**             | `srcset` + `sizes` attributes for art-directed serving  |
| **Font loading**                  | `font-display: swap`; preconnect to Google Fonts        |
| **Critical CSS**                  | Inline above-the-fold styles in `<head>`                |
| **Minification**                  | Minify CSS/JS for production                            |
| **Minimal dependencies**          | Zero frameworks — pure HTML/CSS/JS                      |
| **Efficient animations**          | Use `transform` and `opacity` only (GPU-composited)     |
| **Intersection Observer**         | For scroll-triggered animations (not scroll events)     |
| **Deferred scripts**              | `defer` attribute on all `<script>` tags                |

---

## 9. Accessibility Checklist

- [x] Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- [x] All images have descriptive `alt` text
- [x] Color contrast ratios meet WCAG AA (4.5:1 for text)
- [x] Keyboard-navigable lightbox (arrows, Escape, Tab)
- [x] Focus trapping inside lightbox when open
- [x] Skip-to-content link for screen readers
- [x] ARIA labels on interactive elements (hamburger menu, lightbox controls)
- [x] `prefers-reduced-motion` media query disables animations
- [x] `prefers-color-scheme` consideration (optional dark mode)
- [x] Form inputs have associated `<label>` elements
- [x] Logical heading hierarchy (h1 → h2 → h3)
- [x] Touch targets minimum 44×44px on mobile

---

## 10. SEO & Social Sharing

```html
<!-- Essential Meta -->
<meta name="description" content="You're invited to the wedding of Dominique Betonio & Bianca Alegado — January 25, 2027 at Chateau de Busay, Cebu.">

<!-- Open Graph -->
<meta property="og:title" content="Dominique & Bianca — Wedding Invitation">
<meta property="og:description" content="Join us as we celebrate our love. January 25, 2027 · Cebu, Philippines.">
<meta property="og:image" content="og-image.jpg">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
```

---

## 11. Development Phases

### Phase 1 — Structure & Layout *(Day 1)*
- [ ] Set up HTML skeleton with all sections
- [ ] Implement CSS custom properties and base styles
- [ ] Build responsive navigation (desktop + mobile hamburger)
- [ ] Hero section with placeholder image

### Phase 2 — Core Sections *(Day 2)*
- [ ] Invitation card design
- [ ] Countdown timer (JS)
- [ ] Our Story timeline
- [ ] Venue section with Google Maps embed

### Phase 3 — Gallery & Lightbox *(Day 3)*
- [ ] Masonry/grid gallery layout
- [ ] Lightbox with navigation, keyboard, and swipe support
- [ ] Image lazy loading and placeholders

### Phase 4 — RSVP & Interactivity *(Day 4)*
- [ ] RSVP form with validation
- [ ] Scroll-triggered animations (Intersection Observer)
- [ ] Navigation active-state tracking
- [ ] Floating petal background animation

### Phase 5 — Polish & Optimization *(Day 5)*
- [ ] Image compression and responsive `srcset`
- [ ] Accessibility audit
- [ ] Performance audit (Lighthouse)
- [ ] Cross-browser and device testing
- [ ] Final content and copy review

---

## 12. Placeholder Assets Note

Since real prenup photos are not yet available, the implementation will use:
- **Hero:** A soft gradient or royalty-free romantic landscape
- **Gallery:** 8 numbered placeholder images with a consistent warm tone
- All placeholders are easily swappable — just drop real photos into `images/prenup/` and update filenames in the HTML

---

## ✅ Ready for Review

Please review this plan and confirm:
1. Are all sections and features aligned with your vision?
2. Any sections to add, remove, or reorder?
3. Any changes to the color palette or typography?
4. Preferred RSVP backend (Formspree, Google Forms, or other)?
5. Do you have prenup photos ready, or should we proceed with placeholders?

Once approved, I'll begin implementation starting with Phase 1. 💒
