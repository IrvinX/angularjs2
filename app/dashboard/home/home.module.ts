import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AppComponent } from '../../app.component';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [HomeComponent],
    bootstrap: [AppComponent]
})

export class HomeModule {
}
