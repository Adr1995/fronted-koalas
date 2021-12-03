import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = 'http://localhost:5000';
  constructor(private router : Router) { }
   public newPost(body: any){
    const token = localStorage.getItem('token');
    return axios.post(`${this.url}/api/tasks/create`, body, { headers: { authorization: `Bearer ${token}` }})
      .then(result => result.data)
   }
   public deletePost(id:any){
    const token = localStorage.getItem('token');
     return axios.delete(`${this.url}/api/tasks/delete/${id}`, { headers: { authorization: `Bearer ${token}` }})
     .then(result => result.data)}

   public getPosts(userid:string){
    const token = localStorage.getItem('token');
     return axios.get(`${this.url}/api/tasks/${userid}`, { headers: { authorization: `Bearer ${token}` }})
     .then(result => result.data)
   }
   public editPosts(id:string, body:any){
    const token = localStorage.getItem('token');
    return axios.patch(`${this.url}/api/tasks/edit/${id}`, body, { headers: { authorization: `Bearer ${token}` }})
    .then(result => result.data)
   }
   public likesPosts(id:string, body:any){
    const token = localStorage.getItem('token');
    return axios.patch(`${this.url}/api/tasks/edit/${id}`, body, { headers: { authorization: `Bearer ${token}` }})
    .then(result => result.data)
   }
}
