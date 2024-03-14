import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mg-signup',
  templateUrl: './signup.component.html',
  standalone: true,
  imports: [CommonModule , RouterModule,ReactiveFormsModule],

})
export class SignupComponent {
  private authSvc = inject(AuthService);
  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  async signUp() {
    try {
    await this.authSvc.signup(this.getCtrls.email.value!, this.getCtrls.password.value!);    
    } catch (err) {
      console.error(err);
    }
  }

  get getCtrls() {
    return this.signUpForm.controls;
  }


}
