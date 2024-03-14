import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'mg-login',
  standalone: true,
  imports: [CommonModule , RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private authSvc = inject(AuthService);
  private router = inject(Router);
  private location = inject(Location);
  
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

async  login() {
    try{
      await this.authSvc.login(this.getCtrls.email.value!, this.getCtrls.password.value!);      
      this.location.go('/dashboard');
      // refresh the page
      window.location.reload();
    }
    catch(err){
      console.error(err);
    }
  }

  get getCtrls() {
    return this.loginForm.controls;
  }


}
