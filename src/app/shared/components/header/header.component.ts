import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  NavigationEnd,
} from '@angular/router';
import { openWhatsApp } from '../../funcations/whatapp';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentLang = 'ar';
  menuOpen = false;
  private langSubscription?: Subscription;
  private routerSubscription?: Subscription;
  openWhatsApp = openWhatsApp;

  constructor(
    private languageService: LanguageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.langSubscription = this.languageService.currentLang$.subscribe(
      (lang) => (this.currentLang = lang)
    );

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.menuOpen = false;
        document.body.style.overflow = '';

        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  ngOnDestroy() {
    this.langSubscription?.unsubscribe();
    this.routerSubscription?.unsubscribe();
  }

  switchLang(lang: string) {
    this.languageService.setLanguage(lang);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  goToGmail() {
    const to = 'suleman@almughem.sa';
    const cc = 'abonasersa623@gmail.com';
    const subject = encodeURIComponent('استشارة من موقع سليمان المقحم');
    const body = encodeURIComponent('مرحبًا،\n\nأرغب في استشارة بخصوص ...');
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&cc=${cc}&su=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
  }
}
