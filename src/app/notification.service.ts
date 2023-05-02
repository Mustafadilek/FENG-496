import { Injectable } from '@angular/core';
import { IndividualConfig,ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }
   
  
}
