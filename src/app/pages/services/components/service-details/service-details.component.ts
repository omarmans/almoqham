import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { openWhatsApp } from '../../../../shared/funcations/whatapp';
import { LanguageService } from '../../../../shared/services/language.service';
import { OurSERVICES } from '../../../main/interface/interface';
import { MainHeaderComponent } from '../../../../shared/components/main-header/main-header.component';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-service-details',
  imports: [MainHeaderComponent, DecimalPipe],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
})
export class ServiceDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  langService = inject(LanguageService);
  currentLang = this.langService.currentLangSignal;

  openWhatsApp = openWhatsApp;

  service = signal<OurSERVICES | null>(null);

  SERVICES: OurSERVICES[] = [
    {
      id: 1,
      title: 'استشارة قانونية عبر اجتماع افتراضي',
      titleEn: 'Legal Consultation via Virtual Meeting',
      description:
        'لقاء افتراضي عبر منصة الاتصال المرئي لبحث موضوعك القانوني بعمق، مع تقديم النصائح والإرشادات المناسبة بشكل شخصي وتفاعلي.',
      descriptionEn:
        'A virtual meeting through an online platform to discuss your legal issue in depth and provide tailored advice and guidance.',
      price: '700 ريال سعودي',
      priceEn: '700 SAR',
      image: '1.jpeg',
    },
    {
      id: 2,
      title: 'مراجعة العقود القانونية',
      titleEn: 'Legal Contract Review',
      description:
        'مراجعة شاملة للعقود والتأكد من صحتها القانونية وحماية حقوقك.',
      descriptionEn:
        'Comprehensive review of contracts to ensure their legal validity and protect your rights.',
      price: '500 ريال سعودي',
      priceEn: '500 SAR',
      image: '2.jpeg',
    },
    {
      id: 3,
      title: 'تمثيل قانوني في المحاكم',
      titleEn: 'Legal Representation in Courts',
      description:
        'تمثيلكم أمام المحاكم والجهات القضائية المختلفة بمهنية عالية.',
      descriptionEn:
        'Professional representation before courts and judicial authorities.',
      price: '2000 ريال سعودي',
      priceEn: '2000 SAR',
      image: '3.jpeg',
    },
    {
      id: 4,
      title: 'استشارة تأسيس الشركات',
      titleEn: 'Company Formation Consultation',
      description:
        'إرشادات كاملة لتأسيس الشركات والمنشآت التجارية بشكل قانوني.',
      descriptionEn:
        'Comprehensive guidance for legally establishing companies and businesses.',
      price: '1000 ريال سعودي',
      priceEn: '1000 SAR',
      image: '4.png',
    },
    {
      id: 5,
      title: 'صياغة اللوائح والأنظمة',
      titleEn: 'Drafting Bylaws and Regulations',
      description: 'صياغة اللوائح الداخلية والأنظمة للشركات والمؤسسات.',
      descriptionEn:
        'Drafting internal bylaws and regulations for companies and organizations.',
      price: '800 ريال سعودي',
      priceEn: '800 SAR',
      image: '2.jpeg',
    },
    {
      id: 6,
      title: 'تسجيل العلامات التجارية',
      titleEn: 'Trademark Registration',
      description: 'خدمة تسجيل العلامات التجارية وحماية الملكية الفكرية.',
      descriptionEn:
        'Trademark registration services and intellectual property protection.',
      price: '1200 ريال سعودي',
      priceEn: '1200 SAR',
      image: '1.jpeg',
    },
    {
      id: 7,
      title: 'فض المنازعات التجارية',
      titleEn: 'Commercial Dispute Resolution',
      description: 'حل المنازعات التجارية والخلافات بين الشركات.',
      descriptionEn:
        'Resolving commercial disputes and conflicts between companies.',
      price: '1500 ريال سعودي',
      priceEn: '1500 SAR',
      image: '3.jpeg',
    },
    {
      id: 8,
      title: 'استشارات التوظيف والعمل',
      titleEn: 'Employment & Labor Consultation',
      description: 'نصائح قانونية بخصوص عقود العمل والعلاقات الوظيفية.',
      descriptionEn:
        'Legal advice regarding employment contracts and workplace relations.',
      price: '600 ريال سعودي',
      priceEn: '600 SAR',
      image: '1.jpeg',
    },
    {
      id: 9,
      title: 'خدمات التوثيق والتصديق',
      titleEn: 'Documentation & Attestation Services',
      description: 'توثيق المستندات والتصديق عليها من الجهات المختصة.',
      descriptionEn:
        'Document notarization and attestation from relevant authorities.',
      price: '400 ريال سعودي',
      priceEn: '400 SAR',
      image: '2.jpeg',
    },
    {
      id: 10,
      title: 'الاستشارات العقارية',
      titleEn: 'Real Estate Legal Consultation',
      description: 'استشارات قانونية متخصصة في المجال العقاري والتملك.',
      descriptionEn:
        'Specialized legal advice in real estate and property ownership.',
      price: '900 ريال سعودي',
      priceEn: '900 SAR',
      image: '4.png',
    },
  ];

  ngOnInit() {
    const serviceId = Number(this.route.snapshot.paramMap.get('id'));
    const foundService = this.SERVICES.find((s) => s.id === serviceId);

    if (foundService) {
      this.service.set(foundService);
    } else {
      this.router.navigate(['/services']);
    }
  }

  goBack() {
    this.router.navigate(['/services']);
  }
}
