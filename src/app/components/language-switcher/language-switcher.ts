import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

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
    { code: 'tr', label: 'Türkçe', flag: '🇺🇦' },
  ];
  currentLang: string = '';
  constructor(private translate: TranslateService) {
    translate.addLangs(this.languages.map((l) => l.code));
    const browserLang =
      localStorage.getItem('lang') || translate.getBrowserLang() || 'en';
    translate.use(browserLang?.match(/en|fr|uk|tr/) ? browserLang : 'en');
    this.currentLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((langEvent) => {
      this.currentLang = langEvent.lang;
    });
  }
  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
