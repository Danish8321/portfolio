import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly portfolioService = inject(PortfolioService);
  readonly aboutFeatures = this.portfolioService.aboutFeatures;
}
