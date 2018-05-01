import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

//Model
import { Contact } from '../../../models/contact';

//Services
import { ContactsService } from '../../../services/contacts.service';
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  providers: [ContactsService, ClientsService]
})
export class ContactEditComponent implements OnInit {
	error = "";
	clients: any;
	contact : Contact;

  	constructor(
  		private _ContactsService: ContactsService,
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
  	this.getContact();
  }

  getContact(){
    this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this._ContactsService.get(id).subscribe(
          response=>{
            this.contact = response.json();
          }, err=>{
            this.error = err.statusText;
          });
      });
  }

  	onSubmit(form: NgForm){
  		this.error = "";
  		this._route.params.subscribe(
  			params => {
  				let id = +params['id'];
		  		this._ContactsService.update(id,form.value).subscribe(
		  			response=>{
		  				this._router.navigate(['contacts']);
			  		}, 
			  		err=>{
			  			this.error = err.statusText;
			  		});
  			}
  		);
  	}

}
