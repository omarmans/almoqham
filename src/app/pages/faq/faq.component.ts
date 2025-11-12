import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainHeaderComponent } from '../../shared/components/main-header/main-header.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../shared/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-faq',
  imports: [MainHeaderComponent, CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent implements OnInit, OnDestroy {
  currentLang: string = 'ar';
  private langSubscription?: Subscription;

  faqs = [
    // {
    //   question: {
    //     ar: 'ما هو الفارق بين طلب الاستشارة القانونية، وطلب دراسة القضية؟',
    //     en: 'What is the difference between requesting legal advice and a case study?',
    //   },
    //   answers: {
    //     ar: [
    //       'الاستشارة القانونية: تعني طلب الحصول على الرأي القانوني فيما يتعلق بمسألة معينة أو نزاع معين، من أجل بيان وجهة نظر القانون فيها.',
    //       'دراسة القضية: تقديم دراسة للعميل سواء كان فردًا أو شركة، مستندة إلى تفاصيل القضية وجوانبها القانونية للوصول إلى أنسب الحلول القانونية.',
    //     ],
    //     en: [
    //       'Legal advice: means seeking a professional legal opinion regarding a specific issue or dispute to clarify the legal perspective.',
    //       'Case study: a detailed analysis provided to a client or company, based on case details and legal aspects to find the best possible solutions.',
    //     ],
    //   },
    //   open: false,
    // },
    {
      question: {
        ar: 'ما الفرق بين المحامي والمستشار القانوني والحقوقي؟',
        en: 'What is the difference between a lawyer, legal consultant, and jurist?',
      },
      answers: {
        ar: [
          'المحامي: هو شخص حاصل على ترخيص بمزاولة مهنة المحاماة ويقوم بالترافع أمام المحاكم والدفاع عن القضايا.',
          'المستشار القانوني: شخص متخصص في تقديم الاستشارات القانونية وصياغة العقود ومراجعة الاتفاقيات دون الترافع أمام المحاكم.',
        ],
        en: [
          'Lawyer: a licensed professional who practices law, represents clients, and pleads before courts.',
          'Legal consultant: a specialist who provides legal advice, drafts and reviews contracts, but does not represent clients in court.',
        ],
      },
      open: false,
    },
    {
      question: {
        ar: 'متى أحتاج إلى محامي؟',
        en: 'When do I need a lawyer?',
      },
      answers: {
        ar: [
          'تحتاج إلى محامي عند مواجهة قضية قانونية، أو عند توقيع عقود هامة، أو عند الحاجة إلى رفع أو الدفاع في قضية.',
        ],
        en: [
          'You need a lawyer when facing a legal case, signing important contracts, or filing or defending a lawsuit.',
        ],
      },
      open: false,
    },
    {
      question: {
        ar: 'هل يمكن لأي شخص غير المحامي رفع دعوى قضائية؟',
        en: 'Can anyone other than a lawyer file a lawsuit?',
      },
      answers: {
        ar: [
          'لا، لا يمكن إلا للمحامي المرخص له رفع الدعاوى أمام المحاكم نيابة عن الغير، حسب النظام والقانون المعمول به.',
        ],
        en: [
          'No, only a licensed lawyer is allowed to file lawsuits on behalf of others according to the law.',
        ],
      },
      open: false,
    },
    {
      question: {
        ar: 'ما هي المدة التي تستغرقها القضايا في المحاكم؟',
        en: 'How long do court cases usually take?',
      },
      answers: {
        ar: [
          'تختلف المدة حسب نوع القضية، وعدد الجلسات، وسرعة الإجراءات القضائية، وقد تمتد من عدة أشهر إلى سنوات.',
        ],
        en: [
          'The duration varies depending on the type of case, number of sessions, and legal procedures; it may take from months to years.',
        ],
      },
      open: false,
    },
  ];

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    // Subscribe to language changes
    this.currentLang = this.languageService.getCurrentLang();
    this.langSubscription = this.languageService.currentLang$.subscribe(
      (lang) => {
        this.currentLang = lang;
      }
    );
  }

  ngOnDestroy() {
    // Cleanup subscription
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

  toggleFaq(faq: any) {
    faq.open = !faq.open;
  }
}
