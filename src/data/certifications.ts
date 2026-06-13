/**
 * Certifications shown as animated cards on the About page.
 * `credentialUrl` is optional — link to the verifying credential when available.
 */
export type Certification = {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: 'Data Engineering Professional',
    issuer: 'Placeholder Cloud Academy',
    year: '2025',
  },
  {
    name: 'Machine Learning Specialization',
    issuer: 'Placeholder University (Coursera)',
    year: '2024',
  },
  {
    name: 'Apache Spark Developer',
    issuer: 'Placeholder Databricks',
    year: '2024',
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'Placeholder DeepLearning.AI',
    year: '2023',
  },
];
