import { Player } from '../player';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { PlayerService } from '../player.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-player-detail',
  templateUrl: './player-detail.component.html',
  // styleUrls:['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.playerService.getPlayer(+params['id']))
      .subscribe(player => this.player = player);
  }

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  @Input()
  player: Player;

  save(): void {
    this.playerService.update(this.player)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
