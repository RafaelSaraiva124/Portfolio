# Rafael Saraiva — Portfolio

> A modern, performant developer portfolio built with Next.js 16 and Tailwind CSS v4. Features dark/light theme, and a fully responsive design.

![Portfolio Preview](./public/og-image.png)

---

## 🚀 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | Next.js 16 (App Router), React 19, TypeScript 5 |
| **Styling** | Tailwind CSS v4, CSS Variables, `tw-animate-css` |
| **UI Components** | Radix UI, shadcn/ui, class-variance-authority, clsx |
| **Animations** | Embla Carousel, Custom Parallax |
| **Forms & Email** | Resend, React Hook Form (implied), Sonner (toasts) |
| **Theming** | next-themes (dark/light/system) |
| **Tooling** | ESLint 9, PostCSS, Autoprefixer |

---

## ✨ Features

- **Dark/Light/System Theme** — Persisted preference with smooth transitions
- **Responsive Design** — Mobile-first, works beautifully on all screen sizes
- **Project Showcase** — Detailed project pages with carousels and tech tags
- **Experience Timeline** — Professional experience cards with expandable details
- **Tools & Skills** — Categorized technical stack with visual icons
- **Contact Form** — Serverless email via Resend API
- **SEO Optimized** — Dynamic metadata, sitemap, robots.txt, Open Graph tags
- **Performance** — Next.js 16 Turbopack, optimized fonts
- **Accessibility** — Semantic HTML, ARIA labels, focus management, color contrast

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/contact/route.ts      # Contact form API (Resend)
│   ├── experience/page.tsx       # Experience timeline page
│   ├── projects/
│   │   ├── page.tsx              # Projects listing
│   │   ├── staynet/page.tsx      # StayNet project detail
│   │   └── portfolio/page.tsx    # This portfolio detail
│   ├── tools/page.tsx            # Tools & skills page
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Home page (Hero, About, Featured, CTA)
│   ├── globals.css               # Global styles + CSS variables
│   ├── robots.ts                 # Dynamic robots.txt
│   └── sitemap.ts                # Dynamic sitemap.xml
├── components/
│   ├── ui/                       # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── badge.tsx
│   │   ├── carousel.tsx
│   │   ├── accordion.tsx
│   │   ├── tooltip.tsx
│   │   ├── separator.tsx
│   │   └── sonner.tsx
│   ├── home/                     # Home page sections
│   │   ├── Hero.tsx              # Hero section orchestration
│   │   ├── HeroContent.tsx       # Hero text/CTA overlay
│   │   ├── AboutSkills.tsx       # About + skills section
│   │   ├── Experience.tsx        # Experience preview
│   │   ├── FeaturedProjects.tsx  # Featured projects carousel
│   │   ├── CTAContact.tsx        # Contact CTA section
│   │   └── useParallax.ts        # Scroll parallax hook
│   ├── navbar/                   # Navigation bar
│   ├── theme/                    # Theme toggle + provider
│   ├── contactForm/              # Contact form component
│   ├── profile/                  # Profile card
│   ├── softwareProjects/         # Software projects grid
│   ├── designProjects/           # Design projects (3D models)
│   ├── experiences/              # Experience cards
│   ├── tools/                    # Tools/skills cards
│   └── about/                    # About me component
├── lib/
│   ├── utils.ts                  # cn() helper, common utilities
│   ├── rate-limit.ts             # API rate limiting
│   └── get-age.ts                # Age calculation utility
├── public/                       # Static assets (images, models, fonts)
└── components.json               # shadcn/ui config
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** ≥ 20.x
- **npm** ≥ 10.x (or yarn/pnpm/bun)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start dev server with Turbopack
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run start
```

### Linting & Type Checking

```bash
# Run ESLint
npm run lint

# Type check (if configured)
npx tsc --noEmit
```

---

## 🎨 Customization

### Theming

Edit `app/globals.css` to customize the color palette via CSS variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode overrides */
}
```

### Content

Update your personal info in:
- `components/home/HeroContent.tsx` — Name, title, tagline
- `components/home/AboutSkills.tsx` — Bio, skills, stack
- `components/experiences/experiencesCard.tsx` — Work history
- `components/softwareProjects/softwareProjects.tsx` — Project data
- `app/projects/*/page.tsx` — Project detail pages

---

## 📦 Deployment

### Current Setup: Self-Hosted with Coolify + Cloudflare Tunnel

The portfolio is deployed on a **private server** using:

- **Coolify** — Open-source PaaS for managing deployments
- **Cloudflare Tunnel** — Secure ingress without exposing ports
- **Docker** — Containerized Next.js standalone build

```yaml
# coolify.yaml (example)
version: 1
services:
  portfolio:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### Docker (Production)

```dockerfile
# Dockerfile
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=base /app/public ./public
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

### Static Export (if needed)

```javascript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
}

export default nextConfig
```

---

## 🧪 Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

## 🤝 Connect

- **LinkedIn** — [linkedin.com/in/rafael-saraiva-517bb6418](https://www.linkedin.com/in/rafael-saraiva-517bb6418/)
- **GitHub** — [github.com/RafaelSaraiva124](https://github.com/RafaelSaraiva124/)
- **Email** — [rafaelsaraivawork@gmail.com](mailto:rafaelsaraivawork@gmail.com)

---

> Built with ❤️ using Next.js 16 and Tailwind CSS v4