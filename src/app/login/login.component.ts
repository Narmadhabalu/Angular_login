import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FirstserviceService } from '../firstservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private router:Router ,private service:FirstserviceService)
  {

  }
  email:string='';
  password:string='';


  login():void{
    
    if(this.email==this.service.email&&this.password==this.service.password){
      console.log(this.email);
      console.log(this.password);
     localStorage.setItem('email',this.email);
     localStorage.setItem('password',this.password);
      this.router.navigate(['Dashboard']);
      
    }
  }


}
