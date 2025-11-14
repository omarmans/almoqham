import { Component, inject, signal } from '@angular/core';
import { ContactInfo } from '../../interface/interface';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { openWhatsApp } from '../../../../shared/funcations/whatapp';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-contact',
  imports: [NgIf, NgFor, TranslatePipe, NgStyle],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private langService = inject(LanguageService);
  currentLang = this.langService.currentLangSignal;
  contactInfo = signal<ContactInfo[]>([
    {
      icon: 'fa-regular fa-clock',
      text: {
        ar: 'نحن في خدمتكم 24/7 - طوال أيام الأسبوع',
        en: 'We are available 24/7 - All week long',
      },
      link: null,
    },
    {
      icon: 'fa-solid fa-mobile-button',
      text: {
        ar: '+966504484337',
        en: '+966504484337',
      },
      link: 'tel:+966504484337',
    },
    {
      icon: 'fa-solid fa-envelope',
      text: {
        ar: 'suleman@almughem.sa',
        en: 'suleman@almughem.sa',
      },
      link: 'mailto:suleman@almughem.sa',
    },
  ]);
  openWhatsApp = openWhatsApp;
  getText(text: { ar: string; en: string }): string {
    return text[this.currentLang() as 'ar' | 'en'];
  }
}
