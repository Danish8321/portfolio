import { Observable } from 'rxjs';
import { ContactMethod, Experience, Profile, SkillGroup } from './models/portfolio.models';

export abstract class PortfolioRepository {
  abstract getProfile(): Observable<Profile>;
  abstract getExperiences(): Observable<Experience[]>;
  abstract getSkills(): Observable<SkillGroup[]>;
  abstract getContactMethods(): Observable<ContactMethod[]>;
}
