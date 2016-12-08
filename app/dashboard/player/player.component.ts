import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
    moduleId: module.id,
    selector: 'my-players',
    templateUrl: './player.component.html',
    // styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {

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
    this.router.navigate(['/dashboard/detail', this.selectedPlayer.id]);
  }

}
