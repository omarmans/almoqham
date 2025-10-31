import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';
import { RouterLink, RouterLinkActive } from '@angular/router';
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
  openWhatsApp = openWhatsApp;
  constructor(private languageService: LanguageService) {}
  ngOnInit() {
    // Subscribe to language changes
    this.langSubscription = this.languageService.currentLang$.subscribe(
      (lang) => {
        this.currentLang = lang;
      }
    );
  }

  ngOnDestroy() {
    // Clean up subscription
    this.langSubscription?.unsubscribe();
  }
  switchLang(lang: string) {
    this.languageService.setLanguage(lang);

    // Close menu if open
    if (this.menuOpen) {
      this.toggleMenu();
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}
