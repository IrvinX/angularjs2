import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  styleUrls: ['../assets/css/app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <nav>
     <a routerLink="/home">Home</a>
     <a routerLink="/players">Players</a>
    </nav>
    <router-outlet></router-outlet>
  `
  })

export class AppComponent {
  title = 'Road to Champion';
}
