import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { Router } from '@angular/router';


//Service
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.css'],
  providers: [ClientsService]
})
export class ClientsAddComponent implements OnInit {
	error = "";

  	constructor(
  		private _ClientsService: ClientsService,
  		private _router : Router
  	) { }

  ngOnInit() {
  }

  	onSubmit(form: NgForm){
  		this.error = "";
  		this._ClientsService.addClient(form.value).subscribe(
  			response=>{
  				this._router.navigate(['clients']);
	  		}, 
	  		err=>{
	  			this.error = err.statusText;
	  		});
  	}

}
