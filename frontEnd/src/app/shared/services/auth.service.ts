import { Injectable } from '@angular/core';
import { WebServiceService } from './web-service.service';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators'
import { tokenNotExpired } from 'angular2-jwt'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  users: any;

  constructor(private web: WebServiceService, private http: Http) { }

  authUser(user){
    console.log(user)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://188.40.170.11:3001/auth', 
    user, 
    {headers: headers}).pipe(map((response: any) => response.json()));
  }
  storeUser(token, user){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.users = user;
  }
  logout(){
    this.token = null;
    this.users = null;
    localStorage.clear();
  }
  isLoggedIn(){
    return tokenNotExpired();
  }

}
