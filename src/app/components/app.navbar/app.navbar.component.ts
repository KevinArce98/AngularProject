import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './app.navbar.component.html',
  styleUrls: ['./app.navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('auth_token');
    this.router.navigate(['login']);
  }
  
}
