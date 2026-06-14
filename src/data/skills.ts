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
    title: 'Data Engineering',
    caption: 'The core toolkit for building and shaping data pipelines.',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Advanced SQL', level: 90 },
      { name: 'PySpark', level: 82 },
      { name: 'Pandas / NumPy', level: 92 },
      { name: 'ETL / ELT Design', level: 88 },
    ],
  },
  {
    title: 'Orchestration & Cloud',
    caption: 'Scheduling pipelines and running them reliably in the cloud.',
    skills: [
      { name: 'AWS (S3, Glue)', level: 84 },
      { name: 'Apache Airflow', level: 74 },
      { name: 'Docker', level: 80 },
      { name: 'CI/CD (GitHub Actions)', level: 82 },
    ],
  },
  {
    title: 'Storage & Modeling',
    caption: 'Relational, document, and warehouse data modeled for analytics.',
    skills: [
      { name: 'PostgreSQL', level: 84 },
      { name: 'MongoDB', level: 76 },
      { name: 'dbt / Warehousing', level: 72 },
      { name: 'Data Modeling (Star Schema)', level: 80 },
    ],
  },
  {
    title: 'Adjacent: ML & Analytics',
    caption: 'Adjacent skills that round out a data engineer.',
    skills: [
      { name: 'Scikit-Learn', level: 88 },
      { name: 'XGBoost', level: 82 },
      { name: 'Time-Series (ARIMA)', level: 78 },
      { name: 'A/B & Hypothesis Testing', level: 78 },
      { name: 'Tableau / Streamlit', level: 80 },
    ],
  },
];
