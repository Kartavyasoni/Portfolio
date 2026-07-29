/**
 * Compact journey timeline — previewed on home, full version on /about.
 * `kind` drives the node color/label (education / experience / leadership).
 */
export type TimelineKind = 'education' | 'experience' | 'leadership';

export type TimelineEntry = {
  kind: TimelineKind;
  period: string;
  title: string;
  org: string;
  summary: string;
  /** Longer bullet list shown on the full About-page timeline. */
  highlights?: string[];
  /** Show in the compact home preview. */
  featured?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    kind: 'experience',
    period: 'Feb 2026 — Present',
    title: 'AI Data Scientist',
    org: 'The Allstate Corporation · USA',
    summary:
      'Building claims-routing models and Generative AI tooling for insurance operations, with leakage-safe training data and human-in-the-loop validation.',
    highlights: [
      'Built claims-reassignment training data from policy, loss, and customer-contact systems at ~150K claims/month, using only fields available at reassignment time to prevent leakage from downstream repair and payment records.',
      'Engineered severity, documentation, dispute, and workload features, improving macro-averaged routing recall by 12% relative to the rules-based baseline on an out-of-time holdout.',
      'Trained XGBoost and LightGBM models, using SHAP to explain route recommendations and identify claim characteristics influencing adjuster assignment.',
      'Built an Azure OpenAI retrieval prototype that summarized claim notes and surfaced policy guidance, reducing median manual review time by 18%.',
      'Created human-reviewed communication drafts with prompt templates, factual checks, and PII masking, keeping adjusters responsible for final customer messages.',
      'Supported model validation and experiment tracking in Azure Machine Learning and MLflow, documenting performance, limitations, and reviewer approvals before controlled pilot testing.',
    ],
    featured: true,
  },
  {
    kind: 'education',
    period: 'Aug 2024 — May 2026',
    title: 'M.S. Computer Science',
    org: 'Florida Atlantic University · USA',
    summary: 'GPA 3.96. Focused on machine learning, applied statistics, and data systems.',
    featured: true,
  },
  {
    kind: 'experience',
    period: 'Jan 2022 — Jun 2024',
    title: 'Data Scientist',
    org: 'Mphasis · India',
    summary:
      'Built transaction-monitoring and fraud detection systems over card payments, lifting confirmed-fraud recall by 16% while cutting false-positive alerts by 13%.',
    highlights: [
      'Built transaction-monitoring datasets from card payments, merchant activity, device signals, and account histories using PySpark and Spark SQL.',
      'Investigated suspicious behavior through velocity checks, merchant clustering, and sequence analysis, helping analysts identify coordinated fraud patterns.',
      'Prevented data leakage by excluding post-investigation fields, using out-of-time validation, and fitting preprocessing only within cross-validation folds.',
      'Improved confirmed-fraud recall by 16% over the legacy rules baseline using Random Forest, Isolation Forest, class weighting, and threshold optimization.',
      'Reduced false-positive alerts by 13% across three monthly review cycles using segment-specific decision thresholds.',
      'Developed Power BI dashboards showing alert volumes, fraud trends, investigator outcomes, and model stability for weekly risk and operations reviews.',
      'Operationalized batch scoring through Airflow, Docker, AWS, and REST APIs, enabling scheduled fraud detection and versioned releases.',
    ],
    featured: true,
  },
  {
    kind: 'education',
    period: 'Aug 2020 — May 2024',
    title: 'B.E. Computer Engineering',
    org: 'Gujarat Technological University · India',
    summary: 'GPA 3.70. Foundations in algorithms, databases, and software engineering.',
  },
];
