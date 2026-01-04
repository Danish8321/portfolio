import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactForm } from '../../shared/models/contactForm.model';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  portfolioService = inject(PortfolioService);
  contactFormData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  formMessage = signal<{ text: string; type: string }>({ text: '', type: '' });

  contactMethods = this.portfolioService.contactMethods;

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
