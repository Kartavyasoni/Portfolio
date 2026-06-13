import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

// Re-export the client-safe accent helpers for server-side consumers.
export {
  categoryAccent,
  accentGradient,
  type AccentKey,
} from '@/lib/project-accents';

/** Hide drafts in production; show everything in dev. */
const visible = (p: Project) => import.meta.env.DEV || !p.data.draft;

/** All publishable projects, sorted by `order` then newest first. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', visible);
  return projects.sort((a, b) => {
    if (a.data.order !== b.data.order) return a.data.order - b.data.order;
    const at = a.data.publishedAt?.getTime() ?? 0;
    const bt = b.data.publishedAt?.getTime() ?? 0;
    return bt - at;
  });
}

/** Featured projects for the home page (capped). */
export async function getFeaturedProjects(limit = 4): Promise<Project[]> {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.data.featured);
  return (featured.length ? featured : projects).slice(0, limit);
}

/** Find projects related to the given one (same category, then shared tags). */
export async function getRelatedProjects(current: Project, limit = 2): Promise<Project[]> {
  const projects = (await getProjects()).filter((p) => p.id !== current.id);
  const scored = projects
    .map((p) => {
      let score = p.data.category === current.data.category ? 2 : 0;
      score += p.data.tags.filter((t) => current.data.tags.includes(t)).length;
      return { p, score };
    })
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.p);
}
