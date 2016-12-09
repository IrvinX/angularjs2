import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './repository/in-memory-data.service';

import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { Logger } from './logger.service';

import { ROUTES } from './app-routing.module';

import { AppComponent } from './app.component';

import './extensions/rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(ROUTES),
    LoginModule,
    DashboardModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Logger
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
