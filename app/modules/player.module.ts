import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PlayersComponent}     from '../components/players.component';
import { AppComponent }        from '../components/app.component';
import { PlayerService }       from '../services/player.service';


@NgModule({
    imports:  [ BrowserModule ],
    declarations: [ PlayersComponent ],
    providers: [ PlayerService ],
    bootstrap:    [ AppComponent ]
})

export class PlayerModule {
}
