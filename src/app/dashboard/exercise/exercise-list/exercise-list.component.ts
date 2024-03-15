import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'mg-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent {

  @Input() exercises: Exercise[] = [];

  @Output() edit = new EventEmitter<Exercise>();
  @Output() delete = new EventEmitter<string>();

  deleteExercise(id: string) {
    this.delete.emit(id);
  }

  editExercise(exercise: Exercise) {
    this.edit.emit(exercise);
  }

}
