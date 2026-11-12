# 3D Hero Section with Parallax Effects

**Status**: Proposed
**Date**: 2026-10-29
**Mode**: ENHANCEMENT

## Summary

Replace the current Hero.tsx with a new 3D hero section using React Three Fiber and Drei. Features: interactive 3D scene with mouse parallax, floating geometric shapes/particles, stock footage background images, smooth scroll animations, performance optimized with LOD, reduced motion fallback.

## Requirements

### Functional Requirements

- **FR-1**: 3D scene with floating geometric shapes (cubes, spheres, torus) that respond to mouse movement
- **FR-2**: Parallax effect on scroll - 3D scene moves at different speed than content
- **FR-3**: Stock footage background from Unsplash/Pexels (tech/abstract themes)
- **FR-4**: Hero content (headline, subhead, CTAs) overlays the 3D scene
- **FR-5**: Mouse move parallax - subtle rotation/translation of 3D objects
- **FR-6**: Scroll-triggered animations for hero content (Framer Motion)
- **FR-7**: Reduced motion support - disable 3D animations when prefers-reduced-motion
- **FR-8**: Performance optimized - use InstancedMesh for particles, LOD for complex objects
- **FR-9**: Responsive - works on mobile, tablet, desktop

### Non-Functional Requirements

- **NFR-1**: 60fps on desktop, 30fps on mobile
- **NFR-2**: Initial load < 3s, 3D scene loads progressively
- **NFR-3**: Graceful degradation - show static image if WebGL fails
- **NFR-4**: Accessible - proper ARIA labels, keyboard navigation for CTAs

## Decision

### Tech Stack

- **React Three Fiber** (already installed) - React renderer for Three.js
- **@react-three/drei** (already installed) - Useful helpers (Html, Effects, Loaders)
- **Framer Motion** (already installed) - For overlay content animations
- **Three.js** (already installed) - Core 3D library
- **Stock images**: Unsplash Source API or direct URLs for tech/abstract backgrounds

### 3D Scene Design

**Scene Composition**:
- Camera: PerspectiveCamera, position [0, 0, 5], fov 50
- Floating particles: 100-200 small spheres/cubes using InstancedMesh
- Hero objects: 3-5 larger geometric shapes (torus, icosahedron, box) with wireframe/material
- Lighting: AmbientLight + DirectionalLight + PointLights for glow
- Post-processing: Bloom effect for glow (optional, performance dependent)

**Parallax Implementation**:
- Mouse move: Track normalized mouse position (-1 to 1), apply to group rotation
- Scroll: Use scrollY to translate camera Z and rotate scene slowly
- Use `useFrame` from R3F for smooth per-frame updates

**Stock Footage Strategy**:
- Use Unsplash Source URLs for tech/abstract images as background textures
- Example: `https://images.unsplash.com/photo-1635070041078-e363dbe005cb` (tech background)
- Load as texture for plane behind 3D scene or as environment map

### Component Architecture

```
components/home/
├── Hero3D.tsx              # Main 3D hero component
├── Hero3DScene.tsx         # R3F Canvas and scene setup
├── Hero3DObjects.tsx       # Floating geometric objects
├── Hero3DParticles.tsx     # InstancedMesh particle system
├── HeroContent.tsx         # Overlay content (headline, CTAs)
└── useParallax.ts          # Hook for mouse/scroll parallax
```

### Animation Patterns

- **Entry**: Hero content fades up with stagger (Framer Motion)
- **3D Objects**: Gentle floating animation (sin wave on Y, slow rotation)
- **Mouse Parallax**: Scene group rotates ±5° based on mouse position
- **Scroll Parallax**: Camera Z translates, scene rotates slowly
- **Reduced Motion**: Static scene, only content animations

## Build Plan

### Phase 1: Core 3D Scene
1. Create `Hero3DScene.tsx` - Canvas setup, camera, lighting, performance settings
2. Create `Hero3DObjects.tsx` - Main floating geometric shapes with materials
3. Create `Hero3DParticles.tsx` - InstancedMesh particle system
4. Create `useParallax.ts` - Hook for mouse/scroll tracking

### Phase 2: Integration & Content
5. Create `HeroContent.tsx` - Overlay content with Framer Motion animations
6. Create `Hero3D.tsx` - Compose scene + content, handle reduced motion
7. Replace `Hero.tsx` with new `Hero3D.tsx` in page.tsx

### Phase 3: Polish & Optimization
8. Add stock footage background textures
9. Add bloom/post-processing effects
10. Performance optimization (LOD, frustum culling, texture compression)
11. Test reduced motion fallback
12. Mobile responsiveness testing

## Consequences

### Positive
- Impressive 3D hero that stands out
- Demonstrates Three.js/React Three Fiber skills
- Interactive and engaging for visitors

### Negative / Risks
- Increased bundle size (~100kb for Three.js)
- Performance risk on low-end devices
- Complexity in maintenance
- WebGL may not work in all environments

### Mitigation
- Lazy load 3D scene with Suspense
- Provide static fallback image
- Use `prefers-reduced-motion` to disable
- Optimize with InstancedMesh, limit particle count on mobile

## Follow-up

- Add more complex 3D models (GLTF) for portfolio pieces
- Consider WebGL shaders for custom effects
- Add audio-reactive visualizations

## Rationale

See `rationale.md` for detailed context, options considered, and references.