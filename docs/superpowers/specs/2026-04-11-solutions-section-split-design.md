# Solutions Section Split: Design Spec

## Overview

Split the Solutions section into two visually distinct groups across the navbar mega menu and homepage hero cards. Group 1 contains industry-specific OS products; Group 2 contains Custom Solutions with differentiated visual treatment.

## Groups

### Group 1: "Purpose-built for your field"
- Real Estate OS (`/real-estate-os`) — existing
- Dental Clinic OS (`/dental-clinic-os`) — existing
- Industrial OS (`/industrial-os`) — **new product page**

### Group 2: "Tailored"
- Custom Solutions (`/custom-solutions`) — existing

## Layout: Approach C — Side-by-Side Split

Both the navbar mega menu and hero cards use the same layout concept: Group 1 takes ~75% width as a multi-column grid, Group 2 takes ~25% as a single tall dark card. Both groups have visible group headings.

---

## Hero Cards (Homepage)

### Current
- 3-column equal grid (`grid-cols-3 gap-3`)
- All cards are white with colored illustration backgrounds

### New Structure
```
[Group 1 heading: "Purpose-built for your field"]     [Group 2 heading: "Tailored"]
+------------------+------------------+------------------+  +-------------------+
| Real Estate OS   | Dental Clinic OS | Industrial OS    |  | Custom Solutions  |
| (white card)     | (white card)     | (white card)     |  | (dark/charcoal    |
|                  |                  |                  |  |  card, full height)|
| [illustration]   | [illustration]   | [illustration]   |  |                   |
+------------------+------------------+------------------+  +-------------------+
```

### Implementation Details

**Grid**: `grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6`
- Left column: nested `grid grid-cols-1 sm:grid-cols-3 gap-3` for 3 OS cards
- Right column: single dark card, full height via `h-full`

**Group 1 cards** (white, same as current):
- `bg-white rounded-xl border border-sand p-6`
- Each has: title, intro text, illustration with colored background
- Hover: `border-warm-gray` + arrow animation

**Group 2 card** (Custom Solutions — dark treatment):
- `bg-charcoal text-white rounded-xl p-6`
- Settings/gear icon with `bg-white/10` badge
- Title in white, description in `text-white/60`
- Bottom tagline: "No templates. No migrations." in `text-white/30` with top border `border-white/10`
- Full height to match Group 1 row
- Hover: `bg-black` transition

**Group headings**:
- `font-display text-caption font-bold tracking-[0.08em] uppercase mb-3`
- Group 1: `text-accent-blue` (matches existing label style)
- Group 2: `text-warm-gray`

**Mobile**: Stacks vertically — Group 1 heading, 3 OS cards (1-column), Group 2 heading, Custom Solutions card.

---

## Navbar Mega Menu

### Current
- 3-column equal grid (`grid-cols-3 gap-2`)
- All cards are white with icons and cube images

### New Structure
Same side-by-side concept adapted for the dropdown.

**Grid**: `grid-cols-[3fr_1fr] gap-2`
- Left: 3-column sub-grid for OS cards (same white card style as today)
- Right: dark Custom Solutions card, full height

**Group headings in navbar**:
- Small uppercase labels above each group
- Group 1: "Purpose-built for your field" in `text-accent-blue`
- Group 2: "Tailored" in `text-warm-gray`

**Custom Solutions navbar card**:
- `bg-charcoal text-white rounded-2xl p-5`
- Settings icon, title, description
- No cube image (kept minimal for dark treatment)

### Mobile Menu
- OS products listed under "Purpose-built for your field" sub-heading
- Divider
- Custom Solutions under "Tailored" sub-heading (optionally with dark background to maintain visual differentiation)

---

## New: Industrial OS Product

### Page
- Route: `/industrial-os`
- Page structure: identical to `dental-clinic-os` and `real-estate-os` (hero, problem section, solutions, case study, how we work, FAQ, final CTA)
- Content focus: production monitoring, supply chain automation, quality control for mid-market manufacturers

### Visual Identity
- Color: `bg-[#FEF3C7]` (warm amber)
- Icon: `Factory` from Lucide (`text-amber-600`)
- Cube image: placeholder needed (`/images/industrial-os-cube.png`)

### Content Sections (English)
Derived from existing `industryGrid` description: "Production monitoring, supply chain automation, and quality control systems for mid-market manufacturers."

Key modules to feature:
1. Production Monitoring — real-time production line tracking, anomaly detection
2. Supply Chain Automation — procurement, inventory, vendor coordination
3. Quality Control — automated inspection, compliance documentation
4. Maintenance Prediction — predictive maintenance, downtime prevention

### i18n
- New namespace: `industrialOS` in all 3 locale files (en/es/ca)
- New nav keys: `nav.industrialOS`, `nav.industrialOSDesc`
- New footer key: `footer.industrialOS`
- Hero card keys added to `hero.cards.industrial.title` / `.intro`

---

## Footer

Footer stays a flat list. Add "Industrial OS" to the solutions column:
1. Real Estate OS
2. Dental Clinic OS
3. Industrial OS (new)
4. Custom Solutions

---

## i18n Keys (New/Modified)

### New keys in all locale files:
```
nav.industrialOS: "Industrial OS"
nav.industrialOSDesc: "Production monitoring, supply chain automation, and quality control systems for mid-market manufacturers."

hero.cards.industrial.title: "Industrial OS"
hero.cards.industrial.intro: "Monitor production lines in real time, automate supply chain coordination, and catch quality issues before they ship. Your factory runs smarter."

hero.groupHeadings.purposeBuilt: "Purpose-built for your field"
hero.groupHeadings.tailored: "Tailored"

footer.industrialOS: "Industrial OS"

industrialOS.hero.label: "Industrial OS"
industrialOS.hero.heading: ...
(full page namespace ~70 keys, same structure as dentalClinicOS)
```

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/Hero.tsx` | New 2-group grid layout with headings |
| `src/components/Navbar.tsx` | New mega menu layout with 2 groups |
| `src/components/Footer.tsx` | Add Industrial OS link |
| `src/components/CardIllustrations.tsx` | Add `IndustrialIllustration` component |
| `src/app/[lang]/industrial-os/page.tsx` | **New file** — Industrial OS product page |
| `messages/en.json` | Add industrialOS namespace + nav/hero/footer keys |
| `messages/es.json` | Same (English placeholders) |
| `messages/ca.json` | Same (English placeholders) |

---

## Design Decisions

1. **75/25 split ratio** — Group 1 gets dominant space (3 products), Custom Solutions is visually distinct but not secondary in importance
2. **Dark card for Custom Solutions** — creates immediate visual contrast, signals "this is different" without needing to read the heading
3. **Group headings** — on both navbar and hero for consistency; uses existing label typography pattern
4. **Industrial OS color: amber** — warm/industrial tone, distinct from blue (real estate) and gray (dental)
5. **No cube image on dark Custom Solutions card** — keeps it minimal and distinct from OS product cards
6. **Mobile stacks vertically** — both groups visible, divider between them
