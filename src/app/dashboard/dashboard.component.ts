import { Component, inject } from '@angular/core';
import { ExerciseService } from '../exercise/exercise.service';
import { Exercise } from '../exercise/exercise';

@Component({
  selector: 'mg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private exerciseSvc = inject(ExerciseService);



  ngOnInit() {
    this.exerciseSvc.getExercises().then((exercises) => {
      console.log(exercises);
    }).catch((err) => {
      console.error(err);
    });  
  }
  
}
