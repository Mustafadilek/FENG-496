import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { PatientService } from 'src/app/patient/patient.service';
import { Patient } from 'src/app/patient/patient';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  type: string = 'password';
  fa: string = 'fa fa-eye-slash';
  isText: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _patientService: PatientService,
    private http: HttpClient
  ) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  addForm: FormGroup;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      patient_name: [''],
      patient_surname: [''],
      patient_address: [''],
      patient_national_id: [''],
      patient_date_of_birth:[''],
      patient_phone_number:[''],
      patient_password:[''],
      patient_gender:['']

    });
  }
  hideShowPass() {
    if (!this.isText) {
      this.type = 'text';
      this.fa = 'fa fa-eye';
      this.isText = !this.isText;
    } else {
      this.type = 'password';
      this.isText = !this.isText;
      this.fa = 'fa fa-eye-slash';
    }
  }

  //  onSubmit(){
  //   console.log(this.addForm.value);
  //   this._patientService.createPatient(this.addForm.value).subscribe(
  //     data => console.log("recipe added successfully!", data)
  //   );

  //  }
  submitForm() {
    // Initialize patient object with values from input fields
    const patient = {
      national_id: this.addForm.get('patient_national_id').value,
      password: this.addForm.get('patient_password').value,
      name: this.addForm.get('patient_name').value,
      surname: this.addForm.get('patient_surname').value,
      date_of_birth: this.addForm.get('patient_date_of_birth').value,
      gender: this.addForm.get('patient_gender').value,
      phone_number: this.addForm.get('patient_phone_number').value,
      address: this.addForm.get('patient_address').value,
    };

    this.http
      .post('http://localhost/profiler/patients', patient, this.httpOptions)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
}
