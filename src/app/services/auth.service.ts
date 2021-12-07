import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  public login(body: any) {
    console.log(body);
    return axios.post(`${environment.API_URL}/api/auth/login`, body)
      .then(result => result.data)
  }

  public signup(body: any){
    console.log(body);
    
    return axios.post(`${environment.API_URL}/api/auth/register`, body)
      .then(result => result.data)
      }
 public createUserProfile(body: any){
    console.log(body);
        
     return axios.post(`${environment.API_URL}/api/profile/create`, body)
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
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }


}