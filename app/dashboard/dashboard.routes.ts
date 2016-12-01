import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { PlayerRoutes } from './player/index';
import { PlayerDetailRoutes } from './player/player-detail/index';
import { TopPlayersRoutes } from './player/top-players/index';

import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
            ...PlayerRoutes,
            ...PlayerDetailRoutes,
            ...TopPlayersRoutes
    	]
  	}
];
