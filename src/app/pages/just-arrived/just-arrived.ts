import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle, MatCardHeader, MatCardSubtitle } from "@angular/material/card";

import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MarkdownPipe } from "../../services/markdown.pipe";
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { UsefulLinks } from "../useful-links/useful-links";

@Component({
  selector: 'app-just-arrived',
  imports: [CommonModule, TranslateModule, MatCard, MatCardTitle, MatCardContent, MatCardHeader, MatCardSubtitle, MatIcon, MarkdownPipe, MatDividerModule, MatButtonModule, UsefulLinks],
  templateUrl: './just-arrived.html',
  styleUrl: './just-arrived.scss'
})
export class JustArrived {
  stepKeys = ['STEP_1', 'STEP_2', 'STEP_3', 'STEP_4', 'STEP_5', 'STEP_6','STEP_7'];

  stepIcons: { [key: string]: string } = {
  STEP_1: 'verified_user',       // Protection in Belgium
  STEP_2: 'home',                // Housing / Refugee Camp
  STEP_3: 'how_to_reg',          // Commune registration
  STEP_4: 'domain',              // CPAS
  STEP_5: 'work',                // Actiris / VDAB
  STEP_6: 'volunteer_activism',  // Social benefits
  STEP_7: 'school'               // Language courses
};

  constructor(public translate: TranslateService) {}
}
