import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IForm} from '../interfaces/IForm';

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
}
