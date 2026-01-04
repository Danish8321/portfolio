import { SkillCategory } from './skillCategory.model';

export interface ISkill {
  icon: string;
  title: string;
  categories: SkillCategory[];
  gradient: string;
  iconColor: string;
}
