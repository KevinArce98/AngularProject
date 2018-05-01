import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Model
import { Ticket } from '../../../models/ticket';

//Services
import { TicketsService } from '../../../services/tickets.service';
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html'
})
export class TicketEditComponent implements OnInit {
	error = "";
	clients: any;
	ticket : Ticket;

  	constructor(
  		private _TicketsService: TicketsService,
  		private _ClientsService: ClientsService,
  		private _router : Router,
  		 private _route: ActivatedRoute
  	) {}

  ngOnInit() {
  	this._ClientsService.getList().subscribe(
  			response=>{
  				this.clients = response.json();
  			},err=>{
  				this.error = err.statusText;
  			}
  			);
  	this.getTicket();
  }

  getTicket(){
  	this._route.params.subscribe(
  		params =>{
  			let id = +params['id'];
  			this._TicketsService.getTicket(id).subscribe(
  				response=>{
  					this.ticket= response.json();
  				},err=>{
  					this.error = err.statusText;
  				}
  			);
  		}
  	);
  }
  onSubmit(form: NgForm){
 		if (form.value.status == undefined) {
 			this.error = "You have to choose a status";
 		}else if(form.value.client_id == undefined){
			this.error = "You have to choose a client";
 		}else{
		this._route.params.subscribe(
  		params =>{
  				let id = +params['id'];
  				this._TicketsService.updateTicket(id, form.value).subscribe(
  					response=>{
  					this._router.navigate(['tickets']);
  					},err=>{
  					this.error = err.statusText;
  					}
  				);
  			}
  		);
  	}
  }
}
