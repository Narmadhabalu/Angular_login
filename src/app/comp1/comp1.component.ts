import { Component } from '@angular/core';
import { NgForm,FormsModule } from '@angular/forms';
import { NotFoundError } from 'rxjs';
import { FirstserviceService } from '../firstservice.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

 /**
  *
  */
 //constructor is called first.
 constructor(public service:FirstserviceService) 
 {
  this.nothing()
  this.dynamictxt;
 }

 title='balaji';
 
 mass=this.service.message;

 

  itemImageUrl="https://th.bing.com/th/id/OIP.5Fd6Xn0bHKNxNafF0QguywHaE8?pid=ImgDet&rs=1"  
  ngOnInit(): void {
    console.log(this.dynamictxt)
   
  }
  

  dynamictxt:string='' ;
  
  nothing():void {
    console.log('from nothing')
    if(this.dynamictxt=='bala')
    {
      console.log('this is from if statement')
    }
    else{
      console.log('this is from else statement')
    }
    
  }
 
 
}
