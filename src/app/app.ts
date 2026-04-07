import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Skill } from './components/skill/skill';
import { FooterComponent, NavComponent } from './shared/ui';
import { PortfolioService } from './shared/services/portfolio.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavComponent, FooterComponent, Contact, Skill, Experience, About],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  portfolioService = inject(PortfolioService);

  stats = this.portfolioService.stats;

  contactMethods = this.portfolioService.contactMethods;

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
