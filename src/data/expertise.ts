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
    blurb: 'ETL/ELT pipelines that turn raw, semi-structured data into clean, analytics-ready datasets.',
    icon: 'pipeline',
    skills: ['AWS S3 / Glue', 'FastAPI ETL', 'Pandas', 'PySpark'],
  },
  {
    title: 'Pipeline Orchestration',
    blurb: 'Scheduling, monitoring, and orchestrating complex data workflows end-to-end.',
    icon: 'ml',
    skills: ['Apache Airflow', 'AWS Glue', 'Step Functions', 'Cron'],
  },
  {
    title: 'Cloud & Infrastructure',
    blurb: 'Orchestrating and deploying data pipelines with scalable, reproducible cloud infrastructure.',
    icon: 'ai',
    skills: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions'],
  },
  {
    title: 'Data Modeling & Warehousing',
    blurb: 'Designing schemas and warehouse layers that make downstream analytics fast and reliable.',
    icon: 'analytics',
    skills: ['dbt', 'Snowflake', 'Redshift', 'Star Schema'],
  },
  {
    title: 'Databases',
    blurb: 'Modeling and querying relational and document stores for analytics and apps.',
    icon: 'database',
    skills: ['PostgreSQL', 'MongoDB', 'Advanced SQL'],
  },
  {
    title: 'APIs & Visualization',
    blurb: 'Serving data and insight through APIs, dashboards, and clear visuals.',
    icon: 'fullstack',
    skills: ['FastAPI', 'Streamlit', 'Tableau', 'Seaborn'],
  },
];
