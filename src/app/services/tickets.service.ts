import { Injectable } from '@angular/core';

//
import { Observable } from 'rxjs/observable';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//Model
import { Ticket } from '../models/ticket';

//Helper
import { GLOBAL }  from './global';

@Injectable()
export class TicketsService {
	url:string;
	auth_token:string;
  	constructor(
  		private _http: Http,
		private _router : Router
  	) { 
  		this.url = GLOBAL.url;
		this.auth_token = localStorage.getItem('auth_token');
  	}

  	getTicket(id){
  		let headersOptions = new Headers({'Content-Type': 'application/json'});
	    headersOptions.append('Authorization', this.auth_token);
	    let requestOptions = new RequestOptions({ method: RequestMethod.Get, headers : headersOptions });
	    return this._http.get(this.url+'tickets/'+id, requestOptions);
  	}

  	addTicket(ticket : Ticket){
	    let headersOptions = new Headers({'Content-Type': 'application/json'});
	    headersOptions.append('Authorization', this.auth_token);
	    let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers : headersOptions });
	    return this._http.post(this.url+'tickets', ticket, requestOptions);
  	}

  	updateTicket(id, ticket : Ticket){
      let headersOptions = new Headers({'Content-Type': 'application/json'});
      headersOptions.append('Authorization', this.auth_token);
      let requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers : headersOptions });
      return this._http.patch(this.url+'tickets/'+id, ticket, requestOptions);
  	}

  	deleteTicket(id){
  		let headersOptions = new Headers({'Content-Type': 'application/json'});
	    headersOptions.append('Authorization', this.auth_token);
	    let requestOptions = new RequestOptions({ method: RequestMethod.Delete, headers : headersOptions });
	    return this._http.delete(this.url+'tickets/'+id, requestOptions);
  	}

  	getTickets(){
  		let headersOptions = new Headers({'Content-Type': 'application/json'});
	    headersOptions.append('Authorization', this.auth_token);
	    let requestOptions = new RequestOptions({ method: RequestMethod.Get, headers : headersOptions });
	    return this._http.get(this.url+'tickets', requestOptions);
  	}

}
