import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { GLOBAL } from './global';
import { Login } from '../models/login';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
	url:string;

	constructor(
		private _http: Http,
		private _router : Router,
		private _JWT : JwtHelperService
		){
		this.url = GLOBAL.url;
	}

	login(lg : Login){
		let headersOptions = new Headers({'Content-Type': 'application/json'});
		let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers : headersOptions });
		return this._http.post(this.url+'authenticate', lg, requestOptions).subscribe(
			response => {
				localStorage.setItem('auth_token', response.json().auth_token);
				this._router.navigate(['home']);
			}, error => {
				alert(error.json().message);
			}
		);
	}

	public validateToken(): boolean {
	    const user_token = localStorage.getItem('auth_token');
	    return !this._JWT.isTokenExpired(user_token);
  	}

}
