import { Player } from '../core/player';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { PlayerService } from '../services/player.service';
import { LeagueService } from '../services/league.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-player-detail',
  templateUrl: '../assets/res/player-detail.component.html',
  styleUrls:['../assets/css/player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.playerService.getPlayer(+params['player_id']))
      .subscribe(player => this.player = player);
  }

  ngAfterViewInit():void {
    this.leagueService.getLeagues();
    debugger;
  }

  constructor(
    private playerService: PlayerService,
    private leagueService: LeagueService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  @Input()
  player: Player;

  goBack(): void {
    this.location.back();
  }
}
