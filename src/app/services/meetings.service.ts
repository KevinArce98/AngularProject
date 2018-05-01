import { Injectable } from '@angular/core';

//
import { Observable } from 'rxjs/observable';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//Models
import { Meeting } from '../models/meeting';
import { MeetingsForUsers } from '../models/meetingsForUsers';

//Helper
import { GLOBAL }  from './global';

@Injectable()
export class MeetingsService {
	url:string;
	auth_token:string;
  	constructor(
  		private _http: Http,
		private _router : Router
  	) { 
  		this.url = GLOBAL.url;
		this.auth_token = localStorage.getItem('auth_token');
  	}

  	getMeeting(id){
  		let headersOptions = new Headers({'Content-Type': 'application/json'});
	    headersOptions.append('Authorization', this.auth_token);
	    let requestOptions = new RequestOptions({ method: RequestMethod.Get, headers : headersOptions });
	    return this._http.get(this.url+'meetings/'+id, requestOptions);
  	}

  	addMeeting(meeting: Meeting){
      var meet = this.formater(meeting);
	    let headersOptions = new Headers({'Content-Type': 'application/json'});
	    headersOptions.append('Authorization', this.auth_token);
	    let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers : headersOptions });
	    return this._http.post(this.url+'meetings', meet, requestOptions);
  	}

  	updateMeeting(id, meeting: Meeting){
      var meet = this.formater(meeting);
      let headersOptions = new Headers({'Content-Type': 'application/json'});
      headersOptions.append('Authorization', this.auth_token);
      let requestOptions = new RequestOptions({ method: RequestMethod.Patch, headers : headersOptions });
      return this._http.patch(this.url+'meetings/'+id, meet, requestOptions);
  	}

  	deleteMeeting(id){
  		let headersOptions = new Headers({'Content-Type': 'application/json'});
	    headersOptions.append('Authorization', this.auth_token);
	    let requestOptions = new RequestOptions({ method: RequestMethod.Delete, headers : headersOptions });
	    return this._http.delete(this.url+'meetings/'+id, requestOptions);
  	}

  	getMeetings(){
  		let headersOptions = new Headers({'Content-Type': 'application/json'});
	    headersOptions.append('Authorization', this.auth_token);
	    let requestOptions = new RequestOptions({ method: RequestMethod.Get, headers : headersOptions });
	    return this._http.get(this.url+'meetings', requestOptions);
  	}


    private formater(mt){
      var meeting = {
        "meeting": 
               {
                "title":mt.title, 
                "meetDate": mt.meetDate, 
                "isVirtual":mt.isVirtual, 
                "client_id":mt.client_id, 
                "user_ids":mt.user_ids
              }
      };
      return meeting;
    }

}
