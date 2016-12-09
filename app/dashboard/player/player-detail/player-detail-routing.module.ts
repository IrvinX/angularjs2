import { Route } from '@angular/router';
import { PlayerDetailComponent } from './player-detail.component';

export const PlayerDetailRoutes: Route[] = [
  	{
    	path: 'detail/:id',
    	component: PlayerDetailComponent,
        children:[

        ]
  	}
];
