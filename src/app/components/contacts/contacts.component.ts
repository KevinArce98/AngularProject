import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

//Service
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  providers: [ContactsService]
})
export class ContactsComponent implements OnInit {
	error = "";
	clients: any;
  	constructor(
  		private _ContactsService: ContactsService,
  		private _router : Router
  	) { }

  ngOnInit() {
  	this.getContacts();
  }

  getContacts(){

  }

}
