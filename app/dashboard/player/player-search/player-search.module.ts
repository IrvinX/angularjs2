import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PlayerSearchComponent } from './player-search.component';
import { PlayerSearchService } from './player-search.service';

import { AppComponent } from '../../../app.component';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],

    declarations: [
        PlayerSearchComponent
    ],

    providers: [
        PlayerSearchService
    ],

    bootstrap: [
        AppComponent
    ]
})

export class PlayerSearchModule {
}
