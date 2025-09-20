import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardModule,
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatDividerModule } from "@angular/material/divider";

@Component({
  selector: 'app-cpas-info',
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatCard,
    MatCardTitle,
    MatIcon,
    MatCardModule,
    MatDividerModule
],
  templateUrl: './cpas-info.html',
  styleUrl: './cpas-info.scss',
})
export class CpasInfo {
  stepArray: string[] = [
    'step_1',
    'step_2',
    'step_3',
    'step_4',
    'step_5',
    'step_6',
    'step_7',
  ];
  stepIcons:string[]=[
    'assignment',
    'location_on',
    'phone',
    'event',
    'face',
    'hourglass_bottom',
    'check_circle'
  ]
}
