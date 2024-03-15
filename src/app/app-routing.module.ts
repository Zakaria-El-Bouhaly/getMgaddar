import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from 'src/app/auth/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',

    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [LoginGuard]    
  },
  {
    path: "dashboard",
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
