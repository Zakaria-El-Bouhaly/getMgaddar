import { Component, inject } from '@angular/core';
import { ExerciseService } from '../exercise/exercise.service';
import { Exercise } from '../exercise/exercise';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  private exerciseSvc = inject(ExerciseService);
  exercises: Exercise[] = [];
  selectedExercise?: Exercise;
  showExerciseForm = false;

  totalExercises = 0;
  totalDuration = 0;
  totalCalories = 0;




  async ngOnInit() {
    (await this.exerciseSvc.getExercises()).subscribe({
      next: (exercises: Exercise[]) => {     
        this.exercises = exercises;
        this.totalExercises = exercises.length;
        this.totalDuration = exercises.reduce((acc, exercise) => acc + exercise.duration, 0);
        this.totalCalories = exercises.reduce((acc, exercise) => acc + exercise.calories, 0);
      }
    });


  }

  async sumbmitExercise(exercise: Exercise) {
    if (exercise.id) {
      await this.exerciseSvc.updateExercise(exercise.id, exercise);
    } else {
      await this.exerciseSvc.addExercise(exercise);
    }
  }

  async deleteExercise(id: string) {
    await this.exerciseSvc.deleteExercise(id);
  }

  editExercise(exercise: Exercise) {
    this.showExerciseForm = true;
    this.selectedExercise = exercise;
  }

  addExercise() {
    this.showExerciseForm = true;
  }

}
