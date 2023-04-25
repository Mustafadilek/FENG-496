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
      // address: [''],
      // password: [''],
      // phone_number: [''],
      national_id: [''],
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
      national_id: this.addForm.get('national_id').value,
      password: '435435435',
      name: this.addForm.get('patient_name').value,
      surname: this.addForm.get('patient_surname').value,
      date_of_birth: '15-04-1994',
      gender: 0,
      phone_number: this.addForm.get('patient_name').value,
      address: this.addForm.get('patient_name').value,
    };

    this.http
      .post('http://localhost/profiler/patients', patient, this.httpOptions)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
}
