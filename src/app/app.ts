import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { Skill } from './components/skill/skill';
import { PortfolioService } from './shared/services/portfolio.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, Footer, Contact, Skill, Experience, About],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  portfolioService = inject(PortfolioService);
  activeSection = signal('home');
  mobileMenuOpen = signal(false);

  navLinks = ['home', 'about', 'experience', 'skills', 'contact'];

  stats = this.portfolioService.stats;

  contactMethods = this.portfolioService.contactMethods;

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.mobileMenuOpen.set(false);
      this.activeSection.set(sectionId);
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }
}
