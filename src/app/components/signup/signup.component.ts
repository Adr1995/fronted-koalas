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
  signupForm = { email: '', name: '', password: '' };

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
      })
      .catch((err) => {
        if (err.status == 500) {
          this.toastr.error('No se ha podido acceder a su usuario', 'Error!');
        }
      });
  }
}
