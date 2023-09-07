import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailgenerationService } from '../services/mailgeneration.service';

@Component({
  selector: 'app-composemail',
  templateUrl: './composemail.component.html',
  styleUrls: ['./composemail.component.css']
})
export class ComposemailComponent {


  constructor(private composeservice: MailgenerationService){}

  composeemail = new FormGroup({
      id: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      datetime: new FormControl('', Validators.required),
  })

  composeMail(){
    this.composeservice.postMail(this.composeemail.value).subscribe((resp) => {
      console.warn(resp);
    })
  }

  }