import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skill {
  readonly portfolioService = inject(PortfolioService);
  readonly skills = this.portfolioService.skills;
  readonly competencies = this.portfolioService.competencies;
}
