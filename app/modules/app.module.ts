import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }   from './app-routing.module';
import { PlayerModule } from './player.module';

import { AppComponent }        from '../components/app.component';
import { PlayerDetailComponent }  from '../components/player-detail.component';
import { HomeComponent } from '../components/home.component';

import '../extensions/rxjs-extensions';

// import { PlayersComponent}     from '../components/players.component';配置到 PlayerModule 中
// import { PlayerService }       from '../services/player.service';

// import { HeroSearchComponent } from '../components/hero-search.component';

// // Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from '../services/in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule,
    AppRoutingModule,
    PlayerModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerDetailComponent
  ],
  // providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
