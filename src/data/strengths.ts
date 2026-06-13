/**
 * "Strengths" section — animated metric cards + qualitative pillars.
 * Metrics use a count-up animation on scroll; keep values honest/placeholder.
 */
export type Metric = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const metrics: Metric[] = [
  { value: 15, suffix: '+', label: 'Production data pipelines shipped' },
  { value: 8, suffix: 'TB', label: 'Data processed per day at peak' },
  { value: 99.9, suffix: '%', label: 'Pipeline uptime maintained' },
  { value: 12, suffix: '+', label: 'ML models deployed to production' },
];

export type Pillar = {
  title: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    title: 'Data + AI, combined',
    description:
      'I sit at the seam between data engineering and ML — building the pipelines that feed models and the models that justify the pipelines.',
  },
  {
    title: 'Production-focused mindset',
    description:
      'Notebooks are a starting point, not a deliverable. I optimize for reliability, observability, and cost in real systems.',
  },
  {
    title: 'Full-stack data systems',
    description:
      'From ingestion to API to dashboard — I can own a data product end to end without handoffs falling through the cracks.',
  },
  {
    title: 'Scalable by design',
    description:
      'A CS Master’s foundation means I reason about complexity, distributed systems, and trade-offs before they become incidents.',
  },
];
