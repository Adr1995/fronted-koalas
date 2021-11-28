import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/models/user/Users.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  user : Users[] = [];
  logged : boolean = false

  constructor(
    private userService: UserService,
    private authService: AuthService,
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
    
    if(localStorage.getItem('token')){
      this.logged = true;
      console.log("tengo un token")
      this.userService.getUserInfo()
        .then(resultados => {
          this.user = resultados;
        })
        .catch(err => {
          this.toastr.error('No se ha podido cargar el usuario', err)
        })
    }

    console.log("Current user: " + this.currentUser);
  }

  loadData() {
    this.userService.getUserInfo()
      .then(resultados => {
        this.user = resultados;
      })
      .catch(err => {
        this.toastr.error('No se ha podido cargar los datos de su usuario', err)
      })
  }

  ngOnInit(): void {
  }

}
