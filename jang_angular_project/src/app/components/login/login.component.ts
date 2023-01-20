import { Component,EventEmitter,Output} from '@angular/core';
import { Login } from 'src/app/Login';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { Userdata } from 'src/app/userdata';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService:LoginService,private router:Router){}

  // @Output()
  // onLogin: EventEmitter<Login> = new EventEmitter();


  username!: string;
  password!:string;
  

  onSubmit(){
    if(!this.username){
      alert('Please Add Username!');
      return;
    }
    else if(!this.password){
      alert('Please Add Password!');
      return;
    }
    const newLogin = {
      username: this.username,
      password:this.password
    }
    this.auth_login(newLogin);
    // this.onLogin.emit(newLogin);
    }
    auth_login(newLogin:Login){
      this.loginService.getLogin(newLogin).subscribe((result) => (this.user_verify(result)));
      // if(this.login != null){
      //   console.log(this.login);
      // }
        // this.status = true;
      // this.username = login.username;
      // this.password = login.password;
  
    }
    user_verify(login:Userdata[]){
      // decode_j
      // console.log(login['userdata']);
      if(login[1]['message'] == "success"){
  
      this.setToken(login[0]['user_name'],login[0]['user_type'])
      // console.log(login[0]['user_name']);
      console.log(login[0]['user_type']);
      // console.log(login[1]['message']);
      // alert("Login "+login[1]['message']);

        // console.log(login);
      this.router.navigate(['./home']);

      }else if(login[1]['message'] == 'failed'){
        alert("Incorrect Username or Password. Login "+login[1]['message']);
        // console.log(login);
        // console.log('Empty');
      }
    }
      setToken(name:string,user_type:string){
        localStorage.setItem('name',name);
        localStorage.setItem('user_type',user_type);
    }
}
