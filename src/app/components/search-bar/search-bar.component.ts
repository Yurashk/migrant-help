import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-search-bar',
  imports: [MatFormFieldModule,MatInputModule,TranslateModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() searchChanged=new EventEmitter<string>();
  @ViewChild('searchInput') inputRef!:ElementRef; 
  onInput(event:Event){
    const value = (event.target as HTMLInputElement).value;
    this.searchChanged.emit(value);
  }
  focusInput(){
    this.inputRef.nativeElement.focus()
  }
  addInputStartTerm(){
    this.inputRef.nativeElement.value='ukraine';
    this.searchChanged.emit(this.inputRef.nativeElement.value)
  }
}
