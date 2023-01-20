import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  auth:any;
  constructor(private router:Router){}
  ngOnInit(): void {
    this.auth = localStorage.getItem('name');
    if(!this.auth){
      this.router.navigate(['./login']);
    }
  }
  

}
