import { Component, signal } from '@angular/core';
import { ActirisList } from '../../components/actiris-list/actiris-list';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { debounceTime, Subject } from 'rxjs';
import { MatCard, MatCardContent } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { ChooseCity } from "../../components/choose-city/choose-city";

@Component({
  selector: 'app-actiris-vdab',
  imports: [
    ActirisList,
    SearchBarComponent,
    MatCard,
    MatCardContent,
    TranslateModule,
    ChooseCity
],
  templateUrl: './actiris-vdab.html',
  styleUrl: './actiris-vdab.scss',
})
export class ActirisVdab {
  private searchSubject = new Subject<string>();
  searchTerm = signal('');
  constructor() {
    this.searchSubject.pipe(debounceTime(500)).subscribe((value) => {
      this.searchTerm.set(value);
    });
  }
  getSearchTerm(event: string) {
    console.log(event);
    this.searchSubject.next(event);
  }
}
