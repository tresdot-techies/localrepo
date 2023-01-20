import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed = true;
  constructor(private route:Router){}

  delete_token(){
    localStorage.removeItem('name');
    localStorage.removeItem('user_type');
    this.route.navigate(['./login']);
    console.log('logout');
  }

}
