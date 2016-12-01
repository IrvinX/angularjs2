import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
// import { BlankPageModule } from './blank-page/blankPage.module';
// import { BSComponentModule } from './bs-component/bsComponent.module';
// import { PlayersModule } from './players/players.module';

import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [DashboardComponent, SidebarComponent,HomeComponent],
    exports: [DashboardComponent, SidebarComponent]
})

export class DashboardModule {
}
