# 💍 Dominique & Bianca — Wedding Invitation Website Plan

---

## 1. Project Overview

A responsive, high-performance wedding invitation website and prenup photo gallery for **Dominique Betonio** and **Bianca Alegado**. The site delivers an immersive digital experience—from an interactive 3D virtual envelope opening sequence to a complete event guide, personalized RSVP portal, and post-wedding gallery.

- **Tech Stack:** Angular 21 (Standalone Components, Signals, SSR with Express), CSS3 (Custom properties, 3D transforms, GPU-composited animations), Supabase (PostgreSQL with Row Level Security & Stored Procedures)
- **Design Aesthetic:** Romantic, modern, and minimal — warm cream backgrounds, dusty rose accents, champagne gold foil detailing, and elegant serif typography
- **Hosting & Infrastructure:** Vercel (SSR & Global Edge CDN) + Supabase Cloud (Database, Auth, and Storage)
- **Key Milestones:**
  - **Launch & Invitation Sending:** October 2026
  - **RSVP Deadline:** December 15, 2026
  - **Wedding Date:** January 25, 2027 at Chateau de Busay, Cebu, Philippines

---

## 2. Site Map & Section Breakdown

Guests land on an animated **Envelope Landing Experience** — an interactive virtual envelope where they tap to crack the wax seal and open the card. Once opened, the envelope gracefully dissolves into the single scrollable page, with smooth navigation and alternating photo panels creating a romantic narrative flow.

| #  | Section | Component | Purpose | Status |
|:---|:---|:---|:---|:---|
| 0  | **Envelope Landing** | `app-envelope-landing` | Full-screen 3D envelope entry, wax seal shatter, particle burst & ambient music | ✅ Complete |
| 1  | **Navigation** | `app-navigation` | Sticky top navigation with smooth scroll links and mobile drawer | ✅ Complete |
| 2  | **Hero** | `app-hero` | Full-viewport intro, couple names, date, scroll cue & "Add to Calendar" | ✅ Complete |
| —  | *Photo Panel 1* | `app-photo-panel` | Prenup photo transition 1: *"Where it all began…"* | ✅ Complete |
| 3  | **Our Story** | `app-our-story` | Timeline milestones of Dominique & Bianca's journey | ✅ Complete |
| —  | *Photo Panel 2* | `app-photo-panel` | Prenup photo transition 2: *"Every moment led us here"* | ✅ Complete |
| 4  | **Countdown** | `app-countdown` | Live real-time countdown to January 25, 2027 at 4:00 PM PHT | ✅ Complete |
| —  | *Photo Panel 3* | `app-photo-panel` | Prenup photo transition 3: *"Two hearts, one love"* | ✅ Complete |
| 5  | **Invitation** | `app-invitation` | Formal invitation card with date, time, venue, and calendar integration | ✅ Complete |
| —  | *Photo Panel 4* | `app-photo-panel` | Prenup photo transition 4: *"A love worth celebrating"* | ✅ Complete |
| 6  | **Gallery** | `app-gallery` | Masonry photo grid with swipe & keyboard-navigable full-screen lightbox | ✅ Complete |
| —  | *Photo Panel 5* | `app-photo-panel` | Prenup photo transition 5: *"Every detail, crafted with love"* | ✅ Complete |
| 7  | **Wedding Details** | `app-wedding-details` | Color palette motif swatches, attire guidelines & note on cash gifts | ✅ Complete |
| —  | *Photo Panel 6* | `app-photo-panel` | Prenup photo transition 6: *"See you at the celebration"* | ✅ Complete |
| 8  | **Venue** | `app-venue` | Chateau de Busay, Cebu — Google Maps embed + 1-tap Waze & Google Maps deep links | ✅ Complete |
| 9  | **RSVP** | `app-rsvp` | Secure personalized RSVP form with invite code validation & dynamic party size | ⏳ In Progress |
| 10 | **Guest Portal** | `app-guest-portal` | `/check-details` lookup for table assignment, program timeline & offline access | ⏳ Planned |
| 11 | **Thank You** | `app-thank-you` | Post-wedding photo gallery link, guest uploads & gratitude message (auto-reveals Jan 2027) | ⏳ Planned |
| 12 | **Footer** | `app-footer` | Wedding hashtag `#DomAndBianca`, quick links & "Replay Envelope" trigger | ✅ Complete |
| —  | **Floating Music Player** | `audio.service` + FAB | Persistent ambient music player (*Tahanan*) with volume fading & equalizer animation | ✅ Complete |

---

## 3. Detailed Section Design & Technical Specs

### 3.0 Envelope Landing Page (Entry Experience)

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  ✦ · ˚ · ✦ · ˚ · ✦ · ˚ · ✦ · ˚ · ✦ · ˚ · ✦ · ˚       │
│                                                      │
│         ┌────────────────────────────────┐           │
│         │  ╲                           ╱ │           │
│         │    ╲       ✦ D & B ✦        ╱  │ ← wax seal │
│         │      ╲_____________________╱   │           │
│         │                                │           │
│         │    Dominique  &  Bianca        │           │
│         │      January 25, 2027          │           │
│         └────────────────────────────────┘           │
│                                                      │
│              ✦  tap to open  ✦                       │
│                                                      │
│  · ˚ · ✦ · ˚ · ✦ · ˚ · ✦ · ˚ · ✦ · ˚ · ✦ · ˚ · ˚     │
└──────────────────────────────────────────────────────┘
```

**Features & Sequences:**
1. **Atmospheric Backdrop:** Deep charcoal `#1a1a1a` with soft vignette and 55 drifting rose petal & bokeh particles.
2. **Parallax Interaction:** Mouse-tracking 3D depth tilt on desktop; gyroscope tilt via `DeviceOrientationEvent` on mobile devices.
3. **Wax Seal Shatter:** On user interaction (click/tap/Enter/Space), SVG fracture lines animate with gold sparkle radial burst.
4. **Flap Open & Card Rise:** CSS 3D `rotateX(180deg)` opening with drop shadow, followed by the invitation card rising and scaling into full viewport.
5. **Music Autoplay on Interaction:** User's initial click triggers `AudioService.play()` with smooth volume fade to `0.4`, satisfying browser autoplay requirements without jarring the user.
6. **Return Visitor UX (Session Caching):**
   - Check `sessionStorage.getItem('envelope_viewed')`. If true, the envelope is bypassed on page refresh or internal navigation so returning guests can access details immediately.
   - Guests can replay the experience anytime via a discreet **"💌 Replay Envelope Experience"** link in the navigation drawer and footer.
7. **Accessibility:**
   - Full keyboard activation (`Enter` / `Space`).
   - `prefers-reduced-motion` media query instantly reveals the main site without animation.

---

### 3.1 Navigation

- Sticky top bar with blurred glassmorphism backdrop (`backdrop-filter: blur(12px)`).
- Desktop horizontal links: *Our Story*, *Countdown*, *Invitation*, *Gallery*, *Details*, *Venue*, *RSVP*.
- Mobile hamburger menu opening an elegant full-screen drawer with stagger-animated navigation items.
- Active link tracking using `IntersectionObserver` across sections.

---

### 3.2 Hero Section

- Full viewport height (`100dvh`).
- Responsive prenup background image with subtle dark overlay.
- Couple names styled with elegant serif typography (*Playfair Display* / *Cormorant Garamond*).
- Animated bouncing scroll-down indicator pointing to Our Story.
- **One-Click "Add to Calendar":** Quick button allowing guests to add the wedding directly to Google Calendar, Apple Calendar, or download `.ics`.

---

### 3.3 Our Story Timeline

- Alternating vertical timeline depicting key relationship milestones (2019: First Met, 2021: Dating, 2025: Proposal, 2027: Wedding Day).
- Staggered scroll-triggered fade-in animations via CSS and Intersection Observer.
- Responsive single-column layout on mobile devices.

---

### 3.4 Countdown Timer

- Live countdown to **January 25, 2027 at 4:00 PM PHT (UTC+8)**.
- Real-time updates running inside Angular's `NgZone` with `ChangeDetectionStrategy.OnPush`.
- Digits displayed across 4 cards: Days, Hours, Minutes, and Seconds.
- Post-wedding state: Displays a celebration message when the countdown reaches zero.

---

### 3.5 Invitation Details & Calendar Integration

- Formal digital invitation card with champagne gold foil styling and ivory backdrop.
- Date: **Monday, January 25, 2027**
- Time: **4:00 PM**
- Venue: **Chateau de Busay, Cebu, Philippines**
- **Direct Calendar Links:**
  - **Google Calendar Link:** Pre-populated with event title, location, description, and UTC times.
  - **Apple / Outlook `.ics` Generator:** One-click download of `.ics` calendar invitation file.

---

### 3.6 Prenup Photo Gallery & Lightbox

- Masonry CSS grid with responsive columns (3 columns desktop, 2 columns tablet, 1 column mobile).
- Lazy loaded images (`loading="lazy"`, `decoding="async"`) using responsive folder structure (`mobile/` and `desktop/`).
- Fullscreen modal lightbox:
  - Touch swipe left/right navigation on mobile.
  - Keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`).
  - Focus trap and ARIA attributes for screen reader accessibility.

---

### 3.7 Wedding Details (Attire, Palette & Note on Gifts)

- **Wedding Color Palette:** Interactive swatch cards with gradient visualizers and hex values:
  - *Dusty Rose:* `#C9A4A0`
  - *Rose Gold:* `#B8918C`
  - *Champagne:* `#E8D5C4`
- **Attire Guidelines:**
  - *Gentlemen:* Formal Barong Tagalog, Suit & Tie, or Tuxedo in neutral, navy, or earth tones.
  - *Ladies:* Long formal gowns or elegant midi dresses in motif colors or soft neutrals.
  - *Courtesy Note:* Kindly reserve all-white, ivory, and cream dresses for the bride.
- **Note on Gifts:**
  - Romantic rhyming verse: *"With all that we are, we feel truly blessed. Your presence and prayers are all we request. But if you wish to give beyond your heart's embrace, a gift of love in the form of cash would be a grace."*

---

### 3.8 Venue & Day-of Mountain Navigation (Chateau de Busay, Cebu)

- Google Maps embed displaying Chateau de Busay.
- Complete street address with landmark notes.
- **Busay Mountain Transit Guidance:**
  - Because cellular reception in Busay hills can vary, providing direct navigation buttons ensures smooth transit:
  - **1-Tap Waze Deep-link:** `https://waze.com/ul?q=Chateau+de+Busay+Cebu`
  - **1-Tap Google Maps Link:** `https://www.google.com/maps/search/?api=1&query=Chateau+de+Busay+Cebu`
  - Parking details and drop-off guidance.

---

### 3.9 RSVP System (Personalized, Anti-Tamper & Dynamic)

```
┌──────────────────────────────────────────────────────┐
│          You're Invited! — The Smith Family          │
│                                                      │
│  Invite Code: ABC123  (Allocated Seats: 2)           │
│                                                      │
│  Guest 1:                                            │
│    Full Name:  [ John Smith                ]         │
│    Attendance: (•) Joyfully Accept  ( ) Regretfully  │
│    Dietary / Allergies: [ No seafood       ]         │
│                                                      │
│  Guest 2:                                            │
│    Full Name:  [ Jane Smith                ]         │
│    Attendance: (•) Joyfully Accept  ( ) Regretfully  │
│    Dietary / Allergies: [ Vegetarian       ]         │
│                                                      │
│  Contact Email: [ john@example.com         ]         │
│  Message for the Couple:                             │
│    [ Can't wait to celebrate with you both! ]        │
│                                                      │
│                 [ Submit RSVP ]                      │
└──────────────────────────────────────────────────────┘
```

**Anti-Tampering & Security Logic:**
1. **No Guest Count in Query String:** URLs use `https://wedding.com/?code=ABC123` (never `&guests=5`). This prevents guests from altering URL parameters to inflate their allocated party size.
2. **Supabase Lookup via Code:** The code is validated against Supabase via a PostgreSQL RPC function (`get_invitation_by_code`), which returns the couple-assigned `party_name`, `max_guests`, and current status.
3. **Dynamic Form Generation:** Angular Reactive Form renders exact input rows for each guest in the party (1 to 5 guests).
4. **Individual Guest Attendance & Dietary Needs:** Each guest has their own attendance radio buttons and optional dietary/allergy field (crucial for caterer planning).
5. **Confirmation & Offline Caching:**
   - On successful submission, displays confirmation summary and assigns a unique access code.
   - **Local Storage Cache:** Caches the submission in `localStorage` so guests can check their RSVP details and assigned table number on the wedding day even if cell reception is offline in Busay.

---

### 3.10 Guest Portal (`/check-details`)

- Standalone route or modal for guests who have already RSVP'd to check their wedding day details:
  - Confirmed attendance and party members.
  - **Assigned Table Number** (assigned by Dominique & Bianca via Admin Dashboard).
  - Wedding day program timeline (Ceremony, Cocktails, Dinner, Program, Party).
  - One-tap button to download offline wedding program / schedule summary.
  - Option to update RSVP up until the deadline (December 15, 2026).

---

### 3.11 Post-Wedding "Thank You" Section

- Hidden before January 25, 2027; auto-activates post-wedding based on system date or admin toggle.
- Heartfelt message from Dominique & Bianca.
- Link to Google Drive / wedding photographer gallery.
- QR code and upload link for guests to share photos taken during the celebration.

---

## 4. Color Palette & Typography

### Palette Specification
- **Primary:** Dusty Rose (`#C9A4A0`) — Romantic accents, wax seal, highlights
- **Rose Gold:** (`#B8918C`) — Foil accents, card borders
- **Champagne:** (`#E8D5C4`) — Warm highlights, card surfaces
- **Sage Green:** (`#A3B18A`) — Natural foliage complement
- **Gold Accent:** (`#D4AF37`) — Metallic particle effects and borders
- **Background:** Ivory / Cream (`#FDF8F4`) — Warm, inviting page backdrop
- **Surface:** Pure White (`#FFFFFF`) — High-contrast content cards
- **Text Primary:** Charcoal (`#2C2C2C`) — High readability, WCAG AAA compliant
- **Text Secondary:** Warm Gray (`#6B6B6B`) — Meta text, dates, footnotes

### Typography
- **Display / Couple Names:** *Playfair Display* / *Great Vibes*
- **Headings:** *Cormorant Garamond* (weights 500, 600)
- **Body:** *Montserrat* (weights 300, 400, 500)
- Loaded via Google Fonts with `font-display: swap` for maximum Core Web Vitals speed.

---

## 5. File Structure (Angular Project)

```
db-wedding-invitation/
├── angular.json
├── package.json
├── PLAN.md                          # Primary project plan & architecture
├── IMAGE_GUIDE.md
├── tsconfig.json
│
├── public/
│   ├── favicon.ico
│   ├── music/
│   │   └── Tahanan.mp3              # Ambient background music
│   └── images/
│       └── prenup/
│           ├── mobile/              # Portrait images for mobile (< 768px)
│           │   ├── hero.jpg
│           │   ├── prenup-1.jpg ... prenup-6.jpg
│           │   └── ...
│           └── desktop/             # Landscape images for desktop/tablet
│               ├── hero.jpg
│               ├── prenup-1.jpg ... prenup-6.jpg
│               └── ...
│
└── src/
    ├── index.html
    ├── main.ts
    ├── styles.css
    │
    └── app/
        ├── app.ts                   # Root layout component
        ├── app.html
        ├── app.css
        ├── app.routes.ts            # Route definitions (Home, Check Details, Admin)
        ├── app.config.ts
        ├── app.config.server.ts     # SSR configuration
        │
        ├── components/
        │   ├── envelope-landing/    # 3D interactive envelope & seal
        │   ├── navigation/          # Sticky header & mobile drawer
        │   ├── hero/                # Hero section with Add to Calendar
        │   ├── photo-panel/         # Interleaved prenup image dividers
        │   ├── our-story/           # Milestone timeline
        │   ├── countdown/           # Live countdown timer
        │   ├── invitation/          # Formal invitation card
        │   ├── gallery/             # Masonry gallery & lightbox
        │   ├── wedding-details/     # Color motif, dress code, cash gifts
        │   ├── venue/               # Chateau de Busay + Waze/Maps deep links
        │   ├── rsvp/                # Dynamic reactive RSVP form
        │   ├── guest-portal/        # /check-details table lookup
        │   ├── thank-you/           # Post-wedding gallery & photo sharing
        │   └── footer/              # Footer & Replay Envelope trigger
        │
        ├── admin/                   # Admin dashboard
        │   ├── login/               # Supabase Auth login
        │   ├── dashboard/           # RSVP counts, search, filter, CSV export
        │   └── seating/             # Table number assignment
        │
        ├── services/
        │   ├── audio.service.ts     # Background music playback & fade
        │   ├── responsive-image.service.ts
        │   ├── supabase.service.ts  # Supabase client singleton
        │   ├── rsvp.service.ts      # RSVP lookup & submission API
        │   └── calendar.service.ts  # Google Calendar URL & .ics generation
        │
        ├── utils/
        │   ├── responsive-image.util.ts
        │   └── calendar.util.ts
        │
        ├── models/
        │   ├── invitation.model.ts
        │   ├── guest.model.ts
        │   └── program.model.ts
        │
        └── guards/
            └── admin-auth.guard.ts  # Protects /admin routes via Supabase Auth
```

---

## 6. Database Schema & Supabase Architecture

To guarantee absolute guest privacy and prevent any guest list enumeration or data leaks, we utilize a **PostgreSQL schema with Row Level Security (RLS)** and **PostgreSQL Stored Procedures (`SECURITY DEFINER`)**.

### Normalized Relational Tables

#### `invitations` (Party-level Record)
```sql
CREATE TABLE invitations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(12) UNIQUE NOT NULL,            -- e.g. "DOM-8K2A"
    party_name VARCHAR(255) NOT NULL,            -- e.g. "The Smith Family"
    max_guests INT NOT NULL DEFAULT 1 CHECK (max_guests BETWEEN 1 AND 10),
    table_number INT NULL,                       -- Assigned table number
    contact_email VARCHAR(255) NULL,
    contact_phone VARCHAR(50) NULL,
    party_message TEXT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'pending' 
        CHECK (status IN ('pending', 'confirmed', 'declined')),
    can_edit_until TIMESTAMPTZ DEFAULT '2026-12-15 23:59:59+08',
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_invitations_code ON invitations(code);
```

#### `party_guests` (Individual Guest Records)
```sql
CREATE TABLE party_guests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    invitation_id UUID NOT NULL REFERENCES invitations(id) ON DELETE CASCADE,
    guest_name VARCHAR(255) NOT NULL,
    is_attending BOOLEAN NOT NULL DEFAULT true,
    dietary_notes TEXT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_party_guests_invitation_id ON party_guests(invitation_id);
```

#### `wedding_program` (Schedule Timeline)
```sql
CREATE TABLE wedding_program (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_time VARCHAR(20) NOT NULL,             -- e.g. "4:00 PM"
    title VARCHAR(100) NOT NULL,                  -- e.g. "Ceremony"
    description TEXT NULL,
    display_order INT NOT NULL DEFAULT 0,
    show_to_guests BOOLEAN NOT NULL DEFAULT true
);
```

#### `site_settings`
```sql
CREATE TABLE site_settings (
    key VARCHAR(50) PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now()
);
```

---

### Privacy & Security: PostgreSQL RPC Functions

By default, **Public `SELECT` on `invitations` and `party_guests` is completely disabled**. Guests cannot inspect browser network tools to scrape other guests. All guest interactions run through two secure RPC endpoints:

#### 1. `get_invite_details(p_code TEXT)`
- Validates the provided code (case-insensitive).
- Returns ONLY that party's details (`party_name`, `max_guests`, `status`, `table_number`, and existing guest names).
- Returns `null` if code is invalid.

#### 2. `submit_rsvp(p_code TEXT, p_email TEXT, p_phone TEXT, p_message TEXT, p_guests JSONB)`
- Runs inside a single database transaction.
- Verifies the code exists and that current time is before `can_edit_until`.
- Asserts that number of guests does not exceed `max_guests`.
- Updates `invitations` status, email, phone, and message.
- Replaces/upserts rows in `party_guests`.
- Returns confirmation payload.

---

## 7. Development Phases & Implementation Status

### Phase 1 — Structure & Layout ✅ *COMPLETED*
- [x] Set up Angular 21 project with standalone components and SSR
- [x] Implement CSS custom properties, responsive container, and typography
- [x] Build sticky navigation with mobile slide-in drawer
- [x] Build hero section with responsive prenup photography
- [x] Setup folder-based responsive image system (`mobile/` and `desktop/`)

### Phase 2 — Core Sections & Narrative ✅ *COMPLETED*
- [x] Invitation card component with elegant typography
- [x] Countdown timer counting down to January 25, 2027 at 4:00 PM PHT
- [x] Our Story milestone timeline component
- [x] Venue section with embedded Google Maps
- [x] Footer component with wedding hashtag `#DomAndBianca`
- [x] **BONUS:** Dedicated `WeddingDetails` section (swatches, attire guidelines, cash gift note)
- [x] **BONUS:** 6 interleaved `PhotoPanel` components between sections

### Phase 3 — Gallery & Lightbox ✅ *COMPLETED*
- [x] Masonry/grid gallery layout for prenup photos
- [x] Touch swipe gesture navigation on mobile
- [x] Full-screen lightbox with keyboard controls (`ArrowLeft`, `ArrowRight`, `Escape`)
- [x] Responsive images with `loading="lazy"` and `decoding="async"`

### Phase 4A — Envelope Landing Page & Ambient Audio ✅ *COMPLETED*
- [x] Interactive 3D envelope with paper grain texture and ivory foil
- [x] SVG wax seal with D&B monogram and golden shimmer loop
- [x] Particle system: 55 drifting rose petal and bokeh particles
- [x] Seal fracture animation + radial sparkle burst
- [x] Flap swing open (`rotateX(180deg)`) and invitation card rise sequence
- [x] Parallax mouse-tracking (desktop) and gyroscope tilt (mobile)
- [x] Ambient audio service (`AudioService`) playing *Tahanan.mp3* with volume fade
- [x] Persistent floating audio toggle button (FAB) with animated equalizer
- [x] Accessible keyboard activation (`Enter` / `Space`) & `prefers-reduced-motion`
- [x] **NEW IMPROVEMENT:** Session caching (`sessionStorage`) to bypass envelope on return visits within the same session

### Phase 4B — RSVP Frontend (Next Immediate Priority) ⏳
- [ ] Connect URL query reader for invite code (`?code=XYZ` or `?invite=XYZ`)
- [ ] Auto-scroll to RSVP section if code is detected in URL
- [ ] Fetch invite verification from Supabase via `get_invite_details` RPC
- [ ] Reactive form dynamically generating rows for each allocated guest (1 to 5)
- [ ] Individual attendance toggles (`Joyfully Accept` / `Regretfully Decline`)
- [ ] Individual dietary / allergy restriction fields
- [ ] Contact email & phone fields for wedding announcements
- [ ] Client-side validation with friendly inline error states
- [ ] Submission animation with confirmation code & celebration confetti
- [ ] "Add to Calendar" button (Google Calendar + Apple `.ics` download)
- [ ] Cache confirmation in `localStorage` for offline access on wedding day

### Phase 4C — Supabase Backend Setup ⏳
- [ ] Create Supabase project & obtain project URL / anon key
- [ ] Execute database migrations: `invitations`, `party_guests`, `wedding_program`
- [ ] Deploy PostgreSQL RPC functions (`get_invite_details`, `submit_rsvp`)
- [ ] Configure Row Level Security (RLS) policies
- [ ] Install `@supabase/supabase-js` in project
- [ ] Implement `SupabaseService` with environment variable injection
- [ ] Test end-to-end invite retrieval & RSVP submission

### Phase 5A — Admin Dashboard MVP (For October Launch) ⏳
- [ ] Admin login screen (`/admin/login`) powered by Supabase Auth
- [ ] Route guard (`admin-auth.guard.ts`) protecting all `/admin/*` routes
- [ ] Real-time metrics overview:
  - Total Invited
  - Total Confirmed
  - Total Declined
  - Total Pending
- [ ] RSVP Data Table:
  - Instant live search by Party Name or Guest Name
  - Filter by status (Confirmed, Declined, Pending)
  - Quick inline Table Number assignment input
- [ ] **One-Click CSV / Excel Export:** Formatted for caterer (dietary counts) and coordinator
- [ ] Batch Invite Link Generator (generates shareable links for WhatsApp/Messenger/SMS)

### Phase 5B — Advanced Admin Features (Post-Launch) ⏳
- [ ] Visual table arrangement helper (view guests per table)
- [ ] Wedding program timeline editor
- [ ] Manual notification sender / reminder tracker

### Phase 6 — Guest Portal (`/check-details`) ⏳
- [ ] Route configuration for `/check-details` in `app.routes.ts`
- [ ] Code lookup form with auto-fill from previous session/URL
- [ ] Display confirmed party status, names, and assigned Table Number
- [ ] Display wedding program timeline (Ceremony, Dinner, Party)
- [ ] Offline caching via `localStorage` (works with zero cell service in Busay)
- [ ] 1-Tap navigation buttons to Waze & Google Maps
- [ ] Edit RSVP option (enabled until December 15, 2026 deadline)

### Phase 7 — Polish, Testing & Launch ⏳
- [ ] Update `angular.json` component style budget to 16kB to eliminate build warning
- [ ] Unit test mocks for `window.matchMedia` in `app.spec.ts`
- [ ] Cross-device testing on iOS Safari, Android Chrome, and desktop browsers
- [ ] Lighthouse performance audit (target 90+ across all metrics)
- [ ] Deploy to Vercel with custom domain (`domandbianca.com` or Vercel subdomain)

---

## 8. Admin Dashboard Specification (MVP)

```
┌──────────────────────────────────────────────────────────────────┐
│  💍 Dominique & Bianca's Wedding — Admin Dashboard               │
│                                                                  │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────┐ │
│  │ 150          │ │ 112          │ │ 18           │ │ 20       │ │
│  │ Total Seats  │ │ Confirmed    │ │ Declined     │ │ Pending  │ │
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────┘ │
│                                                                  │
│  [ Search party or guest... ]  [ Filter: All ▾ ]  [ Export CSV ] │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │ Code   │ Party Name   │ Guests │ Status     │ Table │ Edit │  │
│  ├────────────────────────────────────────────────────────────┤  │
│  │ DOM-01 │ Smith Family │ 2 / 2  │ Confirmed  │ [ 12 ]│ [✎]  │  │
│  │ DOM-02 │ Jane Doe     │ 1 / 1  │ Pending    │ [ -- ]│ [✎]  │  │
│  │ DOM-03 │ Garcia Party │ 3 / 4  │ Confirmed  │ [  4 ]│ [✎]  │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                  │
│  [ + Create New Invite ]  [ Copy Selected Links ]   [ Logout ]   │
└──────────────────────────────────────────────────────────────────┘
```

---

## 9. Day-of Event Convenience & Offline Strategy

1. **Mountain Cell Service Fallback:**
   - Chateau de Busay is nestled in the Cebu mountains where mobile network signals can fluctuate.
   - When a guest completes their RSVP or visits `/check-details`, their reservation (party names, allocated seats, and table number) is saved to the browser's `localStorage`.
   - On the wedding day, opening `/check-details` will instantly render their table number and timeline without needing a network connection.
2. **One-Tap Driver Navigation:**
   - Both Waze and Google Maps deep-links are provided on the Venue card and Guest Portal so guests or drivers can navigate without typing the address.
3. **Calendar Reminders:**
   - Guests can download an `.ics` file or save directly to Google Calendar with alarm reminders set 1 day and 2 hours prior to ceremony start.

---

## 10. Technology Stack Summary

| Layer | Technology | Rationale |
|:---|:---|:---|
| **Frontend Framework** | Angular 21 (Standalone, Signals) | Reactive performance, modern Angular architecture, built-in SSR |
| **Server Engine** | Angular SSR + Express | Prerendering and lightning-fast Time-to-First-Byte (TTFB) |
| **Database & Auth** | Supabase (PostgreSQL 15+) | Rock-solid relational integrity, built-in Auth, Row Level Security |
| **Security Layer** | PostgreSQL RPC (`SECURITY DEFINER`) | Prevents anonymous scraping of guest list; strict access isolation |
| **Deployment** | Vercel | Global CDN, instant SSL, zero-config Angular SSR deployment |
| **Audio** | HTML5 Audio API + `AudioService` | Background track (*Tahanan*), smooth volume fading, autoplay compliance |
| **Styling** | Native CSS3 Custom Properties | Zero runtime CSS overhead, GPU-accelerated keyframe animations |

---

## 11. Security & Privacy Guarantees

1. **Guest List Protection:** No public `SELECT` queries are exposed. Guests only receive data corresponding to their specific validated invite code.
2. **Seat Allocation Integrity:** `max_guests` is stored exclusively in Supabase. Guests cannot alter their party size via query parameters or local tampering.
3. **Input Sanitization:** All text inputs (guest names, dietary notes, messages) are sanitized and validated to prevent XSS.
4. **Admin Protection:** The admin portal is guarded by Supabase Auth with secure JWT tokens and session expiration.

---

## 12. Testing Strategy

1. **Unit Tests:**
   - Add mock for `window.matchMedia` in test setup to ensure `responsive-image.util.ts` executes cleanly in jsdom / Vitest.
   - Test `AudioService` volume fade and state transitions.
   - Test calendar URL generation utilities.
2. **Integration Tests:**
   - Test `submit_rsvp` RPC with valid codes, invalid codes, and deadline expirations.
   - Test dynamic form array additions based on party size.
3. **Cross-Browser & Device Verification:**
   - Safari on iOS (verify 3D envelope transform and audio playback).
   - Chrome on Android (verify gyroscope tilt and touch swipe in gallery).
   - Desktop Chrome/Safari/Firefox/Edge.

---

## 13. ✅ Next Steps & Execution Roadmap

### Immediate Priority (Late September 2026):
1. **Phase 4C — Supabase Setup:**
   - Create Supabase project and run the SQL table and RPC migrations.
   - Add `@supabase/supabase-js` and configure `SupabaseService`.
2. **Phase 4B — Dynamic RSVP Frontend:**
   - Implement query param parsing (`?code=...`) in `src/app/components/rsvp/`.
   - Build reactive form rendering guest names, individual attendance, and dietary preferences.
   - Connect submission to Supabase and cache confirmation in `localStorage`.
   - Add "Add to Calendar" buttons.
3. **Build Hygiene:**
   - Adjust `anyComponentStyle` budget in `angular.json` to 16kB to eliminate the build warning.
4. **Phase 5A — Admin MVP:**
   - Set up `/admin` route and table view to generate invitation links.
5. **Site Launch (October 2026):**
   - Deploy to Vercel and distribute personalized links to guests! 🚀
