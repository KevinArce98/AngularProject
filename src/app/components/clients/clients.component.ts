import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

//Service
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [ClientsService]
})
export class ClientsComponent implements OnInit {
	error = "";
	clients: any;
  	constructor(
  		private _ClientsService: ClientsService,
  		private _router : Router
  	) { }

  	ngOnInit() {
  		this.getClients();
  	}


  	getClients(){
  		this._ClientsService.getListClients().subscribe(response=>{
  			this.clients = response.json();
  			console.log(response.json());
  		}, err=>{
  			console.log(err);

  			this.error = err.statusText;
  		});
  	}

}
