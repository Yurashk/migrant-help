import { Component } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { SelectedCpasDetails } from "../../components/selected-cpas-details/selected-cpas-details";

@Component({
  selector: 'app-selected-cpas',
  imports: [SelectedCpasDetails],
  templateUrl: './selected-cpas.html',
  styleUrl: './selected-cpas.scss',
})
export class SelectedCpas {
  currentID:string ='';
  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        // загрузи CPAS по id
        this.currentID=id
      }
    });
  }
}
