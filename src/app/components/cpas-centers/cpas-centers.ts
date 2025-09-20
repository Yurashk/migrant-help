import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardSubtitle,
  MatCardTitle,
  MatCardModule,
} from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { CpasCenter } from '../../models/cpas-center';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Cpas } from '../../services/cpas';
import { distinctUntilChanged, forkJoin, switchMap, take, tap } from 'rxjs';
import {
  MatButton,
  MatButtonModule,
  MatIconButton,
} from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatDivider } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { ChoosenCity } from '../../services/choosen-city';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cpas-centers',
  imports: [
    CommonModule,
    TranslateModule,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
    MatDivider,
  ],
  templateUrl: './cpas-centers.html',
  styleUrl: './cpas-centers.scss',
})
export class CpasCenters {
  @Input() searchTerm!: string;
  cityService = inject(ChoosenCity);
  readonly panelOpenState = signal(false);
  private cpasService = inject(Cpas);
  currentCity:string='';
  search = signal('');
  centers: CpasCenter[] = [];
  centersSorted: CpasCenter[] = [];
  currentLang: string = '';
  allStrretsPostalCode: any[] = [];
  constructor(private translate: TranslateService, private router: Router) {
    this.currentLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((langEvent) => {
      this.currentLang = langEvent.lang;
    });
    this.cityService.city$
      .pipe(
        distinctUntilChanged(),
        tap(res=>this.currentCity=res),
        switchMap((city) =>
          forkJoin({
            cpasData: this.cpasService.getCenters(city?city:"bruxelles"),
            communesData: this.cpasService.getCentersByStreet(),
          })
        ),
        takeUntilDestroyed()
      )
      .subscribe(({ cpasData, communesData }) => {
        this.centers = cpasData;
        this.centersSorted = cpasData;
        this.allStrretsPostalCode = communesData;
      });

    // this.cpasService.getCenters().subscribe((data) => {
    //   console.log(data);

    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) {
      console.log(changes);
      this.sortCountries(changes['searchTerm'].currentValue);
    }
  }
  sortCountries(searchParam: any) {
    if (searchParam in this.allStrretsPostalCode) {
      const id = this.allStrretsPostalCode[searchParam];
      console.log(searchParam, id);
      this.centersSorted = this.centers.filter((x) => id.includes(x.id));
    } else {
      console.log();
      this.centersSorted = this.centers.filter(
        (x) =>
          x.name.toLowerCase().includes(searchParam.toLowerCase()) ||
          x.postalCode.toLowerCase().includes(searchParam.toLowerCase())
      );
    }
  }
  navigateToCpas(id?: string) {
    this.router.navigate(['/letter-creation'], {
      queryParams: { 'cpas-name': id },
    });
  }
  // navigateToCpas(id: string) {
  //   this.router.navigate(['/cpas', id]);
  // }
  telHref(phone?: string) {
    if (!phone) return null;
    return `tel:${phone.replace(/[^\d+]/g, '')}`;
  }
  mailHref(email?: string) {
    return email ? `mailto:${email}` : null;
  }

  mapUrlFor(c: CpasCenter & { lat?: number; lng?: number }): string {
    if (c.lat != null && c.lng != null) {
      return `https://www.google.com/maps/search/?api=1&query=${c.lat},${c.lng}`;
    }
    const q = `${c.address}, ${c.postalCode} ${c.city}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      q
    )}`;
  }
}
