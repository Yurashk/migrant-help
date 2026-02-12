import { Component, ViewChild } from '@angular/core';
import { Header } from "../header/header";
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { Footer } from "../footer/footer";
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatCard } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { BredCrumbs } from "../../pages/bred-crumbs/bred-crumbs";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, Header, RouterModule, Footer, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatIconModule, MatCard, TranslateModule, MatDividerModule, BredCrumbs],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  @ViewChild('drawer') drawer!: MatDrawer;
  currentUrl: string = '';
  
  menuItems=[
    {name:'HOME',link:'/',icon:"home"},
    {name:'CONTACTS',link:'/important-contacts',icon:"phone"},
    {name:'CPAS',link:'/cpas',icon:"location_city"},
    {name:'ACTIRIS',link:'/labor-exchange',icon:"work"},
    {name:'HELP',link:'/help',icon:"help"},
    {name:'PRIVACY',link:'/privacy-policy',icon:"shield"},
  ]
  
  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentUrl = event.url;
    });
  }
  
  goToItem(link: string ) {
    this.router.navigate([link]).then(()=>this.drawer.toggle());
  }
  
  isActive(link: string): boolean {
    if (link === '/') {
      return this.currentUrl === '/';
    }
    return this.currentUrl.startsWith(link);
  }
}
