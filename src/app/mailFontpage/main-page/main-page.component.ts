import { Time, formatDate } from '@angular/common';
import { Component } from '@angular/core';
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

  constructor(private service: MailgenerationService, private routre: Router){}


  composeemail = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    datetime: new FormControl(new Date()),
})


  ngOnInit(){
    // this.service.getMail().subscribe((resp) => {
    //   this.emailData = resp;
    // });

    this.getMailsData();
  }


  getMailsData(){
    this.service.getMail().subscribe((resp) => {
      this.emailData = resp;
    });
  }

  // composeButton(){
  //   this.routre.navigate(['/compose']);
  // }

}


