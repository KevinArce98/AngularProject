import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/users.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  providers: [UserService]
})
export class UsersAddComponent implements OnInit {
	error = "";
	status = "";
  	constructor(
  		private _UserService: UserService,
  		private _router : Router
  	) { }

 	ngOnInit() {
  	}

  	onSubmit(form : NgForm){
    	if (form.value.password == form.value.Confirmpassword) {
    		this.error = null;
    		this._UserService.addUser(form.value).subscribe(
				response => {
					this.error = null;
    				this.status = "User Created";
    				this._router.navigate(['/users']);
				}, err => {
					this.error = "401";
    				this.status = err.json().error;
				}
			);
    	}else{
    		this.error = "401";
    		this.status = "Passwords do not match";
    	}
 	}

}
