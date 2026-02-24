import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { LegalNotice } from '../../legal-notice/legal-notice';

interface Driver {
  id: number;
  name: string;
  from: string;
  to: string;
  price: number;
  currency: string;
  departureDays: string;
  departureTime: string;
  vehicle: string;
  rules: string[];
  contacts: {
    phone: string;
    telegram?: string;
  };
}

@Component({
  selector: 'app-carriers-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
    LegalNotice
  ],
  templateUrl: './carriers-page.html',
  styleUrl: './carriers-page.scss'
})
export class CarriersPage {
  drivers: Driver[] = [
    {
      id: 1,
      name: 'Олександр',
      from: 'Київ',
      to: 'Брюссель',
      price: 150,
      currency: '€',
      departureDays: 'П\'ятниця',
      departureTime: '08:00',
      vehicle: 'Mercedes Vito (8 місць)',
      rules: [
        'Багаж до 20 кг',
        'Можливі зупинки',
        'Кондиціонер',
        'Wi-Fi'
      ],
      contacts: {
        phone: '+380 67 123 4567',
        telegram: '@alex_driver'
      }
    },
    {
      id: 2,
      name: 'Микола',
      from: 'Львів',
      to: 'Антверпен',
      price: 130,
      currency: '€',
      departureDays: 'Субота',
      departureTime: '06:00',
      vehicle: 'Ford Transit (9 місць)',
      rules: [
        'Багаж до 25 кг',
        '2 зупинки',
        'Оплата при посадці',
        'Безпечний'
      ],
      contacts: {
        phone: '+380 50 987 6543'
      }
    },
    {
      id: 3,
      name: 'Андрій',
      from: 'Одеса',
      to: 'Гент',
      price: 160,
      currency: '€',
      departureDays: 'Неділя',
      departureTime: '07:00',
      vehicle: 'Volkswagen Crafter (6 місць)',
      rules: [
        'Багаж до 30 кг',
        'Комфортний салон',
        'Напої включені',
        'Можливо з тваринами'
      ],
      contacts: {
        phone: '+380 93 456 7890',
        telegram: '@andriy_trips'
      }
    }
  ];
}
