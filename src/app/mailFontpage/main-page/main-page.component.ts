import { Component } from '@angular/core';
import { MailgenerationService } from 'src/app/services/mailgeneration.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  emailData: any[] = [];

  constructor(private service: MailgenerationService){}

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

}

