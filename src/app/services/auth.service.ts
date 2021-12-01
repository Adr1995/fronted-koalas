import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = 'localhost:5000';
  constructor(private router: Router) { }

  public login(body: any) {
    console.log(body);
    return axios.post(`/api/auth/login`, body)
      .then(result => result.data)
  }

  public signup(body: any){
    console.log(body);
    
    return axios.post(`/api/auth/register`, body)
      .then(result => result.data)
      }
 public createUserProfile(body: any){
    console.log(body);
        
     return axios.post(`/api/profile/create`, body)
     .then(result => result.data)
      }
     
  public loggedIn() {
    return !!localStorage.getItem('token'); // lo que hace es devolver true o false en caso de que tenga o no tenga token
  }


  public getCurrentUser() {
    const token = localStorage.getItem('token');
    return axios.get(``, { headers: { authorization: `Bearer ${token}` } })
      .then(res => { 
        // localStorage.setItem('user' , JSON.stringify(res.data) )
        return res.data;
      })
      .catch(err => null)

  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }


}