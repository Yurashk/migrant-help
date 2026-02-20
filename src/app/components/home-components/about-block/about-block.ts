import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { TelegramChanel } from "../../telegram-chanel/telegram-chanel";

export interface FeatureItem {
  id: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-about-block',
  imports: [CommonModule, MatCard, MatCardContent, TranslateModule, MatIconModule, TelegramChanel],
  templateUrl: './about-block.html',
  styleUrl: './about-block.scss'
})
export class AboutBlock {
  features: FeatureItem[] = [
    { id: 'CPAS_SEARCH', icon: 'location_on', color: '#4CAF50' },
    // { id: 'MULTILANG', icon: 'language', color: '#2196F3' },
    { id: 'CARRIERS', icon: 'local_shipping', color: '#FF9800' },
    // { id: 'TRANSLATORS', icon: 'translate', color: '#E91E63' },
    { id: 'LANGUAGE_TUTORS', icon: 'school', color: '#00BCD4' },
    { id: 'PRIVACY', icon: 'security', color: '#607D8B' }
    // { id: 'TELEGRAM_SUBSCRIBE', icon: 'send', color: '#40afe6' }
  ];
}
