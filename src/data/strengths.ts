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
  { value: 40, suffix: '%', label: 'Fewer production ML incidents (observability)' },
  { value: 60, suffix: '%', label: 'Pipeline latency cut via caching' },
  { value: 0.94, decimals: 2, label: 'Best model F1-score on imbalanced data' },
  { value: 10, suffix: 'M+', label: 'Records engineered & optimized' },
];

export type Pillar = {
  title: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    title: 'Data + ML, end to end',
    description:
      'From AWS S3/Glue and FastAPI ETL pipelines to trained, deployed models — I own the full lifecycle, not just the modeling step.',
  },
  {
    title: 'Production & MLOps mindset',
    description:
      'Data observability, model versioning, and A/B evaluation gates. I build models that survive production, not just notebooks that demo well.',
  },
  {
    title: 'Explainable, trustworthy models',
    description:
      'SHAP reason codes, VIF analysis, and calibrated thresholds — I make models interpretable and defensible, not just accurate.',
  },
  {
    title: 'Strong CS foundation',
    description:
      'An M.S. in Computer Science (3.96 GPA) at Florida Atlantic University, backed by a track record of measurable, quantified impact.',
  },
];
