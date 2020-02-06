import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) { 
    this.ROOT_URL = 'http://188.40.170.11:3001';
  }
  get(uri: string){
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  post(uri: string, payload: Object){
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  patch(uri: string, payload: Object){
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }
  delete(uri: string){
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}
