import { Routes } from '@angular/router';
import { DashboardRoutes } from './dashboard/index';
import { LoginRoutes } from './login/index';

import { LoginComponent } from './login/Login.Component';

export const ROUTES: Routes = [
	...LoginRoutes,
	...DashboardRoutes,
	{ path: '**', component: LoginComponent }
];
