import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { Router } from '@angular/router';


//Services
import { TicketsService } from '../../../services/tickets.service';
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  providers: [TicketsService, ClientsService]
})
export class TicketAddComponent implements OnInit {
	error = "";
	clients: any;

  	constructor(
  		private _TicketsService: TicketsService,
  		private _ClientsService: ClientsService,
  		private _router : Router
  	) {}

  ngOnInit() {
  	this._ClientsService.getList().subscribe(
  			response=>{
  				this.clients = response.json();
  			},err=>{
  				this.error = err.statusText;
  			});
  }

 	onSubmit(form: NgForm){
 		if (form.value.status == undefined) {
 			this.error = "You have to choose a status";
 		}else if(form.value.client_id == undefined){
			this.error = "You have to choose a client";
 		}else{
		this.error = "";
  		this._TicketsService.addTicket(form.value).subscribe(
  			response=>{
  				this._router.navigate(['tickets']);
	  		}, 
	  		err=>{
	  			this.error = err.statusText;
	  		});
  		}
  	}

}
