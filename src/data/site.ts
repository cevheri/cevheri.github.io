export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: string;
  email: string;
}

export const SITE: SiteConfig = {
  name: "Cevheri Bozoglan",
  title: "Cevheri Bozoglan — Senior Full-Stack Engineer",
  description:
    "Senior full-stack engineer based in Istanbul. Building scalable applications with Java, Spring Boot, Flutter, Python, and cloud-native technologies.",
  url: "https://cevheri.github.io",
  author: "Mehmet Cevheri Bozoglan",
  email: "cevheribozoglan@gmail.com",
};

export type UIStrings = Record<string, string>;

export const UI: Record<string, UIStrings> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contributions": "Contributions",
    "nav.contact": "Contact",

    // Hero / Home
    "hero.greeting": "Hi, I'm Cevheri",
    "hero.tagline":
      "Senior Full-Stack Engineer building scalable applications with modern technologies.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Get in Touch",

    // About
    "about.title": "About Me",
    "about.subtitle": "Senior Full-Stack Engineer based in Istanbul",

    // Projects
    "projects.title": "Projects",
    "projects.subtitle": "Open-source projects and applications I've built",
    "projects.featured": "Featured",
    "projects.viewAll": "View All Projects",
    "projects.viewRepo": "View Repository",
    "projects.viewSite": "Visit Site",
    "projects.stars": "Stars",
    "projects.forks": "Forks",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Articles, tutorials, and research papers",
    "blog.readMore": "Read More",
    "blog.readTime": "min read",
    "blog.allPosts": "All Posts",
    "blog.tags": "Tags",
    "blog.publishedOn": "Published on",
    "blog.updatedOn": "Updated on",
    "blog.externalLink": "Read on external site",

    // Contributions
    "contributions.title": "Open-Source Contributions",
    "contributions.subtitle":
      "Pull requests and issues across the open-source ecosystem",
    "contributions.viewPR": "View Pull Request",
    "contributions.viewIssue": "View Issue",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.builtWith": "Built with Astro & Tailwind CSS",
    "footer.source": "Source on GitHub",

    // Common
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
    "common.backHome": "Back to Home",
    "common.notFound": "Page Not Found",
    "common.notFoundDescription":
      "The page you are looking for does not exist or has been moved.",

    // Theme
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",

    // Accessibility
    "a11y.skipToContent": "Skip to content",
    "a11y.mainNavigation": "Main navigation",
    "a11y.socialLinks": "Social links",
    "a11y.themeToggle": "Toggle theme",
  },
};

/**
 * Retrieve a translated UI string by key and locale.
 * Falls back to English if the locale or key is not found.
 */
export function t(key: string, locale: string = "en"): string {
  const strings = UI[locale] ?? UI.en;
  return strings[key] ?? UI.en[key] ?? key;
}
