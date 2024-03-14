import { Injectable, inject } from '@angular/core';
import { doc, docData, DocumentReference, Firestore, getDoc, setDoc, updateDoc, collection, addDoc, deleteDoc, collectionData, Timestamp } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/auth.service';
import { Exercise } from './exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private fireStore: Firestore = inject(Firestore);

  private auth: AuthService = inject(AuthService);

  async addExercise(exercise: Exercise) {
    try {
      const user = await this.auth.getCurrentUser();
      const docRef = await addDoc(collection(this.fireStore, `users/${user?.uid}/exercises`), exercise);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async getExercises() {
    const user = await this.auth.getCurrentUser();
    return collectionData(collection(this.fireStore, "users/" + user?.uid + "/exercises"), { idField: 'id' }) as Observable<Exercise[]>;
  }




}
