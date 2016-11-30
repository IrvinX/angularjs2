import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }   from './app-routing.module';
import { PlayerModule } from './player/player.module';

import { AppComponent }        from './app.component';
import { PlayerDetailComponent }  from './player/player-detail/player-detail.component';
import { HomeComponent } from './home/home.component';

import './extensions/rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PlayerModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerDetailComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
