import { Component, inject, OnInit } from '@angular/core';
import { AboutBlock } from "../../components/home-components/about-block/about-block";
import { NewImigrant } from "../../components/home-components/new-imigrant/new-imigrant";
import { SeoService } from '../../services/seo.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [AboutBlock, NewImigrant],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  private seoService = inject(SeoService);
  private translate = inject(TranslateService);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Rooted - Support for Migrants in Belgium',
      description: 'Navigate local services in Belgium: CPAS/OCMW, Actiris, VDAB. Multilingual support with AI assistance for newcomers and refugees.',
      keywords: 'migrant, belgium, CPAS, OCMW, Actiris, VDAB, immigration, refugee, asylum, social services',
      ogTitle: 'Rooted - Support for Migrants in Belgium',
      ogDescription: 'Navigate local services in Belgium: CPAS/OCMW, Actiris, VDAB. Multilingual support available.'
    });
  }
}
