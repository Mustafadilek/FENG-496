import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Patient } from './patient';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
 

  constructor(private http: HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getPatient(){
    return this.http.get<Patient[]>('http://localhost/deneme/list.php');
  }
  // createPatient(patient: Patient) {
  //     return this.http.post('http://localhost/profiler/patients',patient)
  // }

 
}
