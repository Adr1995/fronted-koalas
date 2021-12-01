import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm = { email: '', name: '', password: '', username: ''};

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  
  signup() {
    this.authService
      .signup(this.signupForm)
      .then((res) => {
        this.toastr.success('Usuario registrado correctamente');
        this.login();
        this.createUserProfile();
      })
      .catch((err) => {
        if (err.status == 500) {
          this.toastr.error('No se ha podido acceder a su usuario', 'Error!');
        }
      });
     
      
  }
  login(){
     this.authService.login( this.signupForm )
    .then(res => {
      
      localStorage.setItem('token', res.token); // esto se hace una vez que ha llegado el token, y lo que hace es guardarlo en el navegador
      // console.log(res) //para ver el token, esto no hay que dejarlo, es solo para verlo
      // this.logged = true;
      localStorage.setItem('user' , res.user._id )
      localStorage.setItem('profile' , this.signupForm.username )
      this.router.navigateByUrl('/profile')
      
      
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
  createUserProfile() {
    this.authService
      .createUserProfile({})
      .then((res) => {localStorage.setItem('profile' , this.signupForm.username ); console.log(res)});
  }
}
