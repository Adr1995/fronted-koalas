import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = 'https://koalagram-back-z8nb6iyiq-ana-valdemoro.vercel.app';
  constructor() { }

  public login(body: any) {
    console.log(body);
    return axios.post(`${this.url}/api/auth/login`, body)
      .then(result => result.data)
  }

  public signup(body: any){
    console.log(body);

    return axios.post(`${this.url}/api/auth/register`, body)
      .then(result => result.data)
  }


  public getCurrentUser() {
    const token = localStorage.getItem('token');
    return axios.get(`${this.url}/me`, { headers: { authorization: `Bearer ${token}` } })
      .then(res => { 
        localStorage.setItem('user' , JSON.stringify(res.data) )
        return res.data;
      })
      .catch(err => null)

  }


}