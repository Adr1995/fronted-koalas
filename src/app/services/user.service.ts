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

  public followUser(id:string, body:any) {
    const token = localStorage.getItem('token');
    return axios.post(`${environment.API_URL}/api/profiles/${id}/followers`, body, { headers: { authorization: `Bearer ${token}` }})
    .then(result => result.data)
  }
  public unfollow(id:string, body:any) {
    // const token = localStorage.getItem('token');
    // return axios.delete(`${environment.API_URL}/api/profiles/${id}/followers`, body, { headers: { authorization: `Bearer ${token}` }})
    // .then(result => result.data)
    const token = localStorage.getItem('token');
    
    return fetch(`${environment.API_URL}/api/profiles/${id}/followers`, {
      
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(body) // body data type must match "Content-Type" header
    });
  }

  public addFollowing(id:string, body:any) {
    const token = localStorage.getItem('token');
    return axios.post(`${environment.API_URL}/api/profiles/${id}/followings`, body, { headers: { authorization: `Bearer ${token}` }})
    .then(result => result.data)
  }

  public deleteFollowing(id:string, body:any) {
    // const token = localStorage.getItem('token');
    // return axios.delete(`${environment.API_URL}/api/profiles/${id}/followers`, body, { headers: { authorization: `Bearer ${token}` }})
    // .then(result => result.data)
    const token = localStorage.getItem('token');
    
    return fetch(`${environment.API_URL}/api/profiles/${id}/followings`, {
      
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(body) // body data type must match "Content-Type" header
    });
  }

  listFollowing(){
    const token = localStorage.getItem('token');
    const profileId = localStorage.getItem('profileId')
    return axios.get(`${environment.API_URL}/api/profiles/${profileId}/followings` , { headers: { authorization: `Bearer ${token}` }} ) //header
    .then(result => {
      return result.data
    })
  }
    }


 
