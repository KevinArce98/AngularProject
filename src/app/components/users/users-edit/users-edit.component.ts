import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/users.service';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../../models/user';
@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css'],
  providers:[UserService]
})
export class UsersEditComponent implements OnInit {
	user : User;
	error = "";

  constructor(	private _route: ActivatedRoute,
  	private _router: Router,
  	private _userService: UserService
  	) { }

  ngOnInit() {
  	this.getUser();
  }


  getUser(){
  	this._route.params.subscribe(
  		params => {
  			let id = +params['id'];
  			this._userService.getUser(id).subscribe(
  				response=>{
  					this.user = response.json();
  				}, err=>{
  					this.error = err.statusText;
  					console.log(err.statusText);
  				});
  		});
  }
  onSubmit(form : NgForm){
  	console.log(form.value);
	  	if (form.value.password == form.value.Confirmpassword) {
	  		this.user.password = form.value.password;
		  	this._userService.updateUser(this.user.id, this.user).subscribe(
		  		response=>{
		  			console.log(response);
		  			this._router.navigate(['users']);
		  		},err=>{
		  			console.log(err);
		  		});
	  	}else{
	  		this.error = "Passwords do not match";
	  	}
	}
}
