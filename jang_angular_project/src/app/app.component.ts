import { Component,OnInit} from '@angular/core';
import { NgControl } from '@angular/forms';
import { Login } from './Login';
import { LoginService } from './services/login.service';
import { Userdata } from './userdata';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // username!: string;
  // password!: string;
  // status: boolean = false;
  auth:any;
  constructor(private router:Router){}
  title:string = 'jang_angular_project';
  // login:Login[] = [];
  ngOnInit(): void{
    this.auth = localStorage.getItem('name');
    if(!this.auth){
      this.router.navigate(['./login']);
    }
  }

  // auth_login(login:Login){
    // this.loginService.getLogin(login).subscribe((result) => (this.user_verify(result)));
    // if(this.login != null){
    //   console.log(this.login);
    // }
      // this.status = true;
    // this.username = login.username;
    // this.password = login.password;

  // }
  // user_verify(login:Userdata[]){
    // decode_j
    // console.log(login['userdata']);
    // if(login.length != 0){

    // console.log(login[0]['user_name']);
    // console.log(login[0]['user_type']);
    // this.setToken(login[0]['user_name'],login[0]['user_type'])
    // }else{
      // console.log("Empty");
    // }
  // }

  // setToken(token:string,user_type:string){
  //   localStorage.setItem('token',token);
  //   localStorage.setItem('user_type',user_type);


  // }

}
