import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { BlogPost } from '../../interface/interface';
import { NgClass, NgFor } from '@angular/common';
import { PaginatorModule, Paginator } from 'primeng/paginator';
import { LanguageService } from '../../../../shared/services/language.service';

@Component({
  selector: 'app-blog',
  imports: [TranslatePipe, RouterLink, NgFor, Paginator, NgClass],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  private langService = inject(LanguageService);

  currentLang = this.langService.currentLangSignal;

  blogPosts = signal<BlogPost[]>([
    {
      id: 1,
      title: {
        ar: 'التعديلات الجديدة في نظام الإيجار تحدد العقد بنفس قيمة الأجرة',
        en: 'New Amendments to Rental System Define Contract at Same Rent Value',
      },
      date: '2025-01-15',
      category: {
        ar: 'قانون الإيجار',
        en: 'Rental Law',
      },
      slug: 'rental-law-updates',
    },
    {
      id: 2,
      title: {
        ar: 'الممثل التنظيمي للشركات الناشئة في السعودية من الترخيص إلى التنفيذ',
        en: 'Regulatory Representative for Startups in Saudi Arabia: From Licensing to Execution',
      },
      date: '2025-01-10',
      category: {
        ar: 'الشركات الناشئة',
        en: 'Startups',
      },
      slug: 'startup-regulations',
    },
    {
      id: 3,
      title: {
        ar: 'خلافات الشركاء التجاريين: آليات فض النزاع داخل النظام السعودي',
        en: 'Business Partner Disputes: Conflict Resolution Mechanisms in Saudi System',
      },
      date: '2025-01-05',
      category: {
        ar: 'القانون التجاري',
        en: 'Commercial Law',
      },
      slug: 'business-disputes',
    },
    {
      id: 4,
      title: {
        ar: 'نظام العمل الجديد: حقوق الموظف في حالة الفصل التعسفي',
        en: 'New Labor Law: Employee Rights in Case of Wrongful Termination',
      },
      date: '2025-02-02',
      category: {
        ar: 'قانون العمل',
        en: 'Labor Law',
      },
      slug: 'labor-law-employee-rights',
    },
    {
      id: 5,
      title: {
        ar: 'القانون الضريبي في السعودية: التزامات المنشآت الصغيرة والمتوسطة',
        en: 'Tax Law in Saudi Arabia: Obligations for Small and Medium Enterprises',
      },
      date: '2025-02-18',
      category: {
        ar: 'القانون الضريبي',
        en: 'Tax Law',
      },
      slug: 'tax-law-sme-obligations',
    },
    {
      id: 6,
      title: {
        ar: 'التحول الرقمي في وزارة العدل: بوابة ناجز نموذجاً',
        en: 'Digital Transformation at Ministry of Justice: Najiz Portal as Model',
      },
      date: '2025-03-05',
      category: {
        ar: 'التحول الرقمي',
        en: 'Digital Transformation',
      },
      slug: 'najiz-digital-justice',
    },
    {
      id: 7,
      title: {
        ar: 'القانون العقاري الجديد: حماية حقوق الملاك والمستأجرين',
        en: 'New Real Estate Law: Protecting Rights of Owners and Tenants',
      },
      date: '2025-03-22',
      category: {
        ar: 'القانون العقاري',
        en: 'Real Estate Law',
      },
      slug: 'real-estate-law-protection',
    },
    {
      id: 8,
      title: {
        ar: 'تمويل المشاريع الناشئة: ما بين رأس المال الجريء والقروض البنكية',
        en: 'Startup Funding: Between Venture Capital and Bank Loans',
      },
      date: '2025-04-03',
      category: {
        ar: 'ريادة الأعمال',
        en: 'Entrepreneurship',
      },
      slug: 'startup-funding-options',
    },
    {
      id: 9,
      title: {
        ar: 'التحكيم التجاري: بديل قانوني لحل النزاعات بين الشركات',
        en: 'Commercial Arbitration: Legal Alternative for Corporate Dispute Resolution',
      },
      date: '2025-04-25',
      category: {
        ar: 'التحكيم التجاري',
        en: 'Commercial Arbitration',
      },
      slug: 'commercial-arbitration-saudi',
    },
    {
      id: 10,
      title: {
        ar: 'الذكاء الاصطناعي في القطاع القانوني: تحديات التنظيم والتشريع',
        en: 'Artificial Intelligence in Legal Sector: Regulatory and Legislative Challenges',
      },
      date: '2025-05-10',
      category: {
        ar: 'التقنية والقانون',
        en: 'Technology & Law',
      },
      slug: 'ai-law-regulations',
    },
  ]);

  first = signal(0);
  rows = signal(3);

  paginatedPosts = computed(() =>
    this.blogPosts().slice(this.first(), this.first() + this.rows())
  );

  onPageChange(event: any) {
    this.first.set(event.first);
    this.rows.set(event.rows);
    this.scrollToBlogSection();
  }

  private scrollToBlogSection() {
    setTimeout(() => {
      const blogSection = document.querySelector('.blog-section');
      if (blogSection) {
        blogSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  }

  getText(text: { ar: string; en: string }): string {
    return text[this.currentLang() as 'ar' | 'en'];
  }
}
