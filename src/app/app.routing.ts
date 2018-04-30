import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtectUrl } from './services/ProtectUrl.service';
//Components
import { UsersComponent } from './components/users/users.component';
import { UsersAddComponent } from './components/users/users-add/users-add.component';
import { UsersEditComponent } from './components/users/users-edit/users-edit.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsAddComponent } from './components/clients/clients-add/clients-add.component';
import { ClientsEditComponent } from './components/clients/clients-edit/clients-edit.component';

const appRoutes: Routes = [
	{path:'', component: LoginComponent},
	{path:'login', component: LoginComponent},
	{path:'users', component: UsersComponent, canActivate: [ProtectUrl]},
	{path:'users/add', component: UsersAddComponent, canActivate: [ProtectUrl]},
	{path:'users/edit/:id', component: UsersEditComponent, canActivate: [ProtectUrl]},
	{path:'clients', component: ClientsComponent, canActivate: [ProtectUrl]},
	{path:'clients/add', component: ClientsAddComponent, canActivate: [ProtectUrl]},
	{path:'clients/edit/:id', component: ClientsEditComponent, canActivate: [ProtectUrl]},
	{path:'home', component: HomeComponent, canActivate: [ProtectUrl]},
	{path:'**', component: LoginComponent},

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);