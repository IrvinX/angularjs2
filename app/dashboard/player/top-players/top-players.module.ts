import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { TopPlayersComponent } from './top-players.component';
import { AppComponent } from '../../../app.component';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [TopPlayersComponent],
    bootstrap: [AppComponent]
})

export class TopPlayersModule {
}
