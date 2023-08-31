import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirstserviceService } from './firstservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pro-one';

  constructor( private router:Router,private service:FirstserviceService){

    this.logoutCheck(); 
  } 

  loginData:boolean=false;
 //condition  for button to display.
  logoutCheck(){
    if(localStorage.getItem("email")!=null && localStorage.getItem('password')!=null){
      
      this.loginData=true;
    
    }
  }
  Logout():void{
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.logoutCheck();
    this.router.navigate(['Login']);
    
  }

  apidata:any="";

ngOnInit():void{

  this.service.getdetails().subscribe((data:any[])=>{

    this.apidata=data;
    console.log(this.apidata)
  })
}

}
