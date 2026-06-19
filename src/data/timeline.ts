/**
 * Compact journey timeline — previewed on home, full version on /about.
 * `kind` drives the node color/label (education / experience / leadership).
 */
export type TimelineKind = 'education' | 'experience' | 'leadership';

export type TimelineEntry = {
  kind: TimelineKind;
  period: string;
  title: string;
  org: string;
  summary: string;
  /** Show in the compact home preview. */
  featured?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    kind: 'education',
    period: '2024 — 2026',
    title: 'M.S. Computer Science',
    org: 'Florida Atlantic University · Boca Raton, FL',
    summary:
      'GPA 3.96. Focused on data systems, distributed computing, and large-scale analytics.',
    featured: true,
  },
  {
    kind: 'leadership',
    period: '2025 — 2026',
    title: 'Governor, Student Government',
    org: 'Florida Atlantic University · Davie, FL',
    summary:
      'Led a 7-person Agile team serving 5,000+ students and optimized a $300K budget with time-series forecasting, cutting fiscal variance by 8%.',
    featured: true,
  },
  {
    kind: 'experience',
    period: 'Dec 2023 — Jun 2024',
    title: 'Machine Learning Engineer',
    org: 'Unified Mentor · Gurugram, India',
    summary:
      'Built a data observability framework that cut production pipeline incidents by 40%, and designed scalable AWS data pipelines with automated monitoring and quality gates.',
    featured: true,
  },
  {
    kind: 'experience',
    period: 'Aug 2023 — Nov 2023',
    title: 'Data Science Intern',
    org: 'Remote',
    summary:
      'Architected AWS S3/Glue pipelines (−18% missing values), optimized 10M+ records with vectorized Pandas, and tuned Scikit-Learn classifiers to a 0.94 F1-score.',
  },
  {
    kind: 'education',
    period: '2020 — 2024',
    title: 'B.E. Computer Engineering',
    org: 'Gujarat Technological University · Ahmedabad, India',
    summary: 'GPA 3.70. Foundations in algorithms, systems, and software engineering.',
  },
];
