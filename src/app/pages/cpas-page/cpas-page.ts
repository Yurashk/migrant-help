import { Component, signal} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";
import { CpasCenters } from "../../components/cpas-centers/cpas-centers";
import { debounceTime, Subject } from 'rxjs';
import { MatCard, MatCardContent, MatCardTitle } from "@angular/material/card";
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ChooseCity } from "../../components/choose-city/choose-city";


@Component({
  selector: 'app-cpas-page',
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    TranslateModule,
    SearchBarComponent,
    CpasCenters,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatButton,
    MatIcon, RouterModule,
    ChooseCity
],
  templateUrl: './cpas-page.html',
  styleUrl: './cpas-page.scss',
})
export class CpasPage {
  private searchSubject = new Subject<string>();
  searchTerm = signal('');
  constructor(){
    this.searchSubject.pipe(debounceTime(500)).subscribe(value => {
      this.searchTerm.set(value);
    });
  }

  getSearchTerm(event:string){
    this.searchSubject.next(event)
  }
}
