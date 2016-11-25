import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }        from '../components/app.component';
import { HeroDetailComponent } from '../components/hero-detail.component';
import { HeroesComponent }     from '../components/heroes.component';
import { HeroService }         from '../services/hero.service';
import { DashboardComponent } from '../components/dashboard.component';

import { AppRoutingModule }   from './app-routing.module';

import { HeroSearchComponent } from '../components/hero-search.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../services/in-memory-data.service';

import '../extensions/rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
