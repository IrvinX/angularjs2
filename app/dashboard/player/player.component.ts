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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.playerService.create(name)
      .then(player => {
        this.players.push(player);
        this.selectedPlayer = null;
      });
  }

  delete(hero: Player): void {
  this.playerService
      .delete(hero.id)
      .then(() => {
        this.players = this.players.filter(h => h !== hero);
        if (this.selectedPlayer === hero) { this.selectedPlayer = null; }
      });
}

}
