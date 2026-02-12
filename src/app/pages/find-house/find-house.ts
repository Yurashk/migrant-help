import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { MatCard, MatCardContent } from "@angular/material/card";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-find-house',
  imports: [CommonModule, MatTabsModule, TranslateModule, MatCard, MatCardContent, MatIconModule],
  templateUrl: './find-house.html',
  styleUrl: './find-house.scss'
})
export class FindHouse {

}
