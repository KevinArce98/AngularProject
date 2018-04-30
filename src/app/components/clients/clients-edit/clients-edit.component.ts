import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Model
import { Client } from '../../../models/client'; 

//Service
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-clients-edit',
  templateUrl: './clients-edit.component.html',
  providers: [ClientsService]
})
export class ClientsEditComponent implements OnInit {
	error = "";
  client: Client;
  	constructor(
  		private _ClientsService: ClientsService,
  		private _router : Router,
      private _route: ActivatedRoute,
  	) { }

  ngOnInit() {
    this.getClient();
  }

  getClient(){
    this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this._ClientsService.getUser(id).subscribe(
          response=>{
            this.client = response.json();
          }, err=>{
            this.error = err.statusText;
          });
      });
  }

}
