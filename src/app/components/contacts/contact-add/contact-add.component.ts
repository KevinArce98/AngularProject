import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { Router } from '@angular/router';


//Services
import { ContactsService } from '../../../services/contacts.service';
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  providers: [ContactsService, ClientsService]
})
export class ContactAddComponent implements OnInit {
	error = "";
	clients: any;

  	constructor(
  		private _ContactsService: ContactsService,
  		private _ClientsService: ClientsService,
  		private _router : Router
  	) {}

  ngOnInit() {
  	this._ClientsService.getList().subscribe(
  			response=>{
  				this.clients = response.json();
  			},err=>{
  				this.error = err.statusText;
  			}
  			);
  }

  onSubmit(form: NgForm){
  		this.error = "";
  		this._ContactsService.add(form.value).subscribe(
  			response=>{
  				this._router.navigate(['contacts']);
	  		}, 
	  		err=>{
	  			this.error = err.statusText;
	  		});
  	}

}
