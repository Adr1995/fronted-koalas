import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/models/user/Users.model';
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
  myid = localStorage.getItem('user')!;
  // logged : boolean = false

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
  ) { 

    // console.log(this.user);
    // this.loadData();
    // if ( localStorage.getItem('user')){
    //   this.currentUser = JSON.parse(localStorage.getItem('user') + "")
    // }else{

    //   this.authService.getCurrentUser()
    //   .then(user => {
    //     this.currentUser = user;
    //   })
    // }
    
    // this.loadData();
    this.loadUserProfile();
    
    if(localStorage.getItem('token')){
      // this.logged = true;
      // console.log("tengo un token")
    //   this.userService.listUserInfo()
    //     .then(resultados => {
    //       this.users = resultados;
    //       // console.log("users: " +  JSON.stringify(this.users))
    //     })
    //     .catch(err => {
    //       this.toastr.error('No se ha podido cargar el usuario', err)
    //     })
    }

    console.log("Current user: " + this.currentUser);
  }

  async loadUserProfile() {
    try {
      this.profile = await this.userService.getUserProfile();
     console.log(this.profile);
    } catch (error) {
      console.log(error);
      
    }
     
  }

  loadData() {
    this.userService.listUserInfo()
      .then(resultados => {
        this.users = resultados;
      })
      .catch(err => {
        this.toastr.error('No se ha podido cargar los datos de su usuario', err)
      })
  }

  ngOnInit(): void {
  }

}
