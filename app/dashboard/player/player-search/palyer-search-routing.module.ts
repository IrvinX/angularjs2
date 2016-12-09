import { Route } from '@angular/router';
import { PlayerSearchComponent } from './player-search.component';

export const PlayerSearchRoutes: Route[] = [
  	{
    	path: 'search',
    	component: PlayerSearchComponent,
        children:[

        ]
  	}
];
