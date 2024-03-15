import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FirebaseAppModule } from '@angular/fire/app';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from 'src/app/auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirestore(() => getFirestore()),
    FirebaseAppModule,
    SharedModule,
    AuthModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
