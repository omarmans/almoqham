import { Component, signal } from '@angular/core';
import { MainHeaderComponent } from '../../shared/components/main-header/main-header.component';
import { TranslatePipe } from '@ngx-translate/core';
import { openWhatsApp } from '../../shared/funcations/whatapp';

@Component({
  selector: 'app-legal-documentation-services',
  imports: [MainHeaderComponent, TranslatePipe],
  templateUrl: './legal-documentation-services.component.html',
  styleUrl: './legal-documentation-services.component.scss',
})
export class LegalDocumentationServicesComponent {
  openWhatsApp = openWhatsApp;

  servicesList = signal<{ ar: string; en: string }[]>([
    {
      ar: 'التقاضي وتسوية المنازعات',
      en: 'Litigation and Dispute Resolution',
    },
    {
      ar: 'خدمات التوثيق القانونية',
      en: 'Legal Documentation Services',
    },
    {
      ar: 'إدارة الشؤون القانونية للشركات',
      en: 'Corporate Legal Management',
    },
    {
      ar: 'الخدمات القانونية في الأوقاف والوصايا',
      en: 'Legal Services in Endowments and Wills',
    },
    {
      ar: 'الخدمات القانونية في القطاع الصناعي',
      en: 'Legal Services in the Industrial Sector',
    },
    {
      ar: 'الخدمات القانونية لقطاع السفر والسياحة والفنادق',
      en: 'Legal Services for Travel, Tourism, and Hospitality',
    },
    {
      ar: 'خدماتنا في القطاع الطبي',
      en: 'Our Services in the Medical Sector',
    },
    {
      ar: 'الخدمات القانونية في القطاع العقاري',
      en: 'Legal Services in the Real Estate Sector',
    },
  ]);
}
