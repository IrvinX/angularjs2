import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PlayersComponent}     from './players.component';
import { AppComponent }        from '../app.component';
import { PlayerService }       from './player.service';


@NgModule({
    imports:  [ BrowserModule ],
    declarations: [ PlayersComponent ],
    providers: [ PlayerService ],
    bootstrap:    [ AppComponent ]
})

export class PlayerModule {
}
