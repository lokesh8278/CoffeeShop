import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { LoginAuthServiceService } from './authGuards/login-auth-service.service';
import { DashBoardModule } from './dash-board/dash-board.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DashBoardModule
  ],
  providers: [LoginAuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
