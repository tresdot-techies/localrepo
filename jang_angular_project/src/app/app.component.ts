import { Component } from '@angular/core';
import { Login } from './Login';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // username!: string;
  // password!: string;
  // status: boolean = false;
  constructor(private loginService:LoginService){}
  title:string = 'jang_angular_project';

  auth_login(login:Login){
    this.loginService.getLogin(login);
    // this.status = true;
    // this.username = login.username;
    // this.password = login.password;

  }
}
