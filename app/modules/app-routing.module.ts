import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from '../components/home.component';
// import { HeroesComponent }      from '../components/heroes.component';
import { PlayersComponent }     from '../components/players.component';
// import { HeroDetailComponent }  from '../components/hero-detail.component';
import { PlayerDetailComponent }  from '../components/player-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'playerdetail/:player_id', component: PlayerDetailComponent },
  // { path: 'heroes',     component: HeroesComponent },
  { path: 'players',    component: PlayersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
