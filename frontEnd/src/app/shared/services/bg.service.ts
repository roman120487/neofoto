import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { WebServiceService } from './web-service.service';
import Response from '../classes/response';
import Portrait from '../classes/portrait';
import Team from '../classes/team';

@Injectable({
  providedIn: 'root'
})
export class BgService {
  getResponses: Response;
  getResponsesArray: Response[];  

  getPortraits: Portrait;
  getPortraitsArray: Portrait[];

  getTeams: Team;
  getTeamsArray: Team[];

  // readonly baseUrl = 'http://188.40.170.11:3001/api/response'
  // readonly baseUrlPortrait = 'http://188.40.170.11:3001/api/portrait'
  constructor(private webService: WebServiceService, private http: HttpClient) {
    this.getResponses = new Response();
    this.getPortraits = new Portrait();
    this.getTeams = new Team();
  }

  getPortrait() {
    return this.webService.get('api/portrait');
  }
  getIdPortait(id: string){
    return this.webService.get(`api/portrait/edit/${id}`);
  }
  createPortrait(data: string) {
    return this.webService.post('api/portrait', data)
  }
  updatePortrait(id: string, response: string) {
    return this.webService.patch(`api/portrait/edit-upd/${id}`, response );
  }
  updatePortraitAll(id: string, data: string) {
    return this.webService.patch(`api/portrait/edit-updAll/${id}`, data);
  }
  deletePortait(id: string) {
    return this.webService.delete(`api/portrait/delete/${id}`);
  }
  getResponse() {
    return this.webService.get('api/response');
  }
  createResponse(data: Response) {
    return this.webService.post('api/response', data)
  }
  updateResponse(id: string, response: string) {
    return this.webService.patch(`api/response/edit/${id}`, response )
  }
  deleteResponse(id: string) {
    return this.webService.delete(`api/response/delete/${id}`)
  }
  auth(data: string) {
    console.log(data)
    return this.webService.post('auth', data)
  }
  feedback(data: string){
    return this.webService.post('api/feedback', data)
  }


  getTeam(){
    return this.webService.get('api/team')
  }
  postTeam(data){
    return this.webService.post('api/team', data)
  }
  updateTeam(id, data){
    return this.webService.patch(`api/team/edit/${id}`, data )
  }
  deleteTeam(id){
    return this.webService.delete(`api/team/delete/${id}`)
  }
}
