import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactForm } from './shared/models/contactForm.model';
import { Experience } from './shared/models/experience.model';
import { Skill } from './shared/models/skill.model';
import { PortfolioService } from './shared/services/portfolio.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  portfolioService = inject(PortfolioService);
  activeSection = signal('home');
  mobileMenuOpen = signal(false);
  currentYear = signal(new Date().getFullYear());
  contactFormData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  formMessage = signal<{ text: string; type: string }>({ text: '', type: '' });

  navLinks = ['home', 'about', 'experience', 'skills', 'contact'];

  stats = this.portfolioService.stats;

  aboutFeatures = this.portfolioService.aboutFeatures;

  experiences: Experience[] = this.portfolioService.experiences;

  skills: Skill[] = this.portfolioService.skills;

  competencies = this.portfolioService.competencies;

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

  handleSubmit(): void {
    if (
      !this.contactFormData.name ||
      !this.contactFormData.email ||
      !this.contactFormData.subject ||
      !this.contactFormData.message
    ) {
      this.formMessage.set({ text: 'Please fill all fields', type: 'error' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.contactFormData.email)) {
      this.formMessage.set({ text: 'Please enter a valid email', type: 'error' });
      return;
    }

    this.formMessage.set({
      text: "✓ Message received! I'll get back to you soon.",
      type: 'success',
    });
    this.contactFormData = { name: '', email: '', subject: '', message: '' };

    setTimeout(() => this.formMessage.set({ text: '', type: '' }), 5000);
  }
}
