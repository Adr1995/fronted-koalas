import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}
 
    public listUserInfo() {
      const token = localStorage.getItem('token');
      return axios.get(`${environment.API_URL}/api/users` , { headers: { authorization: `Bearer ${token}` }} ) //header
      .then(result => {
        return result.data
      })
  }

  public getUserProfile() {
    const token = localStorage.getItem('token');
    const userId : any = localStorage.getItem('user');
    
    return axios.get(`${environment.API_URL}/api/users/${userId}/profile` , { headers: { authorization: `Bearer ${token}` }} ) //header
    .then(result => {
     
      return result.data;
    })
  }

  public showUserProfile(userId : any) {
    const token = localStorage.getItem('token');
    
    return axios.get(`${environment.API_URL}/api/users/${userId}/profile` , { headers: { authorization: `Bearer ${token}` }} ) //header
    .then(result => {
     
      return result.data;
    }).catch(err => console.log("no va"))
  }
  
  public getUserUsername() {
    const token = localStorage.getItem('token');
    const userId : any = localStorage.getItem('user');
    
    return axios.get(`${environment.API_URL}/api/users/${userId}/profile` , { headers: { authorization: `Bearer ${token}` }} ) //header
    .then(result => {
      let profile =result.data
      return profile.username;
    })
  }
    }


 
