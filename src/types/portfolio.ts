export type Language = 'fa' | 'en';
export type Theme = 'dark' | 'light';

export interface SocialLink {
  platform: 'linkedin' | 'telegram' | 'whatsapp' | 'instagram' | 'email' | 'phone' | 'sms';
  label: string;
  url: string;
  handle: string;
  icon: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: { fa: string; en: string };
  detail?: { fa: string; en: string };
}

export interface PersonalInfo {
  name: string;
  nameFa: string;
  title: { fa: string; en: string };
  headlines: { fa: string[]; en: string[] };
  bio: { fa: string; en: string };
  summary: { fa: string; en: string };
  location: { fa: string; en: string };
  email: string;
  phone: string;
  birthDate?: { fa: string; en: string };
  status: { fa: string; en: string };
  socials: SocialLink[];
  stats: StatItem[];
  avatar?: string;
  resumeUrl?: string;
  yearsOfExperience?: number;
}

export interface SkillItem {
  name: string;
  level: number; // percentage (e.g. 80, 100)
  icon: string;
  category: string;
  badge?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: { fa: string; en: string };
  subtitle: { fa: string; en: string };
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: { fa: string; en: string };
  location: { fa: string; en: string };
  role: { fa: string; en: string };
  period: { fa: string; en: string };
  periodEn: string;
  isCurrent: boolean;
  type: { fa: string; en: string };
  description: { fa: string; en: string };
  achievements: { fa: string[]; en: string[] };
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: { fa: string; en: string };
  client?: { fa: string; en: string };
  category: 'web' | 'desktop' | 'architecture';
  categoryLabel: { fa: string; en: string };
  shortDesc: { fa: string; en: string };
  fullDesc: { fa: string; en: string };
  keyFeatures: { fa: string[]; en: string[] };
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  gradient: string;
}

export interface EducationItem {
  id: string;
  degree: { fa: string; en: string };
  field: { fa: string; en: string };
  institution: { fa: string; en: string };
  period: { fa: string; en: string };
  gpa?: string;
  status: { fa: string; en: string };
  highlights?: { fa: string[]; en: string[] };
}

export interface PublicationItem {
  id: string;
  title: { fa: string; en: string };
  journal: { fa: string; en: string };
  date: { fa: string; en: string };
  link: string;
  keywords: { fa: string[]; en: string[] };
  abstract: { fa: string; en: string };
}

export interface CertificateItem {
  id: string;
  title: { fa: string; en: string };
  issuer: { fa: string; en: string };
  type: 'license' | 'course';
  typeLabel: { fa: string; en: string };
  date?: { fa: string; en: string };
  validUntil?: { fa: string; en: string };
  badgeText: { fa: string; en: string };
}

export interface NavItem {
  id: string;
  href: string;
  label: { fa: string; en: string };
  icon: string;
}

export interface UIStrings {
  themeToggle: { fa: string; en: string };
  langToggle: { fa: string; en: string };
  downloadCv: { fa: string; en: string };
  contactMe: { fa: string; en: string };
  viewProjects: { fa: string; en: string };
  allCategories: { fa: string; en: string };
  webProjects: { fa: string; en: string };
  desktopProjects: { fa: string; en: string };
  viewLive: { fa: string; en: string };
  projectDetails: { fa: string; en: string };
  close: { fa: string; en: string };
  keyFeatures: { fa: string; en: string };
  technologiesUsed: { fa: string; en: string };
  copyEmail: { fa: string; en: string };
  copyPhone: { fa: string; en: string };
  copied: { fa: string; en: string };
  sendMessage: { fa: string; en: string };
  formSending: { fa: string; en: string };
  formSuccess: { fa: string; en: string };
  formName: { fa: string; en: string };
  formEmail: { fa: string; en: string };
  formSubject: { fa: string; en: string };
  formMessage: { fa: string; en: string };
  formRequired: { fa: string; en: string };
  backToTop: { fa: string; en: string };
  rightsReserved: { fa: string; en: string };
  designedWith: { fa: string; en: string };
  readPublication: { fa: string; en: string };
  verifiedCredential: { fa: string; en: string };
  contactFormTitle: { fa: string; en: string };
}
