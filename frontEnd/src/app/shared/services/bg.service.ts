import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { WebServiceService } from './web-service.service';
import Response from '../classes/response';
import Portrait from '../classes/portrait';

@Injectable({
  providedIn: 'root'
})
export class BgService {
  getResponses: Response;
  getResponsesArray: Response[];  

  getPortraits: Portrait;
  getPortraitsArray: Portrait[];

  readonly baseUrl = 'http://188.40.170.11:3001/api/response'
  readonly baseUrlPortrait = 'http://188.40.170.11:3001/api/portrait'
  constructor(private webService: WebServiceService, private http: HttpClient) {
    this.getResponses = new Response();
    this.getPortraits = new Portrait();
  }

  getPortrait() {
    return this.http.get(this.baseUrlPortrait);
  }
  getIdPortait(id: string){
    return this.webService.get(`api/portrait/edit/${id}`);
  }
  createPortrait(data: string) {
    return this.webService.post('api/portrait', data)
  }
  updatePortrait(id: string, response: string) {
    return this.http.patch(`http://188.40.170.11:3001/api/portrait/edit-upd/${id}`, response );
  }
  updatePortraitAll(id: string, data: string) {
    return this.http.patch(`http://188.40.170.11:3001/api/portrait/edit-updAll/${id}`, data);
  }
  deletePortait(id: string) {
    return this.http.delete(`http://188.40.170.11:3001/api/portrait/delete/${id}`);
  }



  getResponse() {
    return this.http.get(this.baseUrl);
  }
  createResponse(data: Response) {
    console.log(data)
    return this.http.post(this.baseUrl, data)
  }
  updateResponse(id: string, response: string) {
    console.log(response)
    return this.http.put(`http://188.40.170.11:3001/api/response/edit/${id}`, response )
  }
  deleteResponse(id: string) {
    return this.http.delete(`http://188.40.170.11:3001/api/response/delete/${id}`)
  }

  auth(data: string) {
    console.log(data)
    return this.webService.post('auth', data)
  }

  feedback(data: string){
    return this.webService.post('api/feedback', data)
  }
}
