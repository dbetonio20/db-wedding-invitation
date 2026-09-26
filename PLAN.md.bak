# 💍 Dominique & Bianca — Wedding Invitation Website Plan

---

## 1. Project Overview

A responsive, single-page wedding invitation website for **Dominique Betonio** and **Bianca Alegado**. The site serves as both a digital invitation and a prenup photo gallery, designed with a romantic, elegant, and minimal aesthetic.

- **Tech Stack:** HTML5, CSS3 (custom properties + media queries), Vanilla JavaScript
- **Approach:** Mobile-first, progressively enhanced for tablet and desktop
- **Hosting-ready:** Static files — deployable to GitHub Pages, Netlify, or Vercel

---

## 2. Site Map & Section Breakdown

Guests first land on an animated **Envelope Landing Page** — an immersive entry experience where they "open" a virtual envelope to reveal the invitation. This transitions seamlessly into the main site: a single scrollable page with a fixed navigation bar. Sections appear in this order:

| #  | Section            | Purpose                                                     |
|----|--------------------|-------------------------------------------------------------|
| 0  | **Envelope Landing** | Full-screen animated envelope entry — tap/click to open and enter the site |
| 1  | **Navigation**     | Sticky/fixed top nav with smooth-scroll anchor links        |
| 2  | **Hero**           | Full-viewport intro with couple names, date & scroll cue    |
| 3  | **Our Story**      | Brief narrative about the couple with a timeline feel       |
| 4  | **Countdown**      | Live countdown timer to January 25, 2027                    |
| 5  | **Invitation**     | Formal invitation card with all wedding details             |
| 6  | **Gallery**        | Prenup photo grid with lightbox/fullscreen preview          |
| 7  | **Venue**          | Google Maps embed + address & directions                    |
| 8  | **RSVP**           | Interactive RSVP form                                       |
| 9  | **Thank You**      | Post-wedding thank you message and photo sharing            |
| 10 | **Footer**         | Closing message, social links, copyright                    |

---

## 3. Detailed Section Design

### 3.0 Envelope Landing Page (Entry Experience)

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ✦ · ˚ · ✦ · ˚ · ✦ · ˚ · ✦ · ˚ · ✦ · ˚ · ✦ · ˚  │
│                                                      │
│         ┌────────────────────────────────┐           │
│         │  ╲                           ╱ │           │
│         │    ╲       ✦ D & B ✦        ╱  │ ← seal   │
│         │      ╲_____________________╱   │           │
│         │                                │           │
│         │    Dominique  &  Bianca        │           │
│         │      January 25, 2027          │           │
│         └────────────────────────────────┘           │
│                                                      │
│              ✦  tap to open  ✦                       │
│                                                      │
│  · ˚ · ✦ · ˚ · ✦ · ˚ · ✦ · ˚ · ✦ · ˚ · ✦ · ˚ · ˚ │
└──────────────────────────────────────────────────────┘
```

**Animation Sequence (page load → open):**
1. **Intro fade** → Deep charcoal background blooms in; rose petals / bokeh orbs drift lazily upward
2. **Envelope entrance** → Drops softly from above with spring easing, gentle sway before settling center-screen
3. **Seal glow loop** → D&B wax seal pulses with a warm champagne-gold shimmer continuously
4. **Prompt pulse** → "tap to open ✦" text breathes with a soft opacity/scale loop
5. **Hover (desktop)** → Envelope flap lifts slightly via CSS 3D `rotateX`; envelope shadow deepens
6. **Click / Tap sequence:**
   - 🔴 Wax seal shatters — SVG fracture lines radiate outward + gold sparkle burst
   - 📨 Flap swings open — CSS 3D `rotateX(180deg)` with creased paper shadow
   - 💌 Invitation card slides upward out of envelope — `translateY` + `scale`
   - ✨ Gold particle burst scatters from the envelope mouth
   - 🌸 Card expands full-screen → crossfades / morphs into the main Hero section

**Design Details:**
- **Route:** `/` (envelope landing) → main site revealed in-place (no hard redirect)
- **Envelope:** Ivory/cream `#FDF8F4` body, champagne gold `#D4AF37` foil border, CSS paper grain texture
- **Wax Seal:** Dusty rose `#C9A4A0` with embossed SVG D&B monogram, gold shimmer overlay
- **Background:** Deep charcoal `#1a1a1a` with a soft centered vignette
- **Particles:** 40–60 drifting rose petals or bokeh orbs via CSS `@keyframes`
- **Typography:** *Great Vibes* (couple names) + *Cormorant Garamond* (date & details)
- **Optional audio:** Gentle piano ambient loop, discreet 🔇/🔊 toggle button (muted by default)

**Animations Checklist:**
- [ ] Floating rose petal / bokeh particle system (CSS `@keyframes`)
- [ ] Envelope spring drop-in on page load
- [ ] Parallax mouse-tracking depth shift on envelope (desktop)
- [ ] Gyroscope tilt via `DeviceOrientation` API (mobile)
- [ ] Wax seal golden shimmer pulse loop
- [ ] Flap lift on hover — CSS `perspective` + partial `rotateX`
- [ ] Seal shatter — SVG `stroke-dashoffset` fracture animation
- [ ] Gold sparkle burst on seal crack (Canvas or CSS pseudo-elements)
- [ ] Flap open — CSS 3D `rotateX(180deg)` with paper crease shadow
- [ ] Invitation card slide-out — `translateY` + `scale`
- [ ] Gold particle burst from envelope mouth
- [ ] Full-screen expand → morph into Hero section
- [ ] "Tap to open" breathe / pulse prompt
- [ ] `prefers-reduced-motion` fallback (instant reveal)
- [ ] Keyboard trigger (`Enter` / `Space` opens envelope)

---

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

### 3.8 RSVP Form — Personalized Invitations

**System Overview:**
- Each guest/party receives a unique invitation link with their party size pre-set
- URL format: `https://wedding.com/?invite=ABC123&guests=2`
- Form dynamically shows the exact number of name fields needed
- No email required — just names, attendance status, and optional message
- After submission, guests receive a confirmation code to check their details later

**Form UI (for 2 guests example):**

```
┌──────────────────────────────────────────────────────┐
│          You're Invited! (Party of 2)                │
│                                                      │
│  Guest 1:                                            │
│    Full Name:  [___________________________]         │
│    Attending?  ○ Yes  ○ No                           │
│                                                      │
│  Guest 2:                                            │
│    Full Name:  [___________________________]         │
│    Attending?  ○ Yes  ○ No                           │
│                                                      │
│  Special Requests / Dietary Needs (Optional):        │
│    [_________________________________________]        │
│    [_________________________________________]        │
│                                                      │
│                 [ Submit RSVP ]                      │
└──────────────────────────────────────────────────────┘
```

**After Successful Submission:**

```
┌──────────────────────────────────────────────────────┐
│                    ✓ Thank You!                      │
│                                                      │
│       Your RSVP has been received.                   │
│                                                      │
│     Your Confirmation Code: ABC123                   │
│                                                      │
│  Use this code to check your seat assignments       │
│  and view the wedding program closer to the date.   │
│                                                      │
│       [ View My Details ] [ Back to Site ]          │
└──────────────────────────────────────────────────────┘
```

**Features:**
- Dynamic form generation based on party size (1-5 guests)
- Client-side validation (required fields)
- Success animation with confirmation code display
- Prevent duplicate submissions per invite code
- Mobile-optimized for easy phone completion
- **Backend:** Supabase/Firebase for real-time data storage and tracking

---

### 3.9 Guest Portal — Check Your Details

**Access Method:**
- Link from confirmation screen or separate page: `/check-details`
- Requires confirmation code to view information

**UI Flow:**

```
┌──────────────────────────────────────────────────────┐
│              Check Your Details                      │
│                                                      │
│  Enter your confirmation code:                       │
│                                                      │
│          [___________]  [ Submit ]                   │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**After Code Verification:**

```
┌──────────────────────────────────────────────────────┐
│         Welcome, John & Jane Smith!                  │
│                                                      │
│  📊 RSVP Status: ✓ Confirmed (2 guests)              │
│  🪑 Seating: Table 12                                │
│                                                      │
│  📋 Wedding Program                                  │
│  ├─ 4:00 PM - Ceremony                               │
│  ├─ 5:30 PM - Cocktail Hour                          │
│  ├─ 6:30 PM - Reception & Dinner                     │
│  ├─ 8:00 PM - First Dance                            │
│  └─ 9:00 PM - Party Time!                            │
│                                                      │
│  📍 Dress Code: Semi-Formal / Cocktail Attire        │
│  🍽️ Your meal preferences have been noted            │
│                                                      │
│         [ Edit RSVP ] [ Download Program ]           │
└──────────────────────────────────────────────────────┘
```

**Features:**
- Secure code-based access (no account needed)
- View current RSVP status and guest count
- See assigned table number
- View complete wedding program/timeline
- Display dress code and special instructions
- Option to edit RSVP (within allowed timeframe)
- Downloadable wedding program PDF
- Mobile-optimized for on-the-day access

---

### 3.10 Thank You Section

**Visibility:** Hidden until after wedding date (January 25, 2027)

```
┌──────────────────────────────────────────────────────┐
│                  Thank You!                          │
│                                                      │
│  We are so grateful you celebrated with us!          │
│                                                      │
│  Check back soon for photos from our special day.    │
│                                                      │
│  📸 [ View Wedding Gallery ]                         │
│                                                      │
│  Want to share your photos?                          │
│  Use #DomAndBianca or email us!                      │
│                                                      │
│      With love, Dominique & Bianca                   │
└──────────────────────────────────────────────────────┘
```

**Features:**
- Auto-reveals after wedding date
- Link to post-wedding photo gallery
- Instructions for guests to share their photos
- Heartfelt thank you message
- Optional: guest testimonials or messages
- Can be updated via admin dashboard

---

### 3.11 Footer

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│         Dominique & Bianca · January 2027            │
│           Made with ♥ in Cebu, Philippines           │
│                  #DomAndBianca                        │
│                                                      │
│              [ Check Your Details ]                  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

- Minimal, centered text.
- Wedding hashtag (if any).
- Link to guest portal for checking details.
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

## 7. File Structure (Angular Project)

```
wedding-website/
├── angular.json
├── package.json
├── PLAN.md
├── IMAGE_GUIDE.md
├── tsconfig.json
│
├── public/
│   └── images/
│       └── prenup/
│           ├── mobile/              # Portrait images for mobile
│           │   ├── hero.jpg
│           │   └── ...
│           └── desktop/             # Landscape images for desktop
│               ├── hero.jpg
│               └── ...
│
└── src/
    ├── index.html
    ├── main.ts
    ├── styles.css
    │
    └── app/
        ├── app.ts                   # Root component
        ├── app.routes.ts            # Route configuration
        ├── app.config.ts
        │
        ├── components/
        │   ├── navigation/
        │   ├── hero/
        │   ├── our-story/
        │   ├── countdown/
        │   ├── invitation/
        │   ├── gallery/
        │   ├── venue/
        │   ├── rsvp/                # RSVP form component
        │   ├── guest-portal/        # Guest details portal (NEW)
        │   └── footer/
        │
        ├── admin/                   # Admin dashboard (NEW)
        │   ├── dashboard/           # Dashboard home
        │   ├── invitations/         # Invitation management
        │   ├── rsvps/               # RSVP list view
        │   ├── seating/             # Seating chart
        │   ├── program/             # Wedding program editor
        │   ├── settings/            # Settings page
        │   └── login/               # Admin authentication
        │
        ├── services/
        │   ├── responsive-image.service.ts
        │   ├── supabase.service.ts  # Database client (NEW)
        │   ├── invitation.service.ts # Invitation API (NEW)
        │   ├── rsvp.service.ts      # RSVP API (NEW)
        │   └── auth.service.ts      # Admin auth (NEW)
        │
        ├── utils/
        │   ├── responsive-image.util.ts
        │   └── validators.ts        # Custom form validators
        │
        ├── models/                  # TypeScript interfaces (NEW)
        │   ├── invitation.model.ts
        │   ├── rsvp.model.ts
        │   ├── party-details.model.ts
        │   └── program-event.model.ts
        │
        └── guards/                  # Route guards (NEW)
            └── admin-auth.guard.ts  # Protect admin routes
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
| **Minimal dependencies**          | Angular framework only, leverage native APIs            |
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

## 11. Database Schema (Supabase/Firebase)

### Tables/Collections:

#### **invitations**
| Field          | Type      | Description                                    |
|----------------|-----------|------------------------------------------------|
| id             | UUID      | Primary key                                     |
| invite_code    | string    | Unique code (e.g., "ABC123")                   |
| party_name     | string    | Name of party (e.g., "The Smith Family")       |
| party_size     | number    | Number of guests (1-5)                         |
| created_at     | timestamp | When invitation was created                     |
| sent_at        | timestamp | When link was sent to guest                     |
| status         | enum      | "sent", "viewed", "responded", "confirmed"     |

#### **rsvps**
| Field          | Type      | Description                                    |
|----------------|-----------|------------------------------------------------|
| id             | UUID      | Primary key                                     |
| invite_code    | string    | Foreign key to invitations                      |
| guest_name     | string    | Individual guest name                           |
| attending      | boolean   | true = attending, false = not attending         |
| submitted_at   | timestamp | When RSVP was submitted                         |

#### **party_details**
| Field          | Type      | Description                                    |
|----------------|-----------|------------------------------------------------|
| invite_code    | string    | Primary/Foreign key                             |
| message        | text      | Optional message from guests                    |
| dietary_needs  | text      | Special dietary requirements                    |
| table_number   | number    | Assigned table number (admin sets)              |
| can_edit       | boolean   | Whether guests can still edit RSVP              |
| last_updated   | timestamp | Last modification time                          |

#### **wedding_program**
| Field          | Type      | Description                                    |
|----------------|-----------|------------------------------------------------|
| id             | UUID      | Primary key                                     |
| time           | string    | Event time (e.g., "4:00 PM")                   |
| title          | string    | Event name (e.g., "Ceremony")                  |
| description    | text      | Optional details                                |
| order          | number    | Display order                                   |
| show_to_guests | boolean   | Whether to display in guest portal              |

#### **settings**
| Field          | Type      | Description                                    |
|----------------|-----------|------------------------------------------------|
| key            | string    | Setting key (e.g., "dress_code")               |
| value          | text      | Setting value                                   |
| updated_at     | timestamp | Last updated                                    |

---

## 12. Development Phases

### Phase 1 — Structure & Layout *(Day 1-2)*
- [x] Set up Angular project with routing
- [x] Implement CSS custom properties and base styles
- [x] Build responsive navigation (desktop + mobile)
- [x] Hero section with responsive images
- [x] Setup responsive image system (mobile/desktop folders)

### Phase 2 — Core Sections *(Day 3-4)*
- [x] Invitation card design
- [x] Countdown timer component
- [x] Our Story timeline component
- [x] Venue section with Google Maps embed
- [x] Footer component

### Phase 3 — Gallery & Lightbox *(Day 5-6)*
- [x] Masonry/grid gallery layout
- [x] Lightbox with navigation, keyboard, and swipe support
- [x] Image lazy loading and placeholders
- [x] Responsive gallery images

### Phase 4A — Envelope Landing Page *(Day 7-8)*
- [x] Create `/` landing route with animated envelope entry
- [x] Route/transition setup: envelope `/` → seamlessly reveals main site
- [x] Build envelope component: CSS 3D perspective, ivory paper grain texture
- [x] SVG wax seal with D&B monogram + golden shimmer pulse loop
- [x] Atmospheric background: deep charcoal `#1a1a1a` with soft centered vignette
- [x] Floating particle system: rose petals or bokeh orbs (CSS `@keyframes`)
- [x] Envelope spring drop-in animation on page load (`cubic-bezier` easing)
- [x] Hover micro-interaction: flap lifts slightly (CSS `rotateX`, desktop only)
- [x] Click / Tap full animation sequence:
  - Seal shatter: SVG `stroke-dashoffset` fracture lines + gold sparkle burst
  - Flap open: CSS 3D `rotateX(180deg)` with creased paper shadow
  - Invitation card slides upward out of envelope: `translateY` + `scale`
  - Gold particle burst scatters from envelope mouth
  - Card expands full-screen → morphs / crossfades into main Hero section
- [x] Parallax mouse-tracking depth effect on envelope (desktop)
- [x] Gyroscope tilt via `DeviceOrientation` API (mobile)
- [x] "Tap to open ✦" animated prompt — breathe / pulse opacity loop
- [ ] Optional ambient audio: soft piano loop, muted by default + 🔇/🔊 toggle
- [x] Keyboard accessible: `Enter` / `Space` triggers open sequence
- [x] `prefers-reduced-motion` fallback: instant fade-in of main page
- [x] Preload main page assets during envelope animation
- [x] Responsive: mobile-optimized envelope size and touch targets

### Phase 4B — RSVP Frontend *(Day 9-10)*
- [ ] Read URL parameters (invite code & party size)
- [ ] Dynamic form generation based on party size
- [ ] Multiple guest name fields with individual attendance toggles
- [ ] Client-side validation
- [ ] Success screen with confirmation code display
- [ ] Link to guest portal
- [ ] Responsive mobile-first design

### Phase 4C — Backend Setup *(Day 11-12)*
- [ ] Set up Supabase/Firebase project
- [ ] Create database schema (tables/collections above)
- [ ] Set up authentication for admin dashboard
- [ ] Create API endpoints/functions:
  - Submit RSVP
  - Check invite code validity
  - Retrieve guest details by code
  - Prevent duplicate submissions
- [ ] Set up Row Level Security (RLS) policies
- [ ] Test API integration with frontend

### Phase 5 — Admin Dashboard *(Day 11-13)*
- [ ] Admin authentication (secure login)
- [ ] Dashboard overview:
  - Total invitations sent
  - Total RSVPs received
  - Attendance count (yes/no breakdown)
  - Pending responses
- [ ] Invitation Management:
  - Create new invitation codes
  - Set party size and name
  - Generate shareable links
  - View/edit/delete invitations
- [ ] RSVP Management:
  - View all responses in table/grid
  - Filter by status (confirmed, declined, pending)
  - Search by name or code
  - Export to CSV/Excel
- [ ] Seating Arrangement:
  - Assign table numbers to parties
  - View unassigned vs assigned parties
  - Bulk assignment tools
  - Export table assignments
- [ ] Program Management:
  - Add/edit/delete program events
  - Set event times and descriptions
  - Reorder events
  - Toggle visibility to guests
- [ ] Settings:
  - Update dress code
  - Set RSVP edit deadline
  - Update wedding program
  - Manage general announcements

### Phase 6 — Guest Portal *(Day 14-15)*
- [ ] Guest portal route (`/check-details`)
- [ ] Code entry form with validation
- [ ] Fetch and display guest details:
  - RSVP status and guest names
  - Table assignment
  - Wedding program timeline
  - Dress code and special instructions
- [ ] Edit RSVP functionality:
  - Allow changes if within deadline
  - Update backend on changes
  - Show confirmation of updates
- [ ] Download wedding program as PDF
- [ ] Mobile-optimized for day-of access
- [ ] Error handling (invalid codes, expired codes)

### Phase 7 — Polish & Advanced Features *(Day 16-18)*
- [ ] Scroll-triggered animations (Intersection Observer)
- [ ] Navigation active-state tracking
- [ ] Loading states and skeleton screens
- [ ] Error boundary components
- [ ] Toast notifications for user feedback
- [ ] Optimistic UI updates
- [ ] QR code generation for invite links (optional)
- [ ] Manual notification system:
  - Admin button to send RSVP reminders to pending guests
  - Admin button to send table assignment notifications
  - Admin button to send wedding day reminders
  - Email/SMS templates in admin dashboard
  - Track who has been notified

### Phase 8 — Testing & Optimization *(Day 19-20)*
- [ ] Image compression and optimization
- [ ] Accessibility audit (WCAG AA compliance)
- [ ] Performance audit (Lighthouse score)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device testing (iOS & Android)
- [ ] Database query optimization
- [ ] Security audit (XSS, CSRF protection)
- [ ] Load testing for concurrent users
- [ ] Backup and restore procedures

### Phase 9 — Deployment & Documentation *(Day 21)*
- [ ] Environment configuration (dev/staging/production)
- [ ] Deploy frontend to Vercel/Netlify
- [ ] Deploy backend to Supabase/Firebase
- [ ] Set up custom domain and SSL
- [ ] Configure environment variables
- [ ] Create admin user guide
- [ ] Create guest user guide
- [ ] Set up monitoring and error tracking (Sentry)
- [ ] Final testing in production environment

---

## 13. Admin Dashboard — Detailed Features

### Dashboard Home
```
┌──────────────────────────────────────────────────────┐
│  Dashboard — Dominique & Bianca's Wedding            │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐        │
│  │ 150        │ │ 120        │ │ 30         │        │
│  │ Invited    │ │ Confirmed  │ │ Pending    │        │
│  └────────────┘ └────────────┘ └────────────┘        │
│                                                      │
│  Recent RSVPs:                                       │
│  • John Smith (Party of 2) - Just now                │
│  • Jane Doe (Party of 1) - 5 min ago                 │
│                                                      │
│  Quick Actions:                                      │
│  [ Create Invite ] [ View All RSVPs ] [ Seating ]   │
└──────────────────────────────────────────────────────┘
```

### Invitation Management
```
┌──────────────────────────────────────────────────────┐
│  Invitations                     [ + New Invite ]    │
│  ┌────────────────────────────────────────────────┐  │
│  │ Code   │ Party Name    │ Size │ Status        │  │
│  ├────────────────────────────────────────────────┤  │
│  │ ABC123 │ Smith Family  │  4   │ ✓ Responded   │  │
│  │ DEF456 │ Jane Doe      │  1   │ ⏱ Pending     │  │
│  │ GHI789 │ Garcia Group  │  2   │ ✓ Responded   │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│  [ Search ] [ Filter: All ▾ ] [ Export CSV ]         │
└──────────────────────────────────────────────────────┘
```

### Create New Invitation
```
┌──────────────────────────────────────────────────────┐
│  Create New Invitation                               │
│                                                      │
│  Party Name:      [____________________]             │
│  Party Size:      [2 ▾] (1-5)                        │
│  Custom Note:     [____________________]             │
│                                                      │
│  Generated Code:  ABC123                             │
│  Shareable Link:  https://wedding.com/?invite=...   │
│                   [ Copy Link ]                      │
│                                                      │
│           [ Create ] [ Cancel ]                      │
└──────────────────────────────────────────────────────┘
```

### Seating Chart Management
```
┌──────────────────────────────────────────────────────┐
│  Table Assignments                                   │
│                                                      │
│  Unassigned (15 guests)      Assigned (105 guests)   │
│  ┌──────────────────┐       ┌──────────────────┐    │
│  │ • Smith Family   │       │ Table 1: 12 ppl  │    │
│  │   (4 guests)     │       │ Table 2: 8 ppl   │    │
│  │ • Jane Doe       │       │ Table 3: 10 ppl  │    │
│  │   (1 guest)      │       │ ...              │    │
│  │ • Garcia Group   │       │                  │    │
│  │   (2 guests)     │       │                  │    │
│  └──────────────────┘       └──────────────────┘    │
│                                                      │
│  [ Assign to Table ] [ Reset All ] [ Export List ] [ Send Notifications ] │
└──────────────────────────────────────────────────────┘
```

**Features:**
- Assign parties to table numbers only
- View total guests per table
- Send table notifications via button (not automatic)
- Guests choose their own seats at their assigned table

---

## 14. Technology Stack Summary

### Frontend
- **Framework:** Angular 19+ (standalone components)
- **Styling:** CSS3 with custom properties, CSS Grid, Flexbox
- **Animations:** CSS animations + Angular animations
- **State Management:** Angular Signals
- **Routing:** Angular Router
- **Forms:** Reactive Forms with validation

### Backend & Database
- **Backend:** Supabase (PostgreSQL) ✓ CONFIRMED
- **Authentication:** Supabase Auth (single admin, no roles needed)
- **API:** REST API or Supabase Client SDK
- **File Storage:** Supabase Storage / Firebase Storage (for program PDFs)
- **Real-time:** Supabase Realtime (optional for live dashboard updates)

### Deployment & Hosting
- **Frontend:** Vercel (free subdomain: domandbianca.vercel.app)
- **Backend:** Supabase Cloud (free tier)
- **Domain:** Free Vercel subdomain (domandbianca.vercel.app)
- **CDN:** Automatic via Vercel
- **SSL:** Automatic via Vercel (HTTPS)

### Tools & Services
- **Version Control:** Git + GitHub
- **CI/CD:** Vercel/Netlify auto-deploy
- **Monitoring:** Sentry (error tracking)
- **Analytics:** Google Analytics or Plausible (privacy-friendly)
- **Email:** Optional - SendGrid or Resend for notifications

---

## 16. Security Considerations

### Frontend Security
- **Input Validation:** Sanitize all user inputs before submission
- **XSS Prevention:** Use Angular's built-in sanitization
- **CSRF Protection:** Implement CSRF tokens for state-changing operations
- **Rate Limiting:** Prevent spam submissions on RSVP form
- **Code Obfuscation:** Minify and obfuscate production builds

### Backend Security (Supabase/Firebase)
- **Row Level Security (RLS):** Enable RLS policies to restrict data access
- **API Authentication:** Secure admin endpoints with JWT tokens
- **Environment Variables:** Store sensitive keys in environment variables
- **CORS Configuration:** Restrict API access to your domain only
- **SQL Injection Prevention:** Use parameterized queries (handled by Supabase/Firebase)
- **Audit Logging:** Track all admin actions and changes

### Admin Dashboard Security
- **Strong Authentication:** Require strong password via Supabase Auth
- **Two-Factor Authentication:** Optional for extra security
- **Session Management:** Auto-logout after 24 hours inactivity
- **Single Admin:** No role system needed (just you managing)
- **HTTPS Only:** Enforce SSL/TLS for all admin pages

### Guest Code Security
- **Code Complexity:** Generate codes with sufficient entropy (e.g., 8+ alphanumeric characters)
- **Rate Limiting:** Prevent brute-force code guessing
- **Expiration:** Optional - codes can expire after wedding date
- **One-Time Use:** Prevent code sharing (optional - track IP/device)

---

## 17. Testing Strategy

### Unit Testing
- [ ] Service layer tests (API calls, data transformations)
- [ ] Utility function tests (image path resolver, validators)
- [ ] Component logic tests (countdown timer, form validation)

### Integration Testing
- [ ] RSVP submission flow (form → API → database)
- [ ] Guest portal flow (code entry → data retrieval → display)
- [ ] Admin dashboard operations (CRUD operations)

### E2E Testing
- [ ] Complete guest journey (receive link → RSVP → check details)
- [ ] Admin workflow (create invite → assign seats → view RSVPs)
- [ ] Mobile device testing (iOS Safari, Android Chrome)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

### Performance Testing
- [ ] Lighthouse audit (score 90+ on all metrics)
- [ ] Load testing (concurrent RSVP submissions)
- [ ] Image optimization verification
- [ ] Bundle size analysis

### Accessibility Testing
- [ ] Screen reader compatibility (NVDA, JAWS, VoiceOver)
- [ ] Keyboard navigation testing
- [ ] Color contrast verification
- [ ] WCAG 2.1 AA compliance

---

## 18. Post-Launch Monitoring

### Analytics to Track
- **Guest Engagement:**
  - Page views and session duration
  - Gallery interaction rate
  - RSVP conversion rate (link clicked → RSVP submitted)
  - Guest portal usage

- **Technical Metrics:**
  - Page load time
  - Error rates
  - API response times
  - Database query performance

- **RSVP Metrics:**
  - Response rate over time
  - Attendance vs decline ratio
  - Average time from invite to RSVP
  - Dietary/special request frequency

### Notification Strategy (Manual Trigger)
- **RSVP Reminders:** Admin clicks button to send reminders to pending guests
- **Table Assignment Updates:** Admin clicks button to notify guests when tables are assigned
- **Wedding Day Reminders:** Admin clicks button to send final details
- **No Automatic Emails:** All notifications triggered manually by admin to prevent spam
- **Email Not Required:** Notifications sent only to guests who provided email/phone (optional field)
- **Notification History:** Track when reminders were sent and to whom

---

## 19. Future Enhancements (Post-MVP)

### Guest Experience
- [ ] QR code check-in at venue entrance
- [ ] Gift registry integration
- [ ] Photo sharing gallery (guests upload photos during/after wedding)
- [ ] Live stream link for remote attendees
- [ ] Interactive guestbook/messages
- [ ] Travel and accommodation recommendations
- [ ] Transportation/shuttle schedule

### Admin Features
- [ ] Budget tracker
- [ ] Vendor management
- [ ] Task checklist and timeline
- [ ] Guest communication hub (mass emails/SMS)
- [ ] Print-ready reports (seating chart, name cards, etc.)
- [ ] Analytics dashboard with charts
- [ ] Mobile app for on-the-day coordination

### Technical Improvements
- [ ] Progressive Web App (PWA) with offline support
- [ ] Multi-language support (English, Cebuano, Tagalog)
- [ ] Advanced seating algorithm (automatically optimize tables)
- [ ] WebP/AVIF image format support
- [ ] AI-powered photo tagging in gallery
- [ ] Real-time RSVP counter animation on homepage

---

## ✅ Next Steps

### Immediate Actions:
1. **Review and approve** this updated plan
2. **Choose backend:** Finalize Supabase vs Firebase decision
3. **Set up Supabase/Firebase project** (create account, configure)
4. **Define admin credentials** (who will have admin access)
5. **Prepare invitation list** (estimate number of invitations needed)

### ✅ CONFIRMED Decisions:
1. **Timeline:** Launch 2-3 months before wedding (Oct/Nov 2026) - plenty of time for testing!
2. **Backend:** ✅ Supabase (PostgreSQL)
3. **Notifications:** ✅ Manual triggers via admin dashboard (no automatic spam)
4. **Seating:** ✅ Table numbers only (guests choose seats at their table)
5. **Admin:** ✅ Just you managing (no permissions/roles needed)
6. **Domain:** ✅ Free Vercel subdomain (domandbianca.vercel.app)
7. **Thank You:** ✅ Added post-wedding section

### 📅 Adjusted Timeline:
- **Now - August 2026:** Development & testing
- **September 2026:** Final testing, content preparation
- **October 2026:** Site launch, start sending invites
- **November 2026 - January 2027:** Guest RSVPs, table assignments
- **January 25, 2027:** Wedding day! 🎉
- **Post-Wedding:** Thank you section goes live

**Ready to start Phase 4A (Envelope Landing Page) implementation!** 🚀

