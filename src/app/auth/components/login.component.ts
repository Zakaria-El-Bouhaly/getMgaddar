import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mg-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private authSvc = inject(AuthService);
  private router = inject(Router);
  private location = inject(Location);
  private titleService = inject(Title);

  constructor() {
    this.titleService.setTitle("Login");
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  async login() {
    try {
      await this.authSvc.login(this.getCtrls.email.value!, this.getCtrls.password.value!);
      this.location.go('/dashboard');
      window.location.reload();
    }
    catch (err) {
      Swal.fire({
        title: 'Error!',
        text: "Invalid email or password",
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }

  get getCtrls() {
    return this.loginForm.controls;
  }


}
