import { Component, OnInit } from '@angular/core';

import { Player } from '../core/player';
import { PlayerService } from '../services/player.service';

@Component({
  moduleId: module.id,
  selector: 'my-home',
  templateUrl: '../assets/res/home.component.html',
  styleUrls:['../assets/css/home.component.css']
})

export class HomeComponent implements OnInit {

  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getPlayers()
      .then(players => this.players = players.slice(0, 1));
  }
}
