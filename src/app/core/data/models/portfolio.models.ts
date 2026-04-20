export interface Stat {
  number: string;
  label: string;
}

export interface AboutFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface Competency {
  skill: string;
  level: number;
  label: string;
}

export interface Profile {
  stats: Stat[];
  aboutFeatures: AboutFeature[];
  competencies: Competency[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  project: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface SkillGroup {
  icon: string;
  title: string;
  gradient: string;
  iconColor: string;
  categories: SkillCategory[];
}

export interface ContactMethod {
  icon: string;
  title: string;
  link: string;
  text: string;
}
