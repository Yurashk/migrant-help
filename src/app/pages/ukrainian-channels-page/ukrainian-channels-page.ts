import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

interface Channel {
  id: number;
  name: string;
  description: string;
  type: 'telegram' | 'whatsapp';
  link: string;
  category: string;
}

@Component({
  selector: 'app-ukrainian-channels-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule
  ],
  templateUrl: './ukrainian-channels-page.html',
  styleUrl: './ukrainian-channels-page.scss'
})
export class UkrainianChannelsPage {
  channels: Channel[] = [
    {
      id: 1,
      name: 'Свої в Бельгії',
      description: 'Головний канал з оголошеннями та корисною інформацією для українців',
      type: 'telegram',
      link: 'https://t.me/svoi_be_info',
      category: 'general'
    },
    {
      id: 2,
      name: 'Українці в Брюсселі',
      description: 'Спільнота українців у Брюсселі: житло, робота, заходи',
      type: 'telegram',
      link: 'https://t.me/ukr_brussels',
      category: 'community'
    },
    {
      id: 3,
      name: 'Україна-Бельгія | Перевізники',
      description: 'Водії та перевізники: Київ, Львів, Одеса → Бельгія',
      type: 'telegram',
      link: 'https://t.me/ua_be_transport',
      category: 'transport'
    },
    {
      id: 4,
      name: 'Робота в Бельгії',
      description: 'Вакансії для українців: офіціанти, будівництво, склади',
      type: 'telegram',
      link: 'https://t.me/be_job_ua',
      category: 'jobs'
    },
    {
      id: 5,
      name: 'Українці в Антверпені',
      description: 'Група в WhatsApp для українців в Антверпені',
      type: 'whatsapp',
      link: 'https://chat.whatsapp.com/example1',
      category: 'community'
    },
    {
      id: 6,
      name: 'Українці в Генті',
      description: 'Спільнота українців у Генті: питання, підтримка, спілкування',
      type: 'whatsapp',
      link: 'https://chat.whatsapp.com/example2',
      category: 'community'
    },
    {
      id: 7,
      name: 'Житло в Бельгії',
      description: 'Оренда житла, кімнати, квартири для українців',
      type: 'telegram',
      link: 'https://t.me/be_housing_ua',
      category: 'housing'
    },
    {
      id: 8,
      name: 'Батьки в Бельгії',
      description: 'Батьки українців в Бельгії: школи, садочки, виховання',
      type: 'whatsapp',
      link: 'https://chat.whatsapp.com/example3',
      category: 'family'
    }
  ];
}
