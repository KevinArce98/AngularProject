import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

//Services
import { ProtectUrl } from './services/ProtectUrl.service';
import { LoginService } from './services/login.service';
import { UserService } from './services/users.service';
import { ClientsService } from './services/clients.service';

//Components
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './components/app.navbar/app.navbar.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UsersAddComponent } from './components/users/users-add/users-add.component';
import { UsersEditComponent } from './components/users/users-edit/users-edit.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsAddComponent } from './components/clients/clients-add/clients-add.component';
import { ClientsEditComponent } from './components/clients/clients-edit/clients-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    UsersComponent,
    LoginComponent,
    HomeComponent,
    UsersAddComponent,
    UsersEditComponent,
    ClientsComponent,
    ClientsAddComponent,
    ClientsEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        whitelistedDomains: ['localhost:3000']
      }
    })
  ],
  providers: [
  appRoutingProviders,
  ProtectUrl,
  LoginService,
  UserService,
  ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
