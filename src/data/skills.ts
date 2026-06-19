/**
 * Grouped skill set for the About page.
 * `level` (0–100) drives the animated proficiency bar (self-assessed).
 */
export type Skill = { name: string; level: number };

export type SkillGroup = {
  title: string;
  caption: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Core',
    caption: 'The core toolkit for wrangling and modeling data.',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Advanced SQL', level: 90 },
      { name: 'Pandas / NumPy', level: 92 },
      { name: 'Scikit-Learn', level: 90 },
      { name: 'PySpark', level: 78 },
    ],
  },
  {
    title: 'Machine Learning',
    caption: 'Supervised learning, forecasting, and statistics.',
    skills: [
      { name: 'XGBoost', level: 88 },
      { name: 'Random Forest', level: 85 },
      { name: 'Time-Series (ARIMA)', level: 80 },
      { name: 'Clustering (K-Means, PCA)', level: 82 },
      { name: 'A/B & Hypothesis Testing', level: 80 },
    ],
  },
  {
    title: 'MLOps & Cloud',
    caption: 'Shipping and operating models reliably in the cloud.',
    skills: [
      { name: 'AWS (S3, Glue, SageMaker)', level: 82 },
      { name: 'Docker', level: 80 },
      { name: 'Git / GitHub Actions', level: 85 },
      { name: 'CI/CD Pipelines', level: 78 },
      { name: 'MLflow', level: 75 },
    ],
  },
  {
    title: 'Systems & Visualization',
    caption: 'APIs, databases, and the dashboards that surface insight.',
    skills: [
      { name: 'FastAPI', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 75 },
      { name: 'Tableau', level: 78 },
      { name: 'Streamlit', level: 84 },
    ],
  },
];
