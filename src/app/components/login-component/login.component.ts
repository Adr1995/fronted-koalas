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
//   email!: string;
//   password!: string;

//   constructor(public userService: UserService) {}

//   ngOnInit(): void {
//   }

//   login() {
//     const user = {email: this.email, password: this.password};
//     this.userService.login(user).subscribe( data => {
//       console.log(data);
//     });
//   }
// }

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
      
      localStorage.setItem('token', res.token); // esto se hace una vez que ha llegado el token, y lo que hace es guardarlo en el navegador
      // console.log(res) //para ver el token, esto no hay que dejarlo, es solo para verlo
      // this.logged = true;
      localStorage.setItem('user' , res.user._id )
      this.router.navigateByUrl('/profile')
      this.toastr.success("Has iniciado sesión correctamente");
      
    })
    .catch(err => {
      if (err.response.status === 404 || err.response.status === 401 ){
      this.toastr.error("Usuario o contraseña incorrecto", "Error!")
    } else if(err.response.status === 500) {
      this.toastr.error("Internal server error", "Error 500")
      }
      // if (err.status == 400){
      //   this.toastr.error(err.data.message, 'Error')
      // }
    })
}

}
