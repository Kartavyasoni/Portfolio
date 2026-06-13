/**
 * Central site configuration — single source of truth for identity,
 * navigation, and external links. Update placeholder values here.
 */

export const site = {
  name: 'Kartavya Soni',
  // Short brand mark used in the nav / logo.
  brand: 'KS',
  role: 'Data Scientist · ML Engineer',
  headline: 'Transforming Raw Data into Production-Ready Intelligence',
  subheadline:
    'Computer Science Master’s graduate (Florida Atlantic University) specializing in Machine Learning, MLOps, and data pipelines — turning messy data into deployed, explainable models.',
  description:
    'Personal portfolio of Kartavya Soni — Data Scientist and Machine Learning Engineer building production-grade ML systems, from AWS data pipelines to deployed, explainable models.',
  url: 'https://kartavyasoni.vercel.app',
  email: 'sonikartavya2003@outlook.com',
  location: 'Florida, USA',
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
