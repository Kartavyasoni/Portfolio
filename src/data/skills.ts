/**
 * Grouped skill set for the About page.
 * Deliberately unranked — every entry is something used in real work, with no
 * invented proficiency score attached to it.
 */
export type SkillGroup = {
  title: string;
  caption: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming & Query Development',
    caption: 'The core languages behind every analysis and model.',
    skills: [
      'Python',
      'SQL',
      'Common Table Expressions',
      'Window Functions',
      'Complex Queries & Joins',
      'Data Structures',
    ],
  },
  {
    title: 'Data Analysis & Feature Engineering',
    caption: 'Turning raw, messy records into model-ready signal.',
    skills: [
      'Pandas',
      'NumPy',
      'PySpark',
      'Exploratory Data Analysis',
      'Feature Engineering',
      'Missing-Value Treatment',
      'Outlier Analysis',
      'Statistical Analysis',
      'Data Validation',
    ],
  },
  {
    title: 'Machine Learning & Predictive Modeling',
    caption: 'Classification, anomaly detection, fraud, and credit risk.',
    skills: [
      'Scikit-learn',
      'XGBoost',
      'LightGBM',
      'Random Forest',
      'Logistic Regression',
      'Anomaly Detection',
      'Fraud Detection',
      'Credit Risk Modeling',
      'Optuna',
      'GridSearchCV',
    ],
  },
  {
    title: 'Generative AI & LLM Engineering',
    caption: 'RAG, prompting, and agentic workflows on Azure OpenAI.',
    skills: [
      'Azure OpenAI',
      'Large Language Models',
      'Retrieval-Augmented Generation',
      'Prompt Engineering',
      'Azure AI Search',
      'Vector Embeddings',
      'Agentic Workflows',
      'Multimodal AI',
      'Structured Outputs',
    ],
  },
  {
    title: 'Model Evaluation, Monitoring & Responsible AI',
    caption: 'Proving a model works — and that it can be trusted.',
    skills: [
      'SHAP',
      'Cross-Validation',
      'Model Calibration',
      'ROC-AUC',
      'PR-AUC',
      'Data & Model Drift',
      'Fairness Testing',
      'Human-in-the-Loop Validation',
      'AI Guardrails',
      'PII Protection',
    ],
  },
  {
    title: 'MLOps, Deployment & Automation',
    caption: 'Getting models out of notebooks and into production.',
    skills: [
      'MLflow',
      'Model Registry',
      'Apache Airflow',
      'Docker',
      'Kubernetes',
      'Flask',
      'REST APIs',
      'CI/CD Pipelines',
      'Jenkins',
      'Terraform',
    ],
  },
  {
    title: 'Cloud, Big Data & AI Platforms',
    caption: 'Azure-first, with AWS and Spark for scale.',
    skills: [
      'Microsoft Azure',
      'Azure Machine Learning',
      'Azure AI Foundry',
      'Azure Databricks',
      'Azure AI Vision',
      'AWS S3',
      'AWS EC2',
      'Apache Spark',
    ],
  },
  {
    title: 'Databases, Visualization & Tools',
    caption: 'Storing the data and communicating what it says.',
    skills: [
      'PostgreSQL',
      'Power BI',
      'Matplotlib',
      'Streamlit',
      'Git',
      'Model Performance Dashboards',
      'Stakeholder Reporting',
    ],
  },
];
