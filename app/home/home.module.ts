import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { HomeComponent } from './home.component';
import { AppComponent } from '../app.component';


@NgModule({
    imports: [BrowserModule, AppRoutingModule],
    declarations: [HomeComponent],
    bootstrap: [AppComponent]
})

export class HomeModule {
}
