import { Time, formatDate } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MailgenerationService } from 'src/app/services/mailgeneration.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  emailData: any[] = [];

  composeMessage: boolean = false;

  // for Compose button
  displayCreateMailBox: boolean = true;

  displayBoxOnBtnClick(){
    return this.displayCreateMailBox = false;
  }
   

    // for opening the compose box through compose button
    //  opencumposebox: boolean = false;

    // for opening the compose box through compose button using (click) eventlistner
    // showcomposebox:boolean = true;

    message:string = '';


  constructor(private service: MailgenerationService, private composeservice:MailgenerationService ,private routre: Router){}


  composeemail = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    datetime: new FormControl(new Date()),
})


  ngOnInit(){
  
    this.getMailsData();
  }

  composeMail(){
    this.composeservice.postMail(this.composeemail.value).subscribe((resp) => {
      console.warn(resp);
    })
  }

  getMailsData(){
    this.service.getMail().subscribe((resp) => {
      this.emailData = resp;
    });
  }

  composeButton(){
    this.composeMessage = true;
  }



  enteredSearchValue: string[] = [];

  filterResult(searchdata: string )  {
    
    const filteredData = this.enteredSearchValue.filter(item => item.toLowerCase().includes(searchdata.trim().toLowerCase()));  
    console.log(filteredData);
  }

 
  // onSearchTextChange(){
  //   this.searchTextChange.emit(this.enteredSearchValue);
  // }

  searchvalue: string = '';
  onSearchTextEntered(value: string){
      this.searchvalue = value;
      // console.log(this.searchvalue);
    }

}


