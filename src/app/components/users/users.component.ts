import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UserService]
})
export class UsersComponent implements OnInit {
  users:any;
  error = "";
  message = "";
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  	) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this._userService.getListUsers().subscribe(
        response =>{
          this.users = response.json();
        }
      );
  }

  delete(id){
    this._userService.deleteUser(id).subscribe(
      response=>{
         this.getList();
      }, err=>{
        console.log(err);
      }
    );
  }

}
