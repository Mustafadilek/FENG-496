import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  type:string="password"
  fa:string="fa fa-eye-slash"
  isText:boolean=false;
  constructor(){}
  ngOnInit():void{
 
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
}
