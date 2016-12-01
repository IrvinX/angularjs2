import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

import './extensions/rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    LoginModule,
    DashboardModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
