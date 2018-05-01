import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { Router, Route, ActivatedRoute } from '@angular/router';

//Model
import { Meeting } from '../../../models/meeting';

//Services
import { MeetingsService } from '../../../services/meetings.service';
import { ClientsService } from '../../../services/clients.service';
import { UserService } from '../../../services/users.service';

@Component({
  selector: 'app-meeting-edit',
  templateUrl: './meeting-edit.component.html',
  providers: [MeetingsService, ClientsService, UserService]
})
export class MeetingEditComponent implements OnInit {
	error = "";
	clients: any;
	users : any;
	meeting: Meeting;
  	constructor(
  		private _MeetingsService: MeetingsService,
  		private _ClientsService: ClientsService,
  		private _UserService: UserService,
  		private _router : Router,
  		private _route : ActivatedRoute
  	) {}

  ngOnInit() {
  	this._ClientsService.getList().subscribe(
  			response=>{
  				this.clients = response.json();
  			},err=>{
  				this.error = err.statusText;
  			});
  	this._UserService.getListUsers().subscribe(
  		response=>{
  			this.users = response.json();
  		},err=>{
  			this.error = err.statusText;
  		});
  	this.getMeeting();
  }

  getMeeting(){
  	this._route.params.subscribe(
  		params=>{
  			let id = +params['id'];
  			this._MeetingsService.getMeeting(id).subscribe(
  				response=>{
  					this.meeting = response.json();
  					var text = response.json().meetDate;
  					this.meeting['meetDate'] = text.replace(/.000Z/i, "")
  				},err =>{
  					this.error = err.statusText;
  				});
  		});
  }

  onSubmit(form: NgForm){
  	this._route.params.subscribe(
  		params=>{
  			let id = +params['id'];
  			if (form.value.user_ids == undefined || form.value.user_ids.length == 0) {
 				this.error = "You have to choose an users";
 			}else{
			this.error = "";
  			this._MeetingsService.updateMeeting(id,form.value).subscribe(
  			response=>{
  				this._router.navigate(['meetings']);
	  		}, 
	  		err=>{
	  			this.error = err.statusText;
	  		});
  		}
  		});
  	}

}
