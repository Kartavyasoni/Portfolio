/**
 * Featured expertise domains shown on the home page.
 * `icon` maps to a key in the ExpertiseCard glyph set.
 */
export type Expertise = {
  title: string;
  blurb: string;
  icon: 'pipeline' | 'ml' | 'ai' | 'analytics' | 'database' | 'fullstack';
  skills: string[];
};

export const expertise: Expertise[] = [
  {
    title: 'Data Engineering',
    blurb: 'ETL pipelines that turn raw, semi-structured data into clean, model-ready datasets.',
    icon: 'pipeline',
    skills: ['AWS S3 / Glue', 'FastAPI ETL', 'Pandas', 'PySpark'],
  },
  {
    title: 'Machine Learning',
    blurb: 'Supervised models tuned to perform on real, imbalanced, messy data.',
    icon: 'ml',
    skills: ['XGBoost', 'Random Forest', 'Scikit-Learn', 'SHAP'],
  },
  {
    title: 'MLOps & Cloud',
    blurb: 'Deploying, versioning, and monitoring models with reproducible workflows.',
    icon: 'ai',
    skills: ['AWS SageMaker', 'Docker', 'MLflow', 'CI/CD'],
  },
  {
    title: 'Data Science',
    blurb: 'Statistics, experimentation, forecasting, and clustering to surface signal.',
    icon: 'analytics',
    skills: ['A/B Testing', 'ARIMA', 'K-Means', 'PCA'],
  },
  {
    title: 'Databases',
    blurb: 'Modeling and querying relational and document stores for analytics and apps.',
    icon: 'database',
    skills: ['PostgreSQL', 'MongoDB', 'Advanced SQL'],
  },
  {
    title: 'APIs & Visualization',
    blurb: 'Serving models and insight through APIs, dashboards, and clear visuals.',
    icon: 'fullstack',
    skills: ['FastAPI', 'Streamlit', 'Tableau', 'Seaborn'],
  },
];
