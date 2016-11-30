import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { PlayersComponent}     from './players.component';
import { PlayerDetailComponent }  from './player-detail/player-detail.component';
import { AppComponent }        from '../app.component';
import { PlayerService }       from './player.service';


@NgModule({
    imports:  [ BrowserModule,FormsModule ],
    declarations: [ PlayersComponent,PlayerDetailComponent ],
    providers: [ PlayerService ],
    bootstrap:    [ AppComponent ]
})

export class PlayerModule {
}
