import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }
  getPatient(){
    return this.http.get<Patient[]>('http://localhost//list.php');
  }
}
