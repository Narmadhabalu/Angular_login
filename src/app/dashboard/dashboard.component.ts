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
 

}
