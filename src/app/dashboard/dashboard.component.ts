import { Component } from '@angular/core';
import { FileService } from '../file.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public service: FileService){

  }
 

  apidata:any="";
  
  ngOnInit():void{
  
    this.service.getdetails().subscribe((data:any[])=>{
  
      this.apidata=data;
      console.log(this.apidata)
    })
  }
  
  
  }

