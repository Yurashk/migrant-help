import { Component, inject, Input, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from "@angular/material/card";
import { MatChipsModule } from '@angular/material/chips';
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from '@angular/material/icon';
import { Cpas } from '../../services/cpas';
import { CpasCenter } from '../../models/cpas-center';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ChoosenCity } from '../../services/choosen-city';

@Component({
  selector: 'app-selected-cpas-details',
  imports: [CommonModule,MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardSubtitle, MatDivider,MatIcon,MatChipsModule,TranslateModule,MatButtonModule],
  templateUrl: './selected-cpas-details.html',
  styleUrl: './selected-cpas-details.scss'
})
export class SelectedCpasDetails implements OnInit{
  @Input() id!: string;
   cityService=inject(ChoosenCity)
  currentCpas:CpasCenter | undefined;
  constructor(private cpasService:Cpas,private router: Router){
    
  }

  ngOnInit(): void {
    this.cpasService.getCenters(this.cityService.value).subscribe(res=>{
      this.currentCpas=res.find(c => c.id === this.id);
    })
  }

   navigateToCpas(id?:string){
    this.router.navigate(['/letter-creation'],{ queryParams: { 'cpas-name': id} })
  }
}
