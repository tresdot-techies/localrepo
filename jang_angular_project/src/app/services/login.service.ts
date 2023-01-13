import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../Login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private apiUrl = "http://localhost/jang_angular_project/login";
  
  // constructor(private http:HttpClient) { }
  
    // getLogin(login:Login):Observable<Login>{
    //   return this.http.get<Login>(this.apiUrl);
    // }
    getLogin(login:Login){
      return console.log(login.username,login.password);
    }

}
