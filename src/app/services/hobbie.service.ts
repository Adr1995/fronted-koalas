import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HobbieService {
  url: string = 'http://localhost:5000';
  constructor() { }

  public getHobby(profileId:string){
   const token = localStorage.getItem('token');
    return axios.get(`${this.url}/api/profiles/${profileId}/hobbies`, { headers: { authorization: `Bearer ${token}` }})
    .then(result => result.data)
  }

public newHobby(body: any){
  const token = localStorage.getItem('token');
  const profileId : any = localStorage.getItem('profileId');
  return axios.post(`${this.url}/api/profiles/${profileId}/hobbies`, body, { headers: { authorization: `Bearer ${token}` }})
    .then(result => result.data)
 }

//  public deleteHobby(body:any){
//   const token = localStorage.getItem('token');
//   const profileId : any = localStorage.getItem('profileId');
//    return axios.delete(`${this.url}/api/profiles/${profileId}/hobbies`, { headers: { authorization: `Bearer ${token}` }})
//    .then(result => result.data)
//   }

public deleteHobby(body: any){
  const token = localStorage.getItem('token');
  const profileId : any = localStorage.getItem('profileId');
  return fetch(`${this.url}/api/profiles/${profileId}/hobbies`, {
    
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


 public editHobby(id:string, body:any){
  const token = localStorage.getItem('token');
  return axios.patch(`${this.url}/api/profiles/edit/${id}`, body, { headers: { authorization: `Bearer ${token}` }})
  .then(result => result.data)
 }
}
