import { Injectable } from '@angular/core';

//
import { Observable } from 'rxjs/observable';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//Model
import { Contact } from '../models/contact';

//Helper
import { GLOBAL }  from './global';

@Injectable()
export class ContactsService {
	url:string;
	auth_token:string;

  	constructor(
  		private _http: Http,
		  private _router : Router
  	) {
  		this.url = GLOBAL.url;
		  this.auth_token = localStorage.getItem('auth_token');
  	}

  	get(id){
  		let headersOptions = new Headers({'Content-Type': 'application/json'});
	    headersOptions.append('Authorization', this.auth_token);
	    let requestOptions = new RequestOptions({ method: RequestMethod.Get, headers : headersOptions });
	    return this._http.get(this.url+'contacts/'+id, requestOptions);
  	}

  	add(contact : Contact){
      var con = this.Formater(contact);
	    let headersOptions = new Headers({'Content-Type': 'application/json'});
	    headersOptions.append('Authorization', this.auth_token);
	    let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers : headersOptions });
	    return this._http.post(this.url+'contacts', con, requestOptions);
  	}

  	update(id, contact : Contact){
       var con = this.Formater(contact);
      let headersOptions = new Headers({'Content-Type': 'application/json'});
      headersOptions.append('Authorization', this.auth_token);
      let requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers : headersOptions });
      return this._http.patch(this.url+'contacts/'+id, con, requestOptions);
  	}

  	delete(id){
  		let headersOptions = new Headers({'Content-Type': 'application/json'});
	    headersOptions.append('Authorization', this.auth_token);
	    let requestOptions = new RequestOptions({ method: RequestMethod.Delete, headers : headersOptions });
	    return this._http.delete(this.url+'contacts/'+id, requestOptions);
  	}

  	getList(){
  		let headersOptions = new Headers({'Content-Type': 'application/json'});
	    headersOptions.append('Authorization', this.auth_token);
	    let requestOptions = new RequestOptions({ method: RequestMethod.Get, headers : headersOptions });
	    return this._http.get(this.url+'contacts', requestOptions);
  	}

    private Formater(data){
      return { 
        "contact": {
            "name": data.Name, 
            "last_name": data.LastName, 
            "email": data.email, 
            "phone_number": data.phone_number, 
            "position": data.position, 
            "client_id": data.client
          }
        };
    }
}
