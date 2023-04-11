import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
