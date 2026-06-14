/**
 * Central site configuration — single source of truth for identity,
 * navigation, and external links. Update placeholder values here.
 */

export const site = {
  name: 'Kartavya Soni',
  // Short brand mark used in the nav / logo.
  brand: 'KS',
  role: 'Data Engineer',
  headline: 'Building the Pipelines That Make Data Useful',
  subheadline:
    'Computer Science Master’s graduate (Florida Atlantic University) specializing in data engineering, designing and building scalable ETL/ELT pipelines, cloud data infrastructure, and analytics-ready data systems.',
  description:
    'Personal portfolio of Kartavya Soni — Data Engineer building reliable, scalable data pipelines and infrastructure, from ingestion to analytics-ready data at scale.',
  url: 'https://kartavyasoni.vercel.app',
  email: 'sonikartavya2003@outlook.com',
  location: 'Florida, USA',
  // Served from /public — update this path if you rename the file.
  resume: '/Kartavya_Soni_Resume.pdf',
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export type SocialLink = {
  label: string;
  href: string;
  // Icon key resolved by the UI layer.
  icon: 'github' | 'linkedin' | 'email';
};

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Kartavyasoni', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kartavyasoni8/',
    icon: 'linkedin',
  },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'email' },
];
