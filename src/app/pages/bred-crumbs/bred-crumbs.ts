import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { filter, startWith, Subscription } from 'rxjs';
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule } from '@ngx-translate/core';

type Crumb = {
  url?: string;
  labelKey?: string;       // i18n ключ
  label?: string;          // сырой текст (например, place.name)
  params?: Record<string, any>; // опциональные параметры для перевода
};

@Component({
  selector: 'app-bred-crumbs',
  imports: [CommonModule,MatIconModule,RouterLink,RouterModule,TranslateModule],
  templateUrl: './bred-crumbs.html',
  styleUrl: './bred-crumbs.scss'
})
export class BredCrumbs {
private router = inject(Router);
  private route  = inject(ActivatedRoute);

  private _crumbs = signal<Crumb[]>([]);
  crumbs = () => this._crumbs();

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd), startWith(null), takeUntilDestroyed())
      .subscribe(() => this._crumbs.set(this.buildCrumbs()));
  }

  private buildCrumbs(): Crumb[] {
    const out: Crumb[] = [{ url: '/', labelKey: 'NAV.HOME' }];

    const walk = (r: ActivatedRoute, url: string) => {
      for (const child of r.children) {
        const cfg = child.routeConfig;
        if (!cfg) continue;

        // Check if snapshot exists (SSR safety)
        if (!child.snapshot) continue;

        const data = child.snapshot.data ?? {};
        if (data['hideBreadcrumb']) { walk(child, url); continue; }

        const seg = child.snapshot.url.map(s => s.path).join('/');
        const nextUrl = seg ? `${url}/${seg}` : url;

        // 1) place из резолвера (детальная страница — показываем имя)
        const place = data['place'];
        // 2) ключ для i18n из data
        const key: string | undefined = data['breadcrumbKey'];
        const params: Record<string, any> | undefined = data['breadcrumbParams'];
        // 3) жёсткая подпись (непереводимая) — data.breadcrumb

        const crumb: Crumb = { url: nextUrl || '/' };
        if (place?.name)       crumb.label = place.name;
        else if (key)          crumb.labelKey = key, crumb.params = params;
        else if (data['breadcrumb']) crumb.label = data['breadcrumb'];
        else if (cfg.path)     crumb.label = cfg.path;

        if (crumb.labelKey || crumb.label) out.push(crumb);
        walk(child, nextUrl);
      }
    };

    walk(this.route.root, '');
    return out;
  }
}
