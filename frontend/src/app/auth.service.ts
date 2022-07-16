import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginUser(user:any){
    return this.http.post<any>('login',user)
  }


  loggedIn(){
    return !!localStorage.getItem('token')
  }

    getToken(){
    return localStorage.getItem('token')
  }
}

