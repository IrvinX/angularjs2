import { Route } from '@angular/router';
import { PlayerDetailComponent } from './player-detail.component';

export const PlayerDetailRoutes: Route[] = [
  	{
    	path: 'detail/:player_id',
    	component: PlayerDetailComponent,
        children:[

        ]
  	}
];
