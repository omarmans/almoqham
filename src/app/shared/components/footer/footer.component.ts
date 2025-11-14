import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { email, phoneNum } from '../../data/data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  langService = inject(LanguageService);
  currentLang = this.langService.currentLangSignal;
  myEmail = email;
  phoneNum = phoneNum;

  // Newsletter email input
  email = '';

  // Current year for copyright
  currentYear = new Date().getFullYear();

  // Quick navigation links - يتم ترجمتها من ملف الترجمة
  quickLinks = [
    { label: 'HEADER.HOME', route: '/' },
    { label: 'HEADER.CONSULT', route: '/consult' },
    // { label: 'HEADER.INDIVIDUAL', route: '/individual' },
    // { label: 'HEADER.NOTARY', route: '/notary' },
    // { label: 'HEADER.COMPANY', route: '/company' },
    { label: 'HEADER.BLOG', route: '/blogs' },
    { label: 'HEADER.FAQ', route: '/FAQ' },
    { label: 'HEADER.CONTACT', route: '/contact' },
  ];

  // Main services list
  services = [
    { label: 'HEADER.COMPANY', route: '/company', icon: 'fa-chevron-left' },
    {
      label: 'HEADER.INDIVIDUAL',
      route: '/individual',
      icon: 'fa-chevron-left',
    },
    { label: 'HEADER.NOTARY', route: '/notary', icon: 'fa-chevron-left' },
  ];

  // Social media links
  socialMedia = [
    {
      name: 'Facebook',
      icon: 'fa-brands fa-facebook-f',
      url: 'https://facebook.com',
    },
    {
      name: 'TikTok',
      icon: 'fa-brands fa-tiktok',
      url: 'https://tiktok.com',
    },
    {
      name: 'Twitter',
      icon: 'fa-brands fa-x-twitter',
      url: 'https://twitter.com',
    },
    {
      name: 'Instagram',
      icon: 'fa-brands fa-instagram',
      url: 'https://instagram.com',
    },
  ];

  constructor(public languageService: LanguageService) {}

  /**
   * Handle newsletter subscription
   * Validates email and shows success/error message
   */
  subscribeNewsletter(): void {
    if (this.email && this.validateEmail(this.email)) {
      console.log('Subscribing email:', this.email);

      // TODO: Integrate with backend API for newsletter subscription
      alert('تم الاشتراك بنجاح في النشرة البريدية!');

      // Clear input after successful subscription
      this.email = '';
    } else {
      alert('الرجاء إدخال بريد إلكتروني صحيح');
    }
  }

  /**
   * Validate email format using regex
   * @param email - Email string to validate
   * @returns boolean - True if email is valid
   */
  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
