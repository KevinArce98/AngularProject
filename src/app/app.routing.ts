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
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactAddComponent } from './components/contacts/contact-add/contact-add.component';
import { ContactEditComponent } from './components/contacts/contact-edit/contact-edit.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { MeetingAddComponent } from './components/meetings/meeting-add/meeting-add.component';
import { MeetingEditComponent } from './components/meetings/meeting-edit/meeting-edit.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketAddComponent } from './components/tickets/ticket-add/ticket-add.component';
import { TicketEditComponent } from './components/tickets/ticket-edit/ticket-edit.component';


const appRoutes: Routes = [
	{path:'', component: LoginComponent},
	{path:'login', component: LoginComponent},
	{path:'users', component: UsersComponent, canActivate: [ProtectUrl]},
	{path:'users/add', component: UsersAddComponent, canActivate: [ProtectUrl]},
	{path:'users/edit/:id', component: UsersEditComponent, canActivate: [ProtectUrl]},
	{path:'clients', component: ClientsComponent, canActivate: [ProtectUrl]},
	{path:'clients/add', component: ClientsAddComponent, canActivate: [ProtectUrl]},
	{path:'clients/edit/:id', component: ClientsEditComponent, canActivate: [ProtectUrl]},
	{path:'contacts', component: ContactsComponent, canActivate: [ProtectUrl]},
	{path:'contacts/add', component: ContactAddComponent, canActivate: [ProtectUrl]},
	{path:'contacts/edit/:id', component: ContactEditComponent, canActivate: [ProtectUrl]},
	{path:'meetings', component: MeetingsComponent, canActivate: [ProtectUrl]},
	{path:'meetings/add', component: MeetingAddComponent, canActivate: [ProtectUrl]},
	{path:'meetings/edit/:id', component: MeetingEditComponent, canActivate: [ProtectUrl]},
	{path:'tickets', component: TicketsComponent, canActivate: [ProtectUrl]},
	{path:'tickets/add', component: TicketAddComponent, canActivate: [ProtectUrl]},
	{path:'tickets/edit/:id', component: TicketEditComponent, canActivate: [ProtectUrl]},
	{path:'home', component: HomeComponent, canActivate: [ProtectUrl]},
	{path:'**', component: LoginComponent},

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);