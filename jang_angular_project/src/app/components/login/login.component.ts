import { Component,EventEmitter,Output} from '@angular/core';
import { Login } from 'src/app/Login';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output()
  onLogin: EventEmitter<Login> = new EventEmitter();


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
    this.onLogin.emit(newLogin);
    }
}
