import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users : any[] = [];
  filtro_following = '';

  following : any[] =[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.listFollowing()
    .then(usuarios => this.users = usuarios)

  }

  handleSearch(following: string) {
    this.filtro_following = following;
 }



}
