import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient) { }

  submitRegister(body:any){
    return this._http.post('http://localhost:3000/users/register', body,{
      observe:'body'
    });
  }

  login(body:any){
    return this._http.post('http://localhost:3000/users/login', body,{
      observe:'body',
      
    });
  }

  getUserName() {
    return this._http.get('http://localhost:3000/users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token') || '{}')
    });
  }

  getEmail() {
    return this._http.get('http://localhost:3000/users/email', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token') || '{}')
    });
  }
}