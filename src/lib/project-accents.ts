/**
 * Client-safe accent constants (no `astro:content` import) so they can be used
 * inside React islands as well as Astro components.
 */
export type AccentKey = 'blue' | 'cyan' | 'violet' | 'emerald' | 'amber';

export const categoryAccent: Record<string, AccentKey> = {
  'Data Engineering': 'blue',
  'Machine Learning': 'cyan',
  AI: 'violet',
  'Data Science': 'amber',
  'Full Stack': 'emerald',
};

export const accentGradient: Record<AccentKey, string> = {
  blue: 'from-blue-500/30 via-blue-500/5 to-transparent',
  cyan: 'from-cyan-400/30 via-cyan-400/5 to-transparent',
  violet: 'from-violet-500/30 via-violet-500/5 to-transparent',
  emerald: 'from-emerald-400/30 via-emerald-400/5 to-transparent',
  amber: 'from-amber-400/30 via-amber-400/5 to-transparent',
};
