/**
 * Featured expertise domains shown on the home page.
 * `icon` maps to a key in the ExpertiseCard glyph set.
 */
export type Expertise = {
  title: string;
  blurb: string;
  icon: 'pipeline' | 'distributed' | 'warehouse' | 'orchestration' | 'cloud' | 'ai';
  skills: string[];
};

export const expertise: Expertise[] = [
  {
    title: 'Data Pipeline Architecture',
    blurb:
      'Building scalable pipelines that move, transform, and deliver reliable data across complex systems.',
    icon: 'pipeline',
    skills: ['Python', 'SQL', 'API Integration', 'Batch Processing', 'ETL/ELT', 'Data Quality'],
  },
  {
    title: 'Distributed Data Processing',
    blurb:
      'Processing massive datasets efficiently using distributed computing frameworks for high-performance data transformations.',
    icon: 'distributed',
    skills: ['PySpark', 'Apache Spark', 'Pandas', 'Hadoop', 'Distributed Systems', 'Data Modeling'],
  },
  {
    title: 'Warehouses & Lakehouses',
    blurb:
      'Designing modern storage architectures that unify data lakes and warehouses for seamless analytics.',
    icon: 'warehouse',
    skills: ['Snowflake', 'Databricks', 'Redshift', 'Delta Lake', 'PostgreSQL', 'OLAP'],
  },
  {
    title: 'Orchestration & Transformation',
    blurb:
      'Automating complex workflows and transforming operational data into trusted, analytics-ready business datasets.',
    icon: 'orchestration',
    skills: ['Apache Airflow', 'dbt', 'Prefect', 'Event-Driven Architecture', 'Data Governance'],
  },
  {
    title: 'Cloud & DevOps Infrastructure',
    blurb:
      'Designing secure, cloud-native environments that power scalable data architectures and robust operational workloads.',
    icon: 'cloud',
    skills: ['AWS', 'S3', 'Lambda', 'Docker', 'Kubernetes', 'Terraform', 'CloudWatch'],
  },
  {
    title: 'AI & ML Data Foundations',
    blurb:
      'Engineering production-ready infrastructure, feature stores, and pipelines that keep AI and ML unstoppable.',
    icon: 'ai',
    skills: ['Vector Databases', 'RAG Architectures', 'MLOps', 'Feature Engineering', 'MLflow', 'LLMOps'],
  },
];
