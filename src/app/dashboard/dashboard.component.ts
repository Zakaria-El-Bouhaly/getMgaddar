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
  isEditing = false;
  selectedId: string = '';

  exerciseForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    duration: new FormControl('', Validators.required),
    calories: new FormControl('', [Validators.required, Validators.min(1)]),
    date: new FormControl('', Validators.required)
  });


  async ngOnInit() {
    (await this.exerciseSvc.getExercises()).subscribe({
      next: (exercises: Exercise[]) => {
        console.log(exercises);
        this.exercises = exercises;
      }
    });
  }

  async sumbmitExercise() {
    if (this.isEditing) {
      await this.exerciseSvc.updateExercise(this.selectedId, this.exerciseForm.value);
    } else {
      await this.exerciseSvc.addExercise(this.exerciseForm.value);
    }
    this.isEditing = false;
    this.exerciseForm.reset();
  }

  async deleteExercise(id: string) {
    await this.exerciseSvc.deleteExercise(id);
  }

  editExercise(exercise: Exercise) {
    this.isEditing = true;
    this.exerciseForm.setValue({
      name: exercise.name,
      duration: exercise.duration.toString(),
      calories: exercise.calories.toString(),
      date: exercise.date.toString().split('T')[0]
    });
    this.selectedId = exercise.id ?? '';
  }


  async updateExercise(id: string) {
    await this.exerciseSvc.updateExercise(id, this.exerciseForm.value);
  }

}
