import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from '../core/player';
import { PlayerService } from '../services/player.service';

@Component({
    moduleId: module.id,
    selector: 'my-players',
    templateUrl: '../assets/res/players.component.html',
    styleUrls: ['../assets/css/players.component.css']
})

export class PlayersComponent implements OnInit {

  players: Player[];
  selectedPlayer: Player;

  constructor(
    private playerService: PlayerService,
    private router: Router) { }

  getPlayers(): void {
    this.playerService.getPlayers().then(players => this.players = players);
  }
  
  ngOnInit(): void {
    this.getPlayers();
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  gotoDetail(): void {
    this.router.navigate(['/playerdetail', this.selectedPlayer.id]);
  }

}
