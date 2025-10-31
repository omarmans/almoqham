import { Component } from '@angular/core';

@Component({
  selector: 'app-main-pic',
  imports: [],
  templateUrl: './main-pic.component.html',
  styleUrl: './main-pic.component.scss',
})
export class MainPicComponent {
  attorneyData = {
    name: 'أحمد محمد السعيد',
    title: 'المحامي الاستشاري',
    bio: 'يركز عمله على القضايا التجارية والشركات، مع خبرة تزيد عن 15 عاماً في تقديم الاستشارات القانونية والدفاع عن حقوق العملاء في مختلف المحاكم السعودية.',
    image: 'imgs/client.webp',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  };
}
