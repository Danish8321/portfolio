import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PORTFOLIO_REPOSITORY } from '../../core/data/portfolio.repository.token';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  readonly #repo = inject(PORTFOLIO_REPOSITORY);

  private readonly profile = toSignal(this.#repo.getProfile(), { requireSync: true });

  readonly stats = computed(() => this.profile().stats);
  readonly aboutFeatures = computed(() => this.profile().aboutFeatures);
  readonly competencies = computed(() => this.profile().competencies);
  readonly experiences = toSignal(this.#repo.getExperiences(), { requireSync: true });
  readonly skills = toSignal(this.#repo.getSkills(), { requireSync: true });
  readonly contactMethods = toSignal(this.#repo.getContactMethods(), { requireSync: true });
}
