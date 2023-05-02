import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PersonelLoginComponent } from './personel-login/personel-login.component';
import { PersonalRegistrationComponent } from './personal-registration/personal-registration.component';
import { PatientSelectionComponent } from './patient-selection/patient-selection.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'',component:WelcomeComponent},
  {path:'personelLogin', component:PersonelLoginComponent},
  {path:'personalRegistration',component:PersonalRegistrationComponent},
  {path:'patientSelection',component:PatientSelectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
