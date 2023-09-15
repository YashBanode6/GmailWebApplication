import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-headersearch',
  templateUrl: './headersearch.component.html',
  styleUrls: ['./headersearch.component.css']
})
export class HeadersearchComponent {

  searchInputShow: string = '';


  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange(){
    this.searchTextChanged.emit(this.searchInputShow);
  }

  searchvalue: string = '';
  onSearchTextEntered(value: string){
      this.searchvalue = value;
      // console.log(this.searchvalue);
    }

}
