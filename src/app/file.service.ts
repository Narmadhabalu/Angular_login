import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  student=[
    {name:'narmadha',gender:'female'},
    {name:'kiruthiga',gender:'female'},
    {name:'rohith',gender:'male'},
    {name:'harini',gender:'female'}
  ]

  public getStudent(){
    return this.student;
  }
}
