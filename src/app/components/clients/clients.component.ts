import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

//Service
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
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

    delete(id){
      this._ClientsService.delete(id).subscribe(
        response=>{
          this.getClients();
        }, err => {
          this.error = err.statusText;
        });
    }
  	getClients(){
  		this._ClientsService.getListClients().subscribe(response=>{
  			this.clients = response.json();
  		}, err=>{
  			this.error = err.statusText;
  		});
  	}

}
