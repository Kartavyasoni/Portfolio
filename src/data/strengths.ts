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
  { value: 40, suffix: '%', label: 'Fewer pipeline data quality incidents' },
  { value: 60, suffix: '%', label: 'Pipeline latency cut via caching' },
  { value: 99.9, suffix: '%', decimals: 1, label: 'Pipeline uptime SLA maintained' },
  { value: 10, suffix: 'M+', label: 'Records engineered & optimized' },
];

export type Pillar = {
  title: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    title: 'Pipelines, end to end',
    description:
      'From raw ingestion on AWS S3/Glue and FastAPI ETL to clean, analytics-ready datasets — I own the full data pipeline lifecycle, not just one step.',
  },
  {
    title: 'Production-grade engineering mindset',
    description:
      'Data observability, pipeline monitoring, and schema validation. I build pipelines that survive production edge cases, not just ones that run once.',
  },
  {
    title: 'Reliable, trustworthy data',
    description:
      'Data quality checks, VIF analysis, and anomaly detection — I make pipelines produce data that downstream teams can actually trust.',
  },
  {
    title: 'Strong CS foundation',
    description:
      'An M.S. in Computer Science (3.96 GPA) at Florida Atlantic University, backed by a track record of measurable, quantified impact.',
  },
];
