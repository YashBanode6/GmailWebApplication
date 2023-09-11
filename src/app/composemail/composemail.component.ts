import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailgenerationService } from '../services/mailgeneration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-composemail',
  templateUrl: './composemail.component.html',
  styleUrls: ['./composemail.component.css']
})
export class ComposemailComponent {

  constructor(private composeservice: MailgenerationService, private router: Router){}

  composeemail = new FormGroup({
      id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      datetime: new FormControl(new Date()),
  })

  composeMail(){
    this.composeservice.postMail(this.composeemail.value).subscribe((resp) => {
      console.warn(resp);
      this.router.navigate(['/mail']);
    })
  }


  private getCurrentDate():string{
      const date = new Date();
      return date.toTimeString().split('')[0];
  }

  hideComposeBox: boolean = false;

  hideCompBox(){
    this.hideComposeBox = true;
  }


  }