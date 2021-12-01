import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // url: string = 'https://koalagram-back-z8nb6iyiq-ana-valdemoro.vercel.app';
  url: string = 'http://localhost:5000';

  constructor() {}

    public listUserInfo() {
      const token = localStorage.getItem('token');
      return axios.get(`${this.url}/api/users` , { headers: { authorization: `Bearer ${token}` }} ) //header
      .then(result => {
        return result.data
      })
  }

  public getUserProfile() {
    const token = localStorage.getItem('token');
    const userId : any = localStorage.getItem('user');
    
    return axios.get(`${this.url}/api/users/${userId}/profile` , { headers: { authorization: `Bearer ${token}` }} ) //header
    .then(result => {
      console.log(result) 
      return result.data;
    })
  }
    }


 
