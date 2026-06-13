/**
 * Central site configuration — single source of truth for identity,
 * navigation, and external links. Update placeholder values here.
 */

export const site = {
  name: 'Kartavya Soni',
  // Short brand mark used in the nav / logo.
  brand: 'KS',
  role: 'Data Engineer · AI/ML',
  headline: 'Transforming Raw Data into Production-Ready Intelligence',
  subheadline:
    'Computer Science Master’s graduate specializing in Data Engineering, AI, Machine Learning, and Full-Stack Data Systems.',
  description:
    'Personal portfolio of Kartavya Soni — Data Engineer and AI/ML practitioner building production-grade intelligent systems, from ETL pipelines to deployed machine learning.',
  // TODO: replace with the production domain once deployed.
  url: 'https://kartavya-portfolio.vercel.app',
  email: 'sonikartavya2003@outlook.com',
  location: 'Erlangen, Germany',
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
    // TODO: replace with the real LinkedIn URL.
    href: 'https://www.linkedin.com/in/kartavya-soni',
    icon: 'linkedin',
  },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'email' },
];
