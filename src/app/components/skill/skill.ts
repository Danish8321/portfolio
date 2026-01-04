import { Component, inject } from '@angular/core';
import { ISkill } from '../../shared/models/skill.model';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill {
  portfolioService = inject(PortfolioService);

  skills: ISkill[] = this.portfolioService.skills;
  competencies = this.portfolioService.competencies;
}
