import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Project categories — these power the filter UI on the Projects page.
 * Keep this list in sync with the filter chips in the gallery.
 */
export const PROJECT_CATEGORIES = [
  'Data Engineering',
  'Machine Learning',
  'AI',
  'Data Science',
  'Full Stack',
] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Primary category drives filtering; tags allow cross-listing.
      category: z.enum(PROJECT_CATEGORIES),
      tags: z.array(z.string()).default([]),
      techStack: z.array(z.string()),
      thumbnail: image().optional(),
      // Structured case-study fields rendered on the detail page.
      problem: z.string(),
      solution: z.string(),
      architecture: z.string().optional(),
      results: z.array(z.string()).default([]),
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      // Curation + ordering.
      featured: z.boolean().default(false),
      order: z.number().default(0),
      publishedAt: z.coerce.date().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
