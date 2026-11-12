# Rationale: 3D Hero Section

## Context

User wants a completely new header with 3D and parallax effects, using stock footage from the internet. The project already has @react-three/fiber, @react-three/drei, and three.js installed.

## Options Considered

### Option 1: Pure CSS 3D Transforms
- **Pros**: Lightweight, no WebGL dependency
- **Cons**: Limited to DOM elements, can't do true 3D particles/shaders

### Option 2: Three.js with React Three Fiber (Chosen)
- **Pros**: Already installed, powerful 3D capabilities, React integration, post-processing support
- **Cons**: Larger bundle, WebGL dependency

### Option 3: Spline/Embedded 3D
- **Pros**: No code, visual editor
- **Cons**: External dependency, less control, performance unknown

### Option 4: Canvas 2D with Particles
- **Pros**: Lighter than WebGL
- **Cons**: No true 3D, limited effects

## Stock Footage Sources

**Unsplash Source API** (free, no key needed for basic use):
- Tech backgrounds: `https://images.unsplash.com/photo-1635070041078-e363dbe005cb`
- Abstract gradients: `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe`
- Code/terminal: `https://images.unsplash.com/photo-1555066931-4365d14bab8c`

**Pexels** (free):
- Similar tech/abstract collections

**Direct approach**: Use 3-4 curated URLs as texture sources, load via Three.js TextureLoader

## Parallax Implementation Approach

**Mouse Parallax**: Track `pointermove` on window, normalize to -1..1, apply to scene group rotation with lerp for smoothness

**Scroll Parallax**: Track `scroll` event, map scrollY to camera Z position and scene rotation

**Performance**: Use `useFrame` from R3F for per-frame updates, avoid React state in render loop

## References

- React Three Fiber: https://docs.pmnd.rs/react-three-fiber
- Drei helpers: https://drei.pmnd.rs
- Three.js InstancedMesh: https://threejs.org/docs/#api/en/objects/InstancedMesh
- Unsplash Source: https://source.unsplash.com
- prefers-reduced-motion: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion