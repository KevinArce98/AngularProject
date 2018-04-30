import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
	title = "Log In";
  status: any;
  constructor(
  	private _LoginService: LoginService,
    private router: Router
  ) {
  	
  }

  ngOnInit() {
    if (this._LoginService.validateToken()) {
      this.router.navigate(['home']);
    }
  }

  onSubmit(form : NgForm){
    this._LoginService.login(form.value);
  }

}
