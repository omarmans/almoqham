// landing-components.component.ts
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { Slide } from '../../interface/interface';
import { LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-landing-components',
  imports: [CarouselModule, ButtonModule, CommonModule],
  templateUrl: './landing-components.component.html',
  styleUrl: './landing-components.component.scss',
})
export class LandingComponentsComponent {
  private langService = inject(LanguageService);

  currentLang = this.langService.currentLangSignal;

  slides = signal<Slide[]>([
    {
      title: {
        ar: 'استقلالنا يصنع الفارق',
        en: 'Our Independence Makes the Difference',
      },
      subtitle: {
        ar: 'نحن نؤمن بأن استقلالنا هو ما يمنحنا القدرة على تقديم حلول قانونية نزيهة وعادلة تخدم عملاءنا في كل مكان.',
        en: 'We believe our independence gives us the ability to deliver fair and transparent legal solutions for our clients everywhere.',
      },
      button: {
        ar: 'استشارة مجانية',
        en: 'Free Consultation',
      },
    },
    {
      title: {
        ar: 'خبرة يمكنك الوثوق بها',
        en: 'Experience You Can Trust',
      },
      subtitle: {
        ar: 'فريقنا من الخبراء القانونيين ملتزم بحماية حقوقك وتقديم المشورة الدقيقة لضمان نجاحك في كل خطوة.',
        en: 'Our team of legal experts is dedicated to protecting your rights and providing precise advice to ensure your success every step of the way.',
      },
      button: {
        ar: 'اعرف المزيد',
        en: 'Learn More',
      },
    },
    {
      title: {
        ar: 'نتائج تصنع الفرق',
        en: 'Results That Make a Difference',
      },
      subtitle: {
        ar: 'نحن نقيس نجاحنا من خلال نتائج عملائنا. هدفنا هو تحقيق العدالة والنتائج التي تستحقها.',
        en: 'We measure our success by our clients results. Our goal is justice and the outcomes you deserve.',
      },
      button: {
        ar: 'تواصل معنا',
        en: 'Contact Us',
      },
    },
  ]);

  // Certificates - مضاعفة للـ infinite scroll animation
  certificats = signal<string[]>([
    '1.webp',
    '2.webp',
    '3.webp',
    '4.webp',
    '5.webp',
    '6.webp',
    '7.webp',
    '8.webp',
    '1.webp',
    '2.webp',
    '3.webp',
    '4.webp',
    '5.webp',
    '6.webp',
    '7.webp',
    '8.webp',
  ]);

  // دالة مساعدة للحصول على النص بناءً على اللغة الحالية
  getText(text: { ar: string; en: string }): string {
    return text[this.currentLang() as 'ar' | 'en'];
  }
}
