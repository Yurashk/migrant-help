import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

export interface SectionItem {
  id: string;
  icon: string;
  color: string;
  route: string;
}

@Component({
  selector: 'app-new-imigrant',
  imports: [CommonModule, MatCard, MatIconModule, TranslateModule, MatButton, RouterModule],
  templateUrl: './new-imigrant.html',
  styleUrl: './new-imigrant.scss'
})
export class NewImigrant {
  sections: SectionItem[] = [
    { id: 'NEWCOMER', icon: 'emoji_people', color: '#4CAF50', route: '/just-arrived' },
    { id: 'CONTACTS', icon: 'add_alert', color: '#F44336', route: '/important-contacts' },
    { id: 'CPAS', icon: 'location_city', color: '#2196F3', route: '/cpas' },
    { id: 'ACTIRIS', icon: 'work', color: '#FF9800', route: '/labor-exchange' },
    { id: 'LAWYER', icon: 'gavel', color: '#9C27B0', route: '#' },
    { id: 'TRANSLATOR', icon: 'translate', color: '#00BCD4', route: '#' },
    { id: 'AGENT', icon: 'home_work', color: '#795548', route: '/find-apartaments' }
  ];
}
