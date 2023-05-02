import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {ReactiveFormsModule} from'@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersonelLoginComponent } from './personel-login/personel-login.component';
import { PersonalRegistrationComponent } from './personal-registration/personal-registration.component';
import { PatientSelectionComponent } from './patient-selection/patient-selection.component';







@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    WelcomeComponent,
    PersonelLoginComponent,
    PersonalRegistrationComponent,
    PatientSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
