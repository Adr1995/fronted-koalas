import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-categories',
  templateUrl: './profile-categories.component.html',
  styleUrls: ['./profile-categories.component.css']
})
export class ProfileCategoriesComponent implements OnInit {
  myid = localStorage.getItem('user')!;
  profileId = localStorage.getItem('profileId')!;
  constructor() { }

  ngOnInit(): void {
  }

}
