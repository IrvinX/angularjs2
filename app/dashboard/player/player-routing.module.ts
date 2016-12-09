import { Route } from '@angular/router';
import { PlayerComponent } from './player.component';

export const PlayerRoutes: Route[] = [
  	{
    	path: 'player',
    	component: PlayerComponent,
        children:[

        ]
  	}
];
