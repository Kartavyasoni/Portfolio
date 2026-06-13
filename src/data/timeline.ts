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
    period: '2023 — 2025',
    title: 'M.Sc. Computer Science',
    org: 'Friedrich-Alexander-Universität (FAU)',
    summary:
      'Specialized in data systems, machine learning, and distributed computing.',
    featured: true,
  },
  {
    kind: 'experience',
    period: '2024 — Present',
    title: 'Data Engineering — Working Student',
    org: 'Placeholder Company',
    summary:
      'Built and maintained batch + streaming pipelines feeding analytics and ML.',
    featured: true,
  },
  {
    kind: 'leadership',
    period: '2023 — 2024',
    title: 'Student Tech Lead',
    org: 'University Data Society',
    summary: 'Led workshops and mentored peers on data tooling and ML basics.',
    featured: true,
  },
  {
    kind: 'education',
    period: '2018 — 2022',
    title: 'B.Tech Computer Science',
    org: 'Placeholder University',
    summary: 'Foundations in algorithms, databases, and software engineering.',
  },
];
