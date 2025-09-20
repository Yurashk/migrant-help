import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-block',
  imports: [MatCard, MatCardTitle, MatCardContent, TranslateModule, MatIconModule],
  templateUrl: './about-block.html',
  styleUrl: './about-block.scss'
})
export class AboutBlock {

}
