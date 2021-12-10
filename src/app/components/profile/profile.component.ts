import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/models/user/Users.model';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  users : Users[] = [];
  profile : any;
  tasks: any = 0;
  id = localStorage.getItem('user')!;

  constructor(
    private userService: UserService,
    private tasksService: TaskService,
    private toastr: ToastrService,
    private router: Router
  ) { 
    this.loadData();
    this.loadUserProfile();
  }
  ngOnInit(): void {}

  async loadUserProfile() {
    try {
      this.profile = await this.userService.getUserProfile();
     localStorage.setItem('username', this.profile.username)
     localStorage.setItem('profileId', this.profile._id)
    } catch (error) {
      console.log(error);
      
    }
     
  }

  loadData() {
    this.tasksService.getTasks(this.id)
   .then(resultados => {
     this.tasks = resultados.length;
   })
   .catch(err => {
     console.log("No se han podido cargar las publicaciones")
   })
}

 post(){
  this.router.navigateByUrl('/postform');
 }
 hobby(){
  this.router.navigateByUrl('/hobbies');
 }
}
