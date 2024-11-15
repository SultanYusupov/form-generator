import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IForm} from '../interfaces/IForm';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) {
  }
  getFormList() {
    return this.http.get<IForm[]>(this.URL+"forms");
  }

  submitForm(form: object) {
    return this.http.post(this.URL+"submittedForm", form);
  }
}
