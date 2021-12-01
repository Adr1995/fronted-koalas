import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = 'localhost:5000';
  constructor() { }
}
