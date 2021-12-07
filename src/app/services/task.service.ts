import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { Task } from '../models/user/Task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  public getTasks(id?:string) {
    const token = localStorage.getItem('token');
    
    return axios.get<any>(`${environment.API_URL}/api/tasks/${id}` , { headers : { authorization : `Bearer ${token}`  }}) //header
    .then(result => result.data)
}
}
