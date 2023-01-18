import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../Login';
import { Userdata } from '../userdata';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = "http://localhost/codeigniter_angular_backend/login_auth";
  
  constructor(private http:HttpClient) { }
  
    // getLogin(login:Login):Observable<Login>{
    //   return this.http.get<Login>(this.apiUrl);
    // }
    // getLogin(login:Login){
    //   // let data:string = "dummy";
    //     let username : string = "abc";
    //     let password : string = '123';
    //     let result: Array<string> = [username,password]; 
    //   // let result = this.http.get(this.apiUrl,data);
    //   // console.log(result);
    //   return  result;
    // }
    getLogin(login:Login):Observable<Userdata[]>{
      return this.http.post<Userdata[]>(this.apiUrl,login,httpOptions);
      // return this.http.get<Login>(this.apiUrl);
    }

}
