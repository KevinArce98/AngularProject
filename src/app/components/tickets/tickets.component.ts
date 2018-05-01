import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

//Service
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  providers: [TicketsComponent]
})
export class TicketsComponent implements OnInit {
	error = "";
	tickets: any; 
	constructor(
		private _TicketService : TicketsService,
		private _router : Router
	) { }

 	ngOnInit() {
  		this.getTickets();
  	}

  	getTickets(){
  		this._TicketService.getTickets().subscribe(
  			response=>{
  				this.tickets = response.json();
  			}, err => {
  				this.error = err.statusText;
  			}
  		);
  	}


  	delete(id){
  		this._TicketService.deleteTicket(id).subscribe(
        response=>{
          this.getTickets();
        }, err => {
          this.error = err.statusText;
        });
  	}

}
