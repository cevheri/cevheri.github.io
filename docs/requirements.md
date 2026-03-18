# cevheri.github.io — Product Requirements

## 1. Overview

| Field | Value |
|-------|--------|
| **Project name** | cevheri.github.io |
| **Purpose** | Personal professional website (portfolio, profile, optional blog) |
| **Primary audience** | Recruiters, clients, peers |
| **Hosting** | GitHub Pages |
| **Repository** | `username.github.io` (user/org site → served at root `https://cevheri.github.io/`) |

## 2. Goals

- Present a clear professional identity: skills, experience, projects, and contact.
- Fast first load, good SEO, and accessible markup.
- Maintainable codebase with a modern static-site stack.
- **Zero-cost** hosting via GitHub Pages; **automated** deploy on push to default branch.

## 3. Technology Stack (2026-oriented)

| Layer | Choice | Notes |
|-------|--------|--------|
| Framework | **Astro 6** | Content-focused, partial hydration, ships minimal JS by default |
| Styling | **CSS** (modern: nesting, `@layer`, variables) or **Tailwind CSS v4** | Pick one; avoid heavy runtime CSS-in-JS |
| TypeScript | **Yes** | Types for content schemas and components |
| Content | **MDX** or **Markdown + content collections** | Blog/docs if needed |
| Package manager | **pnpm** (recommended) or npm | Lockfile committed |
| Node | **LTS** (e.g. 24.x) | Pin in `.nvmrc` / `engines` in `package.json` |

**Out of scope (initially):** Backend, database, authenticated areas (can be added later via serverless or external services).

## 4. Site Structure (suggested)

you will decide after research and analysis

## 5. Non-functional requirements

- **Performance:** Target good Core Web Vitals; lazy images; font subsetting or system/font-display strategy.
- **Accessibility:** WCAG 2.1 AA target; keyboard nav; semantic HTML; sufficient contrast.
- **SEO:** Unique titles/descriptions per page; `sitemap.xml`; `robots.txt`; canonical URLs.
- **Privacy:** No unnecessary third-party trackers; document any analytics if added later.
- **i18n (optional):** Turkish + English(default) if audience is mixed; otherwise single locale (document choice).

## 6. GitHub Pages deployment

- **Build output:** Static export to `dist/` (Astro `output: 'static'`).
- **User site URL:** `https://cevheri.github.io/` — **no** repository name in path (unlike project pages).
- **Base:** `site` in `astro.config` should use `https://cevheri.github.io` (or env-based for previews).
- **Branch:** Publish from **GitHub Actions artifact** (recommended) or from `gh-pages` branch — prefer Actions uploading Pages artifact for full control over build.

## 7. CI/CD — GitHub Actions

**Triggers:** Push to `main`, optional PR workflow for build verification only.

**Jobs (minimal):**

1. **Build**
   - Checkout, setup Node (version aligned with project), install deps, run `astro build`.
2. **Deploy**
   - Upload `dist/` to GitHub Pages via `actions/upload-pages-artifact` + `actions/deploy-pages`, **or** equivalent official pattern.

**Secrets:** None required for public repo → Pages from same repo (use default `GITHUB_TOKEN` with `permissions: pages: write`, `id-token: write`).

**Optional:** Lighthouse or link checker on PR.

## 8. Repository conventions

- `README.md`: how to run locally, how deploy works, license.
- `.gitignore`: `node_modules`, `dist`, `.env` (if any).
- Branch protection on `main` (optional): require PR + passing CI.

## 9. Deliverables (MVP checklist)

- [ ] Astro project initialized with TypeScript
- [ ] Home + About + Projects + Contact (minimum)
- [ ] Responsive layout, dark/light theme **or** single polished theme (decide)
- [ ] Favicon + social preview image
- [ ] GitHub Actions workflow: build + deploy to GitHub Pages
- [ ] Custom domain **optional** — if used, document DNS + `CNAME` / Pages settings



## References:
### My Links
* Github: https://github.com/cevheri
* Linkedin: https://www.linkedin.com/in/cevheribozoglan/
* Medium: https://cevheri.medium.com/
* ResourceGate : https://www.researchgate.net/profile/Mehmet-Cevheri-Bozoglan
* Papers: https://www.researchgate.net/publication/391739021_Repository-Level_Code_Understanding_by_LLMs_via_Hierarchical_Summarization_Improving_Code_Search_and_Bug_Localization
* ORCID: https://orcid.org/0009-0006-4963-1403
* SQL: https://sqlturk.wordpress.com/


### My Current organizations:
* PiA : https://www.pia-group.net/, https://github.com/pia-team
* intellica: https://github.com/intellica-tech, https://intellica-tech.github.io/
* dnext-technology: https://github.com/dnext-technology
* lokumai: https://github.com/lokumai


### Some of my Opensource projects:
* https://libredb.org/
* https://github.com/cevheri/flutter-bloc-advanced
* https://github.com/cevheri/springboot-microservices-example
* https://github.com/cevheri/pyfapi
* https://github.com/dartpilot
* https://github.com/noteail, https://noteail.com/
* https://habizen.app/


### Some of my contrubutions:
* https://github.com/open-webui/open-webui/pull/5613
* https://github.com/jhipster/generator-jhipster/pull/20802, https://github.com/jhipster/generator-jhipster/issues/25608
* https://github.com/linuxmint/cinnamon-spices-applets/pulls?q=is%3Apr+author%3Acevheri+is%3Aclosed
* https://github.com/daodao97/chatmcp/pulls?q=is%3Apr+is%3Aclosed+author%3Acevheri
* https://github.com/langchain-ai/new-langgraph-project/pull/17
* https://github.com/OpenAPITools/openapi-generator/pull/13536