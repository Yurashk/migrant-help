import { Component } from '@angular/core';
import { AboutBlock } from "../../components/home-components/about-block/about-block";
import { NewImigrant } from "../../components/home-components/new-imigrant/new-imigrant";

@Component({
  selector: 'app-home',
  imports: [AboutBlock, NewImigrant],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
}
