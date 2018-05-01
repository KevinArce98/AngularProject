import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

//Services
import { MeetingsService } from '../../../services/meetings.service';
import { ClientsService } from '../../../services/clients.service';
import { UserService } from '../../../services/users.service';

@Component({
  selector: 'app-meeting-add',
  templateUrl: './meeting-add.component.html',
  providers: [MeetingsService, ClientsService, UserService]
})
export class MeetingAddComponent implements OnInit {
	error = "";
	clients: any;
	users : any;
  	constructor(
  		private _MeetingsService: MeetingsService,
  		private _ClientsService: ClientsService,
  		private _UserService: UserService,
  		private _router : Router
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
  }

  onSubmit(form: NgForm){
 		if (form.value.user_ids.length == 0) {
 			this.error = "You have to choose an users";
 		}else{
		this.error = "";
  		this._MeetingsService.addMeeting(form.value).subscribe(
  			response=>{
  				this._router.navigate(['meetings']);
	  		}, 
	  		err=>{
	  			this.error = err.statusText;
	  		});
  		}
  	}

}
