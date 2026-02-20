import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";
import { MatCard, MatCardContent } from "@angular/material/card";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-telegram-chanel',
  imports: [MatButtonModule, MatIcon, MatCard, MatCardContent,TranslateModule],
  templateUrl: './telegram-chanel.html',
  styleUrl: './telegram-chanel.scss'
})
export class TelegramChanel {

}
