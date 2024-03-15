import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FirebaseAppModule } from '@angular/fire/app';
import { ReactiveFormsModule } from '@angular/forms';
import { ExerciseFormComponent } from './exercise/exercise-form/exercise-form.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, HeaderComponent, ExerciseFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    provideFirestore(() => getFirestore()),
    FirebaseAppModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
