import { Component, inject, Inject, OnInit, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChoosenCity ,CITIES_BE} from '../../services/choosen-city';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-choose-city',
  imports: [CommonModule, MatInputModule,ReactiveFormsModule, MatSelectModule, TranslateModule],
  templateUrl: './choose-city.html',
  styleUrl: './choose-city.scss',
})
export class ChooseCity implements OnInit{
  
  private cityService=inject(ChoosenCity)
  CITIES_BE=CITIES_BE;
  cityCtrl = new FormControl<string>(this.cityService.value);
  
  ngOnInit(): void {
    this.cityCtrl.valueChanges.subscribe(v => this.cityService.setCity(v ?? ''));
  }

}
