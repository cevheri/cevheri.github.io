import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    canonicalUrl: z.string().optional(),
    externalUrl: z.string().optional(),
    source: z.enum(["original", "medium", "academic"]),
    conference: z.string().optional(),
    doi: z.string().optional(),
    coAuthors: z.array(z.string()).optional(),
    ogImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    description: z.string(),
    url: z.string().optional(),
    repo: z.string(),
    techStack: z.array(z.string()),
    category: z.enum(["app", "library", "template", "tool", "extension", "org"]),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(0),
    stars: z.number().optional(),
    forks: z.number().optional(),
    githubDescription: z.string().optional(),
  }),
});

export const collections = { blog, projects };
