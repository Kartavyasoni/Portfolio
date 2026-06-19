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
    blurb:
      'ETL/ELT pipelines that turn raw, semi-structured data into clean, model-ready datasets at scale.',
    icon: 'pipeline',
    skills: ['Python', 'Databricks', 'AWS S3 / Glue', 'Apache Airflow', 'PySpark', 'dbt', 'FastAPI'],
  },
  {
    title: 'Databases',
    blurb:
      'Modeling and querying relational and document stores that power analytics, applications, and reporting layers.',
    icon: 'database',
    skills: ['PostgreSQL', 'MongoDB', 'Advanced SQL', 'Data Modeling', 'Snowflake', 'Redshift'],
  },
  {
    title: 'Data Science',
    blurb:
      'Statistics, experimentation, and forecasting that surface real signal from noisy, real-world data.',
    icon: 'analytics',
    skills: ['A/B Testing', 'ARIMA', 'K-Means', 'PCA', 'Hypothesis Testing', 'Pandas'],
  },
  {
    title: 'Analytics & Visualization',
    blurb:
      'Turning analysis into clear, decision-ready dashboards and visuals that stakeholders actually understand and use.',
    icon: 'fullstack',
    skills: ['Tableau', 'Streamlit', 'Seaborn', 'Power BI'],
  },
  {
    title: 'Machine Learning',
    blurb:
      'Supervised models tuned and explained to perform reliably on real, imbalanced, messy data.',
    icon: 'ml',
    skills: ['Scikit-Learn', 'XGBoost', 'Random Forest', 'SHAP', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    title: 'AI & MLOps',
    blurb:
      'Deploying, versioning, and monitoring models through reproducible, production-grade cloud workflows and CI/CD pipelines.',
    icon: 'ai',
    skills: ['AWS SageMaker', 'Docker', 'MLflow', 'CI/CD', 'Kubernetes', 'Model Monitoring', 'LLM', 'RAG'],
  },
];
