import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { Router, RouterModule } from "@angular/router";
import { LanguageSwitcher } from "../../components/language-switcher/language-switcher";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule,MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatSelectModule, RouterModule, LanguageSwitcher,TranslateModule ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Input() drawer!: MatDrawer;

  menuItems=[
    {name:'HOME',link:'/',icon:"home"},
    {name:'FAQ',link:'/faq',icon:"contact_support"},
    {name:'HELP',link:'/help',icon:"help"},
  ]
  constructor(private translate: TranslateService,private router: Router){
    const currentLang = this.translate.currentLang;

    translate.onLangChange.subscribe((event) => {
      console.log('Изменился язык на:', event.lang);
    });
  }

  goToItem() {
    this.router.navigate(['/'])
  }
}
