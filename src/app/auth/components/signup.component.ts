import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mg-signup',
  templateUrl: './signup.component.html'

})
export class SignupComponent {
  private authSvc = inject(AuthService);
  private router = inject(Router);
  private titleService = inject(Title);

  constructor() {
    this.titleService.setTitle("Sign Up");
  }

  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  async signUp() {
    try {
      await this.authSvc.signup(this.getCtrls.email.value!, this.getCtrls.password.value!);
      this.router.navigate(['auth/login']);
    } catch (error: any) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }

  get getCtrls() {
    return this.signUpForm.controls;
  }


}
