import { InjectionToken } from '@angular/core';
import { LocalPortfolioRepository } from './local-portfolio.repository';
import { PortfolioRepository } from './portfolio.repository';

export const PORTFOLIO_REPOSITORY = new InjectionToken<PortfolioRepository>('PortfolioRepository');

export const portfolioRepositoryProvider = {
  provide: PORTFOLIO_REPOSITORY,
  useClass: LocalPortfolioRepository,
};
