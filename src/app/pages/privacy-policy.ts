import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-privacy-policy',
  imports: [MatCardModule, TranslateModule],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy implements OnInit {
  private seoService = inject(SeoService);
  updatedAt: string = '';

  ngOnInit(): void {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    this.updatedAt = `${day}.${month}.${year}`;

    this.seoService.updateMetaTags({
      title: 'Privacy Policy - SVOI',
      description: 'Privacy Policy for Migrant Helper - Information about data collection, processing, and your rights.',
      keywords: 'privacy policy, GDPR, data protection, SVOI',
      ogTitle: 'Privacy Policy - SVOI',
      ogDescription: 'Learn about how SVOI handles your data and protects your privacy.'
    });
  }
}
