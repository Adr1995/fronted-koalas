import { Injectable } from '@angular/core';
import axios from 'axios';
import { Task } from '../models/user/Task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  public getTasks() {
    const token = localStorage.getItem('token')
    return axios.get<any>(`/api/tasks/` , { headers : { "authorization" : `Bearer ${token}`  }}) //header
    .then(result => result.data)
}
}
