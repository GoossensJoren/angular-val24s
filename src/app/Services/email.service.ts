import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormModel } from '../Models/form-model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendMail(
    content: FormModel
  ): Observable<FormModel> {
    return this.http.post<FormModel>("https://xhkctsd01c.execute-api.eu-central-1.amazonaws.com/Prod/api/email", content);
  }
}