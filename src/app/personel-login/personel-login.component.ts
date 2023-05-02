import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personel-login',
  templateUrl: './personel-login.component.html',
  styleUrls: ['./personel-login.component.css']
})
export class PersonelLoginComponent {
  type:string="password"
  fa:string="fa fa-eye-slash"
  isText:boolean=false;
  constructor(private formBuilder: FormBuilder,
   private http: HttpClient,
   ){}
   httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
     }),
   };
   addForm: FormGroup;
  ngOnInit():void{
   
   this.addForm = this.formBuilder.group({
     doctor_login_national_id: [''],
     doctor_login_password:[''],
     
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
     const doctor = {
       national_id: this.addForm.get('doctor_login_national_id').value,
       password: this.addForm.get('doctor_login_password').value,
     };
 
     this.http
       .post('http://localhost/profiler/doctors/login', doctor, this.httpOptions)
       .subscribe({
          next: (response) => console.log(response),
         error: (error) => console.log(error),
         
       });
   }
}
