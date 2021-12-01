import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit{

loginForm = { email : "", password : ""}

constructor( 
  private authService : AuthService,
  private router : Router,
  private toastr: ToastrService
  ) { }

ngOnInit(): void {
}

login(){
  this.authService.login( this.loginForm )
    .then(res => {
      
      localStorage.setItem('token', res.token); // guarda el token en el localStorage
      localStorage.setItem('user' , res.user._id )
     // localStorage.setItem('profile' , res.user.profile.username )
     
      this.router.navigateByUrl('/profile')
      this.toastr.success("Has iniciado sesión correctamente");
      
    })
    .catch(err => {
      if (err.response.status === 404 || err.response.status === 401 ){
      this.toastr.error("Usuario o contraseña incorrecto", "Error!")
    } else if(err.response.status === 500) {
      this.toastr.error("Internal server error", "Error 500")
      }

    })
}

}
