import { Time, formatDate } from '@angular/common';
import { Component } from '@angular/core';
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

  composeButton(){
    this.routre.navigate(['/compose']);
  }

}


