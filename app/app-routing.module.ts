import { Routes } from '@angular/router';
import { DashboardRoutes } from './dashboard/index';
import { LoginRoutes } from './login/index';

import { LoginComponent } from './login/index';

export const ROUTES: Routes = [
	...LoginRoutes,
	...DashboardRoutes,
	{ path: '**', component: LoginComponent }
];
