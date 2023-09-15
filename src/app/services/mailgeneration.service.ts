import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MailgenerationService {

  url = 'http://localhost:3000/mail';

  constructor(private http: HttpClient) { }


  getMail(){
   return this.http.get<any>(this.url);
  }

  postMail(mailData: any): Observable<any>{
    return this.http.post<any>(this.url, mailData);
  }

  deleteMail(id: any){
    return this.http.delete<any>(this.url + "/" + id)
  }
  
}
