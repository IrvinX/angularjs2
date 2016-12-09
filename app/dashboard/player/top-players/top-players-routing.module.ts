import { Route } from '@angular/router';
import { TopPlayersComponent } from './top-players.component';

export const TopPlayersRoutes: Route[] = [
  	{
    	path: 'topplayers',
    	component: TopPlayersComponent,
        children:[

        ]
  	}
];
