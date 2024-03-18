import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // update user profile firebase
  private readonly afAuth = inject(AngularFireAuth);

  updateProfile(name: string, photoURL: string) {
    try {
      this.afAuth.currentUser.then((user) => {
        return user?.updateProfile({
          displayName: name,
          photoURL: photoURL
        });
      });
    }
    catch (error) {
      console.log(error);
    }
  }
}
