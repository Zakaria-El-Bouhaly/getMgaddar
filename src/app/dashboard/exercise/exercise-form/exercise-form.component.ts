import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Exercise } from '../exercise';

@Component({
  selector: 'mg-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.scss']
})
export class ExerciseFormComponent {

  exerciseForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    duration: new FormControl('', Validators.required),
    calories: new FormControl('', [Validators.required, Validators.min(1)]),
    date: new FormControl('', Validators.required)
  });

  @Input() exercise?: Exercise;

  @Output() formSubmitted = new EventEmitter<any>();


  isEditing = false;

  ngOnChanges() {
    if (this.exercise) {
      this.exerciseForm.setValue({
        id: this.exercise.id ?? '',
        name: this.exercise.name,
        duration: this.exercise.duration.toString(),
        calories: this.exercise.calories.toString(),
        date: this.exercise.date.toString().split('T')[0]
      });

      this.isEditing = this.exercise.id ? true : false;
    }
  }

  sumbmitExercise() {
    this.formSubmitted.emit(this.exerciseForm.value);
    this.exerciseForm.reset();
  }




}
