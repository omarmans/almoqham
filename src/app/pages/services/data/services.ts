import { signal } from '@angular/core';
import { OurSERVICES } from '../../main/interface/interface';

export const SERVICES = signal<OurSERVICES[]>([
  {
    id: 1,
    title: 'خدمات تأسيس وتصفية الشركات',
    titleEn: 'Company Formation and Liquidation',
    description: `نقدّم الدعم القانوني المتكامل لتأسيس وتصفيـة الشركات داخل المملكة العربية السعودية،
بما في ذلك إعداد العقود واللوائح، والحصول على التراخيص، واستكمال الإجراءات القانونية والتنظيمية بكفاءة وشفافية.`,
    descriptionEn:
      'We provide full legal support for establishing and liquidating companies in Saudi Arabia,including contract drafting, licensing, and completing all regulatory and procedural requirements with transparency and efficiency.',
    price: '3000 ريال سعودي',
    priceEn: '3000 SAR',
    image: '4.png',
  },
  {
    id: 2,
    title: 'خدمات تحصيل الديون وتنفيذ السندات',
    titleEn: 'Debt Collection & Enforcement of Bonds',
    description: `نقدّم حلولًا احترافية لاسترداد الديون المستحقة للأفراد والشركات بطرق قانونية فعالة،
ونتولى متابعة القضايا وإجراءات التنفيذ حتى ضمان كامل حقوق العملاء.
`,
    descriptionEn: `Our team assists individuals and corporations in recovering outstanding debts through legal and efficient procedures,
covering case follow-ups and enforcement actions to secure our clients’ rights
`,
    price: '1500 ريال سعودي',
    priceEn: '1500 SAR',
    image: '2.jpeg',
  },
  {
    id: 3,
    title: 'خدمات الاستثمار الأجنبي',
    titleEn: 'Foreign Investment Services',
    description: `نوفّر للمستثمرين الأجانب خدمات قانونية متكاملة لتأسيس الكيانات الاستثمارية داخل المملكة،
بما في ذلك الحصول على التراخيص، وإعداد الهياكل القانونية، وتقديم الاستشارات التنظيمية لتحقيق بيئة استثمارية آمنة ومستقرة.
`,
    descriptionEn: `We offer integrated legal solutions for foreign investors looking to establish their businesses in Saudi Arabia,
covering licensing, legal structuring, and regulatory consulting to ensure a secure and thriving investment environment.
`,
    price: '5000 ريال سعودي',
    priceEn: '5000 SAR',
    image: '3.jpeg',
  },
  {
    id: 4,
    title: 'المنازعات الضريبية والجمركية',
    titleEn: 'Tax and Customs Disputes',
    description:
      'تقدم شركة المشورة للمحاماة خدمات ضريبية وجمركية شاملة، تشمل تمثيل العملاء أمام الجهات الضريبية والجمركية، وتقديم الاعتراضات والدفاعات القانونية لضمان حماية مصالحهم وتحقيق الامتثال الكامل للأنظمة.',
    descriptionEn:
      'Al-Mushawara Law Firm provides comprehensive tax and customs services, including representing clients before tax and customs authorities, filing objections, and providing legal defenses to protect their interests and ensure full regulatory compliance.',
    price: '4000 ريال سعودي',
    priceEn: '4000 SAR',
    image: '4.png',
  },
  {
    id: 5,
    title: 'إجراءات الإفلاس',
    titleEn: 'Bankruptcy Procedures',
    description:
      'تقدم شركة المشورة للمحاماة خدمات الإفلاس الكاملة للأفراد والشركات من خلال إعداد الطلبات ومتابعة الإجراءات القانونية أمام المحاكم المختصة، بهدف حماية الحقوق وتنظيم الالتزامات المالية بطريقة قانونية ومنصفة.',
    descriptionEn:
      'Al-Mushawara Law Firm provides comprehensive bankruptcy services for individuals and companies, including preparing applications and following up on legal procedures before competent courts to protect rights and organize financial obligations fairly and lawfully.',
    price: '3500 ريال سعودي',
    priceEn: '3500 SAR',
    image: '3.jpeg',
  },
  {
    id: 6,
    title: 'خدمات التوثيق',
    titleEn: 'Notarization Services',
    description:
      'تقدم شركة المشورة للمحاماة خدمات التوثيق الشاملة للأفراد والشركات، وذلك بفضل خبرتها في توثيق العقود والوكالات والإقرارات والاتفاقيات وفق الأنظمة المعمول بها في المملكة العربية السعودية لضمان سلامة المعاملات القانونية.',
    descriptionEn:
      'Al-Mushawara Law Firm provides comprehensive notarization services for individuals and companies, leveraging its expertise in authenticating contracts, powers of attorney, declarations, and agreements in accordance with Saudi regulations to ensure the validity of legal transactions.',
    price: '1000 ريال سعودي',
    priceEn: '1000 SAR',
    image: '3.jpeg',
  },
  {
    id: 7,
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
    id: 8,
    title: 'مراجعة العقود القانونية',
    titleEn: 'Legal Contract Review',
    description: 'مراجعة شاملة للعقود والتأكد من صحتها القانونية وحماية حقوقك.',
    descriptionEn:
      'Comprehensive review of contracts to ensure their legal validity and protect your rights.',
    price: '500 ريال سعودي',
    priceEn: '500 SAR',
    image: '2.jpeg',
  },
  {
    id: 9,
    title: 'تمثيل قانوني في المحاكم',
    titleEn: 'Legal Representation in Courts',
    description: 'تمثيلكم أمام المحاكم والجهات القضائية المختلفة بمهنية عالية.',
    descriptionEn:
      'Professional representation before courts and judicial authorities.',
    price: '2000 ريال سعودي',
    priceEn: '2000 SAR',
    image: '3.jpeg',
  },
  {
    id: 10,
    title: 'استشارة تأسيس الشركات',
    titleEn: 'Company Formation Consultation',
    description: 'إرشادات كاملة لتأسيس الشركات والمنشآت التجارية بشكل قانوني.',
    descriptionEn:
      'Comprehensive guidance for legally establishing companies and businesses.',
    price: '1000 ريال سعودي',
    priceEn: '1000 SAR',
    image: '4.png',
  },
  {
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
    title: 'الاستشارات العقارية',
    titleEn: 'Real Estate Legal Consultation',
    description: 'استشارات قانونية متخصصة في المجال العقاري والتملك.',
    descriptionEn:
      'Specialized legal advice in real estate and property ownership.',
    price: '900 ريال سعودي',
    priceEn: '900 SAR',
    image: '4.png',
  },
]);
