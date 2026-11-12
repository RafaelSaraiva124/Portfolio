# Rationale: Home Page Redesign

## Context

The current home page has a basic structure:
- Large "SOFTWARE ENGINEER" heading (Anton font)
- Bio paragraph
- 3 stat cards (6+ Projects, 10+ Technologies, 7+ Proxmox Services)
- AboutMe component
- Sidebar with simple profile card
- Main content area with "Let's Build Something" + ContactForm

The user wants a more professional design similar to motionsites - polished, smooth animations, better visual hierarchy.

## Options Considered

### Option 1: Incremental Polish (Current Structure)
Keep existing sections, just improve styling, add animations.
- **Pros**: Low risk, fast, preserves content
- **Cons**: Doesn't solve structural issues, stat cards feel dated, not "motionsites" quality

### Option 2: Complete Restructure (Chosen)
New professional portfolio structure: Hero → About/Skills → Featured Projects → Experience → CTA
- **Pros**: Industry standard portfolio layout, better storytelling, showcases work effectively
- **Cons**: More work, content migration needed

### Option 3: Landing Page Style
Single hero + project grid + contact, minimal text
- **Pros**: Very visual, modern
- **Cons**: Less space for experience/skills narrative, may not fit software engineer portfolio

## Animation Library Decision

**Chosen**: Framer Motion
- **Why**: Industry standard for React animations, excellent `whileInView`/`viewport` API for scroll animations, works seamlessly with Next.js, tree-shakeable
- **Runner up**: GSAP + ScrollTrigger (more powerful but heavier, steeper learning curve, licensing concerns for commercial)
- **Runner up**: Native CSS scroll animations (limited browser support, less control)

## Profile Card Design

**Chosen**: Clean avatar card (photo, name, title, 3 social icons)
- **Why**: Professional, unobtrusive, sidebar-appropriate, matches motionsites aesthetic
- **Rejected**: Complex 3D hover effects (deleted CSS file), interactive 3D avatar (distracting in sidebar)

## Section Structure Rationale

| Section | Purpose | Content Source |
|---------|---------|----------------|
| Hero | Hook visitor, communicate role immediately | New copy |
| About/Skills | Quick expertise scan | Bio + tech stack from current page |
| Featured Projects | Show best work, drive clicks to detail pages | Existing project data |
| Experience | Credibility, timeline | Current experience page data |
| CTA/Contact | Convert interest | Existing ContactForm |

## References

- Framer Motion scroll animations: https://motion.dev/docs/react/while-in-view
- Portfolio best practices: https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio/
- motionsites design patterns: observed from public examples