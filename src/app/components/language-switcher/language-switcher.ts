import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-language-switcher',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    TranslateModule,
  ],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
})
export class LanguageSwitcher {
  languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'uk', label: 'Українська', flag: '🇺🇦' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  ];
  currentLang: string = '';
  
  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    translate.addLangs(this.languages.map((l) => l.code));
    
    let storedLang: string | null = null;
    
    // Only access localStorage in browser environment
    if (isPlatformBrowser(this.platformId)) {
      storedLang = localStorage.getItem('lang');
    }
    
    const browserLang = storedLang || translate.getBrowserLang() || 'en';
    translate.use(browserLang?.match(/en|fr|uk|tr/) ? browserLang : 'en');
    this.currentLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((langEvent) => {
      this.currentLang = langEvent.lang;
    });
  }
  
  switchLanguage(lang: string) {
    this.translate.use(lang);
    // Only access localStorage in browser environment
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }
}
