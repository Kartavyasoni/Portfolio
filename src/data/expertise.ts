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
    blurb: 'Designing resilient ETL/ELT pipelines that move and shape data at scale.',
    icon: 'pipeline',
    skills: ['PySpark', 'Airflow', 'dbt', 'Kafka'],
  },
  {
    title: 'Machine Learning',
    blurb: 'Training, evaluating, and shipping models that hold up in production.',
    icon: 'ml',
    skills: ['PyTorch', 'scikit-learn', 'MLflow', 'XGBoost'],
  },
  {
    title: 'Artificial Intelligence',
    blurb: 'Applied deep learning and LLM systems with measurable outcomes.',
    icon: 'ai',
    skills: ['Transformers', 'RAG', 'LangChain', 'RL'],
  },
  {
    title: 'Data Science',
    blurb: 'Turning messy data into clear analysis, insight, and visualization.',
    icon: 'analytics',
    skills: ['Pandas', 'Statistics', 'Plotly', 'A/B Testing'],
  },
  {
    title: 'Databases',
    blurb: 'Modeling and tuning relational, warehouse, and vector stores.',
    icon: 'database',
    skills: ['PostgreSQL', 'Snowflake', 'Redis', 'pgvector'],
  },
  {
    title: 'Full-Stack Systems',
    blurb: 'End-to-end products — APIs, services, and the UIs that surface them.',
    icon: 'fullstack',
    skills: ['FastAPI', 'TypeScript', 'React', 'Docker'],
  },
];
