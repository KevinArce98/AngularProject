import { Injectable } from '@angular/core';

//
import { Observable } from 'rxjs/observable';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//Model
import { Client } from '../models/client';

//Helper
import { GLOBAL }  from './global';

@Injectable()
export class ClientsService {

	url:string;
	auth_token:string;
  	
  	constructor(
  		private _http: Http,
		private _router : Router
  	) {
  		this.url = GLOBAL.url;
		  this.auth_token = localStorage.getItem('auth_token');
  	}


   addClient(client : Client){
     var cli = this.FormaterClient(client);
    let headersOptions = new Headers({'Content-Type': 'application/json'});
    headersOptions.append('Authorization', this.auth_token);
    let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers : headersOptions });
    return this._http.post(this.url+'clients', cli, requestOptions);
  }

  updateClient(id, client: Client){
    var cli = this.FormaterClient(client);
    let headersOptions = new Headers({'Content-Type': 'application/json'});
    headersOptions.append('Authorization', this.auth_token);
    let requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers : headersOptions });
    return this._http.patch(this.url+'clients/'+id, cli, requestOptions);
  }

  delete(id){
    let headersOptions = new Headers({'Content-Type': 'application/json'});
    headersOptions.append('Authorization', this.auth_token);
    let requestOptions = new RequestOptions({ method: RequestMethod.Delete, headers : headersOptions });
    return this._http.delete(this.url+'clients/'+id, requestOptions);
  }

  getUser(id){
    let headersOptions = new Headers({'Content-Type': 'application/json'});
    headersOptions.append('Authorization', this.auth_token);
    let requestOptions = new RequestOptions({ method: RequestMethod.Get, headers : headersOptions });
    return this._http.get(this.url+'clients/'+id, requestOptions);
  }

  getListClients(){
    let headersOptions = new Headers({'Content-Type': 'application/json'});
    headersOptions.append('Authorization', this.auth_token);
    let requestOptions = new RequestOptions({ method: RequestMethod.Get, headers : headersOptions });
    return this._http.get(this.url+'clients', requestOptions);
  }



  private FormaterClient(data){
    return { 
        "client": {
            "name": data.Name, 
            "legal_number": data.legalNumber, 
            "web_page": data.webPage, 
            "address": data.address, 
            "phone_number": data.phone, 
            "sector": data.sector
          }
        };
  }

}
