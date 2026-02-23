import { Component, inject, OnInit } from '@angular/core';
import { AboutBlock } from '../../components/home-components/about-block/about-block';
import { NewImigrant } from '../../components/home-components/new-imigrant/new-imigrant';
import { SeoService } from '../../services/seo.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [AboutBlock, NewImigrant],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private seoService = inject(SeoService);
  private translate = inject(TranslateService);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'SVOI — Допомога мігрантам у Бельгії',
      description:
        'Орієнтуйтеся у місцевих службах Бельгії: CPAS/OCMW, Actiris, VDAB. Багатомовна підтримка зі штучним інтелектом для новоприбулих та біженців.',
      keywords:
        'мігранти, бельгія, допомога, CPAS, OCMW, Actiris, VDAB, імміграція, біженці, соціальні служби',
      ogTitle: 'SVOI — Підтримка мігрантів у Бельгії',
      ogDescription:
        'Навігація по державним службам Бельгії: CPAS, Actiris, VDAB. Отримуйте допомогу рідною мовою.',
    });
  }
}
