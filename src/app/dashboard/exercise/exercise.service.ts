import { Injectable, inject } from '@angular/core';
import { doc, Firestore, updateDoc, collection, addDoc, deleteDoc, collectionData } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Exercise } from './exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private fireStore: Firestore = inject(Firestore);

  private auth: AuthService = inject(AuthService);

  async addExercise(exercise: any) {

    const user = await this.auth.getCurrentUser();
    const docRef = await addDoc(collection(this.fireStore, `users/${user?.uid}/exercises`), exercise);
  }

  async getExercises() {
    const user = await this.auth.getCurrentUser();
    return collectionData(collection(this.fireStore, "users/" + user?.uid + "/exercises"), { idField: 'id' }) as Observable<Exercise[]>;
  }

  async deleteExercise(id: string) {

    const user = await this.auth.getCurrentUser();
    await deleteDoc(doc(this.fireStore, `users/${user?.uid}/exercises/${id}`));

  }

  async updateExercise(id: string, exercise: any) {
    const user = await this.auth.getCurrentUser();
    await updateDoc(doc(this.fireStore, `users/${user?.uid}/exercises/${id}`), exercise);
  }

}

