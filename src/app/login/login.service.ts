import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginCredential } from '../Interface/loginCredential';


@Injectable({
    providedIn: 'root'
  })
export class LoginService{

  constructor(private http:HttpClient) { }

LogIn(data:loginCredential){
    return this.http.post(``,data)
}

}