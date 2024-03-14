import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from 'src/auth/login.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',

    loadChildren: () => import('../auth/auth.routing.module').then((m) => m.AuthModule),
    canActivate: [LoginGuard]    
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
