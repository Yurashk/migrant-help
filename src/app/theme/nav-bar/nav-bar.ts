import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule, MatIconModule,MatButtonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {

}
