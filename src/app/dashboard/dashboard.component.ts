import { Component, inject } from '@angular/core';
import { ExerciseService } from './exercise/exercise.service';
import { Exercise } from './exercise/exercise';
import Swal from 'sweetalert2';

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

  yValues: number[] = [];
  xValues: string[] = [];

  async ngOnInit() {
    (await this.exerciseSvc.getExercises()).subscribe({
      next: (exercises: Exercise[]) => {
        this.exercises = exercises;
        this.totalExercises = exercises.length;
        this.totalDuration = exercises.reduce((acc, exercise) => acc + exercise.duration, 0);
        this.totalCalories = exercises.reduce((acc, exercise) => acc + exercise.calories, 0);
        this.yValues = exercises.map(exercise => exercise.duration);
        this.xValues = exercises.map(exercise => exercise.date.toString());
      }
    });


  }

  async submitExercise(exercise: Exercise) {
    if (exercise.id) {
      try {
        await this.exerciseSvc.updateExercise(exercise.id, exercise);
        Swal.fire('Success', 'Exercise updated successfully', 'success');
      }
      catch (err) {
        Swal.fire('Error', 'There was an error updating the exercise', 'error');
      }

    } else {
      try {
        await this.exerciseSvc.addExercise(exercise);
        Swal.fire('Success', 'Exercise added successfully', 'success');
      }
      catch (err) {
        Swal.fire('Error', 'There was an error adding the exercise', 'error');
      }
    }
  }

  async deleteExercise(id: string) {
    try {
      await this.exerciseSvc.deleteExercise(id);
      Swal.fire('Success', 'Exercise deleted successfully', 'success');
    }
    catch (err) {
      Swal.fire('Error', 'There was an error deleting the exercise', 'error');
    }
  }

  editExercise(exercise: Exercise) {
    this.showExerciseForm = true;
    this.selectedExercise = exercise;
  }

  addExercise() {
    this.showExerciseForm = true;
  }

}
