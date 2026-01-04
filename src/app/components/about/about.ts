import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  portfolioService = inject(PortfolioService);

  aboutFeatures = this.portfolioService.aboutFeatures;
}
