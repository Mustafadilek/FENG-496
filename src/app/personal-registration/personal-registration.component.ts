import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-registration',
  templateUrl: './personal-registration.component.html',
  styleUrls: ['./personal-registration.component.css']
})
export class PersonalRegistrationComponent {
  type: string = 'password';
  fa: string = 'fa fa-eye-slash';
  isText: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
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
      doctor_name: [''],
      doctor_surname: [''],
      doctor_national_id: [''],
      doctor_date_of_birth:[''],
      doctor_phone_number:[''],
      doctor_password:[''],
      doctor_gender:['']

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
    const doctor = {
      national_id: this.addForm.get('doctor_national_id').value,
      password: this.addForm.get('doctor_password').value,
      name: this.addForm.get('doctor_name').value,
      surname: this.addForm.get('doctor_surname').value,
      date_of_birth: this.addForm.get('doctor_date_of_birth').value,
      gender: this.addForm.get('doctor_gender').value,
      phone_number: this.addForm.get('doctor_phone_number').value,
    
    };

    this.http
      .post('http://localhost/profiler/doctors', doctor, this.httpOptions)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
}
