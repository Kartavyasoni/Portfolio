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
    name: 'Google Advanced Data Analytics Professional Certificate',
    issuer: 'Google',
    year: '2026',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2026',
  },
];
