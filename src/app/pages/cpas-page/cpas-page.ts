import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCard, MatCardContent, MatCardTitle, MatCardHeader, MatCardSubtitle, MatCardActions, MatCardAvatar } from "@angular/material/card";
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cpas-page',
  imports: [
    CommonModule,
    TranslateModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardActions,
    MatCardAvatar,
    MatButton,
    MatIcon,
    RouterModule
  ],
  templateUrl: './cpas-page.html',
  styleUrl: './cpas-page.scss',
})
export class CpasPage {
}
