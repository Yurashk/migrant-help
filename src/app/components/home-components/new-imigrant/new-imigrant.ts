import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-new-imigrant',
  imports: [MatCard, MatIconModule,TranslateModule,MatButton,RouterModule ],
  templateUrl: './new-imigrant.html',
  styleUrl: './new-imigrant.scss'
})
export class NewImigrant {

}
