import { Component, OnInit } from '@angular/core';

import { Player } from '../../player/player';
import { PlayerService } from '../../player/player.service';

@Component({
    moduleId: module.id,
    selector: 'top-players',
    templateUrl: './top-players.component.html',
    styleUrls: ['./top-players.component.css']
})

export class TopPlayersComponent implements OnInit {

    players: Player[] = [];

    constructor(private playerService: PlayerService) { }

    ngOnInit(): void {
        this.playerService.getPlayers()
            .then(players => this.players = players.slice(0, 3));
    }
}
