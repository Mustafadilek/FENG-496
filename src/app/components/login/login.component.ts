import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/patient/patient.service';
 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 type:string="password"
 fa:string="fa fa-eye-slash"
 isText:boolean=false;
 constructor(private formBuilder: FormBuilder,
  private _patientService: PatientService,
  private http: HttpClient,
  private router:Router
  ){}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  addForm: FormGroup;
 ngOnInit():void{
  
  this.addForm = this.formBuilder.group({
    patient_login_national_id: [''],
    patient_login_password:[''],
    
  });
 }
  hideShowPass(){
    if(!this.isText){
      this.type="text";
      this.fa="fa fa-eye"
      this.isText=!this.isText
    }
    else{
      this.type="password"
      this.isText=!this.isText
      this.fa="fa fa-eye-slash"
    }
   
  }
  login() {
    // Initialize patient object with values from input fields
    const patient = {
      national_id: this.addForm.get('patient_login_national_id').value,
      password: this.addForm.get('patient_login_password').value,
    };
    

    this.http
      .post('http://localhost/profiler/patients/login', patient, this.httpOptions)
      .subscribe({ 
         next: (response) => console.log(response), 
               
        error: (error) => console.log(error)
        
      });
      
  }
 
  
}
