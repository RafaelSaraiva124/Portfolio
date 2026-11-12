# Home Page Redesign

**Status**: Proposed
**Date**: 2026-10-29
**Mode**: ENHANCEMENT

## Summary

Redesign the home page (`app/page.tsx`) to be more professional and polished with smooth scroll animations, modern typography, and better visual hierarchy. Replace the current layout (large heading, bio paragraph, 3 stat cards, AboutMe component) with a professional portfolio structure: Hero → About/Skills → Featured Projects → Experience → CTA. Redesign the sidebar profile card as a clean professional avatar card (photo, name, role, social links).

## Requirements

### Functional Requirements

- **FR-1**: Hero section with animated headline, sub-headline, and primary CTA
- **FR-2**: About/Skills section showing expertise areas with smooth entrance animations
- **FR-3**: Featured Projects section with 2-3 highlighted projects, hover effects, links to project detail pages
- **FR-4**: Experience timeline section with smooth scroll reveal
- **FR-5**: CTA/Contact section at bottom with contact form
- **FR-6**: Sidebar profile card redesigned as clean avatar card (photo, name, title, social links)
- **FR-7**: All sections use Framer Motion for scroll-triggered animations (fade, slide, stagger)
- **FR-8**: Responsive design works on mobile, tablet, desktop
- **FR-9**: Dark/light theme support maintained

### Non-Functional Requirements

- **NFR-1**: Animations feel smooth (60fps) and not janky
- **NFR-2**: Page loads fast, animations don't block interaction
- **NFR-3**: Accessible - proper heading hierarchy, focus states, reduced motion support
- **NFR-4**: Consistent with existing design system (Tailwind, shadcn/ui, CSS variables)

## Decision

### Design Approach

**Stack**: Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4, Framer Motion, shadcn/ui components

**Animation Library**: Framer Motion (already commonly used with Next.js, excellent scroll animations via `whileInView`, `viewport`)

**Structure** (single page, scrollable):
1. **Hero** - Full viewport height on desktop, animated headline, role, CTA button
2. **About / Skills** - Brief intro + tech stack chips with stagger animation
3. **Featured Projects** - 2-3 project cards with hover lift, image, tags, links
4. **Experience** - Timeline layout with company, role, dates, highlights
5. **CTA / Contact** - Contact form with animated entrance

**Sidebar Profile Card** (in `layout.tsx`):
- Circular avatar photo
- Name + "Software Engineer" title
- 3 social links (GitHub, LinkedIn, Email)
- Subtle hover glow, no complex 3D

**Typography**: Keep Anton for display headings, Zalando Sans for body. Use CSS clamp for fluid scaling.

**Color System**: Use existing CSS variables (`--primary`, `--muted`, `--card`, etc.) for theme consistency.

### Component Architecture

```
app/
├── page.tsx                    # Main page composition
├── components/
│   ├── home/
│   │   ├── Hero.tsx           # Hero section with animations
│   │   ├── AboutSkills.tsx    # About + tech stack
│   │   ├── FeaturedProjects.tsx # Project cards grid
│   │   ├── Experience.tsx     # Timeline component
│   │   └── CTAContact.tsx     # Contact form section
│   ├── profile/
│   │   └── ProfileCard.tsx    # Redesigned sidebar card
│   └── ui/                    # Existing shadcn components
```

### Animation Patterns

- **Page load**: Hero elements stagger in (heading → subhead → CTA)
- **Scroll reveal**: Each section fades/slides up when entering viewport
- **Stagger children**: Lists (skills, projects, experience items) animate with 100-150ms delay
- **Hover**: Project cards lift + shadow, profile card subtle glow
- **Reduced motion**: Respect `prefers-reduced-motion` - disable animations

## Build Plan

### Phase 1: Foundation & Sidebar Profile Card
1. Create `components/profile/ProfileCard.tsx` (new professional version)
2. Update `app/layout.tsx` to use new ProfileCard
3. Test sidebar sticky positioning works

### Phase 2: Home Page Sections
4. Create `components/home/Hero.tsx` with Framer Motion animations
5. Create `components/home/AboutSkills.tsx` with tech stack chips
6. Create `components/home/FeaturedProjects.tsx` with project cards
7. Create `components/home/Experience.tsx` with timeline
8. Create `components/home/CTAContact.tsx` with contact form
9. Compose all sections in `app/page.tsx`

### Phase 3: Animation Polish
10. Add scroll-triggered animations to each section
11. Add stagger animations for lists
12. Test reduced motion support
13. Polish timing, easing, responsiveness

### Phase 4: Integration & Verification
14. Verify dark/light theme works
15. Test mobile responsiveness
16. Performance check (no layout shift, smooth scroll)

## Consequences

### Positive
- Professional, modern portfolio that stands out
- Smooth animations create premium feel
- Better content hierarchy guides visitors
- Showcases projects and experience effectively

### Negative / Risks
- Framer Motion adds ~50kb bundle size (mitigated by tree-shaking)
- More components to maintain
- Animation complexity could cause bugs if not tested

### Migration
- Old `app/page.tsx` content moves to new section components
- `components/profile/profilecard.tsx` replaced by new `ProfileCard.tsx`
- `components/about/aboutme.tsx` may be deprecated or moved into AboutSkills

## Follow-up

- Add project detail pages integration (already exist at `/projects/staynet`, `/projects/portfolio`)
- Consider adding blog/writing section later
- Add analytics for CTA conversion tracking

## Rationale

See `rationale.md` for detailed context, options considered, and references.