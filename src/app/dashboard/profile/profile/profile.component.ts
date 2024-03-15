import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'mg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private profileService: ProfileService) { }

  async updateProfile(event: any) {
    try {
      await this.profileService.updateProfile(event?.name, '');
      Swal.fire('Profile updated', 'Your profile has been updated', 'success');
    }
    catch (error:any) {
      Swal.fire('Error', error.message, 'error');
    }


  }

}
