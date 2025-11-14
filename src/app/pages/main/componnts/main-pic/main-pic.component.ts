import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../shared/services/language.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-main-pic',
  imports: [NgClass],
  templateUrl: './main-pic.component.html',
  styleUrl: './main-pic.component.scss',
})
export class MainPicComponent {
  private langService = inject(LanguageService);

  currentLang = this.langService.currentLangSignal;
  attorneyData = {
    name: {
      ar: 'د. سليمان المقحمي',
      en: 'Dr. Sulaiman Al-Moqhami',
    },
    title: {
      ar: 'المحامي والاستشاري القانوني',
      en: 'Attorney & Legal Consultant',
    },
    bio: {
      ar: `يجمع الدكتور سليمان المقحمي بين الخبرة القانونية العميقة والرؤية الإنسانية المستنيرة. حاصل على الدكتوراه في علم النفس وبكالوريوس في المحاماة منذ عام 2005م، مما منحه قدرة فريدة على فهم احتياجات العملاء والتعامل مع القضايا بوعي قانوني وإنساني متكامل.
يمتد عمله في تقديم الاستشارات القانونية المتخصصة وتمثيل الأفراد والشركات أمام الجهات القضائية في المملكة العربية السعودية، مع تركيز خاص على قضايا التوثيق والأحوال الشخصية والشركات، ساعيًا دائمًا لتحقيق العدالة بأسلوب يحفظ الحقوق ويصون الكرامة.`,
      en: `Dr. Sulaiman Al-Moqhami combines profound legal expertise with a deep psychological understanding.
He holds a Ph.D. in Psychology and a Bachelor’s degree in Law (2005), giving him a unique perspective on both the legal and human dimensions of every case.
Throughout his career, he has provided specialized legal consultations and represented individuals and corporations before Saudi judicial authorities, with strong focus on legal documentation, family, and corporate law — always striving to achieve justice with integrity and compassion.`,
    },
    image: 'imgs/client.webp', // لو عندك صورة جديدة بدّل المسار هنا
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  };
}
