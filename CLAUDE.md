# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev        # Start dev server (localhost:4321)
npm run build      # Build static site to dist/
npm run preview    # Preview built site locally
npm run check      # TypeScript type checking (astro check)
```

Node >= 24 required (pinned in `.nvmrc`).

## Architecture

**Astro 6 static site** (zero JS by default) with Tailwind CSS v4, MDX, and content collections. Deploys to GitHub Pages via GitHub Actions.

### Layout Chain

`BaseLayout` → wraps every page (html shell, head, header, footer, ViewTransitions via `ClientRouter`)
- `PageLayout` → extends BaseLayout with page title + content container (About, Contributions)
- `PostLayout` → extends BaseLayout with post metadata header + `.prose` wrapper (blog posts)
- Some pages use `BaseLayout` directly when they need custom layout (Homepage, Projects, 404)

### Content Collections (src/content.config.ts)

- **blog**: MDX files in `src/content/blog/`. Schema includes `source` enum (`original`|`medium`|`academic`), optional `externalUrl` (redirects), `conference`/`doi` for academic papers.
- **projects**: JSON files in `src/content/projects/`. Schema includes `repo` (owner/repo format), `featured` flag, `sortOrder`. Fields `stars`/`forks`/`githubDescription` are enriched at build time via GitHub API.

Access via `getCollection("blog")` / `getCollection("projects")`. Render MDX with `render(post)` from `astro:content` (not `post.render()` — that's the old API).

### Data Flow

- `src/data/` — Static config: site metadata (`site.ts`), nav links, social links, OSS contributions. UI strings are i18n-ready with `t(key, locale)` helper.
- `src/lib/github.ts` — Build-time GitHub API client. `enrichProjects()` fetches stars/forks for project cards. Uses `GITHUB_TOKEN` env var in CI. Returns null on failure (graceful degradation).
- `src/lib/utils.ts` — `formatDate()`, `cn()` (class name merger).
- `src/lib/reading-time.ts` — Strips MDX syntax, counts words at 200 wpm.

### Design System (src/styles/global.css)

- **Tailwind v4** configured via `@tailwindcss/vite` plugin (no `tailwind.config.js`). All design tokens in `@theme` block in global.css.
- **Colors**: oklch-based neutral scale (50–950) + blue-violet accent (400/500/600).
- **Dark mode**: Class-based via `@custom-variant dark (&:where(.dark, .dark *))`. The `.dark` class is toggled on `<html>`.
- **Containers**: `--container-max: 1120px`, `--content-max: 720px`.
- **Theme toggle**: Three-state cycle (system→light→dark), persisted in localStorage. Inline script in `BaseHead.astro` prevents FOUC by applying `.dark` before first paint. Handles `astro:after-swap` for ViewTransitions and OS scheme changes.

### Path Aliases (tsconfig.json)

`@/*` → `src/*`, `@components/*`, `@layouts/*`, `@lib/*`, `@data/*`, `@assets/*`

## Key Conventions

- Components use Tailwind classes with CSS variable references: `var(--color-neutral-*)`, `var(--spacing-*)`, `var(--radius-*)`, `var(--shadow-*)`.
- Only ThemeToggle and MobileNav ship client JS (via `is:inline` scripts). Everything else is build-time rendered.
- Blog posts with `externalUrl` redirect via `Astro.redirect()` — no page is rendered for them.
- Featured projects appear on the homepage; sort order determines display priority.
- GitHub API 404s for some org repos (libredb, dartpilot, noteail, habizen) are expected — those repos have different org/naming on GitHub.

## CI/CD

- **deploy.yml**: Push to `main` → `withastro/action@v3` builds → `actions/deploy-pages@v4` deploys.
- **pr-check.yml**: PRs run `npm ci` → `npm run check` → `npm run build`.
- GitHub Pages source must be set to "GitHub Actions" in repo settings.
