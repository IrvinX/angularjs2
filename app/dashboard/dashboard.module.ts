import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/index';
import { PlayerComponent } from './player/index';

import { DashboardComponent } from './index';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        DashboardComponent,
        SidebarComponent,
        // HomeComponent
    ],
    exports: [
        DashboardComponent,
        SidebarComponent
    ]
})

export class DashboardModule {
}
