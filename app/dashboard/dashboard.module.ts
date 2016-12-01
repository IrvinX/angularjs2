import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PlayerModule } from './player/player.module';
import { HomeModule } from './home/home.module';

import { DashboardComponent } from './index';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PlayerModule,
        HomeModule
    ],
    declarations: [
        DashboardComponent,
        SidebarComponent
    ],
    exports: [
        DashboardComponent,
        SidebarComponent
    ]
})

export class DashboardModule {
}
