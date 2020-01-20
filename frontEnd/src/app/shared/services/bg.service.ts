import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { WebServiceService } from './web-service.service';
import Response from '../classes/response';

@Injectable({
  providedIn: 'root'
})
export class BgService {
  getResponses: Response;
  getResponsesArray: Response[];

  readonly baseUrl = 'http://localhost:3000/api/response'
  constructor(private webService: WebServiceService, private http: HttpClient) {
    this.getResponses = new Response();
   }

  getPortrait() {
    return this.webService.get('api/portrait');
  }
  createPortrait(data: string) {
    return this.webService.post('api/portrait', data)
  }


  // getResponse() {
  //   console.log(this.getResponses)
  //   return this.webService.get('api/response');
  // }
  // createResponse(data: string) {
  //   console.log(data)
  //   return this.webService.post('api/response', data)
  // }

  getResponse(){
   return this.http.get(this.baseUrl)
  }

  createResponse(data: Response) {
    console.log(data)
    return this.http.post(this.baseUrl, data)
  }
  updateResponse(id: string, response: string) {
    console.log(response)
    return this.http.put(`http://localhost:3000/api/response/edit/${id}`, {response})
  }
  deleteResponse(id: string){
    return this.http.delete(`http://localhost:3000/api/response/delete/${id}`)
  }
}
