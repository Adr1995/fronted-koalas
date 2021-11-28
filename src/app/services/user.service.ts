import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // url: string = 'https://koalagram-back-z8nb6iyiq-ana-valdemoro.vercel.app';
  url: string = 'localhost:5000';

  constructor() {}

    public getUserInfo() {
      const token = localStorage.getItem('token');
      return axios.get(`/api/user/` ,   ) //header
      .then(result => result.data)
  }
    }


 
