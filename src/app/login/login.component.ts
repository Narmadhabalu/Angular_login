import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';

  constructor(private router:Router){

  }
  login() {
    console.log('Logged in sucessfully');
    this.router.navigate(['Dashboardpath'])
  }

}
