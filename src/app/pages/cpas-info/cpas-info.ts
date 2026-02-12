import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cpas-info',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './cpas-info.html',
  styleUrl: './cpas-info.scss',
})
export class CpasInfo {
  readonly stepArray: string[] = [
    'step_1', 'step_2', 'step_3', 'step_4',
    'step_5', 'step_6', 'step_7'
  ];
  
  readonly stepIcons: string[] = [
    'assignment',
    'location_on',
    'phone',
    'event',
    'face',
    'hourglass_bottom',
    'check_circle'
  ];
}
