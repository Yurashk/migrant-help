import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

type Item = { LABEL: string; PHONE?: string; EMAIL?: string; WEBSITE?: string[]; NOTES?: string; };
type Section = { TITLE: string; ITEMS: Item[]; };
type Contacts = {
  EMERGENCY: Section; SAFETY_SUPPORT: Section; ADMIN_MIGRATION: Section;
  SOCIAL_AID: Section; EMPLOYMENT: Section; HEALTH: Section;
};

@Component({
  selector: 'app-important-contacts',
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule, MatButtonModule, TranslateModule],
  templateUrl: './important-contacts.html',
  styleUrl: './important-contacts.scss'
})
export class ImportantContacts {
 d = {
  emergencyServices: { phone: '112' },
  policeDirect: { phone: '101' },
  onCallDoctor: { phone: '1733' },

  violenceHelpline: { phone: '1712' },
  missingChildren: { phone: '116000' },

  immigrationOffice: { websites: ['https://dofi.ibz.be'] },
  newcomersInfo:   { websites: ['https://www.belgium.be'] },

  cpas:      { websites: ['https://www.ocmw-info-cpas.be'] },
  redCross:  { websites: ['https://www.redcross.be'] },

  actiris: { websites: ['https://www.actiris.brussels'] },
  vdab:    { websites: ['https://www.vdab.be'] },
  forem:   { websites: ['https://www.leforem.be'] },

  mutualities: {
    websites: ['https://www.cm.be', 'https://www.partena-oz.be', 'https://www.solidaris.be']
  }
}
 private t = inject(TranslateService);
  private sub = new Subscription();

  data!: Contacts;

  sectionOrder: (keyof Contacts)[] = [
    'EMERGENCY','SAFETY_SUPPORT','ADMIN_MIGRATION','SOCIAL_AID','EMPLOYMENT','HEALTH'
  ];

  sectionIcon: Record<keyof Contacts, string> = {
    EMERGENCY: 'sos',
    SAFETY_SUPPORT: 'support',
    ADMIN_MIGRATION: 'public',
    SOCIAL_AID: 'volunteer_activism',
    EMPLOYMENT: 'work',
    HEALTH: 'health_and_safety'
  };

  ngOnInit() {
    const load = () => this.sub.add(
      this.t.get('CONTACTS', { returnObjects: true }).subscribe((v: Contacts) => this.data = v)
    );
    load();
    this.sub.add(this.t.onLangChange.subscribe(load));
  }
  ngOnDestroy() { this.sub.unsubscribe(); }
}
