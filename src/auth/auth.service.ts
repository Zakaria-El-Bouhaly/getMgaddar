import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly afAuth = inject(AngularFireAuth);

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // authentication methods
  // logout, password reset
  signOut() {
    return this.afAuth.signOut();
  }

  getAuthState() {
    return this.afAuth.authState;
  }

  // get current user
  getCurrentUser() {
    return this.afAuth.currentUser;
  }

  logout() {
    this.afAuth.signOut();
  }
}
