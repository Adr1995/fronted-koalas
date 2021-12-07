import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private router : Router) { }
   public newPost(body: any){
    const token = localStorage.getItem('token');
    return axios.post(`${environment.API_URL}/api/tasks/create`, body, { headers: { authorization: `Bearer ${token}` }})
      .then(result => result.data)
   }
   public deletePost(id:any){
    const token = localStorage.getItem('token');
     return axios.delete(`${environment.API_URL}/api/tasks/delete/${id}`, { headers: { authorization: `Bearer ${token}` }})
     .then(result => result.data)}

   public getPosts(userid:string){
    const token = localStorage.getItem('token');
    
     return axios.get(`${environment.API_URL}/api/tasks/${userid}`, { headers: { authorization: `Bearer ${token}` }})
     .then(result => result.data)
   }
   public editPosts(id:string, body:any){
    const token = localStorage.getItem('token');
    return axios.patch(`${environment.API_URL}/api/tasks/edit/${id}`, body, { headers: { authorization: `Bearer ${token}` }})
    .then(result => result.data)
   }
   public likesPosts(id:string, body:any){
    const token = localStorage.getItem('token');
    return axios.post(`${environment.API_URL}/api/tasks/${id}/likes`, body, { headers: { authorization: `Bearer ${token}` }})
    .then(result => result.data)
   }
   public deletelike(idtasks:any, body: any){
    const token = localStorage.getItem('token');
    
    return fetch(`${environment.API_URL}/api/tasks/${idtasks}/likes`, {
      
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
}
