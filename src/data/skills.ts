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
    title: 'Programming & Query Development',
    caption: 'The core languages behind every analysis and model.',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL (CTEs, Window Functions)', level: 92 },
      { name: 'Complex Queries & Joins', level: 90 },
      { name: 'Data Structures', level: 85 },
    ],
  },
  {
    title: 'Data Analysis & Feature Engineering',
    caption: 'Turning raw, messy records into model-ready signal.',
    skills: [
      { name: 'Pandas / NumPy', level: 94 },
      { name: 'Feature Engineering', level: 90 },
      { name: 'Exploratory Data Analysis', level: 90 },
      { name: 'Statistical Analysis', level: 86 },
      { name: 'PySpark', level: 82 },
    ],
  },
  {
    title: 'Machine Learning & Predictive Modeling',
    caption: 'Classification, anomaly detection, fraud, and credit risk.',
    skills: [
      { name: 'Scikit-learn', level: 93 },
      { name: 'XGBoost / LightGBM', level: 90 },
      { name: 'Random Forest', level: 88 },
      { name: 'Anomaly & Fraud Detection', level: 87 },
      { name: 'Optuna / GridSearchCV', level: 84 },
    ],
  },
  {
    title: 'Generative AI & LLM Engineering',
    caption: 'RAG, prompting, and agentic workflows on Azure OpenAI.',
    skills: [
      { name: 'Retrieval-Augmented Generation', level: 88 },
      { name: 'Azure OpenAI / LLMs', level: 87 },
      { name: 'Prompt Engineering', level: 88 },
      { name: 'Vector Embeddings & Search', level: 85 },
      { name: 'Agentic Workflows', level: 80 },
    ],
  },
  {
    title: 'Model Evaluation & Responsible AI',
    caption: 'Proving a model works — and that it can be trusted.',
    skills: [
      { name: 'SHAP & Explainability', level: 90 },
      { name: 'Cross-Validation', level: 90 },
      { name: 'ROC-AUC / PR-AUC', level: 88 },
      { name: 'Model Calibration', level: 84 },
      { name: 'Data & Model Drift', level: 83 },
      { name: 'Fairness Testing & Guardrails', level: 80 },
    ],
  },
  {
    title: 'MLOps, Deployment & Automation',
    caption: 'Getting models out of notebooks and into production.',
    skills: [
      { name: 'MLflow / Model Registry', level: 86 },
      { name: 'Docker', level: 85 },
      { name: 'Apache Airflow', level: 83 },
      { name: 'REST APIs / Flask', level: 85 },
      { name: 'CI/CD Pipelines', level: 80 },
      { name: 'Kubernetes / Terraform', level: 74 },
    ],
  },
  {
    title: 'Cloud, Big Data & AI Platforms',
    caption: 'Azure-first, with AWS and Spark for scale.',
    skills: [
      { name: 'Microsoft Azure', level: 88 },
      { name: 'Azure Machine Learning', level: 86 },
      { name: 'Azure AI Foundry / AI Search', level: 82 },
      { name: 'Azure Databricks', level: 82 },
      { name: 'Apache Spark', level: 82 },
      { name: 'AWS (S3, EC2)', level: 78 },
    ],
  },
  {
    title: 'Databases, Visualization & Tools',
    caption: 'Storing the data and communicating what it says.',
    skills: [
      { name: 'PostgreSQL', level: 86 },
      { name: 'Power BI', level: 85 },
      { name: 'Streamlit', level: 84 },
      { name: 'Matplotlib', level: 85 },
      { name: 'Git', level: 88 },
    ],
  },
];
