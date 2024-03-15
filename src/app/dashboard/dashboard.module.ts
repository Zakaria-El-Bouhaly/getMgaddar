import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { ExerciseFormComponent } from './exercise/exercise-form/exercise-form.component';
import { ExerciseListComponent } from './exercise/exercise-list/exercise-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProfileFormComponent } from './profile/profile-form/profile-form.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ChartModule } from 'primeng/chart';
import { GraphsComponent } from './graphs/graphs.component';

const routes = [
  { path: '', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  declarations: [
    DashboardComponent, ExerciseFormComponent, ExerciseListComponent, ProfileFormComponent, ProfileComponent, GraphsComponent],
  
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ChartModule
  ],
  exports: [
    DashboardComponent, ExerciseFormComponent, ExerciseListComponent, ProfileFormComponent, ProfileComponent
  ]
})
export class DashboardModule { }
