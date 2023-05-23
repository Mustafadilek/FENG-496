import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


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
import { GoogleChartsModule } from 'angular-google-charts';
import { NgApexchartsModule } from "ng-apexcharts";
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';








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
    GoogleChartsModule.forRoot(),
    NgApexchartsModule,
    CanvasJSAngularChartsModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
