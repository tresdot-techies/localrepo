import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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

    }
     
    

}