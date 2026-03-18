# cevheri.github.io

Personal website and portfolio of **Mehmet Cevheri Bozoglan** — Senior Full-Stack Engineer based in Istanbul, Turkey.

**Live:** [cevheri.github.io](https://cevheri.github.io)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro 6](https://astro.build) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Content | MDX + Content Collections |
| Language | TypeScript (strict) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

## Features

- **Dark/Light theme** with localStorage persistence (dark by default)
- **Zero JS by default** — only theme toggle and mobile nav ship client JavaScript
- **Content collections** with typed schemas for blog posts and projects
- **GitHub API integration** — live star/fork counts fetched at build time
- **SEO & GEO optimized** — JSON-LD structured data, Open Graph, Twitter Cards, `llms.txt`, AI-crawler-friendly `robots.txt`
- **Blog** with MDX support, tag filtering, reading time, and related posts
- **Responsive** — mobile-first design with backdrop-blur header and slide-out navigation
- **View Transitions** via Astro ClientRouter for smooth page navigation
- **Accessible** — semantic HTML, skip-to-content, focus-visible, ARIA attributes

## Getting Started

**Prerequisites:** Node.js >= 24

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type check
npm run check

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:4321`.

## Project Structure

```
src/
├── components/
│   ├── layout/      # BaseHead, Header, Footer, MobileNav
│   ├── sections/    # Hero, FeaturedProjects, TechStack, etc.
│   ├── ui/          # Badge, Button, Card, ThemeToggle
│   └── blog/        # PostCard
├── content/
│   ├── blog/        # MDX blog posts
│   └── projects/    # JSON project data
├── data/            # Site config, navigation, social links, contributions
├── layouts/         # BaseLayout, PageLayout, PostLayout
├── lib/             # GitHub API client, utilities, reading time
├── pages/           # All routes (/, /about, /projects, /blog, /contributions)
└── styles/          # Tailwind v4 design system with @theme tokens
```

## Adding Content

### Blog Post

Create a `.mdx` file in `src/content/blog/`:

```yaml
---
title: "Post Title"
description: "Brief description"
pubDate: 2026-03-19
tags: ["tag1", "tag2"]
source: original # or "medium" or "academic"
---

Your content here...
```

### Project

Create a `.json` file in `src/content/projects/`:

```json
{
  "name": "Project Name",
  "slug": "project-slug",
  "tagline": "One-line description",
  "description": "Detailed description.",
  "repo": "owner/repo",
  "techStack": ["Tech1", "Tech2"],
  "category": "app",
  "featured": false,
  "sortOrder": 1
}
```

## Deployment

Pushing to `main` triggers automatic deployment via GitHub Actions:

1. `withastro/action@v3` builds the site
2. `actions/deploy-pages@v4` deploys to GitHub Pages

**Setup:** Repository Settings > Pages > Source > **GitHub Actions**

## License

MIT
