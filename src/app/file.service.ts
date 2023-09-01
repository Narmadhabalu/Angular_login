import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(public HttpClint:HttpClient) { }
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

  private apiurl="https://jsonplaceholder.typicode.com/todos";

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getdetails():Observable<any>{
    return this.HttpClint.get(this.apiurl)
  }

}
