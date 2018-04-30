import {Injectable} from '@angular/core';
import { User } from '../models/user';

import { Observable } from 'rxjs/observable';
import { GLOBAL } from './global';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService{
	url:string;
	auth_token:string;
	constructor(
		private _http: Http,
		private _router : Router
		){
		this.url = GLOBAL.url;
		this.auth_token = localStorage.getItem('auth_token');
	}

	getListUsers(){
		let headersOptions = new Headers({'Content-Type': 'application/json'});
		headersOptions.append('Authorization', this.auth_token);
		let requestOptions = new RequestOptions({ method: RequestMethod.Get, headers : headersOptions });
		return this._http.get(this.url+'users', requestOptions);
	}

	addUser(user : User){
		var usr = this.FormaterUser(user); 
		let headersOptions = new Headers({'Content-Type': 'application/json'});
		headersOptions.append('Authorization', this.auth_token);
		let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers : headersOptions });
		return this._http.post(this.url+'users', usr, requestOptions);
	}

	getUser(id){
		let headersOptions = new Headers({'Content-Type': 'application/json'});
		headersOptions.append('Authorization', this.auth_token);
		let requestOptions = new RequestOptions({ method: RequestMethod.Get, headers : headersOptions });
		return this._http.get(this.url+'users/'+id, requestOptions);
	}
	updateUser(id, user: User){
		var usr = this.FormaterUser(user); 
		let headersOptions = new Headers({'Content-Type': 'application/json'});
		headersOptions.append('Authorization', this.auth_token);
		let requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers : headersOptions });
		return this._http.patch(this.url+'users/'+id, usr, requestOptions);
	}

	deleteUser(id){
		let headersOptions = new Headers({'Content-Type': 'application/json'});
		headersOptions.append('Authorization', this.auth_token);
		let requestOptions = new RequestOptions({ method: RequestMethod.Delete, headers : headersOptions });
		return this._http.delete(this.url+'users/'+id, requestOptions);
	}

	private FormaterUser(data){
		return { 
				"user": {
						"name": data.Name, 
						"lastname": data.lastname, 
						"username": data.username, 
						"password": data.password, 
						"isAdmin": data.isAdmin
					}
				};
	}

}