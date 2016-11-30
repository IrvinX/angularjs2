import { Component, OnInit } from '@angular/core';

import { Player } from '../player/player';
import { PlayerService } from '../player/player.service';

@Component({
  moduleId: module.id,
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getPlayers()
      .then(players => this.players = players.slice(0, 1));
  }
}
