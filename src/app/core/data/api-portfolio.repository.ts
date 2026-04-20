import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMethod, Experience, Profile, SkillGroup } from './models/portfolio.models';
import { PortfolioRepository } from './portfolio.repository';

@Injectable()
export class ApiPortfolioRepository extends PortfolioRepository {
  readonly #http = inject(HttpClient);

  getProfile(): Observable<Profile> {
    return this.#http.get<Profile>('/api/portfolio/profile');
  }

  getExperiences(): Observable<Experience[]> {
    return this.#http.get<Experience[]>('/api/portfolio/experiences');
  }

  getSkills(): Observable<SkillGroup[]> {
    return this.#http.get<SkillGroup[]>('/api/portfolio/skills');
  }

  getContactMethods(): Observable<ContactMethod[]> {
    return this.#http.get<ContactMethod[]>('/api/portfolio/contact-methods');
  }
}
