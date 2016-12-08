import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TopPlayersModule } from './top-players/top-players.module';
import { PlayerSearchModule } from './player-search/player-search.module';

import { PlayerComponent } from './player.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { AppComponent } from '../../app.component';
import { PlayerService } from './player.service';
import { PlayerSearchService } from './player-search/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        TopPlayersModule,
        PlayerSearchModule
    ],

    declarations: [
        PlayerComponent,
        PlayerDetailComponent
    ],

    providers: [
        PlayerService
    ],

    bootstrap: [
        AppComponent
    ]
})

export class PlayerModule {
}
