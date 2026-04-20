import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  readonly portfolioService = inject(PortfolioService);
  readonly experiences = this.portfolioService.experiences;
}
