import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { AppComponent } from '../../app.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [HomeComponent],
    bootstrap: [AppComponent]
})

export class HomeModule {
}
