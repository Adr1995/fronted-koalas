import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // url: string = 'https://koalagram-back-z8nb6iyiq-ana-valdemoro.vercel.app';
  url: string = 'https://koalagram-back-nk043ak09-ana-valdemoro.vercel.app/';

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
     
      return result.data;
    })
  }
  
  public getUserUsername() {
    const token = localStorage.getItem('token');
    const userId : any = localStorage.getItem('user');
    
    return axios.get(`${this.url}/api/users/${userId}/profile` , { headers: { authorization: `Bearer ${token}` }} ) //header
    .then(result => {
      let profile =result.data
      return profile.username;
    })
  }
    }


 
