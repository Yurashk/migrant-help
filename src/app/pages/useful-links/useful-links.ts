import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';

export interface UsefulLink {
  id: string;
  icon: string;
  color: string;
  url: string;
}

export const USEFUL_LINKS: UsefulLink[] = [
  {
    id: 'CITY_HALL',
    icon: 'account_balance',
    color: '#4CAF50',
    url: 'https://www.ibz.rrn.fgov.be/'
  },
  {
    id: 'HEALTH_INSURANCE',
    icon: 'favorite',
    color: '#FFC107',
    url: 'https://www.health.belgium.be/'
  },
  {
    id: 'PUBLIC_TRANSPORT',
    icon: 'directions_bus',
    color: '#FF9800',
    url: 'https://www.stib-mivb.be/'
  },
  {
    id: 'FIND_GP',
    icon: 'local_hospital',
    color: '#9C27B0',
    url: 'https://www.health.belgium.be/en/find-doctor'
  },
  {
    id: 'EMERGENCY',
    icon: 'emergency',
    color: '#2196F3',
    url: 'tel:112'
  },
  {
    id: 'WASTE_MANAGEMENT',
    icon: 'delete',
    color: '#F44336',
    url: 'https://www.belgium.be/en/environment/waste'
  },
  {
    id: 'SOCIAL_SERVICES',
    icon: 'group',
    color: '#00BCD4',
    url: 'https://www.belgium.be/en/social_security'
  },
  {
    id: 'JOB_CENTER',
    icon: 'work',
    color: '#3F51B5',
    url: 'https://www.actiris.be/'
  }
];

@Component({
  selector: 'app-useful-links',
  imports: [CommonModule, MatListModule, MatIconModule, TranslateModule],
  templateUrl: './useful-links.html',
  styleUrl: './useful-links.scss'
})
export class UsefulLinks {
  links = USEFUL_LINKS;
}
