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

  readonly baseUrl = 'http://localhost:3000/api/response'
  readonly baseUrlPortrait = 'http://localhost:3000/api/portrait'
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
    console.log(response)
    return this.http.patch(`http://localhost:3000/api/portrait/edit-upd/${id}`, { response })
  }
  updatePortraitAll(id: string, data: string) {
    return this.http.patch(`http://localhost:3000/api/portrait/edit-updAll/${id}`, data)
  }

  getResponse() {
    return this.http.get(this.baseUrl)
  }
  createResponse(data: Response) {
    console.log(data)
    return this.http.post(this.baseUrl, data)
  }
  updateResponse(id: string, response: string) {
    console.log(response)
    return this.http.put(`http://localhost:3000/api/response/edit/${id}`, { response })
  }
  deleteResponse(id: string) {
    return this.http.delete(`http://localhost:3000/api/response/delete/${id}`)
  }


}
