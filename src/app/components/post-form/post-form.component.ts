import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  post= {
    user_id: localStorage.getItem('user'),
    owner: "",
    text: "",
    title: "",
    hobbies:[],
    likes:[]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
