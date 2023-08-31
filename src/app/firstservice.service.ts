import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

 
  constructor(public httpClient:HttpClient) { }
   message='hi this is from service';

   email='balaji24122000@gmail.com';
   password='123456';

   Anime=[
    {name:'naruto',hero:'naruto'},
    {name:'onepiece',hero:'Luffy'},
    {name:'Dragon balls',hero:'Goku'},
    {name:'Attack On titans',hero:'Eren'},
  ]

   public anime(){
    return this.Anime;
   }

   

   private apiurl="https://jsonplaceholder.typicode.com/todos";

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getdetails():Observable<any>{
    return this.httpClient.get(this.apiurl)
  }
}
