import { Injectable } from '@angular/core';
import axios from 'axios';
import { Task } from '../models/user/Task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url: string = 'https://koalagram-back-nk043ak09-ana-valdemoro.vercel.app';
  constructor() { }

  public getTasks(id?:string) {
    const token = localStorage.getItem('token');
    
    return axios.get<any>(`${this.url}/api/tasks/${id}` , { headers : { authorization : `Bearer ${token}`  }}) //header
    .then(result => result.data)
}
}
