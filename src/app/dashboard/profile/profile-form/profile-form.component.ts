import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mg-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {

  @Output() profileUpdated = new EventEmitter<any>();

  profileForm = new FormGroup({
    name: new FormControl(''),
  
  });

  updateProfile() {
    this.profileUpdated.emit(this.profileForm.value);
  }
}
