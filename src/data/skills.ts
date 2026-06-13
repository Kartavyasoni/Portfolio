/**
 * Grouped skill set for the About page.
 * `level` (0–100) drives the animated proficiency bar; keep honest/placeholder.
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
    caption: 'Moving and shaping data reliably at scale.',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'SQL', level: 90 },
      { name: 'PySpark', level: 85 },
      { name: 'Airflow', level: 80 },
      { name: 'Kafka', level: 75 },
      { name: 'dbt', level: 78 },
    ],
  },
  {
    title: 'AI / Machine Learning',
    caption: 'Training and shipping models that hold up in production.',
    skills: [
      { name: 'PyTorch', level: 84 },
      { name: 'scikit-learn', level: 88 },
      { name: 'Deep Learning', level: 80 },
      { name: 'Transformers / LLMs', level: 78 },
      { name: 'Reinforcement Learning', level: 68 },
      { name: 'MLflow', level: 75 },
    ],
  },
  {
    title: 'Data Science',
    caption: 'Turning data into analysis, insight, and visualization.',
    skills: [
      { name: 'Pandas / NumPy', level: 90 },
      { name: 'Statistics', level: 82 },
      { name: 'Visualization', level: 84 },
      { name: 'A/B Testing', level: 76 },
    ],
  },
  {
    title: 'Full-Stack Systems',
    caption: 'APIs, services, databases, and the UIs that surface them.',
    skills: [
      { name: 'FastAPI', level: 86 },
      { name: 'TypeScript / React', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'Docker / K8s', level: 74 },
    ],
  },
];
