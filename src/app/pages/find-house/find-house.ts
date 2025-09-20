import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { MatCard, MatCardContent, MatCardTitle } from "@angular/material/card";
import { CommonModule } from '@angular/common';
import { MatList, MatListModule } from "@angular/material/list";


@Component({
  selector: 'app-find-house',
  imports: [CommonModule, MatTabsModule, TranslateModule, MatCard, MatCardContent, MatList, MatListModule],
  templateUrl: './find-house.html',
  styleUrl: './find-house.scss'
})
export class FindHouse {

}
