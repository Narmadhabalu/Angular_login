import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }
  email = 'narmadha@27';
  password = 'nar27';
  public GetText(){
    return 'string from service';
  }

  student=[
    {name:'narmadha',gender:'female'},
    {name:'kiruthiga',gender:'female'},
    {name:'rohith',gender:'male'},
    {name:'harini',gender:'female'},
    {name:'suriya',gender:'male'},
    {name:'balu',gender:'male'},
  ]

  public getStudent(){
    return this.student;
  }
}
