/**
 * "Strengths" section — animated metric cards + qualitative pillars.
 * Metrics use a count-up animation on scroll. Every value is drawn from a
 * real, measured outcome on the resume; `decimals` controls count-up precision.
 */
export type Metric = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
};

export const metrics: Metric[] = [
  { value: 3, suffix: '+', label: 'Years in data science' },
  { value: 150, suffix: 'K+', label: 'Claims scored per month' },
  { value: 16, suffix: '%', label: 'Fraud recall lift over baseline' },
  { value: 3.96, decimals: 2, label: 'Master’s GPA' },
];

export type Pillar = {
  title: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    title: 'Decisions, not just models',
    description:
      'I work backwards from the operational decision — claims routing, fraud alerts, credit approvals — so the model improves a real workflow instead of just a leaderboard metric.',
  },
  {
    title: 'Honest, leakage-free evaluation',
    description:
      'Out-of-time validation, preprocessing fit only inside cross-validation folds, and strict exclusion of post-outcome fields. If a number looks too good, I find out why before shipping it.',
  },
  {
    title: 'Explainable and responsible AI',
    description:
      'SHAP reason codes, calibration, fairness testing, PII masking, and human-in-the-loop review — so stakeholders and auditors can understand and challenge every decision.',
  },
  {
    title: 'Production, not notebooks',
    description:
      'MLflow experiment tracking, Airflow batch scoring, Docker, REST APIs, and drift monitoring. A model only counts once it runs reliably and stays healthy.',
  },
];
