import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';

export interface ContactItem {
  id: string;
  icon: string;
  color: string;
  phone?: string;
  website?: string;
  isEmergency?: boolean;
}

export interface ContactGroup {
  id: string;
  items: ContactItem[];
}

@Component({
  selector: 'app-important-contacts',
  imports: [CommonModule, MatCardModule, MatTabsModule, MatIconModule, MatButtonModule, TranslateModule],
  templateUrl: './important-contacts.html',
  styleUrl: './important-contacts.scss'
})
export class ImportantContacts {
  contactGroups: ContactGroup[] = [
    {
      id: 'CRISIS',
      items: [
        { id: 'EMERGENCY', icon: 'sos', color: '#F44336', phone: '112', isEmergency: true },
        { id: 'POLICE', icon: 'local_police', color: '#2196F3', phone: '101' },
        { id: 'DOCTOR', icon: 'medical_services', color: '#4CAF50', phone: '1733' },
        { id: 'VIOLENCE', icon: 'support', color: '#9C27B0', phone: '1712' },
        { id: 'CHILDREN', icon: 'child_care', color: '#FF9800', phone: '116000' }
      ]
    },
    {
      id: 'SOCIAL',
      items: [
        { id: 'CPAS', icon: 'diversity_1', color: '#4CAF50', website: 'https://www.ocmw-info-cpas.be' },
        { id: 'RED_CROSS', icon: 'volunteer_activism', color: '#F44336', website: 'https://www.redcross.be' },
        { id: 'MUTUALITIES', icon: 'health_and_safety', color: '#2196F3', website: 'https://www.cm.be' }
      ]
    },
    {
      id: 'EMPLOYMENT',
      items: [
        { id: 'IMMIGRATION', icon: 'public', color: '#3F51B5', website: 'https://dofi.ibz.be' },
        { id: 'INFO', icon: 'info', color: '#00BCD4', website: 'https://www.belgium.be' },
        { id: 'ACTIRIS', icon: 'work', color: '#FF9800', website: 'https://www.actiris.brussels' },
        { id: 'VDAB', icon: 'work_outline', color: '#FFC107', website: 'https://www.vdab.be' },
        { id: 'FOREM', icon: 'business_center', color: '#9C27B0', website: 'https://www.leforem.be' }
      ]
    }
  ];
}
