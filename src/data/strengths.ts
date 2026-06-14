/**
 * "Strengths" section — animated metric cards + qualitative pillars.
 * Metrics use a count-up animation on scroll. Values are drawn from real
 * resume outcomes; `decimals` controls count-up precision.
 */
export type Metric = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
};

export const metrics: Metric[] = [
  { value: 1, suffix: 'B+', label: 'Records Processed' },
  { value: 5, suffix: '+', label: 'End-to-End Projects' },
  { value: 3.96, decimals: 2, label: 'Master’s GPA' },
  { value: 100, suffix: '%', label: 'Production-First Mindset' },
];

export type Pillar = {
  title: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    title: 'End-to-End Ownership',
    description:
      'I design and build workflows, from ingestion and transformation to warehousing, orchestration, and consumption. I understand how every layer of the data stack connects and performs.',
  },
  {
    title: 'Reliability First',
    description:
      'Reliable data beats clever pipelines. I prioritize data quality, observability, monitoring, validation, and fault tolerance to ensure systems remain trustworthy as they scale.',
  },
  {
    title: 'Built for Scale',
    description:
      'Whether processing millions of records, orchestrating complex workflows, or supporting AI workloads, I engineer solutions that remain performant, maintainable, and cost-efficient.',
  },
  {
    title: 'AI-Ready Data Foundations',
    description:
      'Machine learning succeeds when the underlying data infrastructure is engineered correctly. I build pipelines and workflows that transform raw data into production-ready assets for AI systems.',
  },
];
