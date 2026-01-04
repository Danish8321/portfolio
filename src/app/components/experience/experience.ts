import { Component, inject } from '@angular/core';
import { IExperience } from '../../shared/models/experience.model';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  portfolioService = inject(PortfolioService);

  experiences: IExperience[] = this.portfolioService.experiences;
}
