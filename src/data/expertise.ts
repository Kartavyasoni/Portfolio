/**
 * Featured expertise domains shown on the home page.
 * `icon` maps to a key in the ExpertiseCard glyph set.
 */
export type Expertise = {
  title: string;
  blurb: string;
  icon: 'analytics' | 'ml' | 'ai' | 'shield' | 'pipeline' | 'database';
  skills: string[];
};

export const expertise: Expertise[] = [
  {
    title: 'Data Analysis & Feature Engineering',
    blurb:
      'Exploring messy, real-world records and engineering the features that actually carry signal into a model.',
    icon: 'analytics',
    skills: ['Pandas', 'NumPy', 'PySpark', 'EDA', 'Feature Engineering', 'Statistical Analysis'],
  },
  {
    title: 'Machine Learning & Predictive Modeling',
    blurb:
      'Classification, anomaly detection, fraud, and credit-risk models tuned to perform on imbalanced production data.',
    icon: 'ml',
    skills: ['Scikit-learn', 'XGBoost', 'LightGBM', 'Random Forest', 'Optuna', 'Anomaly Detection'],
  },
  {
    title: 'Generative AI & LLM Engineering',
    blurb:
      'Retrieval-augmented systems and agentic workflows that ground language models in real, cited source documents.',
    icon: 'ai',
    skills: ['Azure OpenAI', 'RAG', 'Prompt Engineering', 'Vector Embeddings', 'Agentic Workflows'],
  },
  {
    title: 'Model Evaluation & Responsible AI',
    blurb:
      'Leakage-free validation, explainability, and drift monitoring — proving a model works and that it can be trusted.',
    icon: 'shield',
    skills: ['SHAP', 'Cross-Validation', 'ROC-AUC / PR-AUC', 'Calibration', 'Drift', 'Fairness Testing'],
  },
  {
    title: 'MLOps & Deployment',
    blurb:
      'Taking models out of notebooks: tracked experiments, versioned releases, scheduled scoring, and monitored endpoints.',
    icon: 'pipeline',
    skills: ['MLflow', 'Model Registry', 'Apache Airflow', 'Docker', 'REST APIs', 'CI/CD'],
  },
  {
    title: 'Cloud Platforms & Visualization',
    blurb:
      'Azure-first ML platforms plus the dashboards and reporting that put results in front of decision-makers.',
    icon: 'database',
    skills: ['Azure ML', 'Azure Databricks', 'Apache Spark', 'PostgreSQL', 'Power BI', 'Streamlit'],
  },
];
