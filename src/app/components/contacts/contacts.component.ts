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
	contacts: any;
  	constructor(
  		private _ContactsService: ContactsService,
  		private _router : Router
  	) { }

  ngOnInit() {
  	this.getContacts();
  }

  getContacts(){
    this._ContactsService.getList().subscribe(
      response=>{
         this.contacts = response.json();
      }, err=>{
        this.error = err.statuText;
      }
      );
  }

  delete(id){
      this._ContactsService.delete(id).subscribe(
        response=>{
          this.getContacts();
        }, err => {
          this.error = err.statusText;
        });
    }

}
