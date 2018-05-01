import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

//Service
import { MeetingsService } from '../../services/meetings.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  providers: [MeetingsService]
})
export class MeetingsComponent implements OnInit {
	error = "";
	meetings : any;
  	constructor(
  		private _MeetingsService : MeetingsService,
		private _router : Router
  	) { }

  	ngOnInit() {
  		this.getListMeetings();
  	}

  	getListMeetings(){
  		this._MeetingsService.getMeetings().subscribe(
  			response=>{
  				this.meetings = response.json(); 
  			}, err=>{
  				this.error = err.statusText;
  			}
  		);
  	}

  	delete(id){
  		this._MeetingsService.deleteMeeting(id).subscribe(response =>{
  			this.getListMeetings();
  		}, err=>{
  			this.error = err.statusText;
  		});
  	}

}
