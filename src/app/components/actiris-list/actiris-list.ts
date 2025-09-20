import { Component, inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { Actiris } from '../../services/actiris';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActirisCenter } from '../../models/actiris';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actiris-list',
  imports: [
    CommonModule,
    MatCard,
    MatButtonModule,
    MatCardModule,
    TranslateModule,
    MatIconModule,
    MatDivider,
  ],
  templateUrl: './actiris-list.html',
  styleUrl: './actiris-list.scss',
})
export class ActirisList implements OnInit {
  @Input() searchTerm!: string;
  actirisCentersService = inject(Actiris);
  router=inject(Router)
  allActirises: ActirisCenter[] = [];
  allActirisesSorted: ActirisCenter[] = [];
  ngOnInit(): void {
    this.actirisCentersService.getActirisCenters().subscribe((res) => {
      this.allActirises = res;
      this.allActirisesSorted = res;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) {
      console.log(changes);
      this.sortCountries(changes['searchTerm'].currentValue);
    }
  }
  sortCountries(searchParam: any) {
    this.allActirisesSorted = this.allActirises.filter((x) =>
          x.name.toLowerCase().includes(searchParam.toLowerCase()) ||
          x.postalCode.toLowerCase().includes(searchParam.toLowerCase())
      );
  }
  mapUrlFor(c: ActirisCenter): string {
    const q = `${c.address}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      q
    )}`;
  }
  navigateToActiris(id?: string) {
    this.router.navigate(['/actiris-letter-creation'], {
      queryParams: { 'actiris-name': id ,'isActiris':true},
    });
  }
}
