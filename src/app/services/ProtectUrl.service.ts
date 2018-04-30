import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';


@Injectable()
export class ProtectUrl implements CanActivate {

  constructor(public _LoginService: LoginService, public router: Router) { }

  	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
	    if(!this._LoginService.validateToken()) {
	      this.router.navigate(['login']);
	      return false;
	    }
	    return true;  
	}

}