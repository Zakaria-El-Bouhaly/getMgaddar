import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login.component';
import { SignupComponent } from './components/signup.component';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
