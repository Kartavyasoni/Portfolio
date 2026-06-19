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
    blurb: 'ETL/ELT pipelines that turn raw, semi-structured data into clean, model-ready datasets.',
    icon: 'pipeline',
    skills: ['AWS S3 / Glue', 'FastAPI ETL', 'Pandas', 'PySpark'],
  },
  {
    title: 'Databases',
    blurb: 'Modeling and querying relational and document stores for analytics and apps.',
    icon: 'database',
    skills: ['PostgreSQL', 'MongoDB', 'Advanced SQL'],
  },
  {
    title: 'Data Science',
    blurb: 'Statistics, experimentation, forecasting, and clustering to surface signal.',
    icon: 'analytics',
    skills: ['A/B Testing', 'ARIMA', 'K-Means', 'PCA'],
  },
  {
    title: 'Analytics & Visualization',
    blurb: 'Turning data into insight through analysis, dashboards, and clear visuals.',
    icon: 'fullstack',
    skills: ['Tableau', 'Streamlit', 'Seaborn', 'FastAPI'],
  },
  {
    title: 'Machine Learning',
    blurb: 'Supervised models tuned to perform on real, imbalanced, messy data.',
    icon: 'ml',
    skills: ['XGBoost', 'Random Forest', 'Scikit-Learn', 'SHAP'],
  },
  {
    title: 'AI & MLOps',
    blurb: 'Deploying, versioning, and monitoring models with reproducible cloud workflows.',
    icon: 'ai',
    skills: ['AWS SageMaker', 'Docker', 'MLflow', 'CI/CD'],
  },
];
