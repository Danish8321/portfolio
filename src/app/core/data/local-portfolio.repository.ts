import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactMethod, Experience, Profile, SkillGroup } from './models/portfolio.models';
import {
  PORTFOLIO_CONTACT_METHODS,
  PORTFOLIO_EXPERIENCES,
  PORTFOLIO_PROFILE,
  PORTFOLIO_SKILLS,
} from './portfolio.data';
import { PortfolioRepository } from './portfolio.repository';

@Injectable()
export class LocalPortfolioRepository extends PortfolioRepository {
  getProfile(): Observable<Profile> {
    return of(PORTFOLIO_PROFILE);
  }

  getExperiences(): Observable<Experience[]> {
    return of(PORTFOLIO_EXPERIENCES);
  }

  getSkills(): Observable<SkillGroup[]> {
    return of(PORTFOLIO_SKILLS);
  }

  getContactMethods(): Observable<ContactMethod[]> {
    return of(PORTFOLIO_CONTACT_METHODS);
  }
}
