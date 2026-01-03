import { SkillCategory } from './skillCategory.model';

export interface Skill {
  icon: string;
  title: string;
  categories: SkillCategory[];
  gradient: string;
  iconColor: string;
}
