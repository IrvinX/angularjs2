import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }        from '../components/app.component';
import { LeagueService }       from '../services/league.service';


@NgModule({
    imports:  [ BrowserModule ],
    providers: [ LeagueService ],
    bootstrap:    [ AppComponent ]
})

export class LeagueModule {
}
